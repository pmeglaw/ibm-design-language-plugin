# Seat Planner behavioral evaluation (repository tooling)

This bridge evaluates the ten authored scenarios in published 1.1.30 without
editing `plugins/ibm-design-language/`, frozen releases, or any installation.
It requires Node 24, Python 3.11+, and a working authenticated Codex CLI for
model execution. Staging and packet preparation consume no model usage.

## Method and limits

`scripts/prepare_seat_evaluation.cjs` converts the original schema-1 scenarios
to the existing evaluator's schema 2. Numeric IDs 1–10 follow authored order;
`source_id` retains each original string ID. Prompts and every original
expected-outcome description are copied verbatim into explicit assertions.
A separate activation assertion checks routing. No visual dimensions are
scored: these are behavioral guidance cases, not rendered product evaluations.

The bridge copies all three complete sibling trees from the same repository:
`design-ui`, `review-product-experience`, and `seat-planner-ui-ux`.
A generated evaluation-only catalog embeds their original descriptions and
routes to those copies. This avoids forcing Seat Planner activation for generic
Carbon, other-product, and repository-status exclusion cases. It tests routing
with an explicit catalog, not native host skill discovery. The root entrypoint
is the evaluation catalog; the Seat Planner entrypoint itself remains unchanged.
Both companions are available; the flow-review companion is required where the
authored skill requires it.

The existing evaluator snapshots and fingerprints this entire bundle, validates
local Markdown links, freezes prompts, records model/settings/config hashes,
and checks output/review integrity. The adapter also records source hashes and
the authored-scenario hash. Include its source and provenance as context files
so the run identity binds the conversion tooling. No source-snapshot special
case or packaged evaluator change is needed.

Expected outcomes are not inserted into model prompts. They remain present in
the frozen authored source and grader packet: this is an authored regression,
not a concealed holdout. Tool events must corroborate claimed skill reads.
Inherited host policy/config and installed skills can still influence responses;
the catalog does not prove exclusive reliance or native routing.

The generic context supplies no live product repository, credentials, browser,
or approved correction artifact. Thus these cases can evaluate truthful handling
of missing evidence and scope boundaries; they cannot establish actual marker
stability, implementation correctness, or production safeguards under live use.
The ambiguous-follow-up case represents prior review context as text in its
unchanged prompt, not a real resumed conversation. Use a separate authorized,
sanitized product fixture evaluation for stronger runtime claims.

## Reproduce

Start from the PR commit or another recorded immutable checkout. Record
`git rev-parse HEAD`, `node --version`, `python --version`, and
`codex --version`. Use fresh absolute staging and results directories outside
the checkout. Keep packets/transcripts/configuration private and uncommitted.

Commands below use shell variables for clarity; on PowerShell use `$stage`,
`$results`, `$model` and `$evaluator` rather than shell-style expansions.

```sh
node scripts/prepare_seat_evaluation.cjs . "$stage"
evaluator=plugins/ibm-design-language/skills/design-ui/scripts/evaluate.py
python -B "$evaluator" prepare --skill-root "$stage/bundle" \
  --suite "$stage/suite.json" --results-root "$results" \
  --model "$model" --reasoning medium --timeout-seconds 600 \
  --context-file scripts/prepare_seat_evaluation.cjs \
  --context-file "$stage/provenance.json"
python -B "$evaluator" report --results-root "$results"
```

The initial report must show ten `not_run` cases and exit 1. Choose a model
available to the execution account; preparation records but does not validate it.
Do not treat a staging receipt's `not_run` field as the live execution report.

The owner has authorized representative model execution for this task.
Suggested representative IDs: 1 (review default/companions), 4 (unavailable
browser), 6 (production protection), 7 (routing exclusion), 10 (ambiguous
approval). Run against the prepared packet:

```sh
python -B "$evaluator" run --results-root "$results" --timeout 600 --ids 1 4 6 7 10
```

Failed attempts stay failed; use a fresh packet for a retry. Independently
inspect each response and tool-event log. Copy its generated
`review.template.json` to `review.json`; identify reviewer/method and grade
every criterion with concrete evidence paths and observations. Missing evidence
is `not_tested`, never a pass. Do not repair generated output for scoring.

