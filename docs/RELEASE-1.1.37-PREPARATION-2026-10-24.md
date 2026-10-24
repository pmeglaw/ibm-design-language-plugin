# 1.1.37 local release preparation

## Candidate identity and authority

- Source branch: `codex/ui-design-coverage-1.1.36`.
- Base commit: `42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`.
- Candidate version: `1.1.37`, unpublished; the preparation snapshot below
  predates the approved Git handoff.
- Package: 177 files; [archive](../releases/1.1.37/plugin.zip),
  [manifest](../releases/1.1.37/files.json),
  [checksum](../releases/1.1.37/SHA256SUMS),
  [candidate notes](../releases/1.1.37/NOTES.md).
- ZIP SHA-256: `e5c57f25c688262c9846c2ea5334ee7733e408049dff1309b896089f77d825e7`.
- Published recovery target: 1.1.36, tag `v1.1.36`, commit
  `42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`; verified read-only through GitHub.

The owner authorized local version/release preparation after the reference
review. This adds a new candidate directory; all pre-existing release files,
evidence, evaluator assertions and historical scores remain protected. No
commit, push, PR, tag, publication, installation or marketplace update is part
of this preparation.

## Changes

The [reference review](UI-DESIGN-COVERAGE-2026-10-24.md) records the six playbooks,
source coverage, hybrid/brand decisions and corrected accessibility routing.
For this candidate, the root plugin version is incremented, a release-note
prefix is added while preserving all earlier note bytes, and the verifier's
current version advances while explicitly retaining 1.1.36 in its archive list.
Active companion guidance distinguishes published 1.1.36 from candidate 1.1.37.

The three skill identities/frontmatter blocks, sibling SKILL.md files, runtime
assets, dependency manifests, fixture assertions and evaluator code are unchanged.
No new model evaluation, historical regrading, migration, product behavior,
theme/AT certification or narrow/RTL remediation is claimed.

## Local verification

Final checks ran on Windows with Node 24.22.1 and Python 3.14.7. Results apply to
the uncommitted working tree and the archive identified above, not a future
commit. Package integrity, documentation consistency and fixtures establish
different bounded checks.

| Check | Final result |
|---|---|
| `python -B scripts/verify.py` | **PASS:** 177 source/manifest/ZIP files, all 34 release archives including the 33 preserved predecessors, 397 local file links and 55 synthetic evaluator tests; zero model calls or installation changes |
| `python -B scripts/verify_release_docs.py --github` | **PASS:** published 1.1.36/tag/commit identity and unpublished 1.1.37 source documented consistently; this does not verify downloaded assets or installation |
| Python unit discovery with task-local temporary directory | **PASS:** 38 tests, 36 passed and two existing host-symlink skips, 2.757s |
| Preservation and source-reference checks | **PASS:** exactly 25 intended changed/new files; 446 other tracked files byte-identical to HEAD; authority, historical audit/evaluation records, older published-history suffix and prior release-note bytes preserved |
| Frontmatter, local links, anchors and JSON | **PASS:** all three original YAML frontmatter blocks preserved and parsed; 466 local Markdown links including anchors, 30 anchors in changed guidance, all package JSON/source-map local references valid |
| `node --test tests/casebook/renderer.test.cjs` | **PASS:** 25 tests, 4.933s; existing source/renderer fixture, not generated-product validation |
| `npm test` in `tests/release-fixture` | **PASS:** four tests, 4.8s; corrected 29/29 checks and negative controls under the unchanged fixture |
| `npm test` in `tests/behavior-fixture` | **PASS:** three tests, 8.2s; corrected 13/13 and negative controls under the unchanged fixture |
| Prepared Next.js fixture `npm run build` | **PASS:** pinned production fixture build |
| Prepared Next.js fixture `npm test` | **PASS:** 20 tests, 20.8s; bounded shell/navigation/automated-accessibility regression coverage |
| `git diff --check` | **PASS:** no new whitespace diagnostics |
| Independent release-bookkeeping review | **PASS:** no material findings; archive layout, checksum/manifest/source parity, verifier progression, preservation and truthful active documentation inspected read-only |

Pinned fixture dependencies were installed with `npm ci --ignore-scripts`.
Playwright 1.63.0 uses its existing matching Chromium revision 1243. Sandbox
LOCALAPPDATA redirection initially hid that cache; selecting it explicitly
allowed the casebook to complete. The first three fixture runs under the
sandbox did not finish: the shell logged 20 successful assertions but its runner
did not exit, and the other two returned no completed verdict. Those runs were
interrupted and are not passes. Retries outside the sandbox all completed
successfully with unchanged dependencies, source and assertions. Task-owned
browser debug logs and original attempt logs are retained under ignored
`.verification/`; no diagnostics were added to the package.

The fixed gates include their existing narrow and RTL scenarios; running them
does not constitute new remediation or expanded product-design coverage. No
new manual screenshot review, assistive-technology testing, model evaluation or
historical regrading was performed. No local pass substitutes for required CI
on a future reviewed release commit.

## Remaining delivery gates

At the end of local preparation, a candidate commit did not yet exist.
Windows/Linux package CI and the required fixture jobs on the eventual
reviewed commit remain separate gates. Publication,
downloaded-candidate verification and destination installation are pending
separate authorization and execution. Do not replace published recovery or
installation targets with this candidate before publication is verified.

## Git handoff authorization, 2026-10-24

After reviewing this candidate, the owner explicitly approved committing the
changes, pushing the task branch and opening a PR. The approval does not include
merging, tagging, publication, installation or marketplace changes. The reviewed
package bytes and candidate checksum remain unchanged. Before opening the PR,
reconcile the task branch with the later companion-documentation commits on
`main`, preserving their 1.1.36 publication and installation receipts. Report the
exact pushed commit and CI status in the PR and final handoff; the local results
above remain scoped to their original preparation tree.
