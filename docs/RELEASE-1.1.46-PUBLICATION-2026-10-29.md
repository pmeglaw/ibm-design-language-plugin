# 1.1.46 publication verification — 29 October 2026

- [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.46), immutable tag `v1.1.46`.
- Full release commit: `85ceab4ef61844fb65d58dc92aee766f9958f4ec`.
- Published: 2026-10-29T23:29:52Z.
- Implementation: [PR #91](https://github.com/pmeglaw/ibm-design-language-plugin/pull/91).

The tag resolves to the reviewed merged commit. The package adds version-qualified
stable Carbon Sass warning fix checks and main-skill routing. No product,
dependency, runtime asset or fixture assertion changes. Seat Planner remains
unchanged. Earlier frozen packages and evidence are preserved.

## Exact-commit CI

All listed workflows passed on the release commit before publication:

- [Push on main](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40973297266): success.
- [Seat evaluation adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40973297214): success.
- [Verify release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40973297160): success.
- [Verify plugin](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40973297135): success.

Verify plugin includes Windows/Linux package checks, release and keyboard fixtures,
casebook and production Next.js shell. PR checks also passed before merge. Local
checks are recorded in the unchanged [preparation record](RELEASE-1.1.46-PREPARATION-2026-10-29.md);
these are reused local results for the byte-identical merged package, not new
model or assistive-technology evaluation.

## Downloaded assets

All four published assets were downloaded and compared byte-for-byte with frozen
repository files. ZIP integrity and all 178 entry hashes match source and manifest.

| Asset | SHA-256 |
|---|---|
| NOTES.md | `39bd6102d1844794e4a1c7def947d87d6a55dcdf5648ac25595cd9bb2075c523` |
| SHA256SUMS | `2e7a043676e58002c4afcff31b36de96733262d1342574ffae5d77f355b1c0a3` |
| files.json | `91b5c97e665d99b6b3bff7e7cb65c4146e83973f9fad8ce191659c09b0ad20d4` |
| plugin.zip | `3334337cadf80259ff1b2b1c4f46db009d8dd7c29d2cac63aed3fa7ee7c0143b` |

## Documentation transition and destination

- Preserved [release transition failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40973529132).
- Preserved [push transition failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40973516320).

The publication transition checks failed while companion documentation still
selected 1.1.45 after latest became 1.1.46. The delivery-documentation follow-up
selects the verified release and retains those failures; its passing validation
is a separate result, not a retroactive pass. Local live release/tag verification
and 22 focused documentation regressions passed before committing the follow-up.
An initial follow-up check caught a stale README archive-directory reference; it
was corrected before the final passing checks. Generated receipt punctuation was
also normalized to UTF-8. Frozen release bytes were not changed.

The existing private account plugin was separately updated and verified; see the
[installation receipt](INSTALLATION-1.1.46-VERIFICATION-2026-10-29.md). Private URLs,
account identifiers and raw responses remain outside source. No generated-product
quality, automatic selection, existing-chat refresh or AT result is claimed.
