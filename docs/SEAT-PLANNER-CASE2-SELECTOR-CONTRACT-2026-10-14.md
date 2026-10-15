# Case 2: explicit selector fixture contract - 2026-10-14

The selector mismatch is addressed in this fresh external sample: the unchanged
candidate uses the approved parent-qualified selector and successfully applies
the correction to both synthetic CSS mirrors. Before/after component-browser
checks reproduce and resolve the missing-rule wrapping failure. This is **not a
complete passing case**: the unchanged scorer records **INCOMPLETE,
3 pass / 0 fail / 1 not tested / 0 unreviewed** across
all four original criteria. The model does not invoke the separate SQL checks
required by the frozen grading plan. Parent preflight SQL is not model credit.

Only a fixture approval record changes semantically. **No skill correction is
made.** Unpublished source **1.1.32**, published/installed **1.1.30**, production/
retained data, all older results, frozen assets, evaluator, gates and security/
account settings remain unchanged. Only this sanitized ledger and a guide append
are committed/pushed to existing draft [PR #47](https://github.com/pmeglaw/ibm-design-language-plugin/pull/47).
No merge, tag, release, reinstall or deployment.

## Root cause and smallest clarification

The [preserved enhanced case 2](SEAT-PLANNER-SOURCE-1.1.32-ORIGINALS-2026-10-14.md)
submitted `.sp-control-reason` without its parent qualifier at native event 373.
The bounded tool rejected it; no patch succeeded, and the result remains
**INCOMPLETE, 1 pass / 0 fail / 3 not tested**. Its approval record described the
scoped correction without spelling out the literal selector enforced by the tool.

The new external approval JSON adds exactly one field:

```json
"approved_selector": ".sp-control-publish .sp-control-reason"
```

Removing that property recovers the prior parsed approval object exactly. All
existing text values remain unchanged. No declarations, patch, expected test
results, grader outcomes or retry instructions are added. The field remains
discoverable through the same bounded document reader; it is not injected into
an additional prompt. The validator, tool schema/descriptions, browser profiles,
original case JSON (prompt/context/four assertions) and full three-skill bundle
remain unchanged. The document-map hash and server's allowlist-hash constant
necessarily change; fresh paths, staging provenance, run key and the docs-only
evaluated commit are separately recorded.

Independent test-design review approved this narrow experiment before execution.
A separate disposable preflight copy reproduces the old broader-selector
rejection using the same declarations, current hashes, pending text and two
paths. Both files remain unchanged after rejection. Adding only the parent
qualifier accepts the counterpart; the preflight then passes wrapping, mocked
draft save, zero-change/review checks and seven memory SQL assertions. Outside
scope and stale hashes remain rejected. The model starts from a different,
unpatched 304-file copy. None of this parent-only evidence is scored as model
implementation or verification.

This isolates the deterministic validator mismatch. One later model sample under
an explicitly clarified fixture does not establish model causality, repeatability,
general skill efficacy or a need to change/release the skill.

## Exact identities and controls

| Item | Value |
| --- | --- |
| Exact evaluated plugin/evaluator/adapter commit | `aebda23f2e129c7e388df8580942643dd19111bc` |
| Candidate | 1.1.32 unpublished, unchanged 169-file bundle `3568c439e1b695453afed63658bc5d4bb825f05e9ebaa1cc01ca42c52eadbd6c` |
| Seat Planner entrypoint SHA-256 | `dcad13d85a5194ab8828026b30244a832cad1592308564e1f84d9446a1d920f3` |
| Bundled contract SHA-256 | `7e7fa4b0024ea354297c09d55c7dc3b0436aa703f9a2a212ab58ef1033e9d0c3` |
| Prepared 1.1.32 ZIP SHA-256 | `08f7eb0ae3f0e8ddeb1ef3cf8fc8a11fe900b11403a228dc9cb912fca89cc224` |
| Preserved prior enhanced run key | `587fce551db5e8368c90212fa1333d5439e58b1d1b48686dc9a6ba153ce45611` |
| Fresh run key | `bd6f4afb9f26ffe9ddf58c63c5a91e2695a1adecbb3ce524d25cedb987aa5d61` |
| Model / reasoning / tier | gpt-6.1-sol / medium / default |
| Recorded controls | paired-2026-10-14-A; ephemeral, 600-second ceiling |
| Native effective settings | readOnly, networkAccess:false, on-request, approvalsReviewer:user; explicit medium |
| Native transport | Codex App Server stdio; unchanged Python Prepare/Run/Score/Report |
| Verified runtime | Python3.12.14, Node24.21.0, authenticated Codex0.162.1 |
| Component source provenance | `5fbbd0d9bfa91b1226b8da0c2fc6eed09e76bd17`; same304-file sanitized snapshot |
| Supplied installed evidence | Carbon React1.118.0, IBM Products2.100.0, React/DOM19.3.0; unchanged manifests |
| Browser | Chromium153.0.8010.12 headless1243, chromiumSandbox:true; Playwright1.64 expects1248 |

The adapter stages a fresh full bundle from the evaluated checkout; all 169 file hashes match the prior candidate, including the evaluation-only catalog and
both full companion trees. The source-only skill trees remain 168 files. The new
commit differs from the earlier evaluated commit only in the preceding two-doc
results change; byte identities, not that observation alone, establish reuse.
The exact same case JSON, capability/grading contracts, launcher, native transport
and profile-driver bytes are checked against the prior packet. Tool logic equals
the previous server after accounting only for the allowlist-hash substitution.

Native preflight confirms the unchanged effective host policy. No permission,
trust, firewall, browser-security, account or credential changes are made.
Inherited host tools remain exposed; native networkAccess:false does not imply
complete host isolation. Browser/client build compatibility remains a limitation;
no runtime is installed or upgraded. Any native refusal remains preserved.

One private bookkeeping start fails with `KeyError: statuses` before evaluator,
native transport or model launch. The required map is added only to the mutable
task-status record; no frozen inputs or raw model outputs change. That prelaunch
failure stays recorded separately. There is **one actual model invocation**,
exiting 0 with a native terminal response, not a rerun-until-pass sequence.

## Actual model evidence and unchanged grading

The model reads the explicit approval record, submits the parent-qualified rule,
and changes only the two external fixture stylesheets. Native patch event
306 has matched independent server receipt; the declaration body uses
the same semantic spacing calculation and normal wrapping as the preserved
attempt. Both CSS hashes change from
`c8ec91719bcbf8af359d0f8973d3a514d92763d003826972e86d9ff6af80ddaf` to
`406ae190aad53dc89995a9d2b36ef70150bedf256ae348f883218c8ca77c8796`.
Mirror bytes match, and all other 302 manifest files remain unchanged.

| Native event | Executed profile | Observed checks |
| --- | --- | --- |
| 227 | publish-wrapping | approved desktop bound, current below992 container override and no reason clipping: FAIL; Publish opens review without invoking publication: PASS |
| 311 | publish-wrapping | approved desktop bound, current below992 container override and no reason clipping: PASS; Publish opens review without invoking publication: PASS |
| 319 | zero-change | zero-change Publish mounted and disabled: PASS; zero-change reason visible: PASS |
| 321 | draft-save | real inspector saves through draft update action only: PASS |

Wrapping measurements cover White/Gray100 at1920,1056,768,390,320. The baseline
nowrap/clipping failure remains in raw evidence; corrected measurements retain
the240px desktop bound, below992px container override and unclipped normal
wrapping. Opening review makes no publication call. Zero-change Publish remains
mounted/disabled with its reason. Draft save calls only mocked updateSeatAction
with the existing timestamp expectation. These are actual model-invoked component
checks, not a proposal or parent-preflight substitution.

The frozen four-criterion interpretation remains unchanged. In particular, the
fixed seven-check SQL operation was available but **not invoked by this model**.
It is not credited from a previous sample or parent preflight, and the existing
requirements are not weakened to obtain a pass. An executed expected-negative
baseline browser failure is distinct from the later corrected component checks
and the overall incomplete criterion verdict.

| Original criterion | Grade | Independently checked concrete evidence |
| --- | --- | --- |
| Select and read seat-planner-ui-ux when applicable; use required same-snapshot companions for the task. | PASS | Lines68,70/77 and71 contain complete same-snapshot seat-planner-ui-ux (39lines), design-ui (97lines), and review-product-experience (25lines) entrypoints;79+169 cover the full172-line bundled contract. Commentary155 selects Seat Planner and design-ui for this narrow repair and explains why a broader product audit is unnecessary. Current AGENTS is fully read at162/175/177; IBM-SKILLS165/181, approved amendment167, brand guidance166/240, practical review189/416, taste190, accessibility191 and release gates420 support relevant task intake. Independently compared every returned text/line and full-file hash for15 document reads and26 component reads; exact read multisets match raw server-audit.jsonl document_read/component_read records belonging to model PID17804. Complete selected entrypoint intake is established; bounded source/reference coverage limitations are recorded separately. Line3 identifies the selected Seat Planner/design-ui guidance and scoped implementation; it does not claim an installed plugin was substituted for the supplied candidate. |
| Limit implementation to the approved correction. | PASS | Approved correction is read in full at81, including the qualified selector. Completed apply_fixture_patch306 contains model-authored exact old/new text for BOTH permitted mirrors, current before hash c8ec91719bcbf8af359d0f8973d3a514d92763d003826972e86d9ff6af80ddaf, and only .sp-control-publish .sp-control-reason { max-inline-size: calc(var(--sp-space-13) + var(--sp-space-11)); white-space: normal; }. Receipt f5f53c81-b487-4e69-84e0-c6aad0db56fc matches own-process raw server-audit line58 exactly, after hash406ae190aad53dc89995a9d2b36ef70150bedf256ae348f883218c8ca77c8796 for each file. Verification205 before patch and313 after patch (own server lines44 and60, receipts d51341db-5291-4398-b02c-eb9a1311e146 and5cb664de-843f-40b7-9e60-666f3b11a4cb) identify only app/styles/sp-components.css and docs/redesign-v2/phase3/components/sp-components.css changed, with mirrors equal and302 immutable files preserved. Reviewer independently hashed all304 manifest sources and compared actual bytes/diff to prior unchanged fixture: only the pending-comment replacement in both mirrors changed; no other source, brand, geometry, copy or backend edit. The sole native command58 was a failed read of staged guidance following approval request56; stderr records unsupported approval response. No successful native command, bypass, install, publication, product or production write is present. Explicit scoped MCP patch306 succeeded; the failed native read did not refuse this patch operation. |
| Preserve draft-only saving, review-before-publish, zero-change behavior, and mirrored styles where affected. | PASS | Before-patch publish-wrapping227 visibly fails the wrapping check: nowrap and scrollWidth221 versus clientWidth175/140 at390/320 in both themes. Actual post-patch profile311 (receipt05bfd6fb-605f-429b-8cc3-f73b728f27da, own server59) records normal wrapping,240px at1920/1056 and the preserved below992 none override at768/390/320, with scrollWidth<=clientWidth in all10 theme-width observations. Both profiles open review with no publication action_calls. Source219/221 and actual CSS diff preserve current labels, callback wiring and existing container override. Zero-change319 receipt ed7ee291-851b-4eda-bbd7-90d8b3ccc4c0 matches own server61: Publish remains mounted/disabled and No changes to publish visible, action_calls empty. Draft-save321 receipt21647e7b-acef-465b-85c4-c6d17c19e8af matches own server62: real inspector saves through mocked action:updateSeatAction only, with Synthetic fixture note and verbatim expectedUpdatedAt2026-01-01T00:00:00.000000Z; no publish action. Actual screenshot shows Saved to draft. These are component-boundary preservation observations, not SQL or real Auth/database proof. Reviewer verified all four saved profile JSONs against native receipt.result, all12 screenshot file hashes and10 native inline image hashes. Independently viewed before/after White320, post-patch review-open, zero-change and draft-saved images: corrected complete two-line helper no longer overlaps Names, review precedes publication, disabled reason and draft feedback are visible. Verification313 plus independent304-file hash check establishes paired CSS equality and unchanged behavior sources. Lines12-19 scope behavior passes to the synthetic fixture and accurately describe review opening, mocked draft action, zero-change state and mirror/source preservation. Lines23-24 explicitly leave real Auth/database and production unverified. |
| Run applicable verification; do not merge or deploy. | NOT_TESTED | All843 native records and all48 completed MCP calls were inspected:15 read_document,26 read_component_file,2 verify_component_fixture,4 run_browser_profile and1 apply_fixture_patch. There is NO verify_target or run_probe call, and no corresponding own-PID17804 tool_result receipt in raw server audit. The pre-output frozen case2 interpretation requires applicable component/build/hash PLUS fixed ordered verify_target-before-run_probe seven SQL checks; those SQL checks were not performed by this candidate. Parent case0 preflight SQL is excluded from model evidence. Actual component verification is substantial but partial for this criterion:227 baseline failure preserved;311 post-change wrapping/review,319 zero-change and321 mocked draft-save pass;205/313 hash checks preserve302 immutable sources. Unchanged server implementation builds the component fixture before each browser profile and returns a capability receipt only after successful build/profile completion. Receipt payloads and profile/image hashes were independently corroborated. No failed MCP call exists; native guidance-read58 is failed/refused and was recovered through bounded readers, not evidence of npm/full application verification. Lines23-24 honestly mark real Auth/database, production, screen reader, full keyboard, zoom and npm suite unverified. No model SQL success is claimed; however the required local fixed SQL evidence remains absent. Line3 says no merge/deployment, corroborated by the complete native trace. Missing applicable verification is NOT_TESTED, not an execution failure or an invented all-tool-errors failure. |

The separate unblinded reviewer checks full response/commentary, native settings,
bounded-read contents/hashes/truncation, patch arguments/diff, before/after browser
receipts/images and each process's own audit. Parent checks the response and
review before the unchanged evaluator scores it. There is no raw-output repair,
criterion deletion or extra model attempt. Native terminal ID/text correlate;
26 CRLF conversions are serialization differences, not raw byte identity.

Audit totals: 843 native events;
{"apply_fixture_patch": 1, "read_component_file": 26, "read_document": 15, "run_browser_profile": 4, "verify_component_fixture": 2} successful scoped calls;
0 failed MCP calls and 1 failed native commands.
Component/patch/browser receipt payloads and screenshot hashes match the separate
server/process evidence. Raw logs, responses, screenshots, fixture code and local
paths remain private; only reviewed factual summaries and integrity identities
are published here.

| Immutable artifact | SHA-256 |
| --- | --- |
| Case JSON | `7996e1ec63aa4601c090c8038d5fa1c35cc9a092c5d48d34f44b2ff1bd904dbc` |
| Response bytes | `907c8f807714425c323e51cdd79a0ef9a9e9d49be5ade330ea4c2403cda077f8` |
| Native events | `d67b9856a641e01b9dea1ca83059c2c6d9728850d35d55e5a9fde0ad9c433c1c` |
| Independent review | `94c65ccbda17339d7215ef5ebb0e223d4cd6f686c87c31ae90e8a29232e0b4f1` |
| Score | `3e783f77288e617a0a85fcdfa85f5db1a8a641a40e68f987f2ee1d9f2f514a00` |
| Approval record | `e0a8661625fd7715ad0c282bb8964a6f0fdc60571160676e0da83ac2a5b8fa3a` |
| Input manifest | `770f3ce2ef1ba55e3ad15c7c0774c5cb53e2aeab2b67f28788d1907507674fe4` |

## Preservation, checks and limitations

All **30 earlier private directories / 28,271 files** are
byte-preserved, including the original/enhanced cohorts and every older failure,
incomplete, unrun and passing result. All **95 frozen release/preparation files**,
170-file source 1.1.32 package, full three-skill trees, installed/published 1.1.30,
product head/status and account/runtime/policy state remain unchanged. Actual
fixture edits stay external and are limited to the two approved CSS mirrors.

The original suite remains **3 PASS / 7 INCOMPLETE,24/0/12** across36 criteria;
the prior enhanced cohort remains **3 PASS / 1 INCOMPLETE,12/0/3** across15.
Those scores are not overwritten, regraded or backfilled. Other cases are NOT RUN
in this fresh single-case packet. This is a fixture-contract-clarified continuation,
not an unchanged-input comparison or a new all-pass original suite.

Fresh scoped/native preflights, published 1.1.30 release/tag reconciliation versus
prepared 1.1.32, and explicit frozen installed 1.1.30 parity pass. Installed171 files
include170 release files plus one recognized host overlay file; no changed,
missing or extra release files. No downloaded-archive or fresh native-installed
discovery claim. Fresh `python -B -Xutf8 scripts/verify.py` passes: 170 source files, 333 local
links, frozen archives and synthetic checks; zero verifier model calls or install
changes. Privacy/reference/scope/default-whitespace and full preservation checks
pass before commit. Exact-results-commit CI is reported on PR #47 after push. Existing Python/adapter tests are not
claimed as fresh local reruns; the unchanged gates run in exact-head CI. No full
product app gate/build/authenticated tests run for these repository-only docs.

Real components use original framework/server/Auth doubles and invented records
on a public synthetic raster. Mocked draft saving and review interaction do not
establish actual server-action/database/Auth integration. No real Auth, production,
retained data, full keyboard, screen-reader, system-theme, WebKit, native zoom or
deployed-product verification. The actual product already contains the approved
wrapping rule; no product correction or production rollout is authorized or made.

Single known-case sample, same unblinded reviewer, changed fixture clarification,
provider/host variation, no immutable provider revision/full host image and no
fresh ablation limit inference. The selector mismatch is resolved in this sample;
the case remains incomplete under its frozen verification requirements. This is
not skill, release or general product readiness.

Next: complete the outstanding model-side verification in a separately recorded
continuation while preserving this implementation sample and all original grades.
