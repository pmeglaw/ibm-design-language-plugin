"""Harness tests with synthetic CLI outputs; these do not evaluate model quality."""
from __future__ import annotations
import base64
import copy
import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch
import evaluate as ev

TEST_ROOT = Path(os.environ.get("IBM_EVAL_TEST_TMP", Path.cwd() / "work" / "eval-tests")).resolve()
PNG = base64.b64decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aXioAAAAASUVORK5CYII=")


class HarnessTests(unittest.TestCase):
    def setUp(self):
        TEST_ROOT.mkdir(parents=True, exist_ok=True)
        self.temp = tempfile.TemporaryDirectory(prefix="harness-", dir=TEST_ROOT)
        self.root = Path(self.temp.name).resolve()
        self.assertTrue(self.root.is_relative_to(TEST_ROOT))
        self.skill = self.root / "skill"
        self.skill.mkdir()
        (self.skill / "SKILL.md").write_text("---\nname: fixture\ndescription: test\n---\nUse exact fixture.\n")
        self.suite = {"schema_version": 2, "evals": [
            {"id": 1, "kind": "guidance", "prompt": "Explain a control.", "visual_dimensions": [],
             "assertions": [{"id": "a1", "criterion": "Correct semantics"}]},
            {"id": 2, "kind": "artifact", "prompt": "Create a view.", "visual_dimensions": ["layout"],
             "assertions": [{"id": "a2", "criterion": "Working view"}]}]}
        self.suite_path = self.skill / "evals.json"
        ev.write_json(self.suite_path, self.suite)
        self.results = self.root / "results"
        self.context = self.root / "AGENTS.md"
        self.context.write_text("Fixture context only.")
        self.manifest = ev.prepare(self.skill, self.results, self.suite_path,
                                   "fixture-model", "high", None, [self.context])
        self.failure = None
        self.bad_sha = False
        self.no_artifact = False
        self.declared_artifacts = None

    def tearDown(self):
        # Confirm the managed temporary tree stays under the intended test root.
        self.assertTrue(self.root.is_relative_to(TEST_ROOT))
        self.temp.cleanup()

    def fake_cli(self, command, **kwargs):
        if command[-1] == "--version":
            return subprocess.CompletedProcess(command, 0, stdout="codex synthetic-fixture")
        if self.failure == "timeout":
            raise subprocess.TimeoutExpired(command, 1)
        kwargs["stdout"].write('{"synthetic_fixture":true}\n')
        kwargs["stderr"].write("")
        if self.failure == "exit":
            return subprocess.CompletedProcess(command, 7)
        response_path = Path(command[command.index("--output-last-message") + 1])
        workspace = Path(command[command.index("--cd") + 1])
        case = ev.read_json(workspace.parent / "case.json")
        artifacts = []
        if case["kind"] == "artifact" and not self.no_artifact:
            (workspace / "view.html").write_text("<p>Synthetic harness fixture</p>")
            artifacts = ["view.html"]
        if self.declared_artifacts is not None:
            (workspace / "evidence").mkdir()
            (workspace / "evidence/checks.json").write_text("{}")
            artifacts = self.declared_artifacts
        ev.write_json(response_path, {
            "skill_sha256": "wrong" if self.bad_sha else self.manifest["identity"]["skill_sha256"],
            "summary": "Synthetic fixture; no model execution or skill-performance claim.",
            "artifacts": artifacts, "checks": []})
        self.assertEqual(command[-1], "-")
        self.assertIn("SKILL ENTRYPOINT:", kwargs["input"])
        self.assertIn("workspace-write", command)
        self.assertNotIn("--dangerously-bypass-approvals-and-sandbox", command)
        return subprocess.CompletedProcess(command, 0)

    def run_fixture(self, ids=None):
        with patch.object(ev.subprocess, "run", side_effect=self.fake_cli):
            return ev.run_cases(self.results, "synthetic-codex", 30, ids)

    def reviewed(self, cid=1):
        case_root = self.results / f"case-{cid:02d}"
        review = ev.read_json(case_root / "review.template.json")
        review["reviewer"] = {"name": "Harness fixture", "kind": "human",
                              "method": "Synthetic data to test scoring logic only"}
        for criterion in review["criteria"]:
            criterion["outcome"] = "pass"
            criterion["evidence"] = [{"path": "response.json", "observation": "Fixture output exists"}]
        if review["visual"]:
            (case_root / "evidence" / "fixture.png").write_bytes(PNG)
            for dim in review["visual"].values():
                dim["score"] = 4
                dim["evidence"] = [{"path": "evidence/fixture.png",
                                   "observation": "Synthetic one-pixel fixture; not a real visual review"}]
        path = case_root / "review.json"
        ev.write_json(path, review)
        return review, path

    def test_snapshot_matches_source(self):
        self.assertEqual(ev.tree_hashes(self.skill), ev.tree_hashes(self.results / "snapshot"))

    def test_no_implicit_cache_reuse(self):
        with self.assertRaisesRegex(ev.EvaluationError, "already exist"):
            ev.prepare(self.skill, self.results, self.suite_path, "fixture-model", "high", None, [])

    def test_output_cannot_be_inside_skill(self):
        with self.assertRaisesRegex(ev.EvaluationError, "separate trees"):
            ev.prepare(self.skill, self.skill / "results", self.suite_path, "fixture-model", "high", None, [])

    def test_unknown_ids_are_rejected(self):
        with self.assertRaisesRegex(ev.EvaluationError, "Unknown"):
            ev.select(self.suite["evals"], [1, 99])

    def test_duplicate_assertions_are_rejected(self):
        suite = copy.deepcopy(self.suite)
        suite["evals"][0]["assertions"] *= 2
        with self.assertRaises(ev.EvaluationError):
            ev.validate_suite(suite)

    def test_changed_snapshot_is_rejected(self):
        (self.results / "snapshot" / "SKILL.md").write_text("changed")
        with self.assertRaisesRegex(ev.EvaluationError, "snapshot changed"):
            ev.load_manifest(self.results)

    def test_changed_prompt_is_rejected(self):
        (self.results / "case-01" / "prompt.txt").write_text("changed")
        with self.assertRaisesRegex(ev.EvaluationError, "inputs changed"):
            ev.load_manifest(self.results)

    def test_changed_context_prevents_execution(self):
        self.context.write_text("changed context")
        with patch.object(ev.subprocess, "run") as runner:
            with self.assertRaisesRegex(ev.EvaluationError, "context changed"):
                ev.run_cases(self.results, "synthetic-codex", 30)
            runner.assert_not_called()

    def test_unrun_cases_do_not_pass(self):
        report = ev.report(self.results)
        self.assertFalse(report["all_selected_pass"])
        self.assertEqual(report["counts"], {"not_run": 2})

    def test_completed_response_is_ungraded(self):
        runs = self.run_fixture()
        self.assertTrue(all(r["status"] == "awaiting_review" for r in runs))
        self.assertEqual(ev.report(self.results)["counts"], {"ungraded": 2})

    def test_completed_cases_are_not_reexecuted(self):
        self.run_fixture([1])
        with self.assertRaisesRegex(ev.EvaluationError, "already attempted"):
            self.run_fixture([1])

    def test_failed_process_never_counts_as_pass(self):
        self.failure = "exit"
        self.assertEqual(self.run_fixture([1])[0]["status"], "execution_failed")
        self.assertFalse(ev.report(self.results)["all_selected_pass"])

    def test_timeout_is_recorded(self):
        self.failure = "timeout"
        result = self.run_fixture([1])[0]
        self.assertEqual(result["status"], "execution_failed")
        self.assertIn("timed out", result["error"])

    def test_wrong_skill_attestation_is_rejected(self):
        self.bad_sha = True
        self.assertEqual(self.run_fixture([1])[0]["status"], "execution_failed")

    def test_artifact_case_requires_deliverable(self):
        self.no_artifact = True
        result = self.run_fixture([2])[0]
        self.assertEqual(result["status"], "execution_failed")
        self.assertIn("no declared", result["error"])

    def test_complete_review_scores(self):
        self.run_fixture()
        for cid in (1, 2):
            _, path = self.reviewed(cid)
            score = ev.score_case(self.results, cid, path)
            self.assertEqual(score["verdict"], "pass")
            ev.write_json(path.parent / "score.json", score)
        self.assertTrue(ev.report(self.results)["all_selected_pass"])

    def test_individual_nested_artifact_files_are_accepted(self):
        self.declared_artifacts = ["view.html", "evidence/checks.json"]
        self.assertEqual(self.run_fixture([2])[0]["status"], "awaiting_review")

    def test_directory_artifacts_fail_with_accurate_error(self):
        for name in ("evidence", "evidence/", "."):
            with self.subTest(name=name):
                workspace = self.results / "case-02/workspace"
                (workspace / "evidence").mkdir(exist_ok=True)
                response = {"skill_sha256": "fixture", "summary": "Fixture",
                            "artifacts": [name], "checks": []}
                with self.assertRaisesRegex(ev.EvaluationError, "is a directory; list individual files"):
                    ev.validate_response(response, workspace, "fixture")

    def test_directory_response_stays_unscorable(self):
        self.declared_artifacts = ["view.html", "evidence/"]
        result = self.run_fixture([2])[0]
        self.assertEqual(result["status"], "execution_failed")
        self.assertIn("is a directory", result["error"])
        self.assertFalse((self.results / "case-02/review.template.json").exists())
        self.assertFalse(ev.report(self.results)["all_selected_pass"])

    def test_missing_artifact_retains_missing_error(self):
        self.declared_artifacts = ["evidence/missing.json"]
        result = self.run_fixture([2])[0]
        self.assertEqual(result["status"], "execution_failed")
        self.assertEqual(result["error"], "Declared artifact is missing: evidence/missing.json")

    def test_artifact_cannot_escape_workspace(self):
        (self.results / "case-02/outside.txt").write_text("Outside workspace")
        self.declared_artifacts = ["../outside.txt"]
        result = self.run_fixture([2])[0]
        self.assertEqual(result["status"], "execution_failed")
        self.assertIn("escapes evaluation scope", result["error"])

    def test_missing_judgment_is_incomplete(self):
        self.run_fixture([1])
        review, path = self.reviewed()
        review["criteria"][0]["outcome"] = "not_tested"
        ev.write_json(path, review)
        score = ev.score_case(self.results, 1, path)
        self.assertEqual(score["verdict"], "incomplete")
        self.assertEqual(score["assertion_pass_percent"], 0)

    def test_failed_assertion_fails_case(self):
        self.run_fixture([1])
        review, path = self.reviewed()
        review["criteria"][0]["outcome"] = "fail"
        ev.write_json(path, review)
        self.assertEqual(ev.score_case(self.results, 1, path)["verdict"], "fail")

    def test_missing_evidence_is_rejected(self):
        self.run_fixture([1])
        review, path = self.reviewed()
        review["criteria"][0]["evidence"] = []
        ev.write_json(path, review)
        with self.assertRaisesRegex(ev.EvaluationError, "requires evidence"):
            ev.score_case(self.results, 1, path)

    def test_visual_score_cannot_use_only_response(self):
        self.run_fixture([2])
        review, path = self.reviewed(2)
        review["visual"]["layout"]["evidence"] = review["criteria"][0]["evidence"]
        ev.write_json(path, review)
        with self.assertRaisesRegex(ev.EvaluationError, "screenshot"):
            ev.score_case(self.results, 2, path)

    def test_weak_visual_dimension_fails(self):
        self.run_fixture([2])
        review, path = self.reviewed(2)
        review["visual"]["layout"]["score"] = 3
        ev.write_json(path, review)
        self.assertEqual(ev.score_case(self.results, 2, path)["verdict"], "fail")

    def test_invalid_numeric_score_is_rejected(self):
        self.run_fixture([2])
        review, path = self.reviewed(2)
        for value in (0, 6, True, "4"):
            review["visual"]["layout"]["score"] = value
            ev.write_json(path, review)
            with self.assertRaises(ev.EvaluationError):
                ev.score_case(self.results, 2, path)

    def test_critical_finding_fails(self):
        self.run_fixture([1])
        review, path = self.reviewed()
        review["critical_findings"] = [{"path": "response.json", "observation": "Synthetic critical finding"}]
        ev.write_json(path, review)
        self.assertEqual(ev.score_case(self.results, 1, path)["verdict"], "fail")

    def test_edited_output_invalidates_grade(self):
        self.run_fixture([1])
        _, path = self.reviewed()
        (path.parent / "response.json").write_text("{}")
        with self.assertRaisesRegex(ev.EvaluationError, "Outputs changed"):
            ev.score_case(self.results, 1, path)

    def test_wrong_output_binding_is_rejected(self):
        self.run_fixture([1])
        review, path = self.reviewed()
        review["output_sha256"] = "another run"
        ev.write_json(path, review)
        with self.assertRaisesRegex(ev.EvaluationError, "different inputs or outputs"):
            ev.score_case(self.results, 1, path)

    def test_all_assertions_must_be_present(self):
        self.run_fixture([1])
        review, path = self.reviewed()
        review["criteria"] = []
        ev.write_json(path, review)
        with self.assertRaisesRegex(ev.EvaluationError, "each assertion"):
            ev.score_case(self.results, 1, path)

    def test_evidence_path_cannot_escape_case(self):
        for relative in ("../outside.txt", str(self.root / "outside.txt")):
            with self.assertRaises(ev.EvaluationError):
                ev.confined(self.results / "case-01", relative)

    def test_changed_review_invalidates_saved_score(self):
        self.run_fixture([1])
        review, path = self.reviewed()
        ev.write_json(path.parent / "score.json", ev.score_case(self.results, 1, path))
        review["reviewer"]["method"] = "changed method"
        ev.write_json(path, review)
        with self.assertRaisesRegex(ev.EvaluationError, "score/evidence changed"):
            ev.report(self.results)

    def test_changed_screenshot_invalidates_saved_score(self):
        self.run_fixture([2])
        _, path = self.reviewed(2)
        ev.write_json(path.parent / "score.json", ev.score_case(self.results, 2, path))
        (path.parent / "evidence" / "fixture.png").write_bytes(PNG + b"changed")
        with self.assertRaisesRegex(ev.EvaluationError, "score/evidence changed"):
            ev.report(self.results)


    def test_entrypoint_and_snapshot_fingerprints_are_distinct(self):
        identity = self.manifest["identity"]
        self.assertEqual(identity["entrypoint_file_sha256"], ev.file_hash(self.skill / "SKILL.md"))
        self.assertEqual(identity["skill_sha256"], ev.digest(ev.tree_hashes(self.skill)))
        self.assertNotEqual(identity["skill_sha256"], identity["entrypoint_file_sha256"])

    def test_wrong_entrypoint_identity_rejected(self):
        self.manifest["identity"]["entrypoint_file_sha256"] = "wrong"
        self.manifest["run_key"] = ev.digest(self.manifest["identity"])
        ev.write_json(self.results / "manifest.json", self.manifest)
        with self.assertRaisesRegex(ev.EvaluationError, "Entrypoint"):
            ev.load_manifest(self.results)

    def test_entrypoint_hash_is_not_valid_response_attestation(self):
        with self.assertRaisesRegex(ev.EvaluationError, "different skill"):
            ev.validate_response({"skill_sha256": self.manifest["identity"]["entrypoint_file_sha256"],
                                  "summary": "Fixture", "artifacts": [], "checks": []},
                                 self.results / "case-01/workspace", self.manifest["identity"]["skill_sha256"])

    def test_prepared_timeout_is_enforced_before_launch(self):
        target = self.root / "timed"
        ev.prepare(self.skill, target, self.suite_path, "fixture-model", "high", [1], [],
                   timeout_seconds=1200, preview_port=49401)
        with patch.object(ev.subprocess, "run") as runner:
            with self.assertRaisesRegex(ev.EvaluationError, "ceiling"):
                ev.run_cases(target, "synthetic-codex", 600)
            runner.assert_not_called()

    def test_invalid_runtime_options_rejected(self):
        for kwargs in ({"timeout_seconds": 0}, {"timeout_seconds": True}, {"preview_port": 80}, {"preview_port": 65536}):
            with self.assertRaises(ev.EvaluationError):
                ev.prepare(self.skill, self.root / "invalid", self.suite_path, "fixture-model", "high", [1], [], **kwargs)

    def test_rerun_criteria_are_unchanged(self):
        script_root = Path(__file__).resolve().parent
        frozen = ev.read_json(script_root / "fixtures/evaluation-contracts.json")
        shipped = ev.read_json(script_root.parent / "evals.json")
        self.assertEqual([c["id"] for c in shipped["evals"]], list(range(1, 22)))
        self.assertEqual([c["id"] for c in frozen["cases"]], [1, 5, 10])
        for case in frozen["cases"]:
            revised = next(c for c in shipped["evals"] if c["id"] == case["id"])
            for key in ("assertions", "expected_output", "visual_dimensions"):
                self.assertEqual(case[key], revised[key])

    def test_matching_prepared_timeout_reaches_cli(self):
        target = self.root / "matching-timeout"
        ev.prepare(self.skill, target, self.suite_path, "fixture-model", "high", [1], [],
                   timeout_seconds=1200, preview_port=49401)
        with patch.object(ev.subprocess, "run", side_effect=self.fake_cli) as runner:
            executions = ev.run_cases(target, "synthetic-codex", 1200)
        self.assertEqual(executions[0]["status"], "awaiting_review")
        self.assertEqual(executions[0]["timeout_seconds"], 1200)
        self.assertEqual(runner.call_args.kwargs["timeout"], 1200)



if __name__ == "__main__":
    unittest.main()