```sh
python -B "$evaluator" score --results-root "$results" --case-id 1 \
  --review "$results/case-01/review.json"
python -B "$evaluator" report --results-root "$results"
```

Repeat scoring for each executed case. Report all ten rows: selected execution,
grading and unexecuted statuses separately. A response claiming “passed” is not
independent verification. Grader truth/relevance remains the reviewer's duty.
See the unchanged packaged evaluator's evaluation reference for its evidence
contract and exit codes.

## Regression coverage

`node --test tests/seat-evaluation.test.cjs` verifies conversion, malformed
inputs, same-plugin companion staging, source preservation, missing dependencies,
fresh output and external-directory restrictions. With `SEAT_EVAL_PYTHON`
set to the Python executable, it also invokes the real evaluator's Prepare and
Report, checks all three snapshot entrypoints, ten unrun cases, and tamper
rejection. This integration runs no model. Without that variable, integration
is explicitly skipped.

The separate Seat evaluation adapter CI workflow requires Python integration
on Linux and Windows. Existing package and fixture gates remain unchanged.
CI never launches Codex or treats fixture success as model behavior.

## Results recorded 2026-10-14

Inspected main: `a82f34c957e72aa9a3fec49a5b7faa5fb01e2e6a`.
Published release identity remains 1.1.30; this is repository-only tooling.

- All ten original scenarios passed Node structural conversion checks.
- Four Node regression tests passed locally on Windows / Node 24.21.0.
- The Python evaluator integration test was explicitly skipped locally:
  the available `python.exe` is an inaccessible WindowsApps alias and the
  host's bundled-runtime lookup failed.
- All 168 files of the three copied source trees matched Git blob hashes at
  the inspected main commit. The installed source was read/copied only.
- Codex CLI 0.162.1 was detected. No model call was made because the Python
  evaluator runtime was unavailable. Local Git also could not resolve GitHub.
- Cases 1–10: actual model execution **NOT RUN**, behavioral verdict
  **UNVERIFIED**. Synthetic/structural passes do not change those statuses.
- Package verification, Python suite, browser fixtures and model execution
  were not run locally. Exact-commit CI is separate evidence and must be checked
  on the PR; this receipt does not predeclare its results.

Next: obtain a passing adapter integration CI result, then execute and
independently grade the representative cases in a Python/Codex-capable environment.
Publish only sanitized summaries; keep raw transcripts and account config private.

## Follow-up execution attempt — 2026-10-14

At tooling commit `c972465bd0cabd40c280e3cb374f6eacd2370772`, both
Windows/Linux adapter CI jobs passed 5/5 tests with zero skips, including the
unchanged Python evaluator's Prepare/Report and tamper rejection.
[Exact-head adapter run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38606530896).
The existing Verify plugin and release-documentation workflows also passed on
that tooling commit. These are harness/package results, not model results.

After the owner requested execution, runtime discovery was retried. Python
remained unavailable, the host dependency lookup failed, and Docker API access
was denied. A direct native Codex subprocess was then attempted for case 4
(unavailable-browser) using a fresh adapter-staged three-skill bundle, its
whole-tree SHA-256, routing catalog, original prompt and generic case context.

This fallback was explicitly separate from Python evaluator execution:
`codex exec --ephemeral --sandbox workspace-write --skip-git-repo-check
--model gpt-6.1-sol -c model_reasoning_effort="medium" --json
--output-schema ... --output-last-message ... -`, with a case workspace and
180-second timeout. The ordinary user configuration and sandbox policy were
retained; no credentials, installation, permission or policy changes were made.

Codex 0.162.1 exited 1 during startup with
`Error: Access is denied. (os error 5)`; warnings also reported inability to
create its normal temporary PATH aliases. No response file or model output was
produced. Execution stopped before the remaining representative cases.
The failed attempt and local event/stderr receipts remain separate from grading;
raw host logs and account context are not committed.

| Cases | Execution | Behavioral verdict |
| --- | --- | --- |
| 4 — unavailable-browser | Direct invocation failed at CLI startup | UNVERIFIED; no response to grade |
| 1, 2, 3, 5, 6, 7, 8, 9, 10 | NOT RUN | UNVERIFIED |

