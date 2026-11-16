# 1.1.57 publication verification

[PR #124](https://github.com/pmeglaw/ibm-design-language-plugin/pull/124) updated the existing skill and its shared palette reference using the two IBM Design Language sources. The stable [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.57) and tag `v1.1.57` identify commit `ae1df20c49572013a92bfed20857cbaaf21d951f`. Its tree matches candidate `97fca300f485b046722c7aad69c9066bf91c1acc`.

The [package, evaluator and browser jobs](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43664536564) passed on that commit, including Windows and Linux package verification and the release, keyboard and Next.js fixtures. Locally the skill validator and package verifier passed, the Python suite ran 51 tests with two platform skips, and all 56 browser fixture tests passed.

All four downloaded assets match the frozen candidate. ZIP integrity, the SHA-256 checksum and all 179 file hashes passed. Archive SHA-256 is `804d7a1dd77eea72c37bb7d80d89d32fa3aeb9183ad167f605a65a58de2d19cf`.

The first tag-push and release-event documentation checks saw 1.1.57 on GitHub while the default branch still documented 1.1.56. Both reported the version mismatch. The release-event check can read the updated default branch after the companion documentation merges. [Tag-push run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43664638936) · [Release-event run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43664641394)

An independent designer used the released skill to propose a two-color gradient but could not substantiate the pair or the angle rule from its references. A fresh designer used the updated skill to identify Blue 60 and Cyan 50 as an approved pairing, explain the scope of the artwork guidance, and find both original IBM pages directly. The same handoff covered Arabic font coverage and the renderer needed for a stacked fraction. These were written reference tests. See the separate [installation receipt](INSTALLATION-1.1.57-VERIFICATION-2026-11-15.md).
