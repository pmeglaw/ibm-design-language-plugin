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

On Windows, the hasher uses the extended-path form for directory traversal and file reads, including deep npm-cache paths inside a case. This does not remove those files from fingerprint coverage. Keep failed packets produced by an older hasher attached to their original harness; prepare a fresh packet with the corrected harness rather than rewriting a historical execution failure.

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

Use `--suite` with [evals-intake.json](../evals-intake.json) for the three additional guidance cases (22-24): spatial workspaces, prototype adoption and wrapped headings. These are separate from the bundled 21-case regression suite. Results belong to the exact evaluated snapshot and release evidence; the suite itself makes no performance claim. Guidance answers do not establish working UI, visual quality or assistive-technology behavior.

## Pattern selection and shell guidance

Use `--suite` with [evals-pattern-shell.json](../evals-pattern-shell.json) for four
additional guidance cases (25-28), totaling 19 assertions: feedback and recovery,
container/control-state choices, Next.js shell critique, and prototype/API
authority. Preserve the older suites. This pack's presence does not mean it has
passed a full model evaluation. Keep text guidance evaluation separate from
compilation, browser interaction, visual inspection and assistive-technology tests.

## Contribution-readiness evaluation boundary

When evaluating a reusable component contribution, require evidence for design, code, documentation and kit readiness separately. A candidate should distinguish preview from stable, configurable strings and typed APIs, controlled state and actual product behavior, documented state/variant coverage, migration and consumer compatibility. For application work, retain the repository's approved runner and gates; recognizing upstream Jest/Percy/Storybook requirements does not justify replacing the project stack.

A useful additional practical case is to review a plausible default demo with untranslated strings, missing error/RTL/keyboard states, placeholder links, stale props and a kit mismatch. The correct outcome identifies missing evidence and scoped repairs instead of certifying readiness from a screenshot or passing scan. Test documentation examples and accessibility behavior as well as appearance. This is an evaluation design recommendation, not an executed case or passing result; freeze the revised candidate and case before any future run. Prior model packets do not cover this amendment.

## 2026-09-29 practical regression review

The author-reviewed real Carbon fixture for frozen candidate 45a1163d4d5c244f5408d1bd34b31905564e736cd57e2393b655a5e123461f35 failed: 6/11 assertions passed, 4 failed, 1 not tested; visual scores 4/3/3/4/2. An independent rebuild reproduced JS/CSS byte for byte. Browser review identified dead breadcrumb fragments, misleading removal behavior, classic-scrollbar 320px overflow and failed CodeSnippet disclosure; font URLs returned HTML. Checkbox/accordion and async recovery behavior passed. Clipboard payload/denial, full contrast, zoom, race checks and screen reader remain unverified. This known author-written case is not a holdout, and later practical/gallery amendments are outside its frozen snapshot. See [practical implementation review](practical-implementation-review.md); do not describe text-guidance scores or synthetic evaluator tests as a practical pass.

## 2026-09-29 later regression and chart guidance

Frozen snapshot `5e316597b1edd96088007405ef4a6cbdd8ba43415cc7104f42e86635099f6f6d` failed the known practical case: 6 pass, 3 fail, 2 not tested, visual scores 4/4/3/4/3. The author reviewer reproduced compilation and tested real browser behavior; missing navigation targets, accordion trigger heading structure and a pending Reset/stale-completion race failed. Snippet disclosure and measured narrow geometry improved. Exact clipboard/denial, full relevant contrast/matrix and AT remain unverified. A separate new author-written chart guidance transfer case passed 6/6 criteria; this is text guidance only. Later heading/font/request-fence amendments are outside that snapshot and have structural/compile probes, not a new model practical pass. Preserve these results separately from older snapshots and synthetic harness tests.

## Recipe snapshot result and subsequent amendments

Frozen snapshot `add261d63d7e9af095b925074b35a353cac151b3fd846b8b6696d91b48a44058` failed the same known practical case with 8 pass, 2 fail and 1 not tested; visual scores 4/4/4/4/3. Root author-agent review verified real ancestor destinations, heading/disclosure structure, checkbox behavior, pending controls, preserved failure/retry, removal and narrow geometry. Independent compilation reproduced JS/CSS; observed Plex Sans/Mono resources matched the installed font bytes. Real browser clipboard-write denial correctly reported failure. Reset retained an Applied summary, and RTL changed English content's lang to ar. Exact clipboard readback, complete code keyboard scrolling, full state/focus contrast and assistive technology remain unverified. Reviewer evidence is separate from unchanged frozen output; the evaluator rejected accidental evidence additions inside the workspace before they were moved outside and original identity was re-established. The domain-state/reset and language/direction guidance was added afterward and is not covered by this result. Preserve a failed practical verdict rather than treating partial improvement or a chart-guidance pass as certification.

## Latest published practical evidence

The completed 1.1.17 known practical regression is FAIL: 9 pass, 2 fail, 0 untested. The two remaining failures are 320px containment and RTL. See [evaluation history](evaluation-history.md#published-1117-practical-regression) for snapshot/output identity, the separate assisted and interrupted attempts, execution-setting differences and rendered limits. Historical sections above belong to their own frozen inputs. Documentation refinements after that snapshot have structural review only until a new output is generated, frozen and independently checked; never carry an older score forward as their result.
