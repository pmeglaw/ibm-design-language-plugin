# 1.1.44 existing-plugin update verification — 29 October 2026

The same existing private USER-scoped plugin was updated through Plugin Creator's
supported guarded update. Identity, scope, sharing and presentation were preserved.
No duplicate marketplace installation or manual cache edit was made.

Before replacement, the fresh account archive and installed 1.1.43 matched all
178 release-owned files and the exact validated host wrapper. Recovery archive
is retained outside source; no unexpected drift was discarded.

After replacement:
- Fresh source read-back confirms version 1.1.44 and the approved wording.
- Complete account archive matches 178 release-owned files plus the validated
  host wrapper; all 179 files match the actual installation byte-for-byte.
- Matching-source `python -B scripts/verify-install.py INSTALL_DIRECTORY` passes:
  179 total files, zero missing/extra/changed, exact host metadata reported separately.
- Destination: `created-by-me-remote/ibm-design-language/1.1.44`.
- Forced native catalog reads report version/localVersion 1.1.44, installed and enabled.
- All three enabled qualified skills have the correct existing plugin identity
  and paths under 1.1.44: design-ui, review-product-experience, seat-planner-ui-ux.
- One monotonic five-second deadline covered initialization, forced catalog read
  and forced discovery. Complete discovery passed in 1.187 seconds.

This verifies the account, local destination and fresh native session separately.
Automatic selection, existing-chat refresh, other installations, generated-product
quality and assistive-technology behavior remain unverified. Bench was not changed.
