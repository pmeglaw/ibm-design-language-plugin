# Evidence-graded skill evaluation

The suite is a regression set, not an expert certification. Preparing packets and scoring supplied reviews run locally. The Run action calls Codex and consumes model usage; run only cases authorized for the current evaluation.

## Four actions

Use Python 3.11+ and the installed Codex CLI. The PowerShell wrapper offers the same actions through -Mode Prepare, Run, Score, or Report. Its default is Prepare; there is no Force/reuse shortcut.

1. **prepare:** Supply --results-root (a new directory), --model, --reasoning, and optionally --ids. The default skill is this script's parent skill directory; --skill-root selects another candidate. --suite can supply the same reconciled suite to baseline and revised skills. --context-file can be repeated for relevant AGENTS/configuration inputs.
2. **run:** Supply the prepared --results-root and optional --ids. --timeout bounds each case; --codex selects an executable path. Failed or interrupted attempts remain recorded; create a fresh packet for another attempt.
3. **score:** After independent review, supply --results-root, --case-id, and --review. Copy the generated review.template.json to review.json, identify the reviewer and method, and record judgments and evidence.
4. **report:** Supply --results-root to aggregate scores. Unrun, failed, ungraded, and incomplete cases never count as passes.

Use scripts/evaluate.py --help and each action's --help for exact arguments. Example PowerShell invocation after choosing a supported model:

    python -B -X utf8 scripts/evaluate.py prepare --results-root C:/evaluation/run-01 --model MODEL_ID --reasoning high --ids 1 5 10 20 21

