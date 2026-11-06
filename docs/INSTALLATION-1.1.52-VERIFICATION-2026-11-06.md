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

## Desktop chat follow-up - 6 November 2026

PASS: a later read-only check of the existing desktop chat's injected skill
catalog confirmed all three qualified skills listed above were available from
the retained `ibm-design-language@created-by-me-remote` plugin at **1.1.52**.
Their catalog paths resolve under
`created-by-me-remote/ibm-design-language/1.1.52/skills/`; no skills from the
`ibm-design-language@jp-personal` duplicate appear in that chat's catalog.

With the checkout at `b47416f5cedeef699fd20e7eb0a6f3374c80eff1`, a separate
read-only hash check confirmed that all three referenced `SKILL.md` files match
`releases/1.1.52/files.json`. The installed manifest also reports 1.1.52.
This establishes discovery and availability in this existing desktop chat.
No reinstall, cache edit or settings change was performed. Automatic skill
selection was not exercised by that discovery check; the separate tests below
address it within their stated scope.

## Desktop automatic-selection tests - 6 November 2026

PASS: three separately authorized fresh desktop chats each received one relevant
read-only request, without naming or explicitly invoking a skill. The checkout
was on `main` at `59083dddd1f977584c09aa23086dd4eb93c92db3`. The requests asked for
Carbon guidance or critiques of hypothetical workflows, not changes to a product
or inspection of real product data. This section records the completed tests;
preparing this documentation update did not rerun them.

| Request | Automatically selected skill | Observed result |
| --- | --- | --- |
| Carbon spacing and IBM Plex typography for a compact settings form | `ibm-design-language:design-ui` | PASS: selected and successfully loaded |
| Information architecture and responsive flow of a fictional expense application | `ibm-design-language:review-product-experience` | PASS: selected and successfully loaded |
| Hypothetical Bench seat-map search, inspector and publish-review flow | `ibm-design-language:seat-planner-ui-ux` | PASS: selected and successfully loaded |

Each inspected desktop trace shows a completed `Get-Content` command with exit
code 0 for the expected entrypoint under
`created-by-me-remote/ibm-design-language/1.1.52/skills/<skill>/SKILL.md`.
This verifies selection and successful loading from the retained plugin, beyond
catalog availability or an assistant's statement that it used a skill.

Before/after checks found identical configuration-file and complete 179-file
installed-plugin hashes, with the same `main` commit and clean working tree.
The tests did not change settings, plugin files or repository content, and did
not install or publish anything. Raw chat traces remain outside this public
receipt.

The scope is **one request per skill in three fresh desktop chats**. These are
three successful observations, not repeated trials or a guarantee for other
wording, existing chats, future requests or other hosts. No unrelated negative
control was run in the desktop chats. Generated-product quality and production
integration were not evaluated.

## Preserved failures and limits

The CLI account selector could not resolve the plugin by package name. An initial
native install request using that name also returned not found; the supported
native installer succeeded with the verified backend plugin ID. These failed
name-resolution attempts are preserved in the private evidence. The personal
sharing reader returned HTTP 400, so a complete audience read was unavailable;
private USER metadata was confirmed before and after, and no sharing mutation ran.

Earlier standalone CLI selection probes were inconclusive: the Carbon and
product-flow probes encountered `registered Core launch requires an installed app`
during file reads, and the Bench probe showed no skill read. An unrelated checksum
control showed no IBM skill invocation. These CLI observations remain separate
from the three successful desktop tests and are not counted as desktop evidence.

The original fresh native-session checks alone did not establish refresh of an
existing desktop chat. The discovery follow-up separately confirms availability
in the inspected chat; the later desktop tests confirm automatic selection and
loading only for the three requests above. Automatic selection outside those
requests, refresh of other existing desktop chats, other-host installation and
generated-product quality remain unverified. No dependency installation or
public release change ran.
The original publication receipt retains its publication-only scope, and earlier
installation receipts remain unchanged historical evidence.
