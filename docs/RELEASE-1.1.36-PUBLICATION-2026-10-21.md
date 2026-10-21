# 1.1.36 publication and downloaded-asset verification

21 October 2026. Publication time below is UTC. This receipt verifies publication
and downloaded bytes; it does not establish installation or generated-product quality.

## Published identity

- Stable release: [v1.1.36](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.36).
- Published at: `2026-10-21T22:53:59Z`; release ID `420132558`.
- Immutable tag: `v1.1.36`, resolved to `42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`.
- All four uploaded assets reuse the exact target's unchanged committed bytes.
- All 171 source files and downloaded ZIP entries match the frozen manifest.
- The [reviewed brief](RELEASE-1.1.36-REVIEW-2026-10-21.md) remains unchanged as the historical plan; its documentation merge did not retarget this release.

The release record's target_commitish field retains GitHub's default `main` for
the existing-tag form. The separately resolved existing tag, not that ignored
creation field, establishes the exact release commit above.

## Public downloads

All four assets were freshly downloaded from their final public release URLs
into a fresh external location without an authentication header. Every byte
matches the frozen asset and immutable target. The downloaded checksum agrees
with the ZIP; all 171 entry hashes match the downloaded manifest. Duplicate,
unsafe or symlink ZIP entries were rejected and the CRC check passed. Upload
digests alone were not treated as downloaded-byte proof.

| Asset | Bytes | SHA-256 | Result |
| --- | ---: | --- | --- |
| [files.json](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.36/files.json) | 22,522 | `d58f0a574eca56cb8cd7862ea1948425139d716881729321e7960a32e9e5045a` | exact match |
| [NOTES.md](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.36/NOTES.md) | 817 | `30af896d1137e51432bbe67dc38da4d6fa0acdd90ed8aeac5bb1681c4b1f5956` | exact match |
| [plugin.zip](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.36/plugin.zip) | 4,258,139 | `b281eb4ec28c42fcc46d5b21de4516ed6b0c37640d6f7eb0c01d7772bf716cee` | exact match |
| [SHA256SUMS](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.36/SHA256SUMS) | 77 | `ebc5d2b190bf5e53d647317becfdd81e38f48ecb1c792edfa9225fd95bfd7f74` | exact match |

Draft-upload staging addresses are not public verification results. The stable
URLs above and the actual public downloads were verified separately.

## CI and documentation transition

All nine validation jobs and three analysis jobs passed on the exact release
target before publication: [package/browser gates](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39669194359),
[adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39669194298),
[documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39669194424)
and [analysis](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39669195455).
The new tag's additional nine validation checks also passed before publication;
all 21 then-reported exact-target checks succeeded. These are pre-publication
results, separate from the publication event and subsequent documentation CI.

Publication made default-branch guidance temporarily stale: it still said
published 1.1.35. The unchanged local live check reported
`GitHub latest release differs from documented version`, and
[publication workflow 39689771219](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/39689771219)
failed its live documentation step after passing its regression tests. Both
results are preserved. That event checks default-branch documentation; this
mismatch does not establish a package defect. The failure was not rerun,
bypassed or erased to obtain green history.

The reviewed transition updates README, Recovery, Installation and History and
adds this receipt. It preserves all earlier Version paragraphs, rollback
identities, dated receipts, bounded discovery procedure and the concise README
structure. Maintenance CURRENT stays 1.1.36 and every gate is unchanged. No
package, release asset, earlier brief, evaluation record, assertion, dependency
or runtime file changed.

Post-publication local package verification and offline/live documentation checks
passed. The package check verified 171 payload files, 337 local links, all 33
release archives and 55 model-free evaluator tests. The repository Python suite
ran 38 tests: 36 passed and two host-symlink tests were skipped. Those skips
remain separate from passes. No new local browser or model run is claimed;
the exact-target browser fixture results above are reused.

The initial new-receipt byte check found CRLF output from the Windows text
writer. That attempt is retained separately; only this new unpublished receipt
was rewritten with LF. No existing or frozen file was normalized.

Changed references and anchors passed inspection. Whitespace PASS covers changed
lines in the four active documents and the complete new receipt; it is not a
whole-history or frozen-byte whitespace claim. The raw package-candidate diff
retains its FAIL with 19 inherited CRLF-at-EOL diagnostics in source-map
additions. Neither that file nor its grade was changed.

Correction-commit and merged-main CI are subsequent checks, separate from
pre-publication target CI and local validation. Follow the
[documentation workflow](https://github.com/pmeglaw/ibm-design-language-plugin/actions/workflows/verify-release-docs.yml)
and accompanying PR for their actual delivery state.

## Installation and evidence limits

The owner authorized publication, public-download verification and the reviewed
documentation transition while accepting the disclosed limits and preserving
installed **1.1.35**. No installer, account update, marketplace change or fresh
discovery of 1.1.36 ran. Its destination parity, enabled state and discovery
remain unverified. Existing 1.1.35 matches its own release manifest plus the
recognized host wrapper; all 172 installed-file hashes match the preserved
baseline. The earlier [installation receipt](INSTALLATION-1.1.35-VERIFICATION-2026-10-20.md)
retains its own scope. Publication does not activate the newer reference text
in that installed copy.

Only three references changed guidance: carbon-next.md, composition.md and
source-map.json. All three SKILL.md entrypoints, executable assets, dependencies,
evaluation criteria and gates remain unchanged. Earlier release-note bytes
remain an exact suffix; 67 earlier source entries and global coverage metadata
are preserved. Reference growth is 3,321 UTF-8 bytes, with zero entrypoint growth.
The PageHeader distinction preserves the existing Products preview versus
planned stable Carbon-core delivery. This is dated reference guidance, not
proof of released target APIs/codemods, migration compatibility, model behavior
or generated-product quality.

Historical practical failures, partial Seat Planner coverage, real Auth/backend
integration, responsive/zoom/browser coverage, assistive technology, configuration-
provenance, model-visible delivery and discovery/desktop-refresh limits retain
their original scope. The loading experiment remains parked. Historical failed,
skipped, incomplete and unrun results and grades remain unchanged. No model
experiment, application migration, generated-page repair or production access ran.

GitHub CLI was not authenticated in this session. Existing supported Git
authentication pushed only the new tag, and an existing authenticated Chrome
session handled the release form and four asset uploads through supported
browser controls. Credentials/account configuration were not extracted or copied,
and no security policy changed. Frozen assets, earlier results, unrelated Bench
work and production data are preserved.