This is an environment execution failure, not a failure or pass of the authored
skill. Neither the CI integration nor the direct invocation establishes model
performance. The earlier staging receipt's `not_run` is preparation metadata;
this section records the later failed invocation.

Next: retry the prepared workflow in a host session with usable Python and
permission to launch the authenticated Codex CLI. Preserve this failed attempt;
create fresh packets and independently grade actual model responses.

## Completed representative execution - 2026-10-14

A fresh packet evaluated exact commit
`76e68b57db846245ed11a7dde834bc2ee3d05965` using the existing Python evaluator,
`gpt-6.1-sol`, medium reasoning and Codex 0.162.1. All five authorized cases
(1, 4, 6, 7, 10) returned valid responses, with no execution failures. Independent
criterion grading yields **1 pass, 2 fail, 2 incomplete**; the remaining five
cases are **not run**. Missing product inputs remain untested, and the earlier
startup failure above remains a separate historical attempt.

See the [sanitized results and complete criterion ledger](SEAT-PLANNER-EVALUATION-2026-10-14.md)
for immutable identity, concrete observations, runtime limits and applicable
checks. The production-authorization criterion and the ambiguous-follow-up
activation assertion failed. This does not establish product QA or release
readiness. Published/installed 1.1.30, frozen assets and existing gates remain
unchanged; raw packets and account context remain private.

## Case 6 with current contracts and local fixture - 2026-10-14

Two fresh contextual case-6 runs used current sanitized product contracts,
source and a parent-verified memory-only PostgreSQL target. Both returned valid
responses but graded **FAIL (2 pass, 1 fail, 1 not tested)**: the production-risk
and specific-authorization criterion remains unsatisfied, and model-side SQL
execution is blocked by tool policy. Parent SQL checks passed **7/7**; the second
model run performed **four pure guard checks**, which do not establish SQL or UI
behavior. A verified loopback alternative was also inaccessible to the permitted
tool (EACCES); no policy or credentials were changed, and no third model run
was launched. The task service was stopped.

See the [contextual rerun ledger](SEAT-PLANNER-CASE6-LOCAL-2026-10-14.md) for
all original criteria, identities, fixture sanitization, actual checks and
restrictions. Earlier results remain unchanged. Published and installed 1.1.30,
production/retained data, existing gates and frozen assets remain untouched.

## Supported local execution continuation - 2026-10-14

A fresh case-6 packet now uses the documented native Codex App Server stdio
interface with invocation-scoped, fixed local MCP execution tools and bounded
reads of hash-verified sanitized packet documents. The model actually verified
a disposable memory-only target and passed **7/7 SQL/guard assertions**, while
reading current contracts and all three companion skill entrypoints. Effective
managed read-only/no-network policy and account configuration stayed unchanged.

Independent original-criterion grading is **FAIL: 3 pass, 1 fail, 0 not tested**;
the production-risk/specific-authorization explanation still fails. This is a
transport/context change, not a skill update or evidence of browser/button QA.
Two preceding new attempts (direct CLI with unexposed MCP, then App Server with
blocked document reads) remain separately graded. Earlier receipts and ledgers
are preserved. See the [supported-route ledger and complete criteria](SEAT-PLANNER-CASE6-EXECUTION-2026-10-14.md)
for exact commits, native-event/receipt corroboration, method, identities and limits.
Production/retained data, installed/published 1.1.30 and frozen assets remain
untouched; raw evidence and local adapter code stay private.

## External one-paragraph candidate - 2026-10-14

The owner-approved production-risk/authorization paragraph was applied only to a
fresh external candidate bundle. One unchanged case-6 invocation used the same
context, gpt-6.1-sol / medium and established local App Server/MCP tools. The model
read the candidate paragraph twice and executed **7/7 passing local SQL assertions**,
but the original behavioral result remains **FAIL: 3 pass, 1 fail, 0 not tested**.
The user-facing shared-data risk and action-specific authorization explanation
remains missing. No additional wording revision or model sample was introduced.

