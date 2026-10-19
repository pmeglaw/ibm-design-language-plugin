# 1.1.34 release brief and documentation-transition plan

Draft for owner review, 19 October 2026. Preparation only; this document does not
authorize Git delivery, publication, account changes or installation.

**The package and exact-target CI support a narrowly described wording release.**
No source, package-integrity or exact-target CI blocker was found at readiness
assessment. Behavioral effectiveness, loading/context cost and actual RTL
remediation remain unverified. The historical configuration-provenance limitation
below must accompany the release claims.

The current published package and existing owner installation remain **1.1.33**.
This task adds one repository-only document. Active installation/recovery guidance,
packaged files, frozen assets, earlier evidence, Bench work and production remain
unchanged. No commit, push, merge, tag, release or reinstall is authorized here.

## Proposed release identity

| Item | Value |
| --- | --- |
| Version / proposed tag | 1.1.34 / `v1.1.34`; tag and release absent at the 19 October readiness check; recheck before publication |
| Exact immutable target | `9ba059d9664d8892673848162256c82a0ebe20f3`, merged [PR #57](https://github.com/pmeglaw/ibm-design-language-plugin/pull/57) |
| Reviewed PR head | `9431666d4f9b94c368550dcef5a89ae40cb981aa` |
| Shared Git tree | `73e85c59c3ee62924651be43480d9ed7aa99499b`; reviewed head and merged target have identical trees |
| Payload | 171 files; exact source, manifest and ZIP parity |
| Assets to reuse unchanged | [plugin.zip](../releases/1.1.34/plugin.zip), [files.json](../releases/1.1.34/files.json), [SHA256SUMS](../releases/1.1.34/SHA256SUMS), [NOTES.md](../releases/1.1.34/NOTES.md) |
| Published / installed fallback | 1.1.33; immutable tag `v1.1.33`, commit `16a5e4a5845bc736aed9c116ded93f25bf1a1b3d` |
| Fallback ZIP SHA-256 | `5efb158d85b7be0c96f3e7cc6ab6267254ef3c9db0986cd2a6e5a88473837e87` |

| 1.1.34 asset | SHA-256 |
| --- | --- |
| `plugin.zip` | `731b32694c4ad7a7feebeb76cbd0078ace94ed628749db0ff6257ebf4fa0c191` |
| `files.json` | `680b9e394845cf29445628e7d043e1cbd7964449e116c9a5911c7b29b9a44228` |
| `SHA256SUMS` | `e34fba1d0ff18409a422d481822c959943f545b0237a6d942bd0f5c7cfc77959` |
| `NOTES.md` | `087bac9b268fa8230a7151d439b49d961e14bbedf099a87446f6f067cc5e3a71` |

This brief's eventual documentation commit is **not** the proposed release target.
Keep the release pinned to the full merged SHA above. If a different target is
wanted, reassess its diff, artifact identity and exact-target CI first. Do not
rebuild these assets, normalize bytes or move a published tag.

The frozen preparation notes correctly describe their earlier stage, including
the absence of a committed target then. Keep those bytes unchanged; a new release
body and companion delivery records establish subsequent status.

## Proposed GitHub release text

The text below is a proposal for a future release from the exact target. It is
not a present publication receipt. Refresh mutable CI and delivery status before
using it; replace a pending check only when its actual receipt exists.

### 1.1.34 — focused guidance and contextual examples

Three wording clarifications in `design-ui`:

- Put Focused guidance first and give it precedence over composition
  benchmark/gate reading for focused questions, while retaining applicable
  component and accessibility contracts.
- Describe dashboard priority placement in the page's intended reading order
  and writing direction rather than a fixed physical corner.
- Make create-flow validation task-dependent, and require accessible unmet
  requirements when Next is disabled. Retain field errors and affected-step
  marking.

Release target: `9ba059d9664d8892673848162256c82a0ebe20f3`.
The 171-file source, frozen manifest and ZIP agree. ZIP SHA-256:
`731b32694c4ad7a7feebeb76cbd0078ace94ed628749db0ff6257ebf4fa0c191`.

All nine validation jobs and three analysis jobs passed on that exact commit,
on first attempts. These package, regression and fixture gates do not establish
model-generated product quality or assistive-technology performance. No new
model evaluation is claimed for this release preparation.

Behavioral effectiveness, automatic selection, installed-plugin-scope loading,
context cost and actual RTL remediation remain unverified. Historical practical
failures, partial Seat Planner evaluation, real Auth/integration, responsive/zoom
and assistive-technology gaps retain their original scope and scores. Parked
loading, RTL and native-launcher experiments remain parked.

A Minor/P3 historical configuration-provenance limitation remains disclosed:
original local preparation receipts support their recorded outcomes but do not
fully reconstruct environment overrides, executable patch versions, the exact
launched browser or execution context. Later receipts and exact-target CI are
separate evidence; they do not retroactively complete that provenance.

Descriptions, links, companion skill guidance, runtime assets, dependencies,
fixture assertions/retries, earlier releases and evaluation records are unchanged.
The only payload differences from 1.1.33 are the two guidance files, version and
release-note prefix. Previous release notes remain an exact byte suffix.

Downloaded 1.1.34 asset verification and post-publication documentation
reconciliation are pending until separately completed and recorded. The existing
owner installation remains 1.1.33; publication does not update it. Destination
parity, enabled state and fresh discovery of 1.1.34 are separate unverified checks.
Preserve pending, failed, skipped and unrun states alongside any later passes.

## Evidence supporting review

Exact-target CI was checked on 19 October 2026: **12/12 successful checks in four
successful workflows**, all attempt 1, on the full target SHA.

| Workflow | Coverage | Evidence |
| --- | --- | --- |
| Verify plugin | Windows/Linux package, installation/contrast regressions, casebook, release and keyboard fixtures, production shell build and browser gate | [Run 39287987330](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39287987330) |
| Seat evaluation adapter | Windows/Linux packet/evaluator regressions; no model calls | [Run 39287987457](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39287987457) |
| Verify release documentation | Documentation regressions and live published-release/tag consistency | [Run 39287987982](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39287987982) |
| Code analysis | Actions, JavaScript/TypeScript and Python | [Run 39287987986](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39287987986) |

The earlier queue/incident snapshots remain historical. These completed
exact-main runs supersede their pending status for current readiness; no
GitHub-wide incident-resolution claim is made.

Readiness hashing verified all 31 retained release archives, 1.1.4–1.1.34, with
checksum, safe/unique ZIP paths, no ZIP symlinks and full manifest parity. The
complete 443-file source map matches the reviewed candidate, and all existing
release/evidence files remain unchanged. Installed 1.1.33 matches its own
171-file release manifest plus the exact recognized upload wrapper: 172 files,
no missing, extra or changed files. This is file parity, not a fresh enabled-state,
discovery or desktop-refresh test.

Retained local evidence is **reused**, not rerun by this document:

- Package/evaluator synthetic regressions: 55 pass. Three structural validators
  pass. Release fixture 4, keyboard fixture 3, production shell 20 and casebook
  25 pass; production build passes.
- Repository Python: 38 discovered, 36 pass and two host symlink skips. The later
  delivery verification separately records the same outcome plus package and
  offline documentation passes.
- Initial preparation Python attempt failed with 69 reported errors and a
  separately retained decoding problem. Initial release-browser attempt had
  four prelaunch failures for a missing matching browser. Later passing attempts
  remain separate; none of those failures or skips is erased.
- The independent candidate review found zero Critical, zero Important and one
  Minor/P3 provenance finding, qualified above. Its scope supported the
  commit/PR stage; it did not approve this new release brief or certify efficacy.

The sanitized [PR #57 summary](https://github.com/pmeglaw/ibm-design-language-plugin/pull/57)
records the candidate's scope and configuration limit. Raw transcripts, private
local paths, credentials and account configuration remain outside this public
repository. Original historical evidence is not rewritten or backfilled.
No independent review of this new document is claimed.

## Documentation transition after verified publication

Keep current guidance on published 1.1.33 until 1.1.34 actually exists. Only after
separately authorized publication and downloaded-asset checks should an authorized
companion-documentation change apply this plan. Keep installed 1.1.33 explicitly
separate; the current no-reinstall boundary overrides the standing synchronization
default in [release maintenance](RELEASING.md#authorization-and-documentation-scope).

| File | Proposed transition |
| --- | --- |
| `README.md` | Change the introduction's current published version and release URL to 1.1.34. Replace the entire unpublished-source paragraph with the published-source identity below; do not leave contradictory candidate wording. Replace the complete package contents entry. Retain the existing concise structure, quick starts, skill table and docs links. |
| `docs/RECOVERY.md` | Update all six Release identity fields to 1.1.34, its tag, exact target, checksum, manifest and release URL. Update the tag-resolution example and Restore and verify manifest. Add 1.1.33 as a preserved rollback identity. Split the Uploaded account installations opening claim: published 1.1.34, existing installation 1.1.33, and no 1.1.34 installation/discovery claim. Preserve the dated 1.1.33 receipt and older history. |
| `docs/INSTALLATION.md` | Update the published-release selection label, URL, tag example and fresh-install confirmation to 1.1.34. Reconcile the publication-status paragraph with actual asset verification. Retain the existing owner's separately verified 1.1.33 state and receipt, and distinguish existing-account updates from fresh marketplace installation. |
| `docs/HISTORY.md` | Change the current published-version sentence and current release link under Release validation to 1.1.34. Add exactly one new Version 1.1.34 paragraph with the full release SHA and actual delivery statuses. Preserve the complete Version 1.1.33 paragraph, all earlier entries and the moved README narrative. |
| `docs/RELEASING.md` | Keep CURRENT at 1.1.34 and every gate unchanged. Retain generic candidate handling and the explicit publication/installation boundary; reconcile only an actual present-tense conflict if one exists. |
| New dated publication receipt | Use the actual execution date, for example `docs/RELEASE-1.1.34-PUBLICATION-YYYY-MM-DD.md`. Record remote tag resolution, all four downloaded-asset hashes/comparisons, ZIP-entry parity, exact-target CI and actual offline/live documentation results. Add links only once the receipt exists. |

Preserve `plugins/`, `releases/`, `evidence/`, prior briefs/receipts, all original
grades and failed attempts. This transition is repository-only documentation;
it requires no new package version, regenerated assets, retagging or installation.

### Proposed README fields

Use only after verified publication. The current-version sentence and source
identity must retain the forms required by `scripts/verify_release_docs.py`:

> The current published package is **1.1.34**. [Source](https://github.com/pmeglaw/ibm-design-language-plugin) · [Release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.34) · [Install](https://github.com/pmeglaw/ibm-design-language-plugin/blob/main/docs/INSTALLATION.md)

> The working package matches published **1.1.34**, released from commit `9ba059d9664d8892673848162256c82a0ebe20f3`. It clarifies focused-question reading precedence, writing-direction-aware dashboard placement and task-dependent validation. Behavioral effectiveness, loading/context cost and actual RTL remediation remain unverified; the historical configuration-provenance limit remains disclosed. Frozen preparation notes retain their original wording. The existing owner installation remains **1.1.33**; publication and installation are separate.

Under Repository contents, replace the complete package entry with:

> - `plugins/ibm-design-language/`: the published 1.1.34 package source with its three skills, references, assets and evaluator; the frozen release archive and manifest are in `releases/1.1.34/`.

Retain Source/Install destinations and the rest of the restructured README.
Reference the actual new publication receipt once available; do not create
premature success claims or move older history again.

### Proposed History paragraph

Use the following only after publication; replace only completed pending checks
with their actual outcomes and receipt links. Preserve other pending or failed states.

> Version 1.1.34 clarifies focused guidance precedence, writing-direction-aware dashboard placement and task-dependent create-flow validation. The [published release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.34) is from `9ba059d9664d8892673848162256c82a0ebe20f3`. Nine validation jobs and three analysis jobs passed on that exact commit, on first attempts. The 171-file source, manifest and ZIP agree. Behavioral effectiveness, loading/context cost and actual RTL remediation remain unverified. The historical configuration-provenance limit remains disclosed; original grades, failures and frozen preparation notes are unchanged. Downloaded-asset verification and post-publication documentation validation are pending until recorded separately. The existing owner installation remains 1.1.33; installation, enabled state and fresh discovery of 1.1.34 are unverified.

The current paragraph needs exactly one full release SHA and the current release
URL. Preserve the entire existing 1.1.33 paragraph; never globally replace version
strings in historical records.

## Execution sequence for a separately authorized task

1. Confirm explicit authority for publication, companion-documentation edits and
   any Git delivery. Approval of this draft alone authorizes none of them. Preserve
   installed 1.1.33 unless installation is separately authorized.
2. Recheck the exact target, required exact-target CI, source/manifest/ZIP parity,
   all four asset hashes, current release and tag vacancy. Do not silently follow
   a later main or this brief's eventual commit. Stop on unexpected drift.
3. If authorized, create `v1.1.34` at the exact target and publish a stable release
   with the four unchanged assets and reviewed text. Never move a tag. If an
   identical operation already exists, inspect/recover it rather than replace it;
   a conflicting identity is a stop condition.
4. Resolve the remote tag to the full target. Download all four assets into a
   fresh external folder, compare each with committed bytes, then verify the ZIP
   checksum, all entry hashes and path safety. Retain failed attempts separately.
5. Apply the authorized companion-documentation transition on a scoped branch.
   The release-triggered docs job may fail while current guidance still says
   1.1.33; preserve and report that transition-window failure. Do not report
   reconciliation before the correction is delivered under its own Git authority
   and its exact-head CI passes.
6. Run `python -B scripts/verify.py`,
   `python -B -m unittest discover -s tests -p test_release_docs.py`,
   `python -B scripts/verify_release_docs.py` and
   `python -B scripts/verify_release_docs.py --github` on the final documentation
   tree, plus changed-link/command and scoped whitespace checks. Keep outputs in
   fresh external locations to preserve prior results. The live check must see
   the real published release/tag; do not fabricate a pass or weaken the checker.
7. If reporting installed-file preservation, compare installed 1.1.33 with its
   own matching release manifest using the supported read-only comparator. Do not
   run the current 1.1.34 CLI comparison against 1.1.33 and mislabel the expected
   version mismatch as drift. No account/marketplace change, install or production
   action belongs to publication-only work.
8. Report release target/tag, downloaded bytes, documentation commit/CI, installed
   version and remaining unverified behavior separately. Publishing 1.1.34 does
   not activate its wording in installed 1.1.33.

A later authorized installation update must preserve existing identity, sharing
and unrelated configuration, use the supported flow for that account installation,
avoid a duplicate marketplace install, and verify release-file parity, enabled
state and bounded fresh discovery for all three skills. Preserve the existing
readiness deadline, failure reporting and security-policy boundaries.

## Stop conditions and review request

Stop the affected action on hash/source drift, missing required exact-target
passes, a conflicting tag, an unsupported account/installer route or a preservation
conflict. Complete independent authorized work and report partial outcomes.
Do not normalize frozen bytes, regenerate hashes to hide drift, move tags, delete
results, overwrite unrelated work, copy credentials or change security policy.
Keep 1.1.33 as the verified fallback; rollback/removal is not automatic authority.

Review should confirm the narrow guidance claims, the disclosed efficacy and
configuration limits, immutable target and assets, precise documentation
transition and separate publication/installation boundaries. The next step is
independent review of this draft and its preparation-verification evidence.
