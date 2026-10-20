# 1.1.35 release brief and documentation-transition plan

Draft for owner review, 20 October 2026. Repository-only preparation; this
document does not authorize a commit, push, PR, merge, tag, publication, account
change or installation.

**The exact target supports a narrowly described catalog-only release.** No
source, artifact-integrity or exact-target CI blocker was found. The measured
benefit is 472 fewer UTF-8 bytes in the design-ui entrypoint. Reduced model
context use, improved behavior and removal of truncation warnings remain
unverified.

Published and installed **1.1.34** remain unchanged. This task adds only this
document. Packaged skills, all existing release assets, earlier results,
external candidates, unrelated Bench work and production are preserved. The
loading experiment remains parked.

## Proposed immutable release identity

| Item | Value |
| --- | --- |
| Version / proposed tag | 1.1.35 / `v1.1.35`; tag absent at the 20 October check; recheck before publication |
| Exact release target | `5e967e95e3fccda5ad4d8e69d818d57eee2374d4`, merged [PR #62](https://github.com/pmeglaw/ibm-design-language-plugin/pull/62) |
| Reviewed PR head | `40e4278ec3321c44764e00a98eeb0f9fe62b35b9` |
| Shared Git tree | `8ed4725f5bc78640534de2e689cb6be50213d739`; reviewed head and merged target have identical trees |
| Payload | 171 files; exact source, manifest and ZIP parity |
| Assets to reuse unchanged | [plugin.zip](../releases/1.1.35/plugin.zip), [files.json](../releases/1.1.35/files.json), [SHA256SUMS](../releases/1.1.35/SHA256SUMS), [NOTES.md](../releases/1.1.35/NOTES.md) |
| Published / installed fallback | 1.1.34; tag `v1.1.34`, commit `9ba059d9664d8892673848162256c82a0ebe20f3` |
| Fallback ZIP SHA-256 | `731b32694c4ad7a7feebeb76cbd0078ace94ed628749db0ff6257ebf4fa0c191` |

| 1.1.35 asset | SHA-256 |
| --- | --- |
| `plugin.zip` | `b92e9b5cc3a39cf72371304d9455e3831848bb25982add17d12fe0c18dca4165` |
| `files.json` | `f1e9ed85ee95f6d6516fb0006ac4e84f596a96691a157a7b378daeb93c6249b8` |
| `SHA256SUMS` | `4d021e74bb32ef4f3df75878921962b10aa598c581b64f7594c6358d7d37fd79` |
| `NOTES.md` | `d144e547c4d8d28a76626942c1a5f5b25c70914d74a0d9edd8e31541de7dcb7f` |

This brief's eventual documentation commit is **not** the release target. Pin
publication to the full merged SHA above. A different target requires a new
diff, artifact and exact-target CI assessment.

Frozen NOTES.md and packaged RELEASE_NOTES.md retain their preparation wording,
including the earlier absence of an assigned target. Preserve those bytes.
The reviewed GitHub release body and later dated publication receipt establish
subsequent status; do not rebuild assets, normalize bytes or move tags.

## Proposed GitHub release text

The following is proposed copy for a future authorized publication. Recheck
mutable facts before use. It is not a publication or installation receipt.

### 1.1.35 - compact design-ui reference catalog

Group forty Reference routing rows into eleven routes while retaining all 51
destination occurrences, their topic associations, useful component-name lookup
cues and the reference-routing anchor.

| UTF-8 size | Before | After | Reduction |
| --- | ---: | ---: | ---: |
| Catalog, including heading and separator | 6,909 bytes | 6,437 bytes | 472 bytes (6.83%) |
| Complete design-ui entrypoint | 17,171 bytes | 16,699 bytes | 472 bytes (2.75%) |

Every instructional byte outside the catalog is unchanged, including
frontmatter descriptions, focused-question precedence, benchmarks, accessibility,
authorization, design-deliverable retention and evidence requirements. Both
companion skills, supporting references, runtime assets, dependency manifests,
fixture assertions, retries and gates are unchanged. The only other payload
differences from 1.1.34 are the version and a release-note prefix; previous
release-note bytes remain an exact suffix. The separate Seat Planner proposal
in PR #61 is excluded.

Release target: `5e967e95e3fccda5ad4d8e69d818d57eee2374d4`.
The 171-file source, frozen manifest and ZIP agree. ZIP SHA-256:
`b92e9b5cc3a39cf72371304d9455e3831848bb25982add17d12fe0c18dca4165`.

Nine validation jobs and three analysis jobs passed on that exact commit.
An independent reviewer rechecked the identical tree and reported no unresolved
actionable findings. Package integrity, model-free regressions and browser
fixtures establish their own bounded checks. This release establishes a static
byte reduction; model-context consumption, triggering, behavior and truncation
remediation remain unverified.

No new model experiment, historical regrading or generated-page repair ran.
Historical practical failures, partial Seat Planner evaluation, Auth/integration,
responsive/zoom, assistive-technology and discovery/desktop-refresh limits retain
their original scope. Historical configuration-provenance limitations are not
retroactively resolved by these newer receipts. The loading experiment remains
parked.

Frozen preparation notes remain unchanged. Downloaded 1.1.35 asset verification
and documentation reconciliation are pending until separately recorded. The
existing owner installation remains 1.1.34; publication does not update it.
Installed 1.1.35 parity, enabled state and fresh discovery remain unverified.

## Evidence supporting review

Exact-target CI was checked on 20 October 2026: all four workflows succeeded,
with nine validation jobs and three CodeQL analysis jobs passing on the full
target SHA.

| Workflow | Coverage | Evidence |
| --- | --- | --- |
| Verify plugin | Windows/Linux package and installation/contrast regressions; casebook, release and keyboard fixtures; production Next.js shell build/browser gate | [Run 39505519595](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39505519595) |
| Seat evaluation adapter | Windows/Linux packet/evaluator regressions; no model calls | [Run 39505519656](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39505519656) |
| Verify release documentation | Documentation regressions and live published 1.1.34/tag consistency | [Run 39505519634](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39505519634) |
| Push on main / CodeQL | Actions, JavaScript/TypeScript and Python analysis | [Run 39505519866](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39505519866) |

Preparation checks used a fresh external snapshot of the exact target, preserving
the existing verification outputs. Python 3.12.14, process-local UTF-8 and a
task-local temporary directory were used; no policy or dependency changed.

- Package verifier: PASS, 171 payload files, 335 local links, all 32 archives
  from 1.1.4 through 1.1.35 and 55 model-free evaluator tests.
- Repository Python suite: PASS, 38 run, 36 passed and two skipped.
- Release-document consistency: PASS offline and live, correctly distinguishing
  unpublished source 1.1.35 from published 1.1.34.
- Current artifact hashing and the preserved candidate evidence confirm the
  four asset identities, 51 destinations and unchanged outside-catalog bytes.

Browser fixtures were not rerun for this document. Their passing exact-target
CI above is reused. The earlier retained Windows candidate results separately
record 52 browser tests, production build, three structural validators and five
adapter tests; they are not fresh model or installed-plugin evidence. See the
[catalog candidate evidence](CATALOG-CONTEXT-REDUCTION-1.1.35.md) and sanitized
[PR #62 summary](https://github.com/pmeglaw/ibm-design-language-plugin/pull/62).

Earlier setup failures remain retained separately: temporary-directory cleanup
denials, a child-output decoding error and missing pinned browser binaries.
Later passes do not erase those attempts or the two current repository skips.
The independent package review initially identified a missing component-spacing
cue; it was restored, assets and evidence refreshed, checks rerun and the same
reviewer cleared the correction. That review covered the delivered package tree,
not this new release brief. No independent review of this document is claimed.

## Documentation transition after verified publication

Keep active publication guidance on 1.1.34 until 1.1.35 exists and its downloaded
assets pass verification. Apply the following only under separate authority for
the companion-documentation edits and their Git delivery. The no-reinstall
boundary overrides the standing synchronization default in
[release maintenance](RELEASING.md#authorization-and-documentation-scope).

| File | Transition after verified publication |
| --- | --- |
| README.md | Update the current published sentence/release link to 1.1.35. Replace the entire unpublished-source paragraph and package contents entry using the forms below. Preserve the concise structure, quick starts, skill descriptions, docs links and explicit installed 1.1.34 state. Link the actual new publication receipt only once it exists. |
| docs/RECOVERY.md | Update all six Release identity fields, tag-resolution example and Restore and verify manifest to 1.1.35, its exact target, checksum and release URL. Add 1.1.34 as a preserved rollback identity. Split the Uploaded account installations opening claim into published 1.1.35 and existing verified installation 1.1.34; retain the dated 1.1.34 receipt and all earlier history. |
| docs/INSTALLATION.md | Update the published-release selection label/link/tag example and fresh-install confirmation to 1.1.35. Reconcile downloaded-publication status with the actual receipt. Keep the existing account installation at verified 1.1.34 and its receipt; distinguish a fresh installation from an update to the existing account plugin. |
| docs/HISTORY.md | Update the current published sentence and Release validation link to 1.1.35. Add exactly one Version 1.1.35 paragraph with the full target SHA and actual statuses. Preserve the entire Version 1.1.34 paragraph, prior entries, original grades, failures and moved README narrative. |
| docs/RELEASING.md | Keep CURRENT at 1.1.35 and every gate unchanged. Retain generic candidate handling and the publication/installation boundary. Reconcile only an actual present-tense conflict. |
| New dated publication receipt | Use the actual execution date in docs/RELEASE-1.1.35-PUBLICATION-YYYY-MM-DD.md. Record resolved remote tag, all four downloaded-asset comparisons, ZIP-entry parity, exact-target CI and actual offline/live documentation results. |
| GitHub release description | After downloaded-asset and documentation checks complete, replace only their pending statements with the verified outcomes and link the dated publication receipt. Keep installed 1.1.34 and all evidence limits explicit; preserve the tag and frozen notes. |
| This brief and prior evidence | Preserve their preparation-time statements. Leave the catalog evidence, prior briefs/receipts, plugins/, releases/ and evidence/ unchanged; explain later status through current companion docs and the new publication receipt. |

This is a repository-only documentation transition. It requires no package
version increment, rebuilt archive, retagging, account change or installation.

### Proposed README fields

Use only after verified publication. These forms preserve the fields required by
[scripts/verify_release_docs.py](../scripts/verify_release_docs.py). The proposed
v1.1.35 release links below are future destinations, not present publication proof.

> The current published package is **1.1.35**. [Source](https://github.com/pmeglaw/ibm-design-language-plugin) · [Release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.35) · [Install](https://github.com/pmeglaw/ibm-design-language-plugin/blob/main/docs/INSTALLATION.md)

Replace the complete source-status paragraph with:

> The working package matches published **1.1.35**, released from commit `5e967e95e3fccda5ad4d8e69d818d57eee2374d4`. It reduces the design-ui reference catalog by 472 UTF-8 bytes while retaining routing coverage and all other instructions. Model-context consumption, behavior and truncation remediation remain unverified. Frozen preparation notes retain their original wording; dated publication receipts establish later status. The existing owner installation remains **1.1.34**, with its separately recorded file-parity and fresh native-discovery verification. Publication and installation are separate. Existing desktop-session refresh and automatic selection remain unverified.

Retain a link to the existing
[1.1.34 installation receipt](INSTALLATION-1.1.34-VERIFICATION-2026-10-19.md);
add the new publication receipt after its checks actually complete.

Replace the entire Repository contents package entry with:

> - `plugins/ibm-design-language/`: the published 1.1.35 package source with its three skills, references, assets and evaluator; the frozen release archive and manifest are in `releases/1.1.35/`.

### Proposed History paragraph

Use only after publication. Update pending statements solely when supported by
actual completed receipts; retain any failed, skipped or unverified states.

> Version 1.1.35 groups the design-ui Reference routing catalog while preserving all 51 destination occurrences, topic and component lookup cues, the anchor and all other instructional bytes. The [published release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.35) is from `5e967e95e3fccda5ad4d8e69d818d57eee2374d4`. Nine validation jobs and three analysis jobs passed on that exact commit. The 171-file source, manifest and ZIP agree. The entrypoint decreases from 17,171 to 16,699 UTF-8 bytes; model-context use, behavior and truncation remediation remain unverified. Historical limits, grades, failed attempts and frozen preparation notes are unchanged. Downloaded-asset verification and post-publication documentation reconciliation are pending until recorded separately. The existing owner installation remains 1.1.34; installation, enabled state and fresh discovery of 1.1.35 are unverified.

The new paragraph needs exactly one full release SHA and the current release URL.
Preserve the complete existing 1.1.34 paragraph; do not globally replace versions
or rewrite its later installation evidence.

## Execution sequence for a separately authorized task

1. Confirm explicit publication, companion-documentation and Git delivery
   authority. Approval of this draft alone grants none of those actions.
   Preserve installed 1.1.34 unless an update is separately authorized.
2. Recheck the full immutable target, required exact-target CI, source/manifest/
   ZIP parity, all four asset hashes, latest release and tag vacancy. Do not
   silently follow a later main or this brief's eventual commit.
3. If authorized, create `v1.1.35` at the full target above and publish a stable
   release with the four unchanged assets and reviewed body. Never move a tag.
   Inspect/recover an existing matching operation; stop on a conflicting identity.
4. Resolve the remote tag to the exact target. Download all four assets to a
   fresh external folder and compare them with the committed bytes. Verify the
   ZIP checksum, unique/safe paths and all 171 file hashes. Preserve failures.
5. Apply the authorized companion-documentation transition on a scoped branch.
   A release-triggered documentation check can fail during the interval when
   current guidance still names 1.1.34. Preserve and report that failure; deliver
   the correction under its own Git authority and require its exact-head CI.
6. On the final documentation tree run `python -B scripts/verify.py`,
   `python -B -m unittest discover -s tests -p test_release_docs.py`,
   `python -B scripts/verify_release_docs.py` and
   `python -B scripts/verify_release_docs.py --github`, plus reference, command,
   anchor and scoped whitespace checks. Use a fresh external verification copy
   to preserve previous outputs. The live checker must see the real release/tag;
   do not fabricate results or weaken a gate.
7. Verify installed-file preservation against its own matching 1.1.34 release,
   separately from the 1.1.35 package. Do not run a current-version comparator
   against 1.1.34 and misreport the expected version mismatch as drift. Do not
   update marketplace/account settings or invoke an installer in publication-only work.
8. Reconcile the GitHub release description with the actual downloaded-asset
   and documentation receipts; retain any unresolved states and installed 1.1.34.
   Report release target/tag, downloaded assets, documentation delivery/CI,
   installed version and unverified behavior as separate states. A later account
   update requires its supported flow, identity/sharing preservation, file parity,
   enabled state and bounded fresh discovery of all three skills.

Stop the affected action on drift, missing required CI, conflicting tag/asset
identity or preservation conflict. Do not normalize bytes, regenerate hashes to
hide drift, delete results, overwrite unrelated work, copy credentials or change
security policy. Retain 1.1.34 as the verified fallback; rollback is not automatic
authority.

The next step is independent review of this draft and its preparation evidence.