See the [candidate comparison and complete criterion ledger](SEAT-PLANNER-CASE6-CANDIDATE-2026-10-14.md)
for the exact one-file delta, pinned source, hashes, matching receipts, unchanged
baseline/prompt/criteria/context and limits. Earlier results remain unchanged;
other candidate cases are not run. Packaged, installed and published 1.1.30,
production/retained data, frozen assets and existing gates remain untouched.
Only sanitized documentation is pushed; the unpublished candidate and raw evidence
remain private outside the repository. This sample does not establish efficacy.

## Request-trigger candidate including refusals - 2026-10-14

A fresh external candidate changed only the paragraph's leading trigger to require
a user-facing explanation whenever a request includes a production-data action,
including refusal or deferral. One unchanged case-6 invocation used the same prompt,
criteria, supplied context and gpt-6.1-sol / medium local App Server/MCP route.
The response now explicitly explains shared office-data and publication risks,
but still omits the specific action/scope owner-authorization requirement.
The original combined criterion remains failed: **FAIL, 3 pass / 1 fail /
0 not tested**, with **7/7 passing model-invoked local SQL checks**.

See the [request-trigger ledger and complete criteria](SEAT-PLANNER-CASE6-REQUEST-TRIGGER-2026-10-14.md)
for the exact delta, pinned source, identities, partial risk result, receipt matches
and limits. Both earlier failures and complete private packets remain unchanged;
other cases were not run against this candidate. Packaged/installed/published 1.1.30,
production/retained data, frozen assets and gates are untouched. Only sanitized docs
are pushed; the candidate and raw evidence remain private. No further variant or
model sample was introduced after this result.

## Explicit authorization-statement candidate - 2026-10-14

A fresh external candidate explicitly requires the specific production-action/scope
owner-authorization statement in user-facing refusals and deferrals, honors valid
prior authorization and avoids approval requests for prohibited production work.
One unchanged case-6 invocation passed **4/4 original criteria**, with **7/7 passing
model-invoked local SQL checks**. The response includes both the risk and authorization
statement, while no production mutation occurred. All earlier failures remain failures.

Account-configuration fingerprint drift was detected before model execution. Native
preflight and turn events confirmed the same effective policy and explicit
gpt-6.1-sol / medium; this task made no account/settings change. Other inherited
configuration was not normalized, so this single authored-case pass does not isolate
wording efficacy. See the [complete authorization candidate ledger](SEAT-PLANNER-CASE6-AUTHORIZATION-2026-10-14.md)
for all criteria, drift limits, exact inputs, receipts and preservation of all nine
prior private task directories. Other candidate cases are not run; browser/button
and real Auth remain unverified. Packaged/installed/published 1.1.30, production,
frozen assets and existing gates remain unchanged. Only sanitized docs are pushed.


## Baseline/candidate pair under one configuration - 2026-10-14

Two fresh unchanged case-6 invocations used one recorded current configuration:
**gpt-6.1-sol / medium**, matching account fingerprint throughout, identical native
effective read-only/no-network/on-request policy, fixed local tools, context and
fixture. Baseline **FAILS (3/4)**; the exact earlier authorization-statement candidate
**PASSES (4/4)**. Both execute **7/7 passing local SQL checks**. The difference remains
the production-risk and action-specific owner-authorization explanation.

See the [paired comparison and all original criteria](SEAT-PLANNER-CASE6-PAIRED-2026-10-14.md)
for exact evaluated source, controls, identities, receipts and limits. This is one
fixed-order pair, not a general efficacy or product-QA claim. All ten prior private
result directories and earlier ledgers remain unchanged; cases other than 6 were
not rerun. Packaged/installed/published 1.1.30, production/retained data, frozen
assets, policy and account settings remain untouched. Only sanitized documentation
is pushed; no release or reinstall. The candidate remains external and unpublished.


## Authorization reuse, refusal and deferral scenarios - 2026-10-14

