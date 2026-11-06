# 1.1.52 publication verification - 6 November 2026 UTC

- PASS: [stable release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.52), neither draft nor prerelease, published at 2026-11-06T21:19:48Z.
- Immutable tag `v1.1.52` resolves to `ea8b1534b37757359037263bd8fb9bea3b366d88`, the merged [PR #109](https://github.com/pmeglaw/ibm-design-language-plugin/pull/109).
- The release target is that same full commit. The release contains exactly four assets, verified below.

## Artifact and validation

Before publication, all four candidate assets were compared byte for byte with
Git blobs on the release commit. All matched. The ZIP passed its integrity check;
its 178 unique file entries exactly match the manifest and source hashes.
`SHA256SUMS` selects the same ZIP hash. No package was rebuilt.

Fresh local `python -B scripts/verify.py` passed on the release commit: 178
package files, 49 frozen releases, 409 local links, 193 anchors and synthetic
checks. `python -B -m unittest discover -s tests -p 'test_*.py'` ran 51 tests:
49 passed and two skipped. The first sandboxed regression attempt failed on
temporary-file permissions; the same command passed outside that sandbox.
No model calls or installation changes ran.

All five previously completed workflows were rechecked live on the exact release
commit before publication, and all passed. The 15 checks include the
[package/browser run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42292463809):
Windows/Linux package verification, independent Windows/Linux evaluator tests,
casebook, release fixture, keyboard fixture and production Next.js shell. Each
evaluator job ran 58 tests with expected platform skips (one on Linux, two on
Windows). The [documentation run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42292463705)
also passed before publication. Browser results are reused exact-commit CI
evidence, not new local browser runs or model-generated product verification.

## Downloaded assets

PASS: all four published assets were downloaded into a new directory and compared
byte for byte with the verified candidates. The downloaded ZIP passed integrity
and all 178 manifest/source hashes; the downloaded checksum file matches its ZIP.

| Asset | SHA-256 |
|---|---|
| plugin.zip | `39bc285fc7d8ae93dc472e9fe9af6d7721ffc46b444eae87172d054a5cadd59e` |
| files.json | `a47c4ac265dab25a844ac218ee417cc5efed3cb259cf0030a1c20c6a49727d46` |
| SHA256SUMS | `d0685b58e8769843f8c9d063d04a871955ae46769b52cacbf5d1fdb116189ec0` |
| NOTES.md | `f3cb89ecd6c77c2c44ad9f623ed52ce60cae556e958755eb04b61763432acd39` |

Frozen `releases/1.1.52/NOTES.md` and packaged release notes retain their
preparation-time candidate wording. This receipt and the release record establish
the later publication state without rewriting those historical bytes. Earlier
release assets and evidence remain unchanged.

## Documentation closeout

The initial [release-event run, attempt 1](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42295818569/attempts/1)
and [tag-push run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42295789747)
failed with `GitHub latest release differs from documented version`: current
companion documents still selected 1.1.51 when 1.1.52 became the latest release.
These transition failures remain historical evidence, not pre-publication failures.

This documentation-only follow-up reconciles README, installation, recovery and
history with the published 1.1.52 identity, adds the 1.1.51 rollback identity and
preserves earlier installation evidence as historical. The required closeout is
the exact default-branch documentation commit's successful push run, including
`verify_release_docs.py --github`, followed by a successful release-event rerun
whose checkout commit is confirmed from its job log. The immutable tag-push
failure is preserved; rerunning it cannot pick up later companion documents.

The [release record](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.52)
and its linked closeout PR record the final documentation commit and live CI
URLs after integration, separately from the immutable package commit above.
Local offline/live documentation checks and the full package/regression checks
are recorded with that follow-up. An open PR or offline-only check does not
establish completion of the publication closeout.

## Destination and limits

Installation was explicitly excluded from this task. No account plugin,
marketplace pin or installed cache was updated. Version 1.1.52 destination parity,
installed/enabled state and fresh discovery were not checked. The
[1.1.51 installation receipt](INSTALLATION-1.1.51-VERIFICATION-2026-11-06.md)
remains historical evidence; it was not revalidated during this publication.

The helper does not impose a universal deadline on growing regular files or cover
every filesystem race. No new model evaluation, generated-product improvement,
automatic selection, existing-chat refresh or assistive-technology certification
is claimed.
