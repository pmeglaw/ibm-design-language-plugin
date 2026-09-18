#!/usr/bin/env python3
"""Prepare, execute, and evidence-grade isolated skill regressions (Python 3.11+)."""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import platform
import shutil
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

VERSION = "2-evaluation-repair"
DIMENSIONS = ("hierarchy", "layout", "typography", "color_imagery", "interaction_clarity")
SKIP_DIRS = {".git", "__pycache__", "node_modules", ".next"}
RESPONSE_SCHEMA = {
    "type": "object", "additionalProperties": False,
    "properties": {
        "skill_sha256": {"type": "string"},
        "summary": {"type": "string"},
        "artifacts": {"type": "array", "items": {"type": "string",
            "description": "Path to an existing individual file relative to the case workspace; not a directory."}},
        "checks": {"type": "array", "items": {
            "type": "object", "additionalProperties": False,
            "properties": {k: {"type": "string"} for k in ("name", "result", "evidence")},
            "required": ["name", "result", "evidence"]}},
    }, "required": ["skill_sha256", "summary", "artifacts", "checks"],
}


class EvaluationError(ValueError):
    """Invalid, stale, or incomplete evaluation evidence."""


def now() -> str:
    return datetime.now(timezone.utc).isoformat()


def digest(value: Any) -> str:
    return hashlib.sha256(json.dumps(value, sort_keys=True, separators=(",", ":"),
                                     ensure_ascii=False).encode("utf-8")).hexdigest()


