# 1.1.52 installation verification - 6 November 2026

The separately authorized installation updated the existing private USER-scoped
account plugin `ibm-design-language@created-by-me-remote`, shown as "Created by you",
from 1.1.51 to **1.1.52**. After verifying that retained copy, the separate
`ibm-design-language@jp-personal` installation under "JP Personal Plugins" was
removed. This receipt summarizes the saved installation evidence; preparing this
documentation patch did not repeat the update or uninstall.

## Release and identity

The installed package matches the [published 1.1.52 release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.52)
from immutable commit `ea8b1534b37757359037263bd8fb9bea3b366d88`.
The frozen `plugin.zip` SHA-256 is
`39bc285fc7d8ae93dc472e9fe9af6d7721ffc46b444eae87172d054a5cadd59e`.
The four public asset downloads and exact-release CI are reused evidence from the
[publication receipt](RELEASE-1.1.52-PUBLICATION-2026-11-06.md), not new public
downloads or CI runs performed during installation. The account archives were
freshly downloaded before and after this update.

PASS: the retained account's backend ID, host plugin identity, name, description,
private USER scope, presentation, default prompt, keywords, enabled state and
authentication policy were preserved. The host catalog reports both remote and
local version 1.1.52. No second account plugin or marketplace was created.

Before the update, all 179 files in the downloaded 1.1.51 account archive matched
the installed cache and its frozen release plus host wrapper. That archive and
the duplicate's cache were backed up privately. The update used the verified
1.1.52 package bytes and retained the compatibility wrapper's existing values,
changing only its version to match. Frozen releases were not modified.

## File parity and discovery

PASS: `python -B scripts/verify-install.py INSTALL_DIRECTORY` reported 179 files,
zero missing, extra or changed files, and the exact validated
`.codex-plugin/plugin.json` wrapper as host metadata. The 178 release-owned files
match `releases/1.1.52/files.json`; the complete downloaded account archive and
installed cache also match one another across all 179 files.

The verifier ran from checkout `9187c9b1eac3c8c4417cb19928162a41345cdec1`.
Its package, release manifest and verifier are unchanged from the immutable
release commit above. The checkout's tree also matches documentation merge
`1fb6696dc9305136cbd2d98e3c4cfbe648bea4f3`; neither documentation commit is a new
package release.

PASS: a fresh native app-server session using codex-cli 0.165.0 confirmed the
retained plugin installed and enabled through `plugin/list` with `forceRefetch`.
`skills/list` with `forceReload` returned all three enabled qualified skills at
the retained plugin's 1.1.52 destination:

- `ibm-design-language:design-ui`
- `ibm-design-language:review-product-experience`
- `ibm-design-language:seat-planner-ui-ux`

Each skill has pluginId `ibm-design-language@created-by-me-remote`. Discovery
passed in **0.922 seconds before removal** and **0.986 seconds after removal**.
Each check used one shared monotonic five-second deadline covering initialization,
catalog refresh and discovery. No extra discovery roots, policy/trust changes or
manual cache edits were used.

## Duplicate removal and preservation

Only after the retained plugin passed parity and discovery was
`codex plugin remove ibm-design-language@jp-personal --json` run. PASS: its cache
and configuration entry were removed; the final native catalog reports that
copy with `installed: false` and `enabled: false`, and fresh skill discovery
contains no skills belonging to it. The retained account copy remains installed
and enabled at 1.1.52.

The repository's "JP Personal Plugins" catalog entry remains available; an
available catalog card or its source version does not establish installation.
The repository source and catalog were preserved. A semantic configuration hash
excluding the single removed duplicate entry is unchanged, and the retained
plugin's catalog settings compare equal to the pre-update values apart from
version metadata. Private recovery archives and raw verification records remain
outside the public documentation.

## Preserved failures and limits

The CLI account selector could not resolve the plugin by package name. An initial
native install request using that name also returned not found; the supported
native installer succeeded with the verified backend plugin ID. These failed
name-resolution attempts are preserved in the private evidence. The personal
sharing reader returned HTTP 400, so a complete audience read was unavailable;
private USER metadata was confirmed before and after, and no sharing mutation ran.

Fresh native discovery does not establish refresh of an existing desktop chat,
automatic skill selection, other-host installation or generated-product quality.
No new model evaluation, dependency installation or public release change ran.
The original publication receipt retains its publication-only scope, and earlier
installation receipts remain unchanged historical evidence.
