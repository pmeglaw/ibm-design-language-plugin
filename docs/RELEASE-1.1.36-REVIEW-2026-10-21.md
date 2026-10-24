# 1.1.36 release brief and documentation-transition plan

Draft for owner review, 21 October 2026. Repository-only preparation at
`42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`. This draft does not authorize a
commit, push, PR, merge, tag, publication, account change or installation.

The exact target supports a narrowly described three-reference release. No
package-integrity or exact-target CI blocker was found. The raw candidate diff
whitespace check remains FAIL with 19 preserved CRLF-at-EOL diagnostics; that
result and all evidence limitations must remain explicit in publication review.
Separate publication authority and acceptance of the disclosed limits are pending.

Published and installed **1.1.35** remain unchanged. This task adds only this
document. Packaged skills, frozen assets, all earlier results, external
candidates, unrelated Bench work and production are preserved. The loading
experiment remains parked. Independent review of this new brief is not claimed.

## Proposed immutable release identity

| Item | Value |
| --- | --- |
| Version / proposed tag | 1.1.36 / `v1.1.36`; remote tag and release absent at the 21 October check; recheck before publication |
| Exact release target | `42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`, merged [PR #66](https://github.com/pmeglaw/ibm-design-language-plugin/pull/66) |
| Reviewed PR head | `3ec1faa4d7dc0e7e941c04cd21396cae3592ed4f` |
| Shared Git tree | `5562774c6eca6405f4ec7659905b527670f91560`; reviewed head and merged target have identical trees |
| Payload | 171 files; exact source, manifest and ZIP parity |
| Assets to reuse unchanged | [plugin.zip](../releases/1.1.36/plugin.zip), [files.json](../releases/1.1.36/files.json), [SHA256SUMS](../releases/1.1.36/SHA256SUMS), [NOTES.md](../releases/1.1.36/NOTES.md) |
| Published / installed fallback | 1.1.35; tag `v1.1.35`, commit `5e967e95e3fccda5ad4d8e69d818d57eee2374d4` |
| Fallback ZIP SHA-256 | `b92e9b5cc3a39cf72371304d9455e3831848bb25982add17d12fe0c18dca4165` |

| 1.1.36 asset | SHA-256 |
| --- | --- |
| `plugin.zip` | `b281eb4ec28c42fcc46d5b21de4516ed6b0c37640d6f7eb0c01d7772bf716cee` |
| `files.json` | `d58f0a574eca56cb8cd7862ea1948425139d716881729321e7960a32e9e5045a` |
| `SHA256SUMS` | `ebc5d2b190bf5e53d647317becfdd81e38f48ecb1c792edfa9225fd95bfd7f74` |
| `NOTES.md` | `30af896d1137e51432bbe67dc38da4d6fa0acdd90ed8aeac5bb1681c4b1f5956` |

This brief's eventual documentation commit is not the release target. Pin
publication to the full merged SHA above. A different target requires a new
diff, artifact and exact-target CI assessment.

Frozen NOTES.md and packaged RELEASE_NOTES.md retain their unpublished
preparation wording, including the earlier absence of an assigned release
target. The candidate report also retains its preparation-time uncommitted,
review-not-run and CI-not-run statements. Later review and CI are recorded in
PR #66 and this dated brief. Explain later status through the release body and
publication receipt; do not rebuild assets, rewrite earlier records or move tags.

## Proposed GitHub release text

The following is proposed copy for a future authorized publication. Recheck
mutable facts before use. It is not a publication or installation receipt.

### 1.1.36 - IBM Products/v12 reference refresh

Refresh three supporting design-ui references from the official IBM Products
2.101.0 release and pinned migration-documentation snapshot:
`carbon-next.md`, `composition.md` and `source-map.json`.

Distinguish the existing composable PageHeader preview in IBM Products from
planned stable Carbon-core delivery at v12. Qualify legacy/composable APIs,
SidePanel, TagSet and card migration routes. Roadmap documentation does not
establish released target exports, available codemods or authorization to
migrate a consuming application. Verify the actual destination package and
API before making such changes.

All three SKILL.md entrypoints, executable assets, dependency manifests,
evaluation criteria and existing gates are unchanged. The 67 earlier
source-map entries and global coverage metadata remain intact. Only the three
references, version and release-note prefix differ in the 171-file payload
from 1.1.35; earlier release-note bytes remain an exact suffix. Reference growth
is 3,321 UTF-8 bytes, with zero entrypoint growth. These are static measurements,
not model-context or behavioral evidence.

Release target: `42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`.
The 171-file source, manifest and ZIP agree. ZIP SHA-256:
`b281eb4ec28c42fcc46d5b21de4516ed6b0c37640d6f7eb0c01d7772bf716cee`.

Nine validation jobs and three analysis jobs passed on that exact commit.
Independent review of the identical versioned package tree and its bookkeeping
found no unresolved actionable findings. Package integrity and browser fixtures
establish their own bounded checks; migration compatibility, released v12
APIs/codemods, improved model behavior and generated-product quality remain
unverified. The local Python suite had 36 passes and two host-symlink skips.

The raw full candidate-diff whitespace check remains FAIL: 19 CRLF-at-EOL
diagnostics in byte-preserved r2 source-map additions. Other changed tracked
paths and logical trailing spaces/tabs checks passed. Those narrower passes do
not change the full-diff failure. Frozen bytes and the result are preserved.

No new model experiment, historical regrading, application migration, generated-
page repair or assistive-technology testing ran. Historical practical failures,
partial Seat Planner coverage, Auth/integration, responsive/zoom and discovery/
desktop-refresh limits retain their original scope. Historical configuration-
provenance and model-visible delivery limitations remain unresolved. The loading
experiment remains parked.

Frozen preparation notes remain unchanged. Downloaded 1.1.36 asset verification
and post-publication documentation reconciliation are pending until separately
recorded. The existing owner installation remains verified 1.1.35; publication
does not update it. Installed 1.1.36 parity, enabled state and fresh discovery
remain unverified. Existing desktop-session refresh and automatic selection
remain unverified.

## Evidence supporting review

On 21 October 2026, all four workflows and all 12 reported checks succeeded on
the full target SHA: nine validation jobs and three CodeQL analysis jobs.

| Workflow | Coverage | Evidence |
| --- | --- | --- |
| Verify plugin | Windows/Linux package verification; casebook, release and keyboard fixtures; production Next.js shell build/browser gate | [Run 39669194359](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39669194359) |
| Seat evaluation adapter | Windows/Linux model-free packet/evaluator regressions | [Run 39669194298](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39669194298) |
| Verify release documentation | Documentation regressions and live published 1.1.35/tag consistency | [Run 39669194424](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39669194424) |
| Push on main / CodeQL | Actions, JavaScript/TypeScript and Python analysis | [Run 39669195455](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39669195455) |

The 21 October readiness assessment used a fresh external export of the exact
target. Package verification passed for 171 payload files, 337 local links,
all 33 archives from 1.1.4 through 1.1.36, and 55 model-free synthetic tests.
The repository Python suite ran 38 tests: 36 passed and two symlink checks were
skipped because host symlink creation was unavailable. Offline and live release
documentation checks passed, distinguishing source 1.1.36 from published 1.1.35.
All four candidate asset hashes, unchanged entrypoints and the earlier
release-note suffix were checked. A read-only comparison of installed 1.1.35
against its own release manifest passed for all 171 release files plus the
recognized host metadata wrapper, 172 files total. This did not update or
retest installed-plugin discovery.

Draft verification uses a separate fresh documentation worktree, Python 3.12.14,
process-local UTF-8 and task-local temporary output. Run the package verifier,
repository Python suite, offline/live documentation check, local-reference and
anchor checks, and a whitespace check restricted to this newly added document.
Retain their results separately from the existing readiness and candidate
receipts. No dependency, policy, account setting or gate changes are needed.

The initial supplemental tracked-byte comparison stopped before repository
tests because Windows Git's per-file show command hit a path-length error.
That failed attempt is retained. The corrected comparison reads the same exact
commit through Git archive and still compares every tracked file byte-for-byte;
it does not change repository assertions, Git configuration or security policy.

Browser fixtures are not rerun for this document; the passing exact-target CI
above is reused. Earlier retained local candidate checks separately record
three structural validators, five adapter tests, release fixture 4, keyboard
fixture 3, casebook 25, and a production build plus 20 shell browser tests.
Those are not fresh model, installed-plugin, application migration or assistive-
technology evidence. See the unchanged [candidate preparation evidence](PRODUCTS-V12-REFERENCES-1.1.36.md)
and sanitized [PR #66 summary](https://github.com/pmeglaw/ibm-design-language-plugin/pull/66).

Initial DNS/IPC failures, incomplete sandbox attempts, loader failures and the
initial adapter integration skip remain retained separately. Later passes do
not erase them, historical grades, the two host skips or the 19 raw whitespace
diagnostics. The independent package review covered the delivered source tree,
not this new release brief. Independent review of this draft remains pending.

## Documentation transition after verified publication

Keep active publication guidance on 1.1.35 until 1.1.36 exists and all four
downloaded assets pass verification. Apply the following only under separate
authority for companion-documentation edits and their Git delivery. The
no-reinstall boundary overrides the synchronization default in
[release maintenance](RELEASING.md#authorization-and-documentation-scope).

| File | Transition after verified publication |
| --- | --- |
| README.md | Update the current published sentence and release link to 1.1.36. Replace the entire unpublished-source paragraph and package contents entry using the forms below. Preserve the concise structure, quick starts, skill descriptions and docs links. Keep installed 1.1.35 and its existing receipt explicit. Add the actual new publication receipt only after it exists. |
| docs/RECOVERY.md | Update all six Release identity fields, tag-resolution example and Restore and verify manifest to 1.1.36, the full target, checksum and release URL above. Add 1.1.35 as a preserved rollback identity, retaining earlier rollback entries. Split the Uploaded account installations opening claim into published 1.1.36 and existing verified installation 1.1.35; preserve its dated receipt and all earlier history. |
| docs/INSTALLATION.md | Update the published-release selection label/link/tag example and fresh-install Confirm version field to 1.1.36. Reconcile publication/download status with the actual new receipt. Keep the existing account installation at verified 1.1.35 with its receipt; preserve the distinction between a fresh installation and a supported update of the existing account plugin. |
| docs/HISTORY.md | Update the current published sentence and Release validation link to 1.1.36. Replace the entire Unpublished reference candidate section with a dated pointer to the preserved preparation evidence, removing its present-tense unpublished claim. Add one Version 1.1.36 paragraph with the full target and actual status. Preserve the entire Version 1.1.35 paragraph, prior entries, original grades and failures. |
| docs/RELEASING.md | Keep CURRENT at 1.1.36 and every gate unchanged. Retain generic candidate handling and publication/installation boundaries. Reconcile only an actual present-tense conflict. |
| New dated publication receipt | Use the actual execution date in docs/RELEASE-1.1.36-PUBLICATION-YYYY-MM-DD.md. Record resolved remote tag, all four downloaded-asset comparisons, ZIP-entry parity, exact-target CI and actual offline/live documentation results. Preserve any failed attempt as a distinct result. |
| GitHub release description | After download and documentation checks complete, replace only their pending statements with verified outcomes and the actual receipt link. Retain installed 1.1.35, the raw whitespace failure and all evidence limits. Preserve the tag and frozen notes. |
| This brief and prior evidence | Preserve preparation-time statements in this brief, the candidate report and earlier receipts. Leave plugins/, releases/, evidence/ and external candidates unchanged; establish later status through current companion docs and the publication receipt. |

This is a repository-only documentation transition. It requires no package
version increment, rebuilt archive, retagging, account change or installation.

### Proposed README fields

Use only after verified publication. These forms retain the fields required by
[scripts/verify_release_docs.py](../scripts/verify_release_docs.py). The proposed
v1.1.36 links below are future destinations, not current publication proof.

> The current published package is **1.1.36**. [Source](https://github.com/pmeglaw/ibm-design-language-plugin) · [Release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.36) · [Install](https://github.com/pmeglaw/ibm-design-language-plugin/blob/main/docs/INSTALLATION.md)

Replace the complete source-status paragraph with:

> The working package matches published **1.1.36**, released from commit `42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`. It refreshes three supporting IBM Products/v12 references while preserving all SKILL.md entrypoints. Roadmap guidance does not establish released target APIs/codemods, migration compatibility or improved model behavior. Frozen preparation notes retain their original wording; dated publication receipts establish later status. The raw candidate-diff whitespace check retains 19 CRLF-at-EOL diagnostics in preserved source-map additions; other changed paths passed. The existing owner installation remains verified **1.1.35**, with its separately recorded file-parity and fresh native-discovery evidence. Publication and installation are separate. Existing desktop-session refresh and automatic selection remain unverified; the loading experiment stays parked.

Retain the existing [1.1.35 installation receipt](INSTALLATION-1.1.35-VERIFICATION-2026-10-20.md)
and unchanged [1.1.35 publication receipt](RELEASE-1.1.35-PUBLICATION-2026-10-20.md)
as historical evidence. Add the new dated publication receipt only after its
checks complete. Keep the 1.1.35 catalog reduction in historical release evidence.

Replace the entire Repository contents package entry with:

> - `plugins/ibm-design-language/`: the published 1.1.36 package source with its three skills, references, assets and evaluator; the frozen release archive and manifest are in `releases/1.1.36/`.

### Proposed History paragraph

Use only after publication. Replace pending statements only with actual
completed receipt outcomes; preserve failed, skipped and unverified states.

> Version 1.1.36 refreshes three supporting IBM Products 2.101.0/v12 references, including the distinction between the existing Products composable PageHeader preview and planned stable Carbon-core delivery. The [published release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.36) is from `42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`. Nine validation jobs and three analysis jobs passed on that exact commit. The 171-file source, manifest and ZIP agree; all three SKILL.md entrypoints and prior release-note bytes are unchanged. The raw full candidate-diff whitespace check remains FAIL with 19 preserved CRLF-at-EOL diagnostics; narrower checks do not supersede it. Migration compatibility, target API/codemod availability and behavioral improvement remain unverified. Historical limits, grades, failed attempts, host skips and frozen preparation notes are preserved. Downloaded-asset verification and post-publication documentation reconciliation remain pending until recorded separately. The existing owner installation remains verified 1.1.35; installed 1.1.36 parity, enabled state and fresh discovery are unverified. The loading experiment remains parked.

The new paragraph needs one full release SHA and the current release URL.
Preserve the complete existing 1.1.35 paragraph; do not globally replace versions
or rewrite its later installation evidence.

## Execution sequence for a separately authorized task

1. Confirm publication, companion-documentation and Git delivery authority,
   including acceptance of the disclosed limits and preserved raw whitespace
   failure. Approval of this draft alone grants none of those actions. Preserve
   installed 1.1.35 unless its update is separately authorized.
2. Recheck the full target, required exact-target CI, source/manifest/ZIP parity,
   all four asset hashes, latest release and tag vacancy. Do not silently follow
   later main or this brief's eventual commit.
3. If authorized, create `v1.1.36` at the exact target and publish a stable release
   with the four unchanged assets and reviewed body. Never move a tag. Inspect
   and recover an existing matching operation; stop on a conflicting identity.
4. Resolve the remote tag to the exact target. Download all four assets to a
   fresh external directory and compare with the committed bytes. Verify ZIP
   checksum, unique/safe paths and all 171 file hashes. Preserve failures.
5. Apply the authorized companion-documentation transition on a scoped branch.
   The publication-triggered documentation check can fail while default-branch
   guidance still names 1.1.35. Preserve/report that result, deliver the correction
   under its own Git authority and require its exact-head CI. Do not bypass the
   check or claim the release target's CI covers later documentation changes.
6. On the final documentation tree, run `python -B scripts/verify.py`,
   `python -B -m unittest discover -s tests -p test_release_docs.py`,
   `python -B scripts/verify_release_docs.py` and
   `python -B scripts/verify_release_docs.py --github`, plus reference, command,
   anchor and scoped whitespace checks. Use fresh external output to preserve
   prior results. The live checker must see the real release/tag.
7. Verify installed-file preservation against the matching 1.1.35 manifest,
   separately from source 1.1.36. Do not treat the expected version difference
   as drift. Do not update marketplace/account settings or invoke an installer
   during publication-only work.
8. Reconcile the GitHub release description with the actual download and
   documentation receipts. Report release target/tag, asset verification,
   documentation delivery/CI, installed version and unverified behavior as
   separate states. A later installation update requires the supported flow,
   identity/sharing preservation, file parity, enabled state and bounded fresh
   discovery of all three skills.

Stop the affected action on drift, missing required CI, conflicting tag/asset
identity or preservation conflict. Do not normalize frozen bytes, regenerate
hashes to hide drift, delete results, overwrite unrelated work, copy credentials
or change security policy. Retain 1.1.35 as the verified fallback; rollback is
not automatic authority.

The next step is independent review of this draft and its preparation evidence.
