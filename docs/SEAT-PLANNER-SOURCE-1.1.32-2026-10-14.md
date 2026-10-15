# 1.1.32 unpublished source integration - 2026-10-14

The exact reviewed external candidate is integrated into **unpublished source
1.1.32** from PR #47 base `51a24ad7d8732e4a0dd5b765568d5da5e17b0759`. Published/installed **1.1.30** and frozen
prepared **1.1.31** remain unchanged. No merge, tag, release, upload, account
update, reinstall, deployment or production mutation.

## Exact delta and identity

Only two skill-content files change from prepared 1.1.31:

- `seat-planner-ui-ux/SKILL.md`: add supplied-resource/contract discovery before
  claiming evidence unavailable and the exact previously approved sentence:
  “Explicitly state the applicable current safeguards for any production action
  whose prior authorization remains valid.” Prior approval reuse, clarification,
  refusal/deferral and independent-work rules are retained.
- `seat-planner-ui-ux/references/seat-planner-contract.md`: replace superseded
  narrow-admin read-only guidance with current approved all-width editing and
  200% zoom policy, preserving viewer read-only/admin/database/draft/protection
  and confirmation boundaries. Current repository authority still wins.

Both files are copied byte-for-byte from the reviewed external bundle. No wording
is authored or revised during integration. All **168 source skill files** match
that bundle after excluding its evaluation-only root routing catalog. Both
complete companion trees, authored scenarios, evaluator, native transport, assets,
dependencies and gate definitions remain unchanged. No catalog enters the package.

| Identity | Value |
| --- | --- |
| Integration base | `51a24ad7d8732e4a0dd5b765568d5da5e17b0759` |
| Exact evaluated external bundle | `3568c439e1b695453afed63658bc5d4bb825f05e9ebaa1cc01ca42c52eadbd6c` |
| Entrypoint SHA-256 | `dcad13d85a5194ab8828026b30244a832cad1592308564e1f84d9446a1d920f3` |
| Bundled contract SHA-256 | `7e7fa4b0024ea354297c09d55c7dc3b0436aa703f9a2a212ab58ef1033e9d0c3` |
| Prepared 1.1.32 ZIP SHA-256 | `08f7eb0ae3f0e8ddeb1ef3cf8fc8a11fe900b11403a228dc9cb912fca89cc224` |
| Candidate preparation | [notes](../releases/1.1.32/NOTES.md), [manifest](../releases/1.1.32/files.json), [checksum](../releases/1.1.32/SHA256SUMS) |
| Preserved frozen 1.1.31 ZIP SHA-256 | `1dd3983bb9e2031a121eebd87d80db394897f5e50383c78dffa4729983c48ac8` |
| Published/installed 1.1.30 immutable commit | `cd2ad7c5af0fd7e77079e60b674a57d681d9c0d7` |
| Preserved published 1.1.30 ZIP SHA-256 | `b98c087822c5f840158b36bf344d8a731d6781405b4c9926b8f168bcaca80b36` |

Across **170 package files**, **166 remain byte-identical** to frozen 1.1.31.
The four changed files are the two skill files, `plugin.json` version and
prepended `RELEASE_NOTES.md`; all preceding release-note bytes remain intact.
Source integrity requires a selected frozen manifest. The existing
[candidate workflow](RELEASING.md) therefore advances source/validator CURRENT to
1.1.32 and creates four distinct preparation files. The verifier explicitly adds
1.1.31 to its retained historical list; no assertion is deleted or relaxed. Every
earlier archive/checksum/manifest/ZIP-path check remains active. README and the
maintenance selector identify 1.1.32; recovery, installation, marketplace and
published history remain byte-identical and pinned to 1.1.30.

## Reused behavioral evidence

**Zero new model calls.** Byte parity supports reuse, not a fresh model execution
of this versioned package. All samples used **paired-2026-10-14-A**,
**gpt-6.1-sol / medium**, authenticated Codex 0.162.1, Python 3.12.14 and Node 24.21.0.
These are the earlier recorded execution settings, not a new runtime invocation.

| Packet | Cases | Reused grade | Run key |
| --- | --- | --- | --- |
| [Case 202 correction](SEAT-PLANNER-CASE202-SAFEGUARDS-2026-10-14.md) | 202 | PASS, 6/0/0 | `c621e7e5af6dcc37c1c81c1c437ed88e9fa4d1fc7074f39ef4260e30be79a9de` |
| [Unchanged-candidate regressions](SEAT-PLANNER-CASE202-REGRESSIONS-2026-10-14.md) | 101-104, 201, 203-208 | 11 PASS, 64/0/0 | `6c178279ca39e9ac587183e8f2aa6c74d4f2e9b5846e44c7e67cb53766a75e5f` |