MODEL_ID is an example parameter to replace, not a prescribed model. Choose the same supported model/settings when comparing versions. The --model, --json, --output-schema, --output-last-message, and --ephemeral interface is documented in [Codex developer commands](https://learn.chatgpt.com/docs/developer-commands#codex-exec); verify the installed CLI's help when it changes.

## Recorded runtime options

The integrated harness distinguishes the whole-snapshot map SHA-256 from the SKILL.md file SHA-256. Return the supplied whole-snapshot hash in the model response. They hash different inputs and should differ.

Python prepare accepts --timeout-seconds and --preview-port. A recorded timeout must exactly match run --timeout; a mismatch fails before model launch. Python run defaults to 600 seconds. The PowerShell wrapper records -TimeoutSeconds during Prepare (default 600) and passes the same parameter during Run. For an authorized 20-minute build, specify 1200 in both actions.

- Python preparation: python -B -X utf8 scripts/evaluate.py prepare --results-root C:/evaluation/run-01 --model MODEL_ID --reasoning high --ids 1 --timeout-seconds 1200 --preview-port 49401
- Matching wrapper preparation: ./scripts/run_evals.ps1 -Mode Prepare -ResultsRoot C:/evaluation/run-01 -Model MODEL_ID -Ids 1 -TimeoutSeconds 1200 -PreviewPort 49401
- After separate authorization to use the model: ./scripts/run_evals.ps1 -Mode Run -ResultsRoot C:/evaluation/run-01 -TimeoutSeconds 1200

Choose one preparation command and a fresh directory. Neither preparation example calls a model. MODEL_ID is a caller-supplied value; preparation records it without validating availability.

A preview port is recorded in the run identity and prompt; the harness does not reserve it or manage server lifetimes. Assign distinct available loopback ports to concurrent packets. A packet reuses its chosen port across its selected sequential cases; use one-case packets when case-specific settings differ. Inspect and stop task-owned preview processes after review. A CLI timeout alone is not evidence that child preview processes exited.

Old packets remain bound to their original harness hash. Use their archived harness to audit them; prepare fresh packets with this version for new runs. Do not rewrite historical manifests, responses or scores to make them compatible.

## Identity and boundaries

Each packet snapshots the exact skill files and stores file hashes, suite hash, harness hash, selected cases, explicit model/reasoning, platform, Python version, and declared context-file hashes. Existing user config is fingerprinted without copying its contents. Run records the CLI version and exact argument list.

The exact entrypoint is embedded in the request, and supporting references are routed to the snapshot's absolute path. No ambiguous short-name invocation is used. The response identifies the supplied fingerprint. This proves which entrypoint was delivered and detects mismatched artifacts; it cannot prove exclusive mental reliance or eliminate all inherited host context.

Host policies still apply. No credentials, permission bypasses, or global skill configuration changes are needed. The case workspace is the intended write scope, while supporting snapshots are outside it. The harness does not create an operating-system boundary beyond the CLI sandbox. Include relevant policy/config files as context inputs and disclose uncontrolled differences.

The fingerprint algorithm hashes canonical JSON maps of relative paths to SHA-256 values. Git metadata, Python caches, node_modules, and .next are excluded. These exclusions are not permission to ignore relevant application dependencies: record lockfiles and test environments. An unavailable CLI or blocked sandbox remains a failed/unrun evaluation, never a pass.

## Response artifact contract

The response `artifacts` list contains unique paths to existing individual files relative to the case workspace, for example `index.html` and `evidence/checks.json`. Do not list directories such as `evidence/`; name deliverable files inside them individually. Directory, missing-file and non-regular-file errors are distinguished. Paths remain confined to the workspace. An invalid response remains failed and unscorable; reviewers must not repair generated output or retroactively change its contract.

## Review contract

Every assertion must appear exactly once with pass, fail, not_tested, or unreviewed. A scored pass or failure needs an evidence list. Each item contains a path relative to the case directory and a concrete observation. Accepted evidence locations are response.json, events.jsonl, stderr.txt, workspace/ artifacts, and evidence/ files.

Inspect actual output and behavior. The model's own checks are claims until independently verified. Use screenshots and browser notes for visual work, terminal logs for checks, and precise source observations where relevant. Add review evidence under evidence/ so the frozen generated outputs remain unchanged.

Visual artifact cases require integer scores 1–5 for every declared dimension and screenshot evidence under evidence/. A missing score is incomplete. Each dimension must reach 4; averaging cannot hide a weak dimension.

| Score | Anchor |
|---|---|
| 1 | Materially obstructs the task |
| 2 | Major problems require revision |
| 3 | Usable with clear design weaknesses |
| 4 | Coherent and polished; minor refinements remain |
| 5 | Exemplary result with convincing task-specific rationale |

Dimensions: hierarchy, layout, typography, color/imagery, and interaction clarity. A screenshot establishes appearance, not keyboard, assistive-technology, or backend correctness. Record those separately.

critical_findings is a list of evidence items for serious functional, accessibility, or scope failures. Any critical finding, failed assertion, or visual score below 4 fails the case. Missing judgments make it incomplete. Assertion percentage uses the full case denominator, including untested items.

## What scoring verifies

The scorer checks run/output identity, assertion coverage, evidence existence and hashes, rating bounds, and release thresholds. It detects edited outputs and stale review evidence. It does not automatically decide whether an observation is true, relevant, or well judged; the named reviewer remains responsible. Human review and authorized independent-agent review are both supported.

The supplied unit tests simulate CLI responses to validate harness behavior. They are not actual model evaluations and must never be reported as skill success rates.

## Existing evidence and remaining work

Selected real comparisons are complete and recorded in [evaluation history](evaluation-history.md). They include standalone rendered prototypes and source/interaction checks. This supersedes the former blanket statement that no comparisons or rendered checks had run.

The bundled suite retains 21 cases and 121 assertions. Only the prompts for cases 1, 5 and 10 incorporate the previously reviewed clarifications; their assertion IDs, criteria, expected outputs and visual dimensions are preserved. External transfer and composition cases remain separate frozen packs, not silently merged into this regression suite. Previously run cases must not be described as unseen.

The separate composition-transfer-v1.2 comparison evaluated frozen 1.1.4 and 1.1.5-rc.1: five valid outputs passed, one baseline execution failed, and the two scorable pairs were visual ties. Host configuration changed during run 2. Improvement remains unproven; see the history for counts and limits. No model run evaluates rc.2 itself. Local synthetic tests validate evaluator mechanics, not skill quality. Broader independent practical evaluation, installed Carbon React integration and assistive-technology checks remain open. Instructional casebook examples are teaching material, not held-out evaluation cases.

## Local checks without model use

Run python -B -X utf8 scripts/test_evaluate.py. The tests replace CLI execution with synthetic responses, including failure and timeout fixtures. IBM_EVAL_TEST_TMP can select a disposable test root outside the skill folder. The bundled frozen contract fixture is self-contained; no prior workspace or installed skill is required.

Use Prepare and Report to check packet identity and unrun status locally. An unrun report must not count as a pass. The PowerShell wrapper invokes Python; it does not itself grant permission to run a model.

Exit codes: 0 means a completed Prepare or an all-pass execution/review/report; 1 means a non-passing run, score or report (including unrun cases); 2 means invalid inputs or an evaluation error. A valid unrun report intentionally exits 1.

## 1.1.7 intake and rubric corrections

Bundled cases 2, 4 and 7 correct blanket styling, contrast and modal rules. Keep older results attached to their original suite snapshots; do not compare aggregate scores across changed criteria. The frozen release archives retain the original suites.

Use `--suite` with [evals-intake.json](../evals-intake.json) for the three additional guidance cases (22–24): spatial workspaces, prototype adoption and wrapped headings. These are separate from the bundled 21-case regression suite. Results belong to the exact evaluated snapshot and release evidence; the suite itself makes no performance claim. Guidance answers do not establish working UI, visual quality or assistive-technology behavior.
