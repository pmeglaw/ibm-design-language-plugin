# 1.1.41 existing-plugin update verification — 29 October 2026

The same existing private USER-scoped account plugin was updated through Plugin
Creator's supported update flow after [publication and asset verification](RELEASE-1.1.41-PUBLICATION-2026-10-29.md).
Identity, scope, private sharing, description and presentation were preserved.
No duplicate Git marketplace installation or manual cache edit was made.

## Before the update

Fresh account metadata identified 1.1.40. Its freshly downloaded complete account
archive matched all 178 frozen release-owned files plus the exact validated host
wrapper. The local 1.1.40 installation matched the same manifest, 179 files with
zero missing, extra or changed files. Recovery archive and private evidence remain
preserved. No unexpected drift was discarded.

## After the update

- Account source read-back: same identity/private scope, version **1.1.41**, new
  release, checklist and main-skill link present.
- Fresh account archive: all **178 release-owned files** match the frozen release;
  **179 total files**, including the exact separately validated host wrapper.
- Matching-source `python -B scripts/verify-install.py INSTALL_DIRECTORY`: PASS,
  **179 files**, zero missing/extra/changed; only the validated host wrapper is
  reported separately as host metadata.
- Destination: existing `created-by-me-remote/ibm-design-language/1.1.41` cache.
- Forced fresh native catalog: version and localVersion **1.1.41**, installed
  **true**, enabled **true**, exact existing plugin identity.
- Forced fresh skill discovery at the intended workspace: all three qualified
  names, enabled, correct identity and paths under 1.1.41:
  `ibm-design-language:design-ui`, `ibm-design-language:review-product-experience`,
  `ibm-design-language:seat-planner-ui-ux`.

The native app-server probe used one shared monotonic five-second deadline for
initialize, forced catalog refresh and forced skill scans. It passed in **2.099
seconds**, with no extra roots or deadline reset. An initial attempt used a missing
native executable path and did not start the server; the successful probe used
the actual installed native binary resolved from the environment. No configuration,
feature, trust or policy changes were made.

Complete account parity, destination parity, enabled state and fresh discovery
are separate checks and all passed. Private raw evidence and account archives
remain outside source. This verifies that destination and fresh native session;
existing desktop-conversation refresh, automatic selection, other installations,
model-generated product quality and AT behavior remain unverified. Use the updated
skill on the next turn.
