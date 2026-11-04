# 1.1.49 installation verification — 3 November 2026

The existing private USER-scoped account plugin was updated through Plugin Creator's
guarded update flow. Its identity, audience, metadata and presentation were preserved.
The native marketplace inventory contained no jp-personal Git installation, so the
uploaded-account recovery route applied; no duplicate marketplace was created.

Before replacement, the freshly downloaded complete 1.1.48 account archive and
installed cache each passed 179-file parity against the frozen 1.1.48 manifest.
The recovery archive remains outside tracked source; no local drift was discarded.
The new package changes only its manifest, release notes, design-ui entry point
and release-gates reference. No package files were removed.

PASS: source read-back confirms 1.1.49 and the updated design-ui entry point.
A freshly downloaded complete account archive and the installed 1.1.49 cache each
pass `python -B scripts/verify-install.py INSTALL_DIRECTORY` from release commit
`bd615db6a6ebc4650bd1103cf8fe60cbb742e270`: 179 files, zero missing, extra or changed,
including the exact validated host compatibility wrapper.

PASS: native app-server `plugin/list` with forceRefetch confirms the same account
identity, version/localVersion 1.1.49, installed and enabled. `skills/list` with
forceReload discovers design-ui, review-product-experience and seat-planner-ui-ux,
all enabled with qualified names, pluginId ibm-design-language@created-by-me-remote
and paths under the installed 1.1.49 directory. Discovery completed in **2.203
seconds**, under one monotonic five-second deadline covering initialization,
catalog and discovery. No extra roots, policy/trust changes or cache edits were used.

This verifies the recorded destination and fresh native session. Existing desktop
conversation refresh, automatic selection and other hosts remain unverified.
See the [publication receipt](RELEASE-1.1.49-VERIFICATION-2026-11-03.md) for the
separate release and downloaded-asset checks.
