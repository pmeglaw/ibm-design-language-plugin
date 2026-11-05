# 1.1.51 publication verification - 5 November 2026 UTC

- PASS: [stable release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.51), neither draft nor prerelease, published at 2026-11-05T01:49:26Z.
- Immutable tag `v1.1.51` resolves to `f286c87a18ca8d49ae0abeb28129d3b352ca4c50`, the merged [PR #106](https://github.com/pmeglaw/ibm-design-language-plugin/pull/106).
- The release target is that same full commit. The release contains exactly four assets, verified below.

## Artifact and validation

Before publication, all four candidate assets were compared byte for byte with
Git blobs on the release commit and with the independently supplied SHA-256
values. All matched. The ZIP passed its integrity check; its 178 unique file
entries exactly match the manifest and source hashes. `SHA256SUMS` selects the
same ZIP hash. No package was rebuilt.

Fresh local `python -B scripts/verify.py` passed on the release commit: 178
package files, all frozen releases, 409 local links, 193 anchors and synthetic
checks. `python -B -m unittest discover -s tests -p 'test_*.py'` ran 51 tests:
49 passed and two skipped. No model calls or installation changes ran.

All 13 previously completed checks were rechecked live on the exact release
commit before publication, and all passed. The [package/browser run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41946486038)
includes Windows/Linux package verification, casebook, release fixture, keyboard
fixture and production Next.js shell. The [documentation run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41946485827)
also passed before publication. Browser results are reused exact-commit CI
evidence, not new local browser runs or model-generated product verification.

## Downloaded assets

PASS: all four published assets were downloaded into a new directory and compared
byte for byte with the verified candidates. The downloaded ZIP passed integrity
and all 178 manifest hashes; the downloaded checksum file matches its ZIP.

| Asset | SHA-256 |
|---|---|
| plugin.zip | `f051636546aa47be34ea88716cbe21afa3bc683ab42873574b50c05c7e04c045` |
| files.json | `0c9b9ffbdb627abac2a8a6d3755406fa73a68acb7dc7651a0bf294b17d918d1f` |
| SHA256SUMS | `5bfd60dca1e9d82b7c93a2f299d5317e50a082e5dd4d1b818fc806f61393f5c6` |
| NOTES.md | `bc0df6293604f80946686fbd4c356f1a576bf4edb912b8b25b16240565d6608f` |

Frozen `releases/1.1.51/NOTES.md` retains its preparation-time statement that the
candidate was unpublished and unmerged. This receipt and the release record
establish the later publication state without rewriting those historical bytes.
Earlier release assets and evidence remain unchanged.

## Documentation closeout

The initial [release-event run, attempt 1](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41951102161/attempts/1)
and [tag-push run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41951101739)
failed with `GitHub latest release differs from documented version`: the current
companion documents still selected 1.1.50 when 1.1.51 became the latest release.
These transition failures remain historical evidence, not pre-publication failures.

This documentation-only follow-up reconciles README, installation, recovery and
history with the published 1.1.51 identity, adds the 1.1.50 rollback identity and
preserves earlier installation evidence as historical. The required closeout is
the exact default-branch documentation commit's successful push run, including
`verify_release_docs.py --github`, followed by a successful release-event rerun
whose checkout commit is confirmed from its job log. The immutable tag-push
failure is preserved; rerunning it cannot pick up later companion documents.

The [release record](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.51)
and its linked closeout PR record the final documentation commit and live CI
URLs after integration, separately from the immutable package commit above.
Local offline/live documentation checks, documentation regression tests and the
full package/regression checks are recorded with that follow-up. An open PR or
offline-only check does not establish completion of the publication closeout.

## Destination and limits

Installation was explicitly excluded from this task. No account plugin,
marketplace pin or installed cache was updated. Version 1.1.51 destination
parity, installed/enabled state and fresh discovery were not checked. The
[1.1.50 installation receipt](INSTALLATION-1.1.50-VERIFICATION-2026-11-04.md)
remains historical evidence; it was not revalidated during this publication.

No new model evaluation, generated-product improvement, automatic selection,
existing-chat refresh or assistive-technology certification is claimed.
