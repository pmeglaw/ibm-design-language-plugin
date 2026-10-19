# 1.1.34 publication and downloaded-asset verification

19 October 2026. Publication time below is UTC. This receipt verifies publication
and downloaded bytes; it does not establish installation or generated-product quality.

## Published identity

- Stable release: [v1.1.34](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.34).
- Published at: `2026-10-19T18:43:38Z`; release ID `417623573`.
- Immutable tag: `v1.1.34`, resolved to `9ba059d9664d8892673848162256c82a0ebe20f3`.
- All four uploaded assets reuse the exact target's unchanged committed bytes.
- All 171 source files and downloaded ZIP entries match the frozen manifest.
- The [reviewed brief](RELEASE-1.1.34-REVIEW-2026-10-19.md) remains unchanged as the historical plan; its documentation merge did not retarget this release.

## Public downloads

All four assets were freshly downloaded from their final public release URLs
into a fresh external location without an authentication header. Every byte
matches the frozen asset and immutable target. The downloaded checksum agrees
with the ZIP; all 171 entry hashes match the downloaded manifest. Duplicate,
unsafe or symlink ZIP entries were rejected and the CRC check passed. Upload
digests alone were not treated as downloaded-byte proof.

| Asset | Bytes | SHA-256 | Result |
| --- | ---: | --- | --- |
| [files.json](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.34/files.json) | 22,522 | `680b9e394845cf29445628e7d043e1cbd7964449e116c9a5911c7b29b9a44228` | exact match |
| [NOTES.md](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.34/NOTES.md) | 967 | `087bac9b268fa8230a7151d439b49d961e14bbedf099a87446f6f067cc5e3a71` | exact match |
| [plugin.zip](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.34/plugin.zip) | 4,256,522 | `731b32694c4ad7a7feebeb76cbd0078ace94ed628749db0ff6257ebf4fa0c191` | exact match |
| [SHA256SUMS](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.34/SHA256SUMS) | 77 | `e34fba1d0ff18409a422d481822c959943f545b0237a6d942bd0f5c7cfc77959` | exact match |

Draft-upload response URLs were staging URLs. The final stable URLs above and
the fresh public downloads were separately verified; no staging URL is presented
as a public verification result.

## CI and documentation transition

All nine validation jobs passed on the exact release target before publication:
[package/browser gates](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39287987330),
[adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39287987457)
and [release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39287987982).
Three [analysis jobs](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39287987986)
also passed, all attempt 1. These are pre-publication target results, separate
from the publication-triggered workflow and subsequent documentation CI.

Publication made default-branch guidance temporarily stale: it still said
published 1.1.33. The actual local live check reported
`GitHub latest release differs from documented version`, and
[publication workflow 39304938124](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39304938124)
failed. Both results are preserved. The release-event workflow checks current
default-branch documentation; this mismatch does not establish a package defect.
It was not rerun, bypassed or erased to obtain green history.

The reviewed transition updates README, Recovery, Installation and History and
adds this receipt, retaining the concise README structure, all older Version
paragraphs, rollback identities, dated receipts and bounded discovery procedure.
Maintenance CURRENT stays 1.1.34 and every gate is unchanged. No package, release
asset, prior brief, evaluation record, assertion, dependency or runtime file changed.

Post-publication local package/regression and offline/live documentation checks
passed. The documentation regressions are included in the full repository Python
suite; its two host symlink skips remain separate from passes. For actual
correction-commit and merged-main CI, follow the
[documentation workflow](https://github.com/pmeglaw/ibm-design-language-plugin/actions/workflows/verify-release-docs.yml)
and accompanying PR. Local validation, Git delivery and main CI are separate;
this preparation-stage receipt alone does not establish their later completion.

## Installation and evidence limits

The owner authorized publication, downloaded-byte verification and the reviewed
documentation transition while preserving installed **1.1.33**. No installer,
account update, marketplace change or fresh discovery of 1.1.34 ran. Its
destination parity, enabled state and discovery remain unverified. Existing
1.1.33 files match their own release manifest plus the recognized host wrapper;
the earlier [installation receipt](INSTALLATION-1.1.33-VERIFICATION-2026-10-15.md)
retains its own scope. Publication does not activate 1.1.34 wording in that copy.

The historical Minor/P3 configuration-provenance gap remains disclosed:
original local preparation receipts support their outcomes but do not fully
reconstruct environment overrides, executable patch versions, exact launched
browser or host execution context. Later receipts and CI are separate evidence
and do not retrospectively fill that gap.

Behavioral effectiveness, automatic selection, installed-scope loading/truncation,
context cost, actual RTL remediation and full responsive/zoom/browser,
Auth/backend and assistive-technology coverage remain unverified. Parked
experiments remain parked. Historical failures, partial/unrun results, skips and
grades are unchanged. No model evaluation ran during publication. The owner
accepted these disclosed limits for this narrow wording release.

Production and retained office data were not accessed or modified. Existing Git
authentication supported the scoped publication in memory; credentials and
account configuration were not copied into source/logs or sent to unrelated
destinations. No security policy changed. Frozen assets and all prior results
remain preserved.
