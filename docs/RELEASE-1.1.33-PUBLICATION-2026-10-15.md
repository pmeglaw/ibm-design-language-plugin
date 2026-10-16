# 1.1.33 publication and downloaded-asset verification

15 October 2026 (local). Publication time below is UTC. This receipt verifies
publication and downloaded bytes; it does not establish destination installation
or generated-product quality.

## Published identity

- Stable release: [v1.1.33](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.33).
- Published at: `2026-10-16T06:09:12Z`; release ID `414611376`.
- Immutable tag: `v1.1.33`, resolved to `16a5e4a5845bc736aed9c116ded93f25bf1a1b3d`.
- All four uploaded assets reuse that exact target's frozen committed bytes.
- All 171 source files and downloaded ZIP entries match the frozen manifest.
- The [reviewed brief](RELEASE-1.1.33-REVIEW-2026-10-15.md) remains unchanged as the historical plan; its later documentation merge did not retarget this release.

## Public downloads

All four assets were freshly downloaded from their final public release URLs
into a new external location without an authentication header. Every byte matches
the frozen asset and the immutable release target. The downloaded checksum agrees
with the ZIP and all 171 ZIP-entry hashes match the downloaded manifest. Duplicate
or unsafe ZIP paths were rejected. Upload digests alone were not counted as proof
of downloaded bytes.

| Asset | Bytes | SHA-256 | Result |
| --- | ---: | --- | --- |
| [plugin.zip](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.33/plugin.zip) | 4,256,092 | `5efb158d85b7be0c96f3e7cc6ab6267254ef3c9db0986cd2a6e5a88473837e87` | exact match |
| [SHA256SUMS](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.33/SHA256SUMS) | 77 | `c59b04884bce5ab4246367d826f95f849da332398e2366753f5da360255c92fa` | exact match |
| [files.json](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.33/files.json) | 22,522 | `566585b73d28d57363ecd1b314d1b63d1e7acb1bcc723c40ffeb7f6402f20d74` | exact match |
| [NOTES.md](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.33/NOTES.md) | 1,122 | `9cf7dac6d117fed213db671f4226c3e361eb5919699edb1753c96a34257fda7e` | exact match |

## CI and documentation transition

Before publication, all nine validation jobs passed on the exact release target:
[package/browser gates](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38853291196),
[adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38853291162)
and [release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38853291194).
Three [analysis jobs](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38853291075)
also passed, all on attempt 1. These are pre-publication target results, separate
from the publication-triggered run and later documentation CI.

Publication made the existing main guidance temporarily stale: it still said
published 1.1.32. A local live check reported `GitHub latest release differs from
documented version`, and the [publication-triggered workflow](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38859599006)
failed. Both results remain retained. The workflow checks the default branch for
a publication event; it does not prove a package regression. It was not rerun,
bypassed or erased to obtain green history.

The reviewed transition updates README, Recovery, Installation and History while
preserving the complete older README summary outside the current introduction,
all historical Version paragraphs, earlier rollback identities, the existing
uploaded-account record and the bounded discovery procedure. Maintenance CURRENT
stays 1.1.33; existing gates and general future-candidate procedures are unchanged.
The original evaluation ledger, frozen notes, historical briefs and prior receipts
retain their original wording.

Post-publication local validation passed all 22 documentation regressions and both
offline/live consistency checks. The live check resolves the actual release/tag.
For the correction commit's exact-head and merged-main CI, follow the
[documentation workflow](https://github.com/pmeglaw/ibm-design-language-plugin/actions/workflows/verify-release-docs.yml)
and its accompanying PR. Local validation, Git delivery and main CI are separate
checks; this receipt alone does not establish their later completion.

## Installation and evidence limits

The owner authorized publication, downloaded-byte verification and the reviewed
documentation transition while preserving installed **1.1.32**. No installer,
account-plugin update, marketplace change or fresh discovery of 1.1.33 was run.
Its destination parity, enabled state and discovery remain unverified. Existing
1.1.32 files are preserved; the earlier [installation receipt](INSTALLATION-1.1.32-VERIFICATION-2026-10-15.md)
retains its own limited scope. Publication does not activate the new design-focus
guidance in that installed copy.

The known response-only cohorts remain separate: baseline five samples 20/20;
candidate five samples 20/20; initial candidate controls 9/9; later three-turn
pivot 5/5 and prior-approval 4/4. Both arms passed, so no reproduced baseline failure
or causal advantage is demonstrated. The exact collaboration model identifier was
unavailable. Samples were known and non-blind; earlier complete responses were not
independently regraded, while all six later transition responses were. Full
tool-event histories, ancillary-reference intake and runnable product execution
were not independently established. See the [design-focus ledger](DESIGN-FOCUS-EVALUATION-2026-10-15.md).

Historical 320px/RTL practical failures, incomplete original Seat Planner criteria,
real Auth/integration and full browser/assistive-technology gaps, desktop refresh
and automatic-selection limits remain unchanged. No model calls ran for
publication. Earlier failures, incomplete attempts, unrun checks and scores remain
preserved. The owner accepted these disclosed limits for this guidance release.

No frozen package, ZIP, manifest, checksum, assertion, dependency or runtime asset
changed. Previous releases remain available unchanged. Production and retained
office data were not accessed or modified. Existing Git authentication supported
the scoped publication; no credential or account configuration was copied into
source or logs, and no security policy changed.
