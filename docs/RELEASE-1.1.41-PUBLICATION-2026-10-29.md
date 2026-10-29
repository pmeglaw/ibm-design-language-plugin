# 1.1.41 publication verification — 29 October 2026

- [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.41), immutable tag `v1.1.41`.
- Full release commit: `c5b31f4c47ffae0516a9245bb73720101d77e07b`.
- Published: 2026-10-29T21:40:19Z (14:40:19 PDT).
- Merged implementation: [PR #81](https://github.com/pmeglaw/ibm-design-language-plugin/pull/81).

The tag resolves to that exact reviewed merged commit. The package adds a dated
Carbon deprecation checklist and main-skill link. Dependencies, runtime assets,
product code, fixture assertions and earlier frozen releases remain unchanged.

## Exact-commit CI

All four workflow runs passed on the release commit before publication:

- [Verify plugin](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40959412799): Windows/Linux package checks, release, keyboard, casebook and Next.js shell fixtures.
- [Seat evaluation adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40959412734): Windows/Linux checks.
- [Release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40959412753): published 1.1.40 / candidate 1.1.41 distinction.
- [Analysis](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40959412634).

PR checks also passed before merge. Local checks are recorded in the unchanged
[preparation record](RELEASE-1.1.41-PREPARATION-2026-10-29.md); these are reused
local fixture results for the byte-identical merged package, not model or AT tests.

## Downloaded asset integrity

All four published assets were downloaded and compared byte-for-byte with the
frozen repository assets. ZIP integrity and all 178 entry hashes match the source
and `releases/1.1.41/files.json`.

| Asset | SHA-256 |
|---|---|
| NOTES.md | `5de4a386ad59089859dc2333501d241de9cc24d52f42eecb73b53708720de31b` |
| SHA256SUMS | `14418f51ea1824c34706d3dcb388d844f3ce6f7269d3ec3d06def3f1cfdc5d2f` |
| files.json | `dd091310ccccecdca7d6eca1acccc14443bd928f9d5cf1d22d458fcbd527878e` |
| plugin.zip | `a6ec45f21960f6eefeff2035bbc525ce4f9b429f8b948baf2e5cf7c69f599a1d` |

## Documentation transition and destination

The [release-triggered documentation check](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40959748829)
and [tag-push documentation check](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40959747837)
failed during the transition because current companion docs still selected 1.1.40
when the latest release became 1.1.41. Those failures remain preserved. This
companion-documentation follow-up selects the actual delivered 1.1.41 release and
records installation separately. Its validation is a separate result, not a
retroactive pass for either transition run.

The existing private account plugin was updated through its supported flow;
see the [installation receipt](INSTALLATION-1.1.41-VERIFICATION-2026-10-29.md).
Private download URLs, identifiers and raw responses remain outside source.
No model-generated product improvement, automatic selection, existing conversation
refresh or assistive-technology certification is claimed.
