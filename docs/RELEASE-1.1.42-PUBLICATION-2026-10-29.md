# 1.1.42 publication verification — 29 October 2026

- [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.42), immutable tag `v1.1.42`.
- Full release commit: `0020d5be7606634578917493a762f58d09fd42ed`.
- Published: 2026-10-29T21:59:18Z (14:59:18 PDT).
- Merged implementation: [PR #83](https://github.com/pmeglaw/ibm-design-language-plugin/pull/83).

The tag resolves to that reviewed merged commit. The package extends the
framework deprecation checklist with IBM Products checks and main-skill routing.
No product, dependency, runtime asset or fixture assertion changes. Seat Planner
remains unchanged. Earlier frozen releases and evidence are preserved.

## Exact-commit CI

All four workflows passed on the release commit before publication:

- [Verify plugin](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40962017665): Windows/Linux package verification, release fixture, keyboard fixture, casebook and production Next.js shell.
- [Seat evaluation adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40962017628): Windows/Linux adapter checks.
- [Release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40962017647): then-current published 1.1.41 / candidate 1.1.42 distinction.
- [Analysis](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40962016857).

PR checks passed before merge. Local checks are in the unchanged
[preparation record](RELEASE-1.1.42-PREPARATION-2026-10-29.md); they are reused
local evidence for the byte-identical merged package, not model or AT tests.

## Downloaded asset integrity

All four published assets were downloaded and compared byte-for-byte with the
frozen repository assets. ZIP integrity and all 178 entry hashes match the source
and `releases/1.1.42/files.json`.

| Asset | SHA-256 |
|---|---|
| NOTES.md | `9a23b68ffedbeba88874213acf644bc6f88db5067ce1b980fa01ed7b1f17d8e5` |
| SHA256SUMS | `fff5a5e78f1a8a54269a6d14ff3bf3bee3abbaa131ecab4002af96c4827d06f9` |
| files.json | `54282e0959aa0129bc5ef9c32814f9b3ef42f0d137b7f558dc2dd5674e13843f` |
| plugin.zip | `adba0955775b518d217fab9a5eb6466697c38e8fe629645266d45e480716cc79` |

## Documentation transition and destination

The [release-triggered documentation check](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40962284422)
and [tag-push documentation check](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40962283680)
failed during the transition because current companion docs still selected 1.1.41
when latest became 1.1.42. Preserve those genuine failures. This documentation
follow-up selects the delivered release; its checks are separate results, not
retroactive passes for transition runs. Local live release/tag consistency and
22 focused documentation regressions passed before this follow-up was committed.

The same private account plugin was updated through its supported flow; see the
[installation receipt](INSTALLATION-1.1.42-VERIFICATION-2026-10-29.md).
Private URLs, identifiers and raw responses remain outside source. No automatic
selection, existing-conversation refresh, model quality or AT result is claimed.
