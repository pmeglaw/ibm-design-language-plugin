# Behavioral evaluation request closeout - 2026-10-14

The requested model executions, independent grading and follow-up investigations
are complete. This is **evaluation completion**, not an all-pass candidate,
product-QA certification or release approval. Existing incomplete and failed
results remain frozen. The final sanitized delivery commit, current PR state and
exact-head CI are verified after this documentation commit and recorded in the
PR overview and private final delivery receipt; earlier CI is not substituted.

## Original request, evidence and limits

| Requirement | Authoritative evidence | Result and scope |
| --- | --- | --- |
| 1. Read current AGENTS and evaluation guide | Current repository AGENTS; [active guide](SEAT-PLANNER-EVALUATION.md); staged scope/intake receipts | Read and applied; current restrictions override release/install defaults. |
| 2. Safely use existing PR branch and preserve unrelated work | [Initial execution identity](SEAT-PLANNER-EVALUATION-2026-10-14.md); successive before/after manifests and Git receipts | Existing codex/seat-behavior-evaluation-adapter isolated checkout; product and unrelated work preserved; final cleanliness/remote head rechecked after push. |
| 3. Verify Python3.11+, Node24 and authenticated Codex without policy/credential bypass | Fresh version/login status; actual evaluator/native execution receipts | Python3.12.14, Node24.21.0, Codex0.162.1 usable/authenticated. Bundled Python was available, so conditional Windows installation was unnecessary. Refusals stay recorded; no security-policy change or credential copying. |
| 4. Fresh external adapter packets, complete companion trees | Adapter staging/provenance,169-file snapshot maps and frozen input hashes | Three complete same-snapshot skill trees,168 companion files plus generated catalog; packets/raw outputs outside both repositories. Catalog testing does not establish native installed discovery. |
| 5. Execute representatives1/4/6/7/10 using existing Python evaluator | [Initial representative ledger](SEAT-PLANNER-EVALUATION-2026-10-14.md) | All five actual exit0 invocations at76e68b57db846245ed11a7dde834bc2ee3d05965:1PASS/2FAIL/2INCOMPLETE,13/2/3 across18 assertions. Initial five unrun cases remain historical NOTRUN records. |
| 6. Independently grade every original criterion, distinguish statuses | Initial18-assertion ledger; [all-ten source32 ledger](SEAT-PLANNER-SOURCE-1.1.32-ORIGINALS-2026-10-14.md); hash-bound per-case reviews/scores/events | All10 originals subsequently executed and all36 criteria graded24PASS/0FAIL/12NOT_TESTED/0unreviewed. A failing scorer exit is distinct from execution failure. No historical score backfilled. |
| 7. Commit/push sanitized summary to existing PR, keep raw/config/credentials private | Public frozen ledgers and current three-document diff; private raw packets; PR47 history/readback receipts | Sanitized documentation only. All earlier delivered ledgers retained; latest case8/closeout delivery is verified against the final remote head and PR body after commit. |
| 8. Applicable checks and exact commit/model/reasoning/results/limits/current CI | Each cohort ledger and versioned private manifest; local checks; exact-head Actions runs recorded in PR/final receipt | Exact evaluated identities and model settings below; local package/live-publication/install parity/privacy/reference checks; whitespace results are scoped below. Final CI belongs to the final delivered commit, not a previous head. No unsupported application/runtime or downloaded-asset claim. |

