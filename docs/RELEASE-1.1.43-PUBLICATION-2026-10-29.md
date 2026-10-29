# 1.1.43 publication verification — 29 October 2026

- [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.43), immutable tag `v1.1.43`.
- Full release commit: `ec62468dd6481fed8fe22a01dec8d627fad5f1b9`.
- Published: 2026-10-29T22:44:17Z.
- Implementation: [PR #85](https://github.com/pmeglaw/ibm-design-language-plugin/pull/85).

The tag resolves to the reviewed merged commit. The package adds version-qualified
Carbon React deprecated import and prop checks and main-skill routing. No product,
dependency, runtime asset or fixture assertion changes. Seat Planner remains
unchanged. Earlier frozen packages and evidence are preserved.

## Exact-commit CI

All listed workflows passed on the release commit before publication:

- [Verify release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40967865410): success.
- [Seat evaluation adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40967864954): success.
- [Push on main](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40967864701): success.
- [Verify plugin](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40967865068): success.

Verify plugin includes Windows/Linux package checks, release and keyboard fixtures,
casebook and production Next.js shell. PR checks also passed before merge. Local
checks are recorded in the unchanged [preparation record](RELEASE-1.1.43-PREPARATION-2026-10-29.md);
these are reused local results for the byte-identical merged package, not new
model or assistive-technology evaluation.

## Downloaded assets

All four published assets were downloaded and compared byte-for-byte with frozen
repository files. ZIP integrity and all 178 entry hashes match source and manifest.

| Asset | SHA-256 |
|---|---|
| NOTES.md | `0838edde497e7e0b11f54ab3b0ed78aa0278ea3b60a0003697dd1c1da2abd57b` |
| SHA256SUMS | `7b9b59ee1c5c06a64efccc9e9d66ab378fae42098c95e9c57fa9f4a2f86f4eea` |
| files.json | `b0d894967fabe7030f46cf5aea06519f376f026430b0b5d4ae4104b1161f9e6c` |
| plugin.zip | `1c59d0a208f6aa6e8d1c47b27340355596a0f15b60212fbca13cc880d89eb1a5` |

## Documentation transition and destination

- Preserved [push transition failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40968129958).
- Preserved [release transition failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40968115365).
- Preserved [push transition failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40968114701).

The publication transition checks failed while companion documentation still
selected 1.1.42 after latest became 1.1.43. The delivery-documentation follow-up
selects the verified release and retains those failures; its passing validation
is a separate result, not a retroactive pass. Local live release/tag verification
and 22 focused documentation regressions passed before committing the follow-up.

The existing private account plugin was separately updated and verified; see the
[installation receipt](INSTALLATION-1.1.43-VERIFICATION-2026-10-29.md). Private URLs,
account identifiers and raw responses remain outside source. No generated-product
quality, automatic selection, existing-chat refresh or AT result is claimed.
