# 1.1.40 existing-plugin update verification — 29 October 2026

The same existing private, USER-scoped IBM Design Language account plugin was
updated through Plugin Creator's supported update flow, after the
[GitHub release and downloaded assets](RELEASE-1.1.40-PUBLICATION-2026-10-29.md)
were verified. No duplicate Git marketplace installation was created. Identity,
scope, private sharing, description and presentation were preserved.

## Before the update

Fresh metadata identified version 1.1.39. Its current account archive matched all
177 frozen release-owned files plus the exact validated host wrapper. The local
1.1.39 installation also matched those bytes, with no missing, extra or changed
files outside that separately validated wrapper. No unexpected local drift was
discarded. Original cache and private verification evidence were preserved.

## After the update

- Account source read-back: version **1.1.40**, same identity/scope/private
  visibility, new release, updated root manifest and UI shell reference present.
- Fresh current account archive: **178 release-owned files** match the frozen
  release manifest exactly; **179 total files** including the host wrapper.
- Matching-source `python -B scripts/verify-install.py INSTALL_DIRECTORY`: PASS,
  **179 files**, zero missing/extra/changed, with only the exact validated
  `.codex-plugin/plugin.json` reported separately as host metadata.
- Destination: the existing `created-by-me-remote/ibm-design-language/1.1.40`
  cache installation. No manual cache edits were made.
- Fresh native `plugin/list` with forced catalog refresh: version and localVersion
  **1.1.40**, **installed true**, **enabled true**.
- Fresh native `skills/list`, forced reload at the intended repository workspace:
  all three qualified names, enabled, with the exact plugin identity and paths
  under the 1.1.40 destination:
  `ibm-design-language:design-ui`,
  `ibm-design-language:review-product-experience`,
  `ibm-design-language:seat-planner-ui-ux`.

The native CLI app-server probe used one shared monotonic five-second deadline,
including initialize, forced catalog refresh and forced skill scans, without
extra roots or deadline resets. Complete discovery passed in **1.977 seconds**.
Only read-only catalog/discovery calls were needed after the supported account
update; no feature, trust, policy or unrelated configuration change was made.

Complete account/archive, source/manifest/ZIP and installed parity are distinct
checks and all passed. The generated host wrapper was validated against its full
expected shape and identity rather than excluded wholesale. Private identifiers,
signed URLs, full native responses and retained archives remain outside source.

This verifies that destination and fresh native session. Automatic skill
selection, refresh of the existing desktop conversation, other installations,
model-generated product quality and assistive-technology behavior remain
unverified. Use the refreshed skill on the next turn.