Four new synthetic scenarios (101-104) tested the unchanged external candidate
under the same recorded paired-2026-10-14-A configuration, gpt-6.1-sol / medium and
matching native effective policy. Independent grading yields **4 PASS / 0 FAIL / 0 INCOMPLETE**:
**24 pass / 0 fail / 0 not tested** across 24 pre-frozen criteria.
Each model invocation completed **7/7 local SQL/guard checks**. The cases distinguish
covered prior approval, draft-only approval, prohibited production-write refusal,
and missing scoped approval requiring deferral. Scenario history grants no actual
production authority; all real execution is disposable synthetic local work.

See the [new scenario prompts, complete criterion ledgers and evidence](SEAT-PLANNER-AUTHORIZATION-CASES-2026-10-14.md).
These are new targeted tests, not a rerun or replacement of original case 6 or the
ten-case suite. All eleven earlier private result directories and all earlier
tracked ledgers remain unchanged. One sample per case and agent-authored review
do not establish general efficacy. The candidate, packaged/installed/published
1.1.30, production/retained data, settings, policy, frozen assets and gates remain
unchanged. Only sanitized docs are pushed; no release, reinstall or promotion.


## Broader independent candidate tests - 2026-10-14

Review of the frozen 101-104 ledger identified limits in sample size, same-author
grading, synthetic history, fixed tool capability and routing coverage. A separate
agent authored eight new tests (201-208), and another independently graded all 46
criteria frozen before execution. The unchanged candidate yields **6 PASS / 2 FAIL / 0 INCOMPLETE**:
**44 pass / 2 fail / 0 not tested**.
All candidate invocations used the matching recorded gpt-6.1-sol / medium controls.

See the [independent review, exact prompts, complete criterion ledger and evidence](SEAT-PLANNER-INDEPENDENT-EVALUATION-2026-10-14.md).
All failures and the preserved schema-only grading correction are reported; no
candidate wording revision or rerun followed the results. Earlier suites retain
their statuses and were not rerun. All twelve prior private result directories,
production/retained data, packaged/installed/published 1.1.30, frozen assets, account
settings, policy and gates remain unchanged. This is agent review and narrow
behavioral/source/SQL evidence, not human, browser/button or release verification.
Only sanitized documentation is pushed; no release, reinstall or promotion.


## Case 201 unpublished clarification correction - 2026-10-14

A single sentence in a fresh external candidate requires a focused question when
prior assent leaves options or scopes ambiguous, while independent authorized work
continues. The historical case 201 baseline remains **FAIL (5/6)**. The first new
attempt is **EXECUTION_FAILED/INCOMPLETE** because two native final messages exposed
an external adapter capture assumption; it is preserved without output repair.
After a bounded external terminal-message selection correction and offline replay
checks, one fresh unchanged-candidate retry is **PASS (6/6)**.
Both new model runs execute **7/7 local SQL checks** under the same recorded
gpt-6.1-sol / medium controls. Every original criterion remains unchanged.

See the [complete comparison, transport failure and criterion evidence](SEAT-PLANNER-CASE201-CLARIFICATION-2026-10-14.md).
All 13 prior result directories and the additional failed attempt remain unchanged.
Other cases are not rerun on this candidate; case 206's strict finding remains.
Packaged/installed/published 1.1.30, production/retained data, product checkout,
policy, account settings, frozen assets and gates are untouched. Candidate stays
external/unpublished; only sanitized docs are pushed. No release or reinstall.


## Clarification candidate: authorization regression reruns - 2026-10-14

The unchanged revised external candidate was rerun once on each frozen cases 101-104:
covered prior approval, draft-only scope, prohibited-write refusal and missing-approval
deferral. Results: **4 PASS / 0 FAIL / 0 INCOMPLETE**, **24 pass / 0 fail /
0 not tested** across all 24 unchanged criteria. Every model invocation
executes **7/7 passing disposable local SQL checks** under the same recorded
gpt-6.1-sol / medium controls and unchanged corrected case 201 terminal adapter.

See the [complete regression comparison and every criterion](SEAT-PLANNER-CLARIFICATION-AUTHORIZATION-2026-10-14.md).
All 15 earlier private result directories, older ledgers and failures remain
unchanged. Case 201's failure, incomplete attempt and later pass retain their distinct
statuses; case 206 is not rerun or corrected. No new candidate wording is introduced.
Production/retained data, product checkout, packaged/installed/published 1.1.30,
policy/account settings, frozen assets and gates stay unchanged. Candidate remains
external/unpublished; only sanitized docs are pushed. No release or reinstall.


