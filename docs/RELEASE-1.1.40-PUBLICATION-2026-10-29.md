# 1.1.40 publication verification — 29 October 2026

## Published identity

- [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.40)
- Immutable tag: `v1.1.40`
- Full release commit: `e602082a6a7d291297fbce0478fa166f3f89cea4`
- Published: 29 October 2026, 17:53:21 UTC (10:53:21 PDT).
- Merged implementation: [PR #79](https://github.com/pmeglaw/ibm-design-language-plugin/pull/79).

The tag resolves to the reviewed merged commit. The package adds the
[dated UI shell reference](../plugins/ibm-design-language/skills/design-ui/references/ui-shell-observed-2026-10-29.md)
and routing, without changing product code, dependencies, runtime assets or fixture
assertions. Earlier frozen releases and evidence remain unchanged.

## Exact-commit CI

All four workflow runs completed successfully on the release commit before
publication:

- [Verify plugin](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40925236694):
  Windows/Linux package verification, release fixture, keyboard fixture,
  casebook and Next.js shell gates.
- [Seat evaluation adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40925236607):
  Windows/Linux adapter checks.
- [Release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40925236689):
  then-current published 1.1.39 / candidate 1.1.40 distinction.
- [Analysis](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40925235443).

The PR checks also passed before merge. Local commands and bounded review are
recorded in the unchanged [preparation record](RELEASE-1.1.40-PREPARATION-2026-10-29.md).
Those local fixture results are reused evidence for the byte-identical merged
package, not new model or assistive-technology tests.

## Downloaded asset integrity

All four assets were downloaded from the published release and compared
byte-for-byte with the frozen repository assets. The 178 ZIP entries match
`releases/1.1.40/files.json` and the source; archive integrity passed.

| Asset | SHA-256 |
|---|---|
| plugin.zip | `8a4c9cc2321ab3ff5ecdd3b3cca495b7aaaa4347766437503a752632ef1f8d87` |
| files.json | `2501df312523691396ea0a761a19ce06b0d6115416c2af61e555d38edb44a44f` |
| SHA256SUMS | `4ce2a017ed97385913673dac45be1c9e13a7dd04af606e4e4cb11eff330a54c5` |
| NOTES.md | `1b6a6062a68bd04d21e9045cff13d81b58d97b74ae941aaa1fa884b3d3d3b8e6` |

## Documentation transition and destination

The [publication-triggered documentation run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40925600348)
failed during the transition because the default-branch companion documentation
still selected 1.1.39 when the latest release became 1.1.40. This genuine
transition failure remains preserved. The subsequent companion-documentation
follow-up updates README, installation, recovery and history to 1.1.40 and adds
these receipts. Its local `python -B scripts/verify_release_docs.py --github`
passes with the release/tag identity; the follow-up's Git CI is a separate result,
not a retroactive pass for the publication-triggered run.

Publication alone did not prove installation. The existing private account
plugin was subsequently updated through its supported flow, with complete
parity, enabled state and fresh discovery verified in the separate
[installation receipt](INSTALLATION-1.1.40-VERIFICATION-2026-10-29.md).

Private download URLs, account identifiers and raw responses stay outside source.
No generated-product improvement, touch/keyboard/AT, RTL, native zoom,
reduced-motion or complete-theme verification is claimed by this release.
