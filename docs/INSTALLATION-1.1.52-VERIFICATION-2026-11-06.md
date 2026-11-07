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

## Sidebar configuration follow-up - 6 November 2026

A later read-only investigation, with the checkout on `main` at
`6f1192e84d5e95b1d8ec72d674de9877ee238f0e`, found one addition to the global
Codex `config.toml`: `code-review-sidebar-layout = "detailed"` under `[desktop]`.
The file's modification time was **6 November 2026 at 16:13:35 Pacific**
(`2026-11-07T00:13:35.9495282Z`). Removing only that line in memory reproduced
the recorded pre-change file SHA-256 exactly. No other configuration bytes
changed, including plugin settings. The earlier unchanged-configuration results
above retain their original check-time scope; this was a later observation.

Inspection of the installed Codex desktop version **26.1103.4239.0** identified
this as a Code Review sidebar display preference. Its default is already
`detailed`, so the added line explicitly records the existing default without
changing the effective layout. The "Detailed" action in "Sidebar display
options" is a code path that saves this value. The logs did not identify the
initiating action or actor: **attribution remains unverified**. That possible
save path is not proof of what caused this write.

PASS: read-only checks during the investigation confirmed the retained
`ibm-design-language@created-by-me-remote` manifest still reports **1.1.52**,
and the complete 179-file installed-cache hash map is identical to the preceding
verified baseline. All three retained skills remained available in the desktop
chat's injected catalog, and their entrypoint files remained readable. The
`ibm-design-language@jp-personal` duplicate's cache and configuration entry
remained absent. The sidebar preference does not change plugin configuration,
identity or files. No corrective plugin or settings change was needed.

This section records the completed investigation; preparing this receipt update
did not repeat the account download, native discovery session or automatic-selection
tests. The three successful desktop tests retain their **one-request-per-skill**
scope, and broader automatic selection remains unverified. Neither the
investigation nor this documentation update changed settings, installed anything
or published a release. Raw configuration and logs remain outside this public
receipt.

## Final synchronization check - 6 November 2026

PASS: after [PR #114](https://github.com/pmeglaw/ibm-design-language-plugin/pull/114)
merged, a final read-only check confirmed local and remote `main` at
`60b7e182466bdb80ff850ded1df5216fda33bd5c`, with a clean working tree. The
sidebar-setting receipt matched the committed copy on remote `main`. All
**15 checks across five workflow runs** passed on that exact merge commit,
including [plugin verification and both evaluator platforms](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42320751747),
[live release-documentation validation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42320751441),
[table guidance](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42320751529),
[seat evaluation adapters](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42320751487)
and [security analysis](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42320750663).
These are results for that merged commit, not CI for this receipt addition.

PASS: 1.1.52 remained the latest stable published release, with its tag resolving
to `ea8b1534b37757359037263bd8fb9bea3b366d88`. All four public assets and the
current retained account archive were freshly downloaded into memory. The public
assets matched the frozen release bytes, including the ZIP checksum recorded
above; all 178 ZIP/source files matched `files.json`. The source package and
frozen releases were unchanged from the release commit.

PASS: all **179 files** in the downloaded account archive matched the installed
cache. `python -B scripts/verify-install.py INSTALL_DIRECTORY` independently
reported zero missing, extra or changed files and the exact validated host
wrapper. The retained `ibm-design-language@created-by-me-remote` account remained
private USER-scoped, installed and enabled, with both remote and local version
1.1.52. Its identity and catalog settings remained preserved.

PASS: fresh native discovery returned all three enabled qualified skills listed
above in **1.357 seconds**, on the first `skills/list` attempt. One shared
monotonic five-second deadline covered initialization, the `plugin/list` catalog
refresh and skill discovery. Every skill belonged to the retained plugin and
resolved under its 1.1.52 destination. The existing desktop chat's injected
catalog also contained all three skills.

The `ibm-design-language@jp-personal` duplicate remained uninstalled and disabled
in the native catalog, with no cache, configuration entry or discovered skills.
The global configuration and installed-plugin hashes were unchanged. The
sidebar setting still matched the earlier observation, and its initiating action
and actor remain **unverified**.

This section records that completed check; preparing this documentation patch
does not repeat the downloads or discovery session. Automatic selection was not
retested: the earlier three successful desktop tests retain their
**one-request-per-skill** scope. Neither the check nor this receipt update changed
settings, published a release or installed anything. Raw account data and logs
remain outside this public receipt.

## Conversation-mode follow-up - 6 November 2026

A separate read-only investigation, with the checkout at
`f233fcd32474b283cb384454a2a0e5ef9b5e5a01`, identified a later change to
`conversationDetailMode` under `[desktop]` in the global Codex configuration:
`STEPS_COMMANDS` became `STEPS_PROSE`. The file's modification time was
**6 November 2026 at 17:16:52 Pacific** (`2026-11-07T01:16:52Z`). Restoring the
previous value in memory reproduced the preceding verified file SHA-256 exactly;
all other configuration bytes were unchanged, including plugin settings and the
sidebar layout. The earlier 1.357-second check and its preservation statements
retain their original check-time scope.

Code inspection of Codex desktop **26.1103.4239.0** maps this setting from
coding/command detail to everyday/prose mode. That mode can hide technical tool
output and instruct the assistant to use less technical language and omit implicit
skill-use announcements. The mode selector is a code path that saves this value,
but the available logs did not establish the initiating action or actor.
**Attribution remains unverified.**

PASS: the retained `ibm-design-language@created-by-me-remote` plugin remained
installed and enabled, with remote and local version **1.1.52**. All
**179 installed files** matched the previously verified hash map. Fresh native
discovery returned all three enabled qualified skills listed above in
**0.845 seconds**, on the first `skills/list` attempt, within one shared
monotonic five-second deadline covering initialization, catalog refresh and
discovery. Each skill belonged to the retained plugin at its 1.1.52 destination.

The `ibm-design-language@jp-personal` duplicate remained uninstalled and disabled,
with no cache, configuration entry or discovered skills. The global configuration
was unchanged during the discovery check, and the working tree remained clean
at the commit recorded above.

During receipt preparation, a later read-only check found `STEPS_COMMANDS`
restored, with a configuration modification time of **6 November 2026 at
17:24:47 Pacific** (`2026-11-07T01:24:47Z`). The complete configuration hash again
matched the earlier commands-mode snapshot, and all 179 plugin files remained
unchanged. The initiating action and actor for this reversion are also
**unverified**; this documentation update did not change the setting.

The 0.845-second result records installation integrity and skill availability
for the preceding `STEPS_PROSE` configuration. **Automatic selection under
`STEPS_PROSE` remains unverified**;
the earlier three successful desktop tests retain their **one-request-per-skill**
scope and do not establish selection under that mode. No automatic-selection
tests, account downloads or public release-asset downloads were repeated during
this investigation. Preparing this receipt update does not rerun discovery.
Neither the investigation nor this update changed settings, pushed commits,
published a release or installed anything. Raw configuration and logs remain
outside this public receipt.

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
