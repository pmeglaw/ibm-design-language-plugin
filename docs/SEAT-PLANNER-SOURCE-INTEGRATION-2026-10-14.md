# 1.1.31 unpublished source integration - 2026-10-14

The reviewed Seat Planner production-authorization paragraph is now integrated
into working source **1.1.31, an unpublished candidate**. Published and installed
**1.1.30** remain unchanged. No merge, tag, release, account update, reinstall,
deployment, production access or data mutation is performed.

## Exact source change

Integration starts from PR #47 commit
`df7158cd5d7955a053d00f31c1c917b4470dc6ed`. The only skill-content change copies
`seat-planner-ui-ux/SKILL.md` byte-for-byte from evaluated external candidate
`8d683dec86e6683e474b8814606afce1c8fa65892773798afb059caf5cc2e7bb`.
Its skill-file SHA-256 remains
`4a2601aa06c4a349e0819e32058bd53ecd5c06e41180d4fc9a630f360986b1bc`.

The paragraph requires the named production action's consequences and specific
owner authorization/current safeguards even when refusing or deferring; reuses
valid prior approval; clarifies ambiguous assent; preserves target, enforcement,
review and concurrency checks; and continues independent authorized work. No
additional wording is authored during integration.

All 168 files in the three source skill trees equal the evaluated bundle after
excluding its evaluation-only root routing catalog. That catalog is not added to
the package. Across the 170 package files, **167 remain byte-identical** to 1.1.30.
Only the skill file, version in `plugin.json`, and prepended `RELEASE_NOTES.md`
preparation record change. The previous release-note bytes remain intact.

The existing integrity gate requires source to match the selected manifest.
Following the documented [unpublished-candidate workflow](RELEASING.md), source
and validator CURRENT advance to 1.1.31 with a distinct preparation archive and
manifest. The verifier explicitly retains 1.1.30 in its historical list; every
older checksum, archive-byte, manifest and ZIP-path assertion remains intact.
README distinguishes unpublished source from published recovery. Installation,
recovery and published-history guidance remain byte-identical and pinned to
1.1.30. No verifier exemption or relaxed assertion is introduced.

| Artifact | Identity |
| --- | --- |
| Unpublished source candidate | 1.1.31 |
| Prepared candidate ZIP | `1dd3983bb9e2031a121eebd87d80db394897f5e50383c78dffa4729983c48ac8` |
| Candidate preparation files | [1.1.31 notes](../releases/1.1.31/NOTES.md), [manifest](../releases/1.1.31/files.json), [checksum](../releases/1.1.31/SHA256SUMS) |
| Published and installed release | 1.1.30 |
| Published immutable commit | `cd2ad7c5af0fd7e77079e60b674a57d681d9c0d7` |
| Preserved published ZIP | `b98c087822c5f840158b36bf344d8a731d6781405b4c9926b8f168bcaca80b36` |

Preparation files establish source integrity, not publication, installation,
fresh discovery or a release-ready verdict. No remote 1.1.31 tag or release is
created. The existing account plugin and marketplace configuration are untouched.

## Reused behavioral evidence

No new model invocation occurs during source integration. Exact skill-tree byte
parity supports reusing these earlier targeted results under
**paired-2026-10-14-A, gpt-6.1-sol / medium**:

| Prior run | Cases | Result | Run key |
| --- | --- | --- | --- |
| [Safeguards correction](SEAT-PLANNER-CASE206-SAFEGUARDS-2026-10-14.md) | 206 | 6/6 | `4ee56df6c57ce31f1a3e69dca41b6319917dc8706c216ac1099b9b8fa3fb0abd` |
| [Authorization and clarification regressions](SEAT-PLANNER-SAFEGUARDS-REGRESSIONS-2026-10-14.md) | 101-104, 201 | 30/30 | `6e7e77efc2eefd1e8322010e2fa6f07bfca543d9cd28cb365c835472d592e075` |
| [Remaining independent cases](SEAT-PLANNER-SAFEGUARDS-REMAINING-2026-10-14.md) | 202-205, 207-208 | 34/34 | `921fe50309904182c011543a7dcba7a795ac3d34db2931b5fa271522ef0153b5` |

These total 46/46 independent criteria plus 24/24 authorization criteria across
separate runs. They are reused evidence, not new runs of the versioned package.
All historical failures, incomplete attempts, recovered tool errors and earlier
unrun results remain distinct. A fresh separate review of the exact paragraph
found no actionable wording defect before source integration.

## Preservation and validation

All **19 prior private result directories / 18,253 files**,
all older frozen release files, the external candidate, live product head/status,
installed plugin, account/runtime fingerprints and security policy are preserved.
Raw transcripts, account information, private paths and fixtures remain outside
the public repository. The original evaluator, fixture assertions, dependencies,
runtime assets, native transport and installed skill trees are unchanged.

Fresh local verification:

- `python -B -Xutf8 scripts/verify.py`: PASS for all 170 source files, every
  historical release through 1.1.30, the distinct 1.1.31 candidate, 333 links and
  synthetic evaluator checks; zero model calls or installation changes.
- `python -B -Xutf8 -m unittest discover -s tests -p 'test_*.py' -v` with
  process-scoped `PYTHONUTF8=1`: 38 tests, 36 passed and two existing Windows
  symlink-capability skips. No policy/privilege change or assertion bypass.
- `SEAT_EVAL_PYTHON=<verified-python> node --test tests/seat-evaluation.test.cjs`
  with process-scoped UTF-8: all five tests PASS, including real evaluator
  preparation/reporting of ten not_run packets; zero model execution.
- `python -B -Xutf8 scripts/verify_release_docs.py --github`: PASS, unpublished
  source 1.1.31 distinguished from live published 1.1.30/tag commit.
- Unchanged `compare_install` against the explicit frozen 1.1.30 manifest:
  PASS, 171 installed files, no changed/missing/extra files; recognized host
  upload metadata reported separately. Candidate installation is not performed.

The first Python run exited zero but emitted a child-process UTF-8 decoding
exception; it is preserved and is not treated as clean evidence. Its child
process inherited the Windows encoding default while the parent used UTF-8.
The process-scoped UTF-8 rerun above had no reader-thread exception. The first
adapter run skipped its optional Python integration; the subsequent explicit
interpreter run above executes all five tests. Source and account/policy settings
are unchanged by these invocation-only environment values.

A separate read-only integration review confirms exact skill-tree parity,
three scoped package changes, archive/manifest consistency and preserved gates;
it found no actionable integration defect. Final scope/privacy/references and
staged whitespace are checked before commit. Exact integration-commit CI status
and links are reported on PR #47 after push; they are distinct from these local
checks. Model-free browser gates are established by that exact-head CI, not
claimed as fresh local product or assistive-technology checks.

Original cases 1-10 are not rerun on this exact candidate. Known-regression samples
are single-run and unblinded; production-incapable synthetic tools do not prove
real Auth, browser/button behavior, rendered accessibility, native installed
routing, causal improvement or general reliability. Publication and destination
verification remain separate, unauthorized steps. No release or reinstall.

Next: validate the remaining original-suite coverage before considering any
separately authorized release decision.
