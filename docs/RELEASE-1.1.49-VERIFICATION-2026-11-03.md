# 1.1.49 delivery verification — 3 November 2026

- PASS: [stable release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.49), neither draft nor prerelease.
- Immutable tag `v1.1.49` resolves to `bd615db6a6ebc4650bd1103cf8fe60cbb742e270`, merged [PR #100](https://github.com/pmeglaw/ibm-design-language-plugin/pull/100).
- ZIP SHA-256: `1cf3aca275ca928a4108bf1f9d88b1c14ed8b4dc8a17b4768a5a7951f4fcf703`.

## Artifact and CI evidence

Fresh local `python -B scripts/verify.py` passed on the release commit: 178 package
files and all frozen releases verified. `python -B -m unittest discover -s tests
-p 'test_*.py'` ran 51 tests: 49 passed, two skipped. No model calls ran.

Previously completed CI was rechecked live on the exact release commit:
[plugin gates](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41773613426)
passed Windows/Linux verification, casebook, release fixture, behavior fixture
and Next.js shell. These browser results are reused CI evidence, not new local
browser runs. [Release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41773613534),
[table guidance](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41773613825)
and [Seat adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41773613557)
also passed before publication.

PASS: all four assets were downloaded to a new directory and compared byte for
byte with the frozen repository assets. ZIP integrity and all 178 manifest file
hashes passed, with zero missing, extra or changed files. The checksum matches
the frozen SHA256SUMS. No frozen release bytes or older receipts changed.

## Documentation transition

The initial post-publication `python -B scripts/verify_release_docs.py --github`
failed because current documentation still named 1.1.48. The
[release event](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41774917532)
and [tag push](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41774897022)
documentation failures remain preserved. This documentation-only follow-up
reconciles README, installation, recovery and history; its validation and exact-head
CI are recorded in the accompanying PR. Final local package verification, live
release-documentation verification and 51 Python tests (49 passed, two skipped)
passed after reconciliation. An intermediate documentation test failure from a
stale HISTORY link and diff-check failures from generated CRLF line endings were
corrected before the final checks. An open PR is not merged documentation.

## Destination

PASS: the existing private account installation is enabled at 1.1.49. Both the
complete account archive and installed cache pass 179-file parity, including the
validated host wrapper. All three enabled skills passed fresh native discovery
in 2.203 seconds under the shared five-second deadline. See the separate
[installation receipt](INSTALLATION-1.1.49-VERIFICATION-2026-11-03.md).

Existing-conversation refresh, automatic selection, Claude Code installation,
model-generated product quality and assistive-technology behavior are unverified.
