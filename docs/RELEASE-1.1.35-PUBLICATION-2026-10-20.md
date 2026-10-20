# 1.1.35 publication and downloaded-asset verification

20 October 2026. Publication time below is UTC. This receipt verifies publication
and downloaded bytes; it does not establish installation or generated-product quality.

## Published identity

- Stable release: [v1.1.35](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.35).
- Published at: `2026-10-20T23:02:42Z`; release ID `418965695`.
- Immutable tag: `v1.1.35`, resolved to `5e967e95e3fccda5ad4d8e69d818d57eee2374d4`.
- All four uploaded assets reuse the exact target's unchanged committed bytes.
- All 171 source files and downloaded ZIP entries match the frozen manifest.
- The [reviewed brief](RELEASE-1.1.35-REVIEW-2026-10-20.md) remains unchanged as the historical plan; its documentation merge did not retarget this release.

## Public downloads

All four assets were freshly downloaded from their final public release URLs
into a fresh external location without an authentication header. Every byte
matches the frozen asset and immutable target. The downloaded checksum agrees
with the ZIP; all 171 entry hashes match the downloaded manifest. Duplicate,
unsafe or symlink ZIP entries were rejected and the CRC check passed. Upload
digests alone were not treated as downloaded-byte proof.

| Asset | Bytes | SHA-256 | Result |
| --- | ---: | --- | --- |
| [files.json](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.35/files.json) | 22,522 | `f1e9ed85ee95f6d6516fb0006ac4e84f596a96691a157a7b378daeb93c6249b8` | exact match |
| [NOTES.md](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.35/NOTES.md) | 862 | `d144e547c4d8d28a76626942c1a5f5b25c70914d74a0d9edd8e31541de7dcb7f` | exact match |
| [plugin.zip](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.35/plugin.zip) | 4,256,783 | `b92e9b5cc3a39cf72371304d9455e3831848bb25982add17d12fe0c18dca4165` | exact match |
| [SHA256SUMS](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.35/SHA256SUMS) | 77 | `4d021e74bb32ef4f3df75878921962b10aa598c581b64f7594c6358d7d37fd79` | exact match |

Draft-upload response URLs were staging URLs. The final stable URLs above and
the fresh public downloads were separately verified; no staging URL is presented
as a public verification result.

## CI and documentation transition

All nine validation jobs passed on the exact release target before publication:
[package/browser gates](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39505519595),
[adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39505519656)
and [release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39505519634).
Three [analysis jobs](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39505519866)
also passed, all attempt 1. These are pre-publication target results, separate
from the publication-triggered workflow and subsequent documentation CI.

Publication made default-branch guidance temporarily stale: it still said
published 1.1.34. The actual local live check reported
`GitHub latest release differs from documented version`, and
[publication workflow 39512349241](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39512349241)
failed. Both results are preserved. The release-event workflow checks current
default-branch documentation; this mismatch does not establish a package defect.
It was not rerun, bypassed or erased to obtain green history.

The reviewed transition updates README, Recovery, Installation and History and
adds this receipt, retaining the concise README structure, all older Version
paragraphs, rollback identities, dated receipts and bounded discovery procedure.
Maintenance CURRENT stays 1.1.35 and every gate is unchanged. No package, release
asset, prior brief, evaluation record, assertion, dependency or runtime file changed.

Post-publication local package verification and offline/live documentation checks
passed. The package check verified 171 payload files, 335 local links, all 32
release archives and 55 model-free evaluator tests. The repository Python suite
ran 38 tests: 36 passed and two host symlink tests were skipped. Those skips
remain separate from passes. No new browser or model run is claimed.

The first local regression attempt failed because the installation wording used
lowercase "confirm" while the unchanged checker requires the exact current field
"Confirm version". The documentation phrase was corrected; the failed output is
retained separately and no assertion or gate changed.

Changed references and anchors passed inspection. Whitespace PASS covers changed
lines in the four active documents and the complete new receipt; it is not a
whole-history or frozen-byte whitespace claim.
Correction-commit and merged-main CI are subsequent checks, separate from
pre-publication target CI and local validation. Follow the
[documentation workflow](https://github.com/pmeglaw/ibm-design-language-plugin/actions/workflows/verify-release-docs.yml)
and accompanying PR for their actual delivery state.

## Installation and evidence limits

The owner authorized publication, downloaded-byte verification and the reviewed
documentation transition while preserving installed **1.1.34**. No installer,
account update, marketplace change or fresh discovery of 1.1.35 ran. Its
destination parity, enabled state and discovery remain unverified. Existing
1.1.34 files match their own release manifest plus the recognized host wrapper;
all 172 installed-file hashes match the preserved baseline. The earlier
[installation receipt](INSTALLATION-1.1.34-VERIFICATION-2026-10-19.md)
retains its own scope. Publication does not activate 1.1.35 wording in that copy.

The catalog decreases from 6,909 to 6,437 UTF-8 bytes (472 bytes; 6.83%); the
complete design-ui entrypoint decreases from 17,171 to 16,699 (2.75%). All 51
destination occurrences, their associations, component-name lookup cues and the
anchor are retained. All other instructional bytes and both companion skills
are unchanged. Only the catalog, version and release-note prefix differ from
1.1.34; previous release notes remain an exact byte suffix.

This is a reduction in static instruction size. Model-context consumption,
triggering, behavioral effectiveness, truncation remediation and generated-product
improvement remain unverified. Historical narrow/RTL findings, partial Seat
Planner results, real Auth/backend integration, full responsive/zoom/browser
coverage, assistive-technology testing and discovery/desktop-refresh limits
retain their original scope. Historical configuration-provenance limitations
are not retroactively resolved by newer checks. Parked experiments stay parked.
Historical failures, partial/unrun results, skips and grades are unchanged.
No model evaluation or generated-page repair ran during publication. The owner
accepted these disclosed limits for this narrow catalog release.

Production and retained office data were not accessed or modified. Existing Git
authentication supported the scoped publication in memory; credentials and
account configuration were not copied into source/logs or sent to unrelated
destinations. No security policy changed. Frozen assets and all prior results
remain preserved.
