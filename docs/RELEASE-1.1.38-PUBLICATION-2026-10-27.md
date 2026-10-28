# 1.1.38 publication verification

Verified on 2026-10-27 PDT (2026-10-28 UTC).

## Release identity and assets

- Published release: [v1.1.38](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.38).
- Immutable release commit: `fb8b1fb7dae700e064421bd0f2f1fa78f797a43a`.
- Publication time: `2026-10-28T03:45:53Z`.
- Source, file manifest and ZIP: **198 matching files**.
- The owner-created annotated tag resolved to the exact merged commit before publication. No tag was created, moved or replaced by this operation.

The existing four assets from `releases/1.1.38/` were uploaded without regeneration. All four were downloaded and compared byte-for-byte before publication and again after publication. ZIP entries were also checked against the frozen file manifest.

| Download | Verified SHA-256 |
|---|---|
| plugin.zip | `0e2054f026def6d8ca61b0d1495b1cee938a78a9c855175c348f873e894db894` |
| files.json | `93744cfd24690705888828430404ebc99eea5670ef53ae231e8cea193a9ac6f0` |
| SHA256SUMS | `46eb6449fe6b13b598f76bc8e89feb308de5cfef70fb2c783ee97cf72a809246` |
| NOTES.md | `258dd5fb2a02e3cda1522fd09aaf465fd14830180817b93a93174a43d9a4aa64` |

## Verification and preserved transition

Before publication, required checks passed on the exact release commit:
Windows/Linux package verification, release fixture, keyboard fixture,
Next.js shell, casebook and release documentation. See the
[release validation run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40626586577)
and [release-documentation run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40626586519).
The pre-publication snapshot contained 21 successful checks across the
recorded runs, including adapter and analysis checks.

Fresh local `python -B scripts/verify.py` passed: 198 package files, all 35
release archives, 426 package-local links and synthetic evaluator checks.
Python unit discovery passed 36 tests with two existing Windows host-symlink
skips. The exact-commit browser CI above was reused; local browser suites were
not rerun solely for publication.

The first release-by-tag draft lookup returned 404 after draft creation.
The authenticated release list confirmed the single existing draft before
work resumed; no duplicate release was created. Its four uploaded assets
were verified before publishing.

At publication, default-branch recovery guidance still identified 1.1.37,
as required until the release became live. The
[publication-triggered documentation check](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40628534045)
failed during that transition. This result remains preserved. The current
companion-documentation follow-up advances recovery, installation, README and
history to 1.1.38; its PR and subsequent push checks are separate delivery
evidence. No frozen preparation note or archive is rewritten to repair
current companion-documentation drift.

## Installation and limits

After publication, the owner separately confirmed synchronization of the
existing installation. Full account/installed parity and fresh native
discovery are recorded in the
[installation verification](INSTALLATION-1.1.38-VERIFICATION-2026-10-27.md).

Original [candidate preparation](RELEASE-1.1.38-PREPARATION-2026-10-27.md),
package release-note suffixes and capture provenance retain their historical
wording, versions and hashes. Separate fixture dependency updates preceded
the merged release; this operation changed no fixture or teaching asset.
No model evaluation, AT certification, product-workflow validation, automatic
skill selection or running desktop-session refresh is claimed.