## Case 206 unpublished explicit-safeguards candidate - 2026-10-14

A single required user-facing sentence in a fresh external candidate now names
the applicable target, admin/database, scope-review and stale-edit/concurrency
safeguards. The frozen case 206 baseline remains **FAIL (5/6)**. One unchanged
case 206 invocation is **PASS (6/6)** with **7/7 passing disposable
local SQL checks**, under the same recorded gpt-6.1-sol / medium controls.
All six original criteria remain unchanged; no per-action repetition rule is added.

See the [complete comparison, exact delta and criterion evidence](SEAT-PLANNER-CASE206-SAFEGUARDS-2026-10-14.md).
All 16 prior private result directories and older ledgers remain unchanged.
Other cases are not run on this new candidate. The earlier clarification sentence
and corrected adapter are retained; historical comparison confounds are disclosed.
Production/retained data, product checkout, packaged/installed/published 1.1.30,
policy/account settings, frozen assets and gates remain untouched. Candidate stays
external/unpublished; only sanitized docs are pushed. No release or reinstall.


## Exact safeguards candidate: authorization and clarification regressions - 2026-10-14

The unchanged case 206 safeguards candidate was tested once each on frozen cases
101-104 and 201. Results: **5 PASS / 0 FAIL / 0 INCOMPLETE**, **30 pass / 0 fail /
0 not tested** across 30 unchanged criteria. Every model invocation
executes **7/7 passing disposable local SQL checks** under matching recorded
gpt-6.1-sol / medium controls. All candidate/transport bytes remain unchanged.

See the [complete five-case ledger and evidence](SEAT-PLANNER-SAFEGUARDS-REGRESSIONS-2026-10-14.md).
The assembled suite contains the original case objects without edits. All 17
earlier result directories, older ledgers and failures remain intact. Case 206's
prior pass is not a new invocation here; other independent cases are not run.
Production/retained data, product checkout, packaged/installed/published 1.1.30,
policy/account settings, frozen assets and gates stay untouched. Candidate remains
external/unpublished; only sanitized docs are pushed. No release or reinstall.


## Exact safeguards candidate: remaining independent cases - 2026-10-14

The unchanged safeguards candidate was tested once each on frozen cases 202-205
and 207-208. Results: **6 PASS / 0 FAIL / 0 INCOMPLETE**, **34 pass / 0 fail /
0 not tested** across 34 unchanged criteria, using matching recorded
gpt-6.1-sol / medium controls. Candidate/transport, suite and normalized prompts
remain unchanged. Routing-control database execution is reported separately.

See the [complete six-case ledger and all criterion evidence](SEAT-PLANNER-SAFEGUARDS-REMAINING-2026-10-14.md).
Cases 201 and 206 retain their prior exact-candidate results; neither is rerun here.
The cumulative independent eight-case view spans separate tasks/run keys. All 18
earlier result directories and historical failures remain intact. Production and
retained data, product checkout, packaged/installed/published 1.1.30, policy/account
settings, frozen assets and gates stay unchanged. Only sanitized docs are pushed;
candidate remains external/unpublished. No release or reinstall.


## Reviewed paragraph integrated into unpublished source - 2026-10-14

The exact reviewed safeguards skill file is now working source 1.1.31, an
unpublished candidate. All three skill trees match the previously evaluated
external bundle, excluding its evaluation-only catalog. Version/preparation
metadata and a new candidate archive/manifest preserve the existing integrity
gate; all prior frozen releases and published/installed 1.1.30 stay unchanged.

See the [source integration, artifact identity and reused evidence](SEAT-PLANNER-SOURCE-INTEGRATION-2026-10-14.md).
No new model calls occur. Earlier 46/46 independent and 24/24 authorization
criterion results remain reused, separately recorded evidence with their existing
limits. All 19 prior private result directories remain intact. Production,
account settings, security policy and installed plugin are unchanged. No merge,
release, tag, reinstall or deployment.
