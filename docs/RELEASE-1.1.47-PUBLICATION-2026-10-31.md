# 1.1.47 publication verification — 31 October 2026

- [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.47), immutable tag `v1.1.47`.
- Full release commit: `d469633cfa77c3652d111cb05da5c46f8e3c52fd`.
- Published: 2026-10-31T22:35:21Z.
- Implementation: [PR #95](https://github.com/pmeglaw/ibm-design-language-plugin/pull/95).

The tag resolves to the merged commit, whose tree is identical to the reviewed PR
head `a611f1c`. The package restores missing spaces between words and numbers in
shipped reference text; each edited file differs from 1.1.46 only by inserted
spaces. No product, dependency, runtime asset or fixture assertion changes. Seat
Planner remains unchanged. Earlier frozen packages and evidence are preserved.

## Exact-commit CI

All listed workflows passed on the release commit before publication:

- [Push on main](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41247904362): success.
- [Seat evaluation adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41247904571): success.
- [Verify release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41247904588): success.
- [Verify plugin](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41247904468): success.

Verify plugin includes Windows/Linux package checks, release and keyboard fixtures,
casebook and production Next.js shell. PR checks also passed before merge. Local
checks are recorded in the unchanged [preparation record](RELEASE-1.1.47-PREPARATION-2026-10-31.md);
these are reused local results for the byte-identical merged package, not new
model or assistive-technology evaluation.

## Downloaded assets

All four published assets were downloaded and compared byte-for-byte with frozen
repository files. `sha256sum -c SHA256SUMS` passed, and ZIP integrity and all 178
entry hashes match the manifest.

| Asset | SHA-256 |
|---|---|
| NOTES.md | `bce4a3fa5d8b6c93c41a1b88f60f7c7c4bfbbd4888505c66d75f2d72c7406f02` |
| SHA256SUMS | `c5bd0a3e3ba64a1a8586976acfd96c8264bb2f939e166bcc8bdcde83507eeb32` |
| files.json | `19eb6d6d237ee12aea8255a6b2342ad8d2238ce34f4c3e9a7419383d0fc2cd1a` |
| plugin.zip | `006aac5e6f4f3b3184355eca79cd7499ae9362c5825e55b02d1e62348ef41b40` |

## Documentation transition and destination

- Preserved [release transition failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41248870345).
- Preserved [tag push transition failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41248870138).

These checks failed because companion documentation still selected 1.1.46 after
latest became 1.1.47; a local `verify_release_docs.py --github` run reported the
same cause. This follow-up selects the verified release and retains those failures;
its passing validation is a separate result, not a retroactive pass. Frozen
release bytes were not changed.

Installation is not verified. This publication was verified from a cloud session
without access to the owner's computer, so the existing private account plugin
has not been updated or checked for 1.1.47; its latest verification is the
[1.1.46 installation receipt](INSTALLATION-1.1.46-VERIFICATION-2026-10-29.md).
Until a 1.1.47 installation receipt exists, local and published versions are not
confirmed in sync. No generated-product quality, automatic selection,
existing-chat refresh or AT result is claimed.
