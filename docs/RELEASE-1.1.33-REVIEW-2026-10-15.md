# 1.1.33 release brief and documentation-transition plan

Draft for owner review, 15 October 2026. Preparation only; no publication or
installation authority is conferred by this document.

The package and exact-target CI are ready for a narrowly described guidance
release. Version 1.1.33 makes the design deliverable explicit so that discovering
a repairable bug does not silently replace the requested critique or redesign.
The evidence does not demonstrate a behavioral advantage over 1.1.32.

The current published package and existing owner installation remain **1.1.32**.
This draft adds one companion document. It changes no packaged skill, asset,
existing result, active publication guidance, production data or installed file.
Do not commit, push, merge, tag, release or reinstall under this preparation task.

## Proposed release identity

| Item | Value |
| --- | --- |
| Version / proposed tag | 1.1.33 / `v1.1.33`; absent at readiness assessment, recheck before publication |
| Immutable target | `16a5e4a5845bc736aed9c116ded93f25bf1a1b3d`, merged [PR 52](https://github.com/pmeglaw/ibm-design-language-plugin/pull/52) |
| Reviewed PR head | `42266a170f60f95bfc2cc690ef1c135e92f06d22` |
| Shared Git tree | `c410d4db4b4699f626a555fe429133751b0cbdd0`; reviewed head and merge are byte-identical trees |
| Package | [plugin.zip](../releases/1.1.33/plugin.zip), 171 files |
| ZIP SHA-256 | `5efb158d85b7be0c96f3e7cc6ab6267254ef3c9db0986cd2a6e5a88473837e87` |
| Assets to reuse unchanged | `plugin.zip`, [files.json](../releases/1.1.33/files.json), [SHA256SUMS](../releases/1.1.33/SHA256SUMS), [NOTES.md](../releases/1.1.33/NOTES.md) |
| Published / installed fallback | 1.1.32, `v1.1.32`, commit `08839a956be8f0f3829986a0c414e3f496545b4f` |
| Preserved 1.1.32 ZIP SHA-256 | `08f7eb0ae3f0e8ddeb1ef3cf8fc8a11fe900b11403a228dc9cb912fca89cc224` |

The four asset hashes recorded at readiness are:

| Asset | SHA-256 |
| --- | --- |
| `files.json` | `566585b73d28d57363ecd1b314d1b63d1e7acb1bcc723c40ffeb7f6402f20d74` |
| `SHA256SUMS` | `c59b04884bce5ab4246367d826f95f849da332398e2366753f5da360255c92fa` |
| `NOTES.md` | `9cf7dac6d117fed213db671f4226c3e361eb5919699edb1753c96a34257fda7e` |

Do not rebuild the archive or rewrite frozen preparation wording. This brief's
eventual documentation commit is not the proposed release target. If a later
target is desired, reassess its diff, package identity and exact-target CI.

## Proposed GitHub release text

The following is proposed wording for a future verified release. Its publication
claim becomes true only after the tag and stable release are created and checked.
Keep pending checks pending until their actual receipts exist.

### 1.1.33 — retain the requested design deliverable

Version 1.1.33 makes design-task focus explicit in the IBM review workflow:

- Retain the requested surfaces, current-versus-recommended composition and
  rationale, plus a visual proposal when requested.
- Record bugs separately and explain whether a proposed design retains, adapts
  or supersedes their fixes. A quick repair, urgency or green tests does not
  replace the design deliverable.
- Require the owner's scoped choice for a repair-only pivot, reuse valid prior
  authorization, and honor explicit repair-only tasks and justified recommendations
  to retain the current design without forcing an unrequested redesign.

Release commit: `16a5e4a5845bc736aed9c116ded93f25bf1a1b3d`.
The 171-file package matches its frozen manifest. ZIP SHA-256:
`5efb158d85b7be0c96f3e7cc6ab6267254ef3c9db0986cd2a6e5a88473837e87`.

All nine package, fixture, shell, adapter and documentation CI jobs passed on this
exact commit, alongside three analysis jobs, on their first attempts. These checks
establish package and fixture properties, not generated-product or accessibility
quality. No model evaluation was rerun during packaging or publication.

Previously recorded response-only cohorts remain separate:

- Baseline 1.1.32: five samples, 20/20 criteria.
- Candidate under the same pressure prompt: five samples, 20/20 criteria.
- Initial candidate controls: 9/9 criteria in one shared fresh context.
- Later actual three-turn pivot control: one sample, 5/5 criteria.
- Later actual three-turn prior-approval control: one sample, 4/4 criteria.

Both arms passed; there was no reproduced baseline failure or demonstrated causal
advantage. Samples were known and non-blind. Collaboration inherited the parent
model/reasoning without overrides; the exact model identifier was not exposed.
The earlier complete responses were not available for independent regrading;
the six later transition responses were independently graded. Full tool-event
histories and ancillary-reference intake were not audited, and no runnable product
established repair effectiveness, rendered design, execution safety or broad
reliability. See the [dated evaluation ledger](https://github.com/pmeglaw/ibm-design-language-plugin/blob/16a5e4a5845bc736aed9c116ded93f25bf1a1b3d/docs/DESIGN-FOCUS-EVALUATION-2026-10-15.md).

Historical 320px/RTL practical failures, incomplete original Seat Planner criteria,
real Auth/integration and assistive-technology coverage gaps, and desktop
discovery/refresh limits remain unchanged. Later cohorts do not backfill old
scores. Dependencies, runtime assets, original assertions, previous releases and
production data are unchanged.

Frozen package notes and the preparation ledger describe their original stage.
Later delivery records establish subsequent merge, CI and publication status.
Downloaded release-asset verification and post-publication documentation validation
are pending. The existing owner installation remains 1.1.32; this publication
does not install 1.1.33. Its destination parity, enabled state and fresh discovery
are unverified. Record actual outcomes and receipt links separately as authorized
checks complete; preserve all earlier failed, incomplete and unrun results.

## Evidence supporting review

Exact-target workflows, all successful on attempt 1:

| Workflow | Jobs | Evidence |
| --- | --- | --- |
| Verify plugin | Windows/Linux package, casebook, release fixture, keyboard fixture, Next.js shell | [Run 38853291196](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38853291196) |
| Seat evaluation adapter | Windows/Linux adapter | [Run 38853291162](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38853291162) |
| Verify release documentation | Documentation tests and live release/tag consistency | [Run 38853291194](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38853291194) |
| Code analysis | Python, JavaScript/TypeScript and actions | [Run 38853291075](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38853291075) |

The validation jobs include release fixture 4, keyboard fixture 3, casebook 25,
Next.js shell 20, adapter 5 per OS, installation-comparator tests 12 and contrast
tests 4 per OS, and documentation tests 22. CI uses Python 3.14 and Node 24.
Installation-comparator tests do not install or verify a destination.

Readiness inspection verified all 30 frozen archives, exact source/manifest/ZIP
parity, and unchanged installed 1.1.32 files. That destination had 170 release files
plus the recognized host wrapper, with no missing, extra or changed files. This
was file parity, not a new enabled-state or discovery test. The [1.1.32 installation
receipt](INSTALLATION-1.1.32-VERIFICATION-2026-10-15.md) retains its original scope.

Prior source and package reviewers found no blocking findings but explicitly did
not certify release readiness. This brief is prepared for review; no independent
review of this new document is claimed.

## Documentation transition after verified publication

Keep active guidance pinned to published 1.1.32 until 1.1.33 actually exists.
After publication, apply the following as one scoped companion-documentation
change. Preserve frozen package notes, archives, manifests, the original evaluation
ledger, prior receipts, historical briefs and all historical scores.

| File | Transition |
| --- | --- |
| `README.md` | Set the current published version and every release URL in the introduction to 1.1.33. Move the entire existing 1.1.32 summary unchanged into a historical section after the first `##`. Insert the proposed 1.1.33 summary and source identity below. Replace the complete package entry under Repository contents. |
| `docs/RECOVERY.md` | Change all six Release identity fields to 1.1.33, its immutable tag, exact commit, checksum, manifest and release URL. Change the tag-resolution example and Restore and verify comparison manifest to 1.1.33. Add 1.1.32 as a rollback identity without altering earlier rollback entries. Keep the uploaded-account installation record at verified 1.1.32 and label the published/installed difference explicitly. |
| `docs/INSTALLATION.md` | Select the published 1.1.33 URL, label and tag-resolution example; change the fresh-install confirmation to 1.1.33. Keep the existing owner's verified 1.1.32 receipt and supported existing-account update route distinct from fresh Git-marketplace instructions. |
| `docs/HISTORY.md` | Set the current published version to 1.1.33 and reconcile the current release link in Release validation. Add exactly one new Version 1.1.33 paragraph with the full release commit, evidence limits and actual delivery statuses. Preserve the full Version 1.1.32 paragraph and older entries. |
| `docs/RELEASING.md` | Keep CURRENT at 1.1.33 and existing gates unchanged. Reconcile any present-tense candidate-status claim only where necessary; retain general future-candidate procedures and the separate installation boundary. |
| New dated publication receipt | Record tag resolution, all four downloaded-asset comparisons, ZIP-entry parity, exact-target CI and actual post-publication documentation validation. Use a new file such as `docs/RELEASE-1.1.33-PUBLICATION-YYYY-MM-DD.md` with the actual execution date. Link it from active guidance after it exists. |

### Proposed README introduction and package entry

Use these only after verified publication; keep the existing Source/Install
destinations while changing the Release destination to the actual 1.1.33 release:

> The current published package is **1.1.33**. [Source](https://github.com/pmeglaw/ibm-design-language-plugin) · [Release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.33) · [Install](https://github.com/pmeglaw/ibm-design-language-plugin/blob/main/docs/INSTALLATION.md)

> Version 1.1.33 makes design-deliverable retention explicit: keep the requested critique or redesign, separate discovered bugs, and use the owner's scoped choice for a repair-only pivot while reusing valid prior authorization. See the [published release notes](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.33) and [design-focus evaluation ledger](https://github.com/pmeglaw/ibm-design-language-plugin/blob/16a5e4a5845bc736aed9c116ded93f25bf1a1b3d/docs/DESIGN-FOCUS-EVALUATION-2026-10-15.md). Both baseline and candidate passed the known response-only samples; no behavioral advantage is established. Historical failures and incomplete coverage remain unchanged. Downloaded-asset verification and post-publication documentation validation are pending; record each actual result and its receipt separately.

> The working package matches published **1.1.33**, released from commit `16a5e4a5845bc736aed9c116ded93f25bf1a1b3d`. Frozen preparation notes retain their original wording; dated delivery receipts and the GitHub release record establish later status. The existing owner installation remains **1.1.32**; see its [installation receipt](https://github.com/pmeglaw/ibm-design-language-plugin/blob/16a5e4a5845bc736aed9c116ded93f25bf1a1b3d/docs/INSTALLATION-1.1.32-VERIFICATION-2026-10-15.md). Destination installation and fresh discovery of 1.1.33 are separate, unverified checks.

Under `## Repository contents`, replace the complete package entry with:

> - `plugins/ibm-design-language/`: the published 1.1.33 package source with its three skills, references, assets and evaluator; the frozen release archive and manifest are in `releases/1.1.33/`.

Preserve the old 1.1.32 paragraph outside the checked README introduction so its
historical release URL does not contradict the current one.

### Proposed History paragraph

> Version 1.1.33 makes design-deliverable retention, separate bug disposition and scoped repair-only pivots explicit while reusing valid prior authorization. The [published release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.33) is from `16a5e4a5845bc736aed9c116ded93f25bf1a1b3d`. All nine validation jobs and three analysis jobs passed on that exact commit. Both five-sample baseline and candidate arms met 20/20 response criteria; initial candidate controls met 9/9, later pivot 5/5 and prior-approval 4/4 in separate cohorts. These known response-only samples show no demonstrated advantage, and the exact model identifier was unavailable. Original grades, prior failures and frozen preparation notes remain unchanged. Downloaded-asset verification and post-publication documentation validation are pending; record each actual outcome and receipt. The existing owner installation remains 1.1.32, and 1.1.33 installation and fresh discovery are unverified.

Replace only a completed check's pending wording with its actual status and
receipt; preserve other pending or failed states. Do not claim all delivery work
complete when only the release upload or one check succeeds.

## Execution sequence for a separately authorized task

1. Confirm authority for publication and the companion-documentation edits and
   Git delivery actions. Approval of draft wording does not authorize those
   actions. Keep the current no-reinstall boundary unless separately changed.
2. Recheck the exact proposed target, all four unchanged asset hashes, source
   parity, required exact-target CI and tag/release vacancy. Do not silently
   follow a later main commit. Stop on unexpected drift or a conflicting tag.
3. If authorized, create `v1.1.33` at the exact target and publish a stable release
   with the four committed assets and reviewed text. Never move an existing tag.
   If the identical tag/release already exists, inspect and recover the existing
   operation rather than replacing it.
4. Resolve the remote tag to the full commit. Download all four assets into a
   fresh external folder; compare each with the committed bytes, then verify
   checksum, every ZIP-entry hash and path safety. Retain failed attempts.
5. Apply the documentation transition on a scoped branch and review the complete
   diff. A release-triggered documentation run may fail while current guidance
   still says 1.1.32. Preserve and report that temporary drift. Do not report
   reconciliation until offline/live checks and the correction's exact-head CI
   pass and its separately authorized Git delivery is complete.
6. Run `python -B -m unittest discover -s tests -p test_release_docs.py`,
   `python -B scripts/verify_release_docs.py` and
   `python -B scripts/verify_release_docs.py --github`; verify changed links and
   commands. The live check must see actual release/tag identity. If publication
   is not yet real, do not fabricate success or loosen the checker.
7. Recheck the installed 1.1.32 bytes read-only if reporting their preservation.
   Do not run the current 1.1.33 installation CLI comparator against 1.1.32 and
   treat the expected mismatch as drift; compare against the matching 1.1.32
   release manifest using the supported read-only comparator. No installation,
   account configuration or production action is part of publication-only work.
8. Report published commit, downloaded bytes, documentation commit/CI, installed
   version and remaining unverified behavior separately. Publication does not
   activate the new rule in the installed 1.1.32 plugin.

A later authorized account-plugin update must use the same verified identity
and supported flow, preserve sharing/unrelated configuration, and avoid creating
a duplicate marketplace installation. It needs its own release-file parity,
enabled-state and bounded fresh discovery checks for all three skills. Retain the
existing discovery deadline, failure reporting and security-policy boundaries.

## Stop conditions and owner review

Stop the affected operation on hash/source drift, missing required CI passes,
a conflicting tag, unsupported account/installer access, or a preservation
conflict. Do not regenerate frozen hashes, delete results, move tags, overwrite
unrelated work, copy credentials or change security policy to finish. Complete
independent authorized checks and report partial outcomes. Keep 1.1.32 as the
verified fallback; rollback or release removal is not automatic cleanup authority.

Owner review should confirm the narrow guidance claims and disclosed limits,
the immutable target and unchanged assets, the proposed documentation transition,
and the separate publication/documentation/installation scopes. This draft does
not approve those actions. The next step is independent review of this brief.