def file_hash(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def read_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8-sig"))


def write_json(path: Path, value: Any) -> None:
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def confined(root: Path, relative: str) -> Path:
    if not isinstance(relative, str) or not relative or Path(relative).is_absolute():
        raise EvaluationError("Evidence/artifact paths must be nonempty relative paths")
    result = (root / relative).resolve()
    if not result.is_relative_to(root.resolve()):
        raise EvaluationError(f"Path escapes evaluation scope: {relative}")
    # Reject links and junctions even when the final target happens to remain inside scope.
    current = root
    for part in Path(relative).parts:
        current = current / part
        if current.is_symlink() or (hasattr(current, "is_junction") and current.is_junction()):
            raise EvaluationError(f"Linked path is not accepted: {relative}")
    return result


def tree_hashes(root: Path) -> dict[str, str]:
    result = {}
    for parent, dirs, files in os.walk(root, followlinks=False):
        parent_path = Path(parent)
        for name in dirs + files:
            path = parent_path / name
            if path.is_symlink() or (hasattr(path, "is_junction") and path.is_junction()):
                raise EvaluationError(f"Linked file/directory is not accepted: {path}")
        dirs[:] = sorted(d for d in dirs if d not in SKIP_DIRS)
        for name in sorted(files):
            if name.endswith(".pyc"):
                continue
            path = parent_path / name
            result[path.relative_to(root).as_posix()] = file_hash(path)
    return result


def validate_suite(suite: dict[str, Any]) -> None:
    if suite.get("schema_version") != 2 or not isinstance(suite.get("evals"), list):
        raise EvaluationError("Use the reconciled schema_version 2 evaluation suite")
    seen = set()
    for case in suite["evals"]:
        cid = case.get("id")
        if type(cid) is not int or cid < 1 or cid in seen:
            raise EvaluationError("Case IDs must be unique positive integers")
        seen.add(cid)
        if not isinstance(case.get("prompt"), str) or not case["prompt"].strip():
            raise EvaluationError(f"Case {cid} has no prompt")
        if case.get("kind") not in ("guidance", "artifact"):
            raise EvaluationError(f"Case {cid} has an unsupported kind")
        assertions = case.get("assertions")
        if not isinstance(assertions, list) or not assertions:
            raise EvaluationError(f"Case {cid} has no assertions")
        ids = [a.get("id") for a in assertions]
        if any(not isinstance(i, str) or not i for i in ids) or len(set(ids)) != len(ids):
            raise EvaluationError(f"Case {cid} has invalid assertion IDs")
        if any(not isinstance(a.get("criterion"), str) or not a["criterion"].strip()
               for a in assertions):
            raise EvaluationError(f"Case {cid} has an empty criterion")
        dims = case.get("visual_dimensions", [])
        if not isinstance(dims, list) or len(set(dims)) != len(dims) or any(
                d not in DIMENSIONS for d in dims):
            raise EvaluationError(f"Case {cid} has invalid visual dimensions")


def select(cases: list[dict[str, Any]], ids: list[int] | None) -> list[dict[str, Any]]:
    if ids is None:
        return cases
    if not ids or len(set(ids)) != len(ids):
        raise EvaluationError("Requested IDs must be nonempty and unique")
    unknown = set(ids) - {c["id"] for c in cases}
    if unknown:
        raise EvaluationError(f"Unknown case IDs: {sorted(unknown)}")
    return [c for c in cases if c["id"] in ids]


def context_hashes(paths: list[Path]) -> dict[str, str]:
    result = {}
    for path in paths:
        path = path.resolve()
        if not path.is_file():
            raise EvaluationError(f"Context file is missing: {path}")
        result[str(path)] = file_hash(path)
    return result


def prepare(skill: Path, results: Path, suite_path: Path, model: str, reasoning: str,
            ids: list[int] | None, context: list[Path], *,
            timeout_seconds: int | None = None, preview_port: int | None = None) -> dict[str, Any]:
    skill, results = skill.resolve(), results.resolve()
    if results == skill or results.is_relative_to(skill) or skill.is_relative_to(results):
        raise EvaluationError("Results and source skill must be separate trees")
    if results.exists():
        raise EvaluationError("Results already exist; use a fresh directory (no implicit cache)")
    suite = read_json(suite_path)
    validate_suite(suite)
    cases = select(suite["evals"], ids)
    if not cases:
        raise EvaluationError("No cases selected")
    if not (skill / "SKILL.md").is_file():
        raise EvaluationError("Source skill has no SKILL.md")
    if not model.strip() or not reasoning.strip():
        raise EvaluationError("Declare the model and reasoning setting")
    if timeout_seconds is not None and (type(timeout_seconds) is not int or timeout_seconds <= 0):
        raise EvaluationError("Timeout must be a positive integer")
    if preview_port is not None and (type(preview_port) is not int or not 1024 <= preview_port <= 65535):
        raise EvaluationError("Preview port must be an integer from 1024 to 65535")
    hashes = tree_hashes(skill)
    context_files = list(context)
    codex_home = Path(os.environ.get("CODEX_HOME", Path.home() / ".codex"))
    user_config = codex_home / "config.toml"
    if user_config.is_file() and user_config.resolve() not in [p.resolve() for p in context_files]:
        context_files.append(user_config)
    contexts = context_hashes(context_files)
    identity = {
        "harness_version": VERSION, "harness_sha256": file_hash(Path(__file__)),
        "skill_sha256": digest(hashes), "entrypoint_file_sha256": hashes["SKILL.md"],
        "fingerprint_algorithm": "SHA256(canonical sorted JSON relative-path-to-file-SHA256 map)",
        "timeout_seconds": timeout_seconds, "preview_port": preview_port,
        "suite_sha256": digest(suite),
        "model": model, "reasoning": reasoning, "sandbox": "workspace-write",
        "context_sha256": contexts, "selected_ids": [c["id"] for c in cases],
        "system": platform.platform(), "python": platform.python_version(),
    }
    results.mkdir(parents=True)
    snapshot = results / "snapshot"
    shutil.copytree(skill, snapshot, ignore=shutil.ignore_patterns(*SKIP_DIRS, "*.pyc"))
    if tree_hashes(snapshot) != hashes:
        raise EvaluationError("Skill snapshot differs from source")
    write_json(results / "suite.json", suite)
    write_json(results / "response.schema.json", RESPONSE_SCHEMA)
    manifest = {"schema_version": 1, "created_at": now(), "identity": identity,
                "run_key": digest(identity), "skill_files": hashes, "packets": {},
                "scope_note": "Exact entrypoint delivered; this is not proof of exclusive model reliance. "
                              "User/managed policies still apply; context hashes are a declared snapshot."}
    entrypoint = (snapshot / "SKILL.md").read_text(encoding="utf-8-sig")
    for case in cases:
        case_root = results / f"case-{case['id']:02d}"
        (case_root / "workspace").mkdir(parents=True)
        (case_root / "evidence").mkdir()
        write_json(case_root / "case.json", case)
        prompt = (
            "Complete the request using the exact skill entrypoint embedded below and its supporting "
            f"files at {snapshot}. The whole-snapshot map SHA-256 is {identity['skill_sha256']}. "
            f"The separate SKILL.md file SHA-256 is {identity['entrypoint_file_sha256']}. "
            "These hash different inputs and are expected to differ. The harness verifies the complete "
            "snapshot map: SHA256 of UTF-8 canonical JSON (sorted keys, compact separators) mapping "
            "relative file paths to file SHA256 values. Return the supplied whole-snapshot hash in "
            "skill_sha256; do not substitute the single-file hash or report that difference as corruption. "
            "Do not substitute a same-named installed skill. Follow applicable host policies. "
            "The case workspace is the entire writable task scope; do not inspect or modify unrelated "
            "repositories, send external messages, or install/publish the skill. Read only relevant "
            "supporting references. Preserve the supplied task and product scope. "
            "Report checks actually performed and explicit limitations. Return the required JSON; "
            "skill_sha256 identifies the supplied snapshot, not proof of mental compliance. "
            "In artifacts, list requested deliverables as unique paths to existing individual files "
            "relative to the case workspace (for example, index.html and evidence/checks.json). "
            "Do not list directories such as evidence/; list the deliverable files inside them individually. "
            "Do not spawn subagents or additional model runs. "
            + (f"Execution ceiling: {timeout_seconds} seconds. " if timeout_seconds else "")
            + (f"If a local preview server is useful, bind 127.0.0.1 port {preview_port}; this port is assigned "
               "to this run. If unavailable, report that limit instead of choosing a shared default port. "
               if preview_port else "")
            + "\n\n"
            f"SKILL ENTRYPOINT:\n{entrypoint}\nEND SKILL ENTRYPOINT\n\n"
            f"SUPPLIED CONTEXT:\n{case.get('context', 'No additional product context.')}\n\n"
            f"REQUEST:\n{case['prompt']}\n"
        )
        (case_root / "prompt.txt").write_text(prompt, encoding="utf-8")
        manifest["packets"][str(case["id"])] = {
            "case": file_hash(case_root / "case.json"),
            "prompt": file_hash(case_root / "prompt.txt"),
        }
    manifest["schema_sha256"] = file_hash(results / "response.schema.json")
    write_json(results / "manifest.json", manifest)
    return manifest


def load_manifest(results: Path) -> dict[str, Any]:
    manifest = read_json(results / "manifest.json")
    identity = manifest["identity"]
    if digest(identity) != manifest["run_key"]:
        raise EvaluationError("Run identity changed")
    if file_hash(Path(__file__)) != identity["harness_sha256"]:
        raise EvaluationError("Harness changed; prepare a new run with this harness")
    if tree_hashes(results / "snapshot") != manifest["skill_files"]:
        raise EvaluationError("Skill snapshot changed")
    if identity["entrypoint_file_sha256"] != manifest["skill_files"]["SKILL.md"]:
        raise EvaluationError("Entrypoint file fingerprint changed")
    if digest(manifest["skill_files"]) != identity["skill_sha256"]:
        raise EvaluationError("Skill fingerprint changed")
    if digest(read_json(results / "suite.json")) != identity["suite_sha256"]:
        raise EvaluationError("Suite changed")
    if file_hash(results / "response.schema.json") != manifest["schema_sha256"]:
        raise EvaluationError("Response schema changed")
    for cid, packet in manifest["packets"].items():
        case_root = results / f"case-{int(cid):02d}"
        if file_hash(case_root / "case.json") != packet["case"] or file_hash(
                case_root / "prompt.txt") != packet["prompt"]:
            raise EvaluationError(f"Case {cid} inputs changed")
    return manifest


def validate_response(response: Any, workspace: Path, skill_sha: str) -> None:
    if not isinstance(response, dict) or set(response) != set(RESPONSE_SCHEMA["required"]):
        raise EvaluationError("Response does not match required fields")
    if response["skill_sha256"] != skill_sha:
        raise EvaluationError("Response identifies a different skill snapshot")
    if not isinstance(response["summary"], str) or not response["summary"].strip():
        raise EvaluationError("Response summary is empty")
    if not isinstance(response["artifacts"], list) or len(set(response["artifacts"])) != len(response["artifacts"]):
        raise EvaluationError("Artifacts must be a unique list")
    for name in response["artifacts"]:
        artifact = confined(workspace, name)
        if artifact.is_dir():
            raise EvaluationError(f"Declared artifact is a directory; list individual files: {name}")
        if not artifact.exists():
            raise EvaluationError(f"Declared artifact is missing: {name}")
        if not artifact.is_file():
            raise EvaluationError(f"Declared artifact is not a regular file: {name}")
    if not isinstance(response["checks"], list):
        raise EvaluationError("Checks must be a list")
    for check in response["checks"]:
        if not isinstance(check, dict) or set(check) != {"name", "result", "evidence"} or any(
                not isinstance(v, str) for v in check.values()):
            raise EvaluationError("Invalid check record")


def output_hashes(case_root: Path) -> dict[str, str]:
    hashes = {"response.json": file_hash(case_root / "response.json")}
    hashes.update({"workspace/" + k: v for k, v in tree_hashes(case_root / "workspace").items()})
    for name in ("events.jsonl", "stderr.txt"):
        hashes[name] = file_hash(case_root / name)
    return hashes


def review_template(manifest: dict[str, Any], case: dict[str, Any],
                    execution: dict[str, Any]) -> dict[str, Any]:
    return {
        "run_key": manifest["run_key"], "case_id": case["id"],
        "output_sha256": execution["output_sha256"],
        "reviewer": {"name": "", "kind": "human", "method": ""},
        "criteria": [{"id": a["id"], "criterion": a["criterion"],
                      "outcome": "unreviewed", "evidence": []} for a in case["assertions"]],
        "visual": {d: {"score": None, "evidence": []} for d in case["visual_dimensions"]},
        "critical_findings": [],
    }


def run_cases(results: Path, executable: str, timeout: int,
              ids: list[int] | None = None) -> list[dict[str, Any]]:
    manifest = load_manifest(results)
    if timeout <= 0:
        raise EvaluationError("Timeout must be positive")
    identity = manifest["identity"]
    if identity.get("timeout_seconds") is not None and timeout != identity["timeout_seconds"]:
        raise EvaluationError("Execution timeout differs from prepared ceiling")
    if context_hashes([Path(p) for p in identity["context_sha256"]]) != identity["context_sha256"]:
        raise EvaluationError("Declared context changed; prepare a fresh run")
    cases = [read_json(results / f"case-{cid:02d}" / "case.json") for cid in identity["selected_ids"]]
    cases = select(cases, ids)
    for case in cases:
        if (results / f"case-{case['id']:02d}" / "execution.json").exists():
            raise EvaluationError("Selected case already attempted; prepare a fresh run")
    version = subprocess.run([executable, "--version"], capture_output=True, text=True,
                             encoding="utf-8", errors="replace", timeout=15, check=True)
    executions = []
    for case in cases:
        case_root = results / f"case-{case['id']:02d}"
        command = [executable, "exec", "--ephemeral", "--sandbox", "workspace-write",
                   "--cd", str(case_root / "workspace"), "--skip-git-repo-check",
                   "--model", identity["model"], "-c",
                   "model_reasoning_effort=" + json.dumps(identity["reasoning"]),
                   "--json", "--output-schema", str(results / "response.schema.json"),
                   "--output-last-message", str(case_root / "response.json"), "-"]
        execution = {"status": "running", "started_at": now(), "run_key": manifest["run_key"],
                     "case_id": case["id"], "command": command,
                     "codex_version": version.stdout.strip(), "timeout_seconds": timeout, "error": None}
        write_json(case_root / "execution.json", execution)
        try:
            with (case_root / "events.jsonl").open("w", encoding="utf-8") as stdout, (
                    case_root / "stderr.txt").open("w", encoding="utf-8") as stderr:
                completed = subprocess.run(
                    command, input=(case_root / "prompt.txt").read_text(encoding="utf-8"),
                    stdout=stdout, stderr=stderr, text=True, encoding="utf-8",
                    errors="replace", timeout=timeout, check=False)
            execution["exit_code"] = completed.returncode
            if completed.returncode != 0:
                raise EvaluationError(f"Codex exited {completed.returncode}")
            load_manifest(results)
            response = read_json(case_root / "response.json")
            validate_response(response, case_root / "workspace", identity["skill_sha256"])
            if case["kind"] == "artifact" and not response["artifacts"]:
                raise EvaluationError("Artifact case produced no declared deliverables")
            execution["outputs"] = output_hashes(case_root)
            execution["output_sha256"] = digest(execution["outputs"])
            execution["status"] = "awaiting_review"
            write_json(case_root / "review.template.json", review_template(manifest, case, execution))
        except (EvaluationError, OSError, ValueError, TypeError, subprocess.TimeoutExpired) as exc:
            execution["status"] = "execution_failed"
            execution["error"] = str(exc)
        except KeyboardInterrupt:
            execution["status"] = "interrupted"
            execution["error"] = "Interrupted; use a fresh run for another attempt"
            raise
        finally:
            execution["finished_at"] = now()
            write_json(case_root / "execution.json", execution)
        executions.append(execution)
    return executions


def evidence_hashes(case_root: Path, evidence: Any) -> dict[str, str]:
    if not isinstance(evidence, list) or not evidence:
        raise EvaluationError("A scored judgment requires evidence")
    hashes = {}
    for item in evidence:
        if not isinstance(item, dict) or set(item) != {"path", "observation"} or not isinstance(
                item["observation"], str) or not item["observation"].strip():
            raise EvaluationError("Evidence needs path and concrete observation")
        relative = item["path"]
        # Grade files cannot serve as their own evidence.
        if relative not in ("response.json", "events.jsonl", "stderr.txt") and not relative.startswith(
                ("workspace/", "evidence/")):
            raise EvaluationError("Evidence must reference outputs or the case evidence directory")
        path = confined(case_root, relative)
        if not path.is_file() or path.stat().st_size == 0:
            raise EvaluationError(f"Evidence file missing or empty: {relative}")
        hashes[relative] = file_hash(path)
    return hashes


def score_case(results: Path, cid: int, review_path: Path) -> dict[str, Any]:
    manifest = load_manifest(results)
    if cid not in manifest["identity"]["selected_ids"]:
        raise EvaluationError("Case was not prepared")
    case_root = results / f"case-{cid:02d}"
    case = read_json(case_root / "case.json")
    execution = read_json(case_root / "execution.json")
    if execution["status"] != "awaiting_review" or execution["run_key"] != manifest["run_key"]:
        raise EvaluationError("Execution did not complete for this run")
    outputs = output_hashes(case_root)
    if outputs != execution["outputs"] or digest(outputs) != execution["output_sha256"]:
        raise EvaluationError("Outputs changed after execution")
    review = read_json(review_path)
    if (review.get("run_key"), review.get("case_id"), review.get("output_sha256")) != (
            manifest["run_key"], cid, execution["output_sha256"]):
        raise EvaluationError("Review belongs to different inputs or outputs")
    reviewer = review.get("reviewer", {})
    if (reviewer.get("kind") not in ("human", "agent") or
            not isinstance(reviewer.get("name"), str) or not reviewer["name"].strip() or
            not isinstance(reviewer.get("method"), str) or not reviewer["method"].strip()):
        raise EvaluationError("Identify the reviewer and review method")
    criteria = review.get("criteria", [])
    expected_ids = {a["id"] for a in case["assertions"]}
    if (not isinstance(criteria, list) or len(criteria) != len(expected_ids) or
            {a.get("id") for a in criteria} != expected_ids):
        raise EvaluationError("Review must include each assertion exactly once")
    evidence = {}
    counts = {"pass": 0, "fail": 0, "not_tested": 0, "unreviewed": 0}
    for criterion in criteria:
        outcome = criterion.get("outcome")
        if outcome not in counts:
            raise EvaluationError("Invalid assertion outcome")
        counts[outcome] += 1
        if outcome in ("pass", "fail"):
            evidence.update(evidence_hashes(case_root, criterion.get("evidence")))
    visual = review.get("visual", {})
    if not isinstance(visual, dict) or set(visual) != set(case["visual_dimensions"]):
        raise EvaluationError("Review must include the declared visual dimensions")
    low = False
    incomplete = bool(counts["not_tested"] or counts["unreviewed"])
    for dimension in visual.values():
        rating = dimension.get("score")
        if rating is None:
            incomplete = True
            continue
        if type(rating) is not int or not 1 <= rating <= 5:
            raise EvaluationError("Visual scores must be integers from 1 to 5 or null")
        evidence.update(evidence_hashes(case_root, dimension.get("evidence")))
        if not any(item["path"].startswith("evidence/") and Path(item["path"]).suffix.lower() in (".png", ".jpg", ".jpeg", ".webp") for item in dimension["evidence"]):
            raise EvaluationError("Visual scores require screenshot evidence under evidence/")
        low = low or rating < 4
    critical = review.get("critical_findings")
    if not isinstance(critical, list):
        raise EvaluationError("critical_findings must be a list")
    for finding in critical:
        evidence.update(evidence_hashes(case_root, [finding]))
    verdict = "fail" if counts["fail"] or low or critical else ("incomplete" if incomplete else "pass")
    return {
        "case_id": cid, "run_key": manifest["run_key"], "verdict": verdict,
        "assertions": counts, "assertion_total": len(expected_ids),
        "assertion_pass_percent": round(100 * counts["pass"] / len(expected_ids), 2),
        "visual": visual, "critical_findings": critical,
        "reviewer": reviewer, "review_path": str(review_path.resolve()),
        "review_sha256": file_hash(review_path), "evidence_sha256": evidence,
        "output_sha256": execution["output_sha256"],
        "limits": "Evidence presence and integrity validated; the reviewer is responsible for "
                  "truth and relevance. Model check claims are not independent verification.",
    }


def report(results: Path) -> dict[str, Any]:
    manifest = load_manifest(results)
    rows = []
    for cid in manifest["identity"]["selected_ids"]:
        case_root = results / f"case-{cid:02d}"
        execution_path, score_path = case_root / "execution.json", case_root / "score.json"
        if not execution_path.exists():
            rows.append({"case_id": cid, "verdict": "not_run"})
            continue
        execution = read_json(execution_path)
        if execution["status"] != "awaiting_review":
            rows.append({"case_id": cid, "verdict": execution["status"], "error": execution["error"]})
            continue
        if not score_path.exists():
            rows.append({"case_id": cid, "verdict": "ungraded"})
            continue
        saved = read_json(score_path)
        fresh = score_case(results, cid, Path(saved["review_path"]))
        if fresh != saved:
            raise EvaluationError(f"Case {cid} score/evidence changed; score it again")
        rows.append(fresh)
    counts = {v: sum(r["verdict"] == v for r in rows) for v in sorted({r["verdict"] for r in rows})}
    return {"run_key": manifest["run_key"], "selected_cases": len(rows), "counts": counts,
            "all_selected_pass": bool(rows) and all(r["verdict"] == "pass" for r in rows),
            "cases": rows, "scope": "Selected cases only; unrun/ungraded cases never count as passes."}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="action", required=True)
    default_skill = Path(__file__).resolve().parent.parent
    prep = sub.add_parser("prepare", help="Create a fresh, fingerprinted packet; no model execution")
    prep.add_argument("--skill-root", type=Path, default=default_skill)
    prep.add_argument("--suite", type=Path)
    prep.add_argument("--results-root", type=Path, required=True)
    prep.add_argument("--model", required=True)
    prep.add_argument("--reasoning", choices=("low", "medium", "high", "xhigh", "max", "ultra"), required=True)
    prep.add_argument("--ids", type=int, nargs="+")
    prep.add_argument("--timeout-seconds", type=int)
    prep.add_argument("--preview-port", type=int)
    prep.add_argument("--context-file", type=Path, action="append", default=[])
    run = sub.add_parser("run", help="Execute prepared cases through Codex; consumes model usage")
    run.add_argument("--results-root", type=Path, required=True)
    run.add_argument("--codex", default="codex")
    run.add_argument("--timeout", type=int, default=600)
    run.add_argument("--ids", type=int, nargs="+")
    score = sub.add_parser("score", help="Validate evidence and calculate a reviewer-supplied score")
    score.add_argument("--results-root", type=Path, required=True)
    score.add_argument("--case-id", type=int, required=True)
    score.add_argument("--review", type=Path, required=True)
    summary = sub.add_parser("report", help="Aggregate fresh scores; never turn unrun cases into passes")
    summary.add_argument("--results-root", type=Path, required=True)
    args = parser.parse_args()
    try:
        results = args.results_root.resolve()
        if args.action == "prepare":
            result = prepare(args.skill_root, results, args.suite or args.skill_root / "evals.json",
                             args.model, args.reasoning, args.ids, args.context_file,
                             timeout_seconds=args.timeout_seconds, preview_port=args.preview_port)
        elif args.action == "run":
            executable = shutil.which(args.codex)
            if not executable:
                raise EvaluationError(f"Codex executable unavailable: {args.codex}")
            result = run_cases(results, executable, args.timeout, args.ids)
        elif args.action == "score":
            result = score_case(results, args.case_id, args.review.resolve())
            write_json(results / f"case-{args.case_id:02d}" / "score.json", result)
        else:
            result = report(results)
        print(json.dumps(result, ensure_ascii=False, indent=2))
        if args.action == "run":
            return 0 if all(r["status"] == "awaiting_review" for r in result) else 1
        if args.action == "score":
            return 0 if result["verdict"] == "pass" else 1
        if args.action == "report":
            return 0 if result["all_selected_pass"] else 1
        return 0
    except (EvaluationError, OSError, ValueError, KeyError, TypeError, subprocess.SubprocessError) as exc:
        print(f"Evaluation error: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
