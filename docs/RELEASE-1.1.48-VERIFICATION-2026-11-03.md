# 1.1.48 delivery verification — 3 November 2026

- [Release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.48), immutable tag `v1.1.48`.
- Release commit: `db13343f5cba000a8268ad65d10e0555baa2e5bf`; merged [PR #98](https://github.com/pmeglaw/ibm-design-language-plugin/pull/98).
- ZIP SHA-256: `761f2c1023b9ed37c1f2f07da7f25d6397daea865b993780c9ed5ecfa28aa9e2`.

The merged tree matches reviewed head `96448677e52d1d7bce13e8d34d3073fa61c2f7cd`.
Package changes are limited to three guidance references, release notes and version
metadata. No runtime assets, fixture assertions or product data changed. Frozen
releases through 1.1.47 remain unchanged.

## Checks and publication

Before publication, all workflows passed on the exact merged commit:
- [Plugin gates](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41752490497): Windows/Linux package checks, release fixture, keyboard fixture, casebook and production Next.js shell.
- [Release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41752490386).
- [Table guidance](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41752490471).
- [Seat adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41752490838).
- [CodeQL](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41752490769).

Local checks on the identical pre-merge tree: package integrity and live release
documentation passed; Python 49 run, 47 passed, two skipped; Seat integration 5;
release fixture 8; keyboard fixture 3; casebook 25; production shell build and 20
tests. The release fixture verifies all 29 Corrected checks on White, Gray 100 and
390px with Missed failures; keyboard verifies all 13 on both themes with Missed
failures. Initial local release/keyboard attempts failed because pinned Chromium
was missing; installation and reruns passed. Those initial failures are preserved
in ignored local evidence. No assertions were weakened.

All four GitHub assets were downloaded and compared byte-for-byte with frozen
repository assets. ZIP integrity and all 178 file hashes match the manifest.
The tag resolves to the full merged commit above. Publication-time documentation
still described 1.1.47; this companion follow-up reconciles the current guidance
without modifying frozen preparation notes or moving the release tag.

Preserved transition failures: [release event](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41752817529)
and [tag push](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41752811374).
The release-event log reports `GitHub latest release differs from documented version`.
The reconciled companion documents pass the live checker separately; these earlier
failures are not retroactively counted as passes. Subsequent documentation CI
is recorded in the follow-up pull request and repository history.

## Existing destination

The private USER-scoped account plugin was updated through Plugin Creator's
guarded update flow, preserving identity, audience and metadata. Before replacement,
both the complete account archive and installed 1.1.47 cache passed 179-file parity.
The recovery archive is retained outside tracked source; no drift was discarded.

After update, the freshly downloaded complete 1.1.48 account archive and installed
cache each pass 179-file parity: 178 release files plus the exact validated host
compatibility wrapper, with zero missing, extra or changed files. Native forced
catalog reads confirm the same plugin identity, version/localVersion 1.1.48,
installed and enabled. All three enabled qualified skills were discovered in
**1.861 seconds**, under one shared monotonic five-second deadline covering
initialization, catalog refresh and discovery, using CLI 0.165.0. No extra skill
roots, policy/trust changes, manual cache edits or duplicate marketplace were used.

These results cover the recorded account destination and fresh native session.
Existing-chat refresh, automatic selection, other hosts, model-generated product
quality and assistive-technology behavior remain unverified. The documentation
checker does not itself prove downloaded bytes or installation; the separate
asset, parity and native checks above establish those results.
