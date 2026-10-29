# 1.1.45 publication verification — 29 October 2026

- [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.45), immutable tag `v1.1.45`.
- Full release commit: `412068d0f164a57e1f3a5d540daae3188897c954`.
- Published: 2026-10-29T23:08:49Z.
- Implementation: [PR #89](https://github.com/pmeglaw/ibm-design-language-plugin/pull/89).

The tag resolves to the reviewed merged commit. The package adds version-qualified
Carbon Sass and token deprecation checks and main-skill routing. No product,
dependency, runtime asset or fixture assertion changes. Seat Planner remains
unchanged. Earlier frozen packages and evidence are preserved.

## Exact-commit CI

All listed workflows passed on the release commit before publication:

- [Seat evaluation adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40970795618): success.
- [Verify plugin](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40970795723): success.
- [Verify release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40970795706): success.
- [Push on main](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40970795464): success.

Verify plugin includes Windows/Linux package checks, release and keyboard fixtures,
casebook and production Next.js shell. PR checks also passed before merge. Local
checks are recorded in the unchanged [preparation record](RELEASE-1.1.45-PREPARATION-2026-10-29.md);
these are reused local results for the byte-identical merged package, not new
model or assistive-technology evaluation.

## Downloaded assets

All four published assets were downloaded and compared byte-for-byte with frozen
repository files. ZIP integrity and all 178 entry hashes match source and manifest.

| Asset | SHA-256 |
|---|---|
| NOTES.md | `ee6653b96aa2266e94b7259d94440da38d7157df9baea8e28dc9b904c15094ff` |
| SHA256SUMS | `0ea7f1f326dc7352705764492444cea18bf133d3942f9db5ac5744899b2aa018` |
| files.json | `ae3fd63f4e534d11d8e5a7432908020b2e83432871f547b361cde65ed1009546` |
| plugin.zip | `5ef4ef4e855b9602a544da57430d8807d6001b804de1fcdda22ba866f85873f8` |

## Documentation transition and destination

- Preserved [release transition failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40971085949).
- Preserved [push transition failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40971085021).

The publication transition checks failed while companion documentation still
selected 1.1.44 after latest became 1.1.45. The delivery-documentation follow-up
selects the verified release and retains those failures; its passing validation
is a separate result, not a retroactive pass. Local live release/tag verification
and 22 focused documentation regressions passed before committing the follow-up.

The existing private account plugin was separately updated and verified; see the
[installation receipt](INSTALLATION-1.1.45-VERIFICATION-2026-10-29.md). Private URLs,
account identifiers and raw responses remain outside source. No generated-product
quality, automatic selection, existing-chat refresh or AT result is claimed.
