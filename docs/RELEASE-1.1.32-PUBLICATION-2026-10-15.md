# 1.1.32 publication and downloaded-asset verification

15 October 2026. This receipt records publication and downloaded bytes. It does
not establish destination installation or product quality.

## Published identity

- Stable latest release: [v1.1.32](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.32).
- Published at: `2026-10-15T17:31:21Z`; release ID `414086378`.
- Immutable tag: `v1.1.32`, resolved to `08839a956be8f0f3829986a0c414e3f496545b4f`.
- Four uploaded assets reuse the target commit's frozen bytes without rebuilding.
- All 170 source files and downloaded ZIP entries match the frozen manifest.

## Public downloads

Each asset was freshly downloaded from its public release URL into a new external
location after publication, with no credential forwarded to the download endpoint.
Every byte matches both the committed target asset and the frozen local asset.
The downloaded checksum file agrees with the ZIP, and every ZIP path and hash
agrees with the downloaded manifest. Duplicate ZIP paths were rejected.

| Asset | Bytes | SHA-256 | Result |
| --- | ---: | --- | --- |
| [plugin.zip](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.32/plugin.zip) | 4,253,651 | `08f7eb0ae3f0e8ddeb1ef3cf8fc8a11fe900b11403a228dc9cb912fca89cc224` | exact match |
| [SHA256SUMS](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.32/SHA256SUMS) | 77 | `720344a5745aadc96609ee40f6a56a0be2f77a6e559ccd54000e54d102976796` | exact match |
| [files.json](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.32/files.json) | 22,394 | `b4a800b2fa08d24d85f13fb64f9e3b19c05ee626aff63daf77fa2ff2c312daf2` | exact match |
| [NOTES.md](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.32/NOTES.md) | 1,088 | `85eabf97dc98cd021d578545d38c8eb23767b0b25c61d8f8028e2e21ab8ba800` | exact match |

## CI and documentation transition

Before publication, all nine required CI jobs passed on the exact target:
[package/browser gates](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38769441243),
[adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38769441434)
and [release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38769441849).
The three [analysis jobs](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38769441557)
also passed. These are release-target results, distinct from later documentation CI.

Immediately after publication, current main still documented published 1.1.30.
The existing checker reported `GitHub latest release differs from documented version`.
The [publication-triggered failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38778036774)
is retained as the expected transition-window result. It was not bypassed or erased.
The reviewed transition updates README, Recovery, Installation and History; it
preserves the old README summary outside the current introduction and all prior
History/rollback entries. Follow the correction commit's exact-head checks in the
[documentation workflow](https://github.com/pmeglaw/ibm-design-language-plugin/actions/workflows/verify-release-docs.yml).
Publication, downloaded-byte verification and corrected-documentation validation
are separate evidence; one does not establish the others.

## Preserved installation and evidence limits

The owner explicitly authorized publication and the reviewed documentation
transition while keeping the installed plugin at **1.1.30**. All 171 installed
files match the preserved pre-publication hashes, including the previously
recognized host metadata overlay. No installer, account update or fresh discovery
of 1.1.32 was performed. Existing marketplace/account configuration remains unchanged.
Published 1.1.30, unpublished prepared 1.1.31 and all earlier frozen assets remain
available unchanged; production and retained data were not accessed or modified.

Original evaluation results remain **3 PASS / 7 INCOMPLETE**, with **24 pass /
0 fail / 12 not tested** criteria. The separate 12 known targeted passing cases
and 70 criteria across two packets remain reused evidence. No new model calls
were made for publication, and no earlier failure, incomplete attempt or grade
was replaced. Configuration and interpretation limits remain in the
[consolidated closeout](SEAT-PLANNER-EVALUATION-CLOSEOUT-2026-10-14.md).
Real Auth/action/database integration, complete browser/assistive-technology
coverage, general reliability and native installed discovery of 1.1.32 remain
unverified. The owner accepted these disclosed limits for this guidance release.

Frozen preparation notes and the dated pre-publication review brief retain their
historical unpublished/pending wording. This release record, current companion
guides and their verification establish the subsequent state. No frozen package,
archive, manifest, checksum, evaluator assertion or gate changed at publication.