Total **12 PASS / 70 pass / 0 fail / 0 not tested**, across **two packets** and
single known samples with the same unblinded separate evidence reviewer. Reused
case 202 is not rerun. Every criterion ID/text, review/output identity and raw
output hash was reconciled in the preceding exact-delta review. All earlier
failures, incomplete/unrun records, recovered tool errors, case 201's separate
native clarification event and CRLF serialization caveats remain preserved.
No baseline is overwritten or regraded. The sentence addresses response reporting
of surviving-assignment safeguards; the old 202 failure was not an observed unsafe
production attempt. Original scenarios 1-10 are **NOT RUN on this exact candidate**;
the prior discovery candidate's **6 PASS / 4 INCOMPLETE (28/0/8)** is historical,
not transferred as a new pass. No fresh control/ablation, causality, repeatability,
holdout, general-reliability or generated-product readiness claim.

## Preservation and validation

All **27 earlier private directories / 24,111 files** and
**91 frozen release/preparation files** remain byte-identical. Earlier public
ledgers are unchanged; the evaluation guide only gains a dated appendix. The
installed account plugin, live product head/status and retained data, account and
runtime fingerprints, security policy and existing gates remain unchanged. Raw
transcripts, fixtures, tool code, account context, credentials and local paths
remain private/external. No dependency changes or service startup/shutdown.

- `python -B -Xutf8 scripts/verify.py`: PASS, 170 source files,
  all historical archives through frozen 1.1.31 plus distinct 1.1.32, 333 local
  links and synthetic checks; zero verifier model calls or installation changes.
- `python -B -Xutf8 -m unittest discover -s tests -p 'test_*.py' -v`:
  38 tests, 36 passed and two existing Windows symlink-capability skips.
- `SEAT_EVAL_PYTHON=<verified-python> node --test tests/seat-evaluation.test.cjs`:
  five tests PASS, zero skips; includes unchanged real evaluator Prepare/Report
  and tamper rejection. No model execution.
- `python -B -Xutf8 scripts/verify_release_docs.py --github`: PASS, prepared
  source 1.1.32 distinct from live published 1.1.30/tag commit.
- Explicit unchanged `compare_install` against frozen 1.1.30 manifest: PASS,
  171 installed files, no changed/missing/extra files; recognized host metadata
  reported separately. No candidate installation or fresh discovery.
- Fresh adapter staging: all 169 files, including the evaluation-only catalog,
  match bundle 3568 byte-for-byte; original converted suite is unchanged. Staging
  consumes no model calls. Local privacy/references/scope and complete
  preservation checks pass before commit. Whitespace results are qualified below. Exact integration-commit CI is reported
  on PR #47 after push and is separate from these local checks.


Default `git diff --check` flags the exact candidate's two CRLF endings at
skill entrypoint lines 20-21 (exit 2). They are retained under the repository's
`* -text` byte-preservation rule. The process-only command
`git -c core.whitespace=blank-at-eol,blank-at-eof,space-before-tab,cr-at-eol diff --check`
passes; normal space/tab/end-of-file checks remain enabled, and a separate byte
check finds no actual trailing spaces or tabs. Staged verification uses the same
CRLF recognition. No persistent Git configuration, policy, gate or evaluated byte
is changed. This records the default flags rather than calling them a clean pass.

A separate fresh-context read-only integration review found no actionable
Critical, Important or Minor defect. It independently reconciled source/staged
bundle identity, safe ZIP/manifest bytes, all preservation snapshots and the
12 reused reports/reviews/raw-output identities (70/0/0/0). It accepted the explicit
CRLF disclosure while retaining exact evaluated bytes. This is an integration
review, not another model execution, human review or product runtime certification.

Python/Node tests use process-scoped UTF-8 and explicit evaluator Python only;
no account or policy setting changes. Model-free browser gates are checked by
exact-head CI, not claimed as fresh local Bench/browser or assistive-technology
verification. Source/synthetic SQL with generic records, emulated Auth, omitted
office seed and discarded memory targets does not establish exact named actions,
real Auth, concurrent-session behavior, browser Publish button, accessibility,
native installed discovery, deployment or production. Fresh package/ZIP integrity
is not publication or destination verification. No release-ready claim.

Next: address the original-suite evidence gaps before a separate release decision;
publication, installation and production actions remain outside this task.
