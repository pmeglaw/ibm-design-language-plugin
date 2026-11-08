# 1.1.53 installation verification — 8 November 2026 UTC

The existing "Created by you" account plugin
`ibm-design-language@created-by-me-remote` was updated from 1.1.52 to **1.1.53**
through Plugin Creator, guarded by its observed current release ID. Its backend
identity, private USER scope, name, description, presentation, settings and
enabled state were preserved. No duplicate plugin or marketplace was created.

## Release and file parity

The installation matches the [published release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.53) at immutable commit
`73891e8088c21049c27631b943f31b52e6d27eb1`. ZIP SHA-256:
`0e8f75d0e455294117a0e57c7f9f69c927b906bd68037fe6353d5b0669fd8290`. Public assets were downloaded and verified during this delivery;
see the [publication receipt](RELEASE-1.1.53-PUBLICATION-2026-11-08.md).

Before updating, both the complete downloaded 1.1.52 account archive and installed
cache passed 179-file parity against their release and exact host wrapper.
Private recovery archives were retained. The update archive contained the 178
release-owned files plus the existing `.codex-plugin/plugin.json`, changing only
its version to match 1.1.53.

PASS: `python -B scripts/verify-install.py INSTALL_DIRECTORY`, run from the
1.1.53 release checkout, reported 179 files with zero missing, extra or changed
files for both the newly downloaded account archive and the installed cache.
All 179 account/cache files also match one another byte-for-byte. The host wrapper
was validated separately from the 178-entry release manifest.

## Native state and bounded discovery

PASS: a fresh native app-server `plugin/list` with `forceRefetch: true` reports
remote/local version 1.1.53, `installed: true` and `enabled: true` for the retained
identity. All non-version catalog fields compare equal to the pre-update record.

PASS: `skills/list` with `forceReload: true` returned all three enabled skills
under that plugin's 1.1.53 destination in **1.099 seconds**:

- `ibm-design-language:design-ui`
- `ibm-design-language:review-product-experience`
- `ibm-design-language:seat-planner-ui-ux`

One shared monotonic five-second deadline covered initialization, catalog refresh
and discovery. The pre-update 1.1.52 discovery passed in 0.945 seconds. No extra
discovery roots, manual cache edits or policy changes were used. Publication,
account update, file parity and discovery are independently checked states.

Existing desktop-conversation refresh, automatic selection at 1.1.53, other
hosts, generated-product quality and assistive-technology conformance remain
unverified. Historical 1.1.52 observations retain their original scope and do not
establish those outcomes for this version.