Whitespace scope: the default staged `git diff --cached --check` PASS for
the case8/closeout delivery at `6b7a2ca547e62836ac049a911138146c1a91dcb6`
covers exactly its three documents: `SEAT-PLANNER-CASE8-ROUTING-2026-10-14.md`,
this closeout, and `SEAT-PLANNER-EVALUATION.md`. The whole PR's default
`git diff --check BASE...HEAD` continues to flag the two preserved CRLF endings
at skill entrypoint lines20-21, where BASE is
`a82f34c957e72aa9a3fec49a5b7faa5fb01e2e6a`. The existing
[CRLF preservation caveat](SEAT-PLANNER-SOURCE-1.1.32-2026-10-14.md#preservation-and-validation)
records the passing process-only CRLF-recognition check. Frozen/evaluated skill
bytes and persistent Git configuration stay unchanged. This documentation-only
scope correction has its own default staged whitespace check for this file.

## Complete original-suite accounting

The source1.1.32 original-ten cohort evaluates commit
`821f700f5a63207fcd11b8adde211c5dc21ed806`, model `gpt-6.1-sol / medium / default`,
configuration `paired-2026-10-14-A`, unchanged candidate
`3568c439e1b695453afed63658bc5d4bb825f05e9ebaa1cc01ca42c52eadbd6c`. All ten native processes exit0. Its immutable report remains
**3 PASS / 0 FAIL / 7 INCOMPLETE;24 pass /0 fail /12 not tested /0 unreviewed**.

| Case | Original scenario | Execution | Pass / fail / not tested | Frozen verdict |
| --- | --- | --- | --- | --- |
| 1 | explicit-review | exit0 | 4 / 0 / 0 | PASS |
| 2 | bounded-implementation | exit0 | 1 / 0 / 3 | INCOMPLETE |
| 3 | map-drift | exit0 | 2 / 0 / 2 | INCOMPLETE |
| 4 | unavailable-browser | exit0 | 2 / 0 / 2 | INCOMPLETE |
| 5 | version-authority | exit0 | 2 / 0 / 2 | INCOMPLETE |
| 6 | production-qa | exit0 | 4 / 0 / 0 | PASS |
| 7 | generic-carbon | exit0 | 2 / 0 / 1 | INCOMPLETE |
| 8 | other-product | exit0 | 2 / 0 / 1 | INCOMPLETE |
| 9 | repository-status | exit0 | 2 / 0 / 1 | INCOMPLETE |
| 10 | ambiguous-follow-up | exit0 | 3 / 0 / 0 | PASS |

A fresh completion audit reopens every original case, execution, independent
review, score and referenced evidence hash; it verifies all36 criteria remain
graded and original authored scenarios are byte-identical to published1.1.30.
Its private receipt SHA256 is `5a70d1022764e6c65941612319c7738bd0f64f8495f1b0de35871ea2314624e8`.
Frozen authored/preparation files that say NOTRUN retain their historical meaning;
later dated ledgers establish subsequent execution. They are not rewritten.

## Authorized follow-ups and frozen results

| Follow-up | Evidence | Result retained |
| --- | --- | --- |
| Current-contract sanitized local case6 fixture | [Local ledger](SEAT-PLANNER-CASE6-LOCAL-2026-10-14.md) | Two FAIL2/1/1 samples; parent SQL and blocked model SQL separated. |
| Supported model-side local execution | [Execution ledger](SEAT-PLANNER-CASE6-EXECUTION-2026-10-14.md) | Actual model SQL7/7, behavioral FAIL3/1/0. |
| Minimal unpublished paragraph | [Candidate ledger](SEAT-PLANNER-CASE6-CANDIDATE-2026-10-14.md) | Exact external paragraph tested; FAIL3/1/0, SQL7/7. |
| Request-trigger revision including refusals | [Request-trigger ledger](SEAT-PLANNER-CASE6-REQUEST-TRIGGER-2026-10-14.md) | Exact revision tested; FAIL3/1/0, SQL7/7. |
| Explicit authorization statement | [Authorization ledger](SEAT-PLANNER-CASE6-AUTHORIZATION-2026-10-14.md) | PASS4/4, SQL7/7; historical configuration-drift limitation retained. |
| Baseline/candidate under one recorded configuration | [Paired ledger](SEAT-PLANNER-CASE6-PAIRED-2026-10-14.md) | Separate matched comparison:baseline FAIL3/1/0,candidate PASS4/4,both SQL7/7. Earlier drifted comparison is not repaired. |
| Prior-authorization reuse/refusal/deferral | [101-104 ledger](SEAT-PLANNER-AUTHORIZATION-CASES-2026-10-14.md) | Four cases,24/24 PASS, same recorded configuration. |
| Frozen-ledger review and broader independent tests | [201-208 ledger](SEAT-PLANNER-INDEPENDENT-EVALUATION-2026-10-14.md) |44 pass/2 fail/0 not tested; routing controls correctly require no SQL. |
| Minimal case201 clarification | [Clarification ledger](SEAT-PLANNER-CASE201-CLARIFICATION-2026-10-14.md) | Exact sentence; transport failure retained, fresh retry PASS6/6 and SQL7/7; authorization regressions24/24 PASS. |
| Later safeguards/discovery and source integration | [Source32 integration](SEAT-PLANNER-SOURCE-1.1.32-2026-10-14.md) and linked frozen ledgers | Final3568 candidate reuses12 targeted PASS cases/70 criteria across two separately verified packets; not newly rerun or combined with original-suite totals. |
| Original cases and expanded capabilities | [Two-cohort ledger](SEAT-PLANNER-SOURCE-1.1.32-ORIGINALS-2026-10-14.md) | All original10 graded; separate enhanced2/3/5/9 cohort3PASS/1INCOMPLETE,12/0/3. Changed context/capabilities are explicit. |
| Case2 selector-contract clarification | [Selector ledger](SEAT-PLANNER-CASE2-SELECTOR-CONTRACT-2026-10-14.md) | Scoped model patch/browser evidence; INCOMPLETE3/0/1 stays frozen. Earlier broader-selector rejection remains1/0/3. |
| Missing case2 SQL verification | [Prompted continuation](SEAT-PLANNER-CASE2-SQL-CONTINUATION-2026-10-14.md) | New explicitly requested continuation5/5 and model SQL7/7; original case2 not backfilled. |
| Case4 guidance-intake investigation | [Case4 ledger](SEAT-PLANNER-CASE4-READER-2026-10-14.md) | Separate unchanged-input4/4 PASS; original2/0/2 remains INCOMPLETE. |
| Case7 generic-routing investigation | [Case7 ledger](SEAT-PLANNER-CASE7-ROUTING-2026-10-14.md) | Separate unchanged-input3/3 PASS via authorized Node reads; original2/0/1 remains INCOMPLETE; truncation/web-evidence limits retained. |
| Case8 unrelated-product investigation | [Case8 ledger](SEAT-PLANNER-CASE8-ROUTING-2026-10-14.md) | New PASS,3/0/0 across unchanged3criteria; original2/0/1 remains INCOMPLETE. |

Case8 evaluates `465c50a949789aef548660aae9f5d5a06cbc3237` with `gpt-6.1-sol / medium / default`,
configuration `paired-2026-10-14-A`; run key `43a637c7f4d511f8f5d253ffbc0255f441d2970dd499f16042cd1f7e410f45ef`.
Candidate, prompt/context/criteria, fixed tools and fixture bytes remain unchanged.
No additional rerun is required merely to replace a historical FAIL or NOT_TESTED
label. This closeout follows completion of the requested work, not a choice to
ignore unexecuted mandatory tests.

## Preservation, verification and residual limitations

All34 prior evidence directories/32,647 files,95 frozen release files,170-file
source1.1.32 manifest, published/installed1.1.30, product checkout, runtime binaries
and account/policy hashes are preserved in current before/after checks. Raw
transcripts, credentials and account configuration stay private. Existing gates
are unchanged. The PR stays open/draft/unmerged; no publication, tag, reinstall,
deployment or production/retained-data mutation is authorized or performed.

Local package verification covers170 files,333 links, frozen archives and synthetic
checks with zero model/install calls. Live release/tag identity remains1.1.30;
installed parity covers171 total files including one permitted host metadata
overlay, with zero missing/extra/changed files. Downloaded release assets, enabled
state/fresh installed discovery and destination runtime behavior are not newly
verified by those checks. No product source change requires application tests;
earlier local Python/adapter evidence is reused and final exact-head CI runs the
existing package/browser/keyboard/shell/adapter/release-doc gates.

Real Supabase Auth, browser-to-server-action/database integration, production
behavior, complete responsive/native-zoom/WebKit/system-theme coverage and full
assistive-technology certification remain unverified. Memory SQL uses emulated
Auth, synthetic data and disposable targets; mocked component actions are not
actual database integration. Inherited tool access, known unblinded single
samples and partial/truncated/web-metadata evidence limit causal/reliability
claims. These limits are disclosed evaluation outcomes, not missing deliverables
under the original execution/grading/reporting request. Any later production,
release-readiness or statistical-reliability study is separate work.
