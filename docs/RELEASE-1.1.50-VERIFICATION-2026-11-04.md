# 1.1.50 publication verification - 4 November 2026

- PASS: [stable release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.50), neither draft nor prerelease.
- Immutable tag `v1.1.50` resolves to `0f18e810572b3a16579c9c17ccc483792a067ced`, merged [PR #102](https://github.com/pmeglaw/ibm-design-language-plugin/pull/102).
- ZIP SHA-256: `a0755cfba04a87fe67d1612801185b58f7a5a58d485f13602b8a3a62bc4f76cb`.

## Artifact and validation

Fresh local `python -B scripts/verify.py` passed on the release commit: 178 package
files and all frozen releases verified. `python -B -m unittest discover -s tests
-p 'test_*.py'` ran 51 tests: 49 passed, two skipped. The first sandbox attempt
failed on Windows temporary-directory permissions; the rerun with required access
passed without changing tests. No model calls ran during this delivery.

Previously completed [CI](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41779707511)
was rechecked live on the exact release commit: Windows/Linux verification,
casebook, release fixture, behavior fixture and Next.js shell all passed. These
browser results are reused CI evidence, not new local browser runs.
[Release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41779707497),
[table guidance](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41779707522)
and [Seat adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41779707487)
also passed before publication.

PASS: all four release assets were downloaded into a new directory and compared
byte for byte with the frozen repository assets. SHA256SUMS, ZIP integrity and all
178 manifest file hashes passed. Only plugin.json, RELEASE_NOTES.md and the
design-ui entry point differ from 1.1.49; no files were removed.

The initial post-publication live documentation check failed because current
guidance still named 1.1.49. The [release-event failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41874151760)
and [tag-push failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41874141423)
remain preserved. This documentation-only follow-up reconciles current guidance;
its final local checks and exact-head CI are recorded in the accompanying PR.
An open PR is not merged documentation. Frozen assets and older receipts are unchanged.

## Destination and limits

PASS: installed/enabled 1.1.50, complete 179-file account/cache parity and all
three enabled skills discovered in 1.608 seconds. See the separate
[installation receipt](INSTALLATION-1.1.50-VERIFICATION-2026-11-04.md).

The earlier [routing evaluation](ROUTING-EVALUATION-1.1.50-2026-11-04.md) measures
research-step reference access, not generated-product quality. Existing-chat
refresh, automatic skill selection, other hosts and assistive-technology behavior
remain unverified. No new evaluation was performed during release delivery.
