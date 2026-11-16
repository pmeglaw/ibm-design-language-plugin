# 1.1.58 publication verification

[PR #126](https://github.com/pmeglaw/ibm-design-language-plugin/pull/126) corrected a finding from PR #124 in the typography and color skill and shared palette reference. The stable [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.58) and tag `v1.1.58` identify commit `d98ecf18db093ef44cf8706250fc191bc06d3bd0`. Its tree matches candidate `84b9e1b83c20f7cc67ab0775d77513892a6c0b82`.

The [package, evaluator and browser jobs](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43918085442) passed on that commit, including Windows and Linux package verification and the release, keyboard and Next.js fixtures. Locally the skill validator and package verifier passed, the Python suite ran 51 tests with two platform skips, and all 56 browser fixture tests passed.

All four downloaded assets match the frozen candidate. ZIP integrity, the SHA-256 checksum and all 179 file hashes passed. Archive SHA-256 is `632d1bb5cab0c231e1bf24e3cd60eef17595feeada415c729ad7f7e560a4a273`.

The first tag-push and release-event documentation checks saw 1.1.58 on GitHub while the default branch still documented 1.1.57. Both reported that mismatch. The release-event check reads the updated default branch when rerun after the companion documentation merges. [Tag-push run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43918362682) · [Release-event run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43918372810)

In a written handoff test, the designer using 1.1.57 could not substantiate a pictogram angle or rule on a radial fill. A fresh designer using this update specified a 45° linear pictogram gradient, retained the approved expressive master, and correctly applied the separate curved-stroke illustration gradient along the stroke. The two IBM documentation section links resolved to the cited guidance. See the [installation receipt](INSTALLATION-1.1.58-VERIFICATION-2026-11-16.md).
