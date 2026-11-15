# 1.1.56 publication verification

[PR #122](https://github.com/pmeglaw/ibm-design-language-plugin/pull/122) added the fourth skill and registered it in the offline evaluation catalog. The stable [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.56) and tag `v1.1.56` identify commit `ff05ea7b38ccc42306474a5f5ab30e85a57abf8d`. Its tree matches candidate `dba9a9b7dd67a9ae5254ec975a62fd2cb78daebe`.

The [package, evaluator and browser jobs](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43663129265) passed on that commit, including Windows and Linux package verification and the release, keyboard and Next.js fixtures. Locally the skill validator and package verifier passed, the Python suite ran 51 tests with two platform skips, and all 56 browser fixture tests passed.

All four downloaded assets match the frozen candidate. ZIP integrity, the SHA-256 checksum and all 179 file hashes passed. Archive SHA-256 is `51ebf8c9caac78a35f620315d66975976a92ae54e8e49ee76480b69f5aaf3369`.

The initial tag-push and release-event documentation checks saw 1.1.56 on GitHub while the default branch still documented 1.1.55. Both reported that version mismatch. The immutable tag keeps its original documentation. The release-event workflow checks the default branch again when rerun after the companion documentation merges. [Tag-push run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43663271464) · [Release-event run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43663274437)

Independent designers using the old and new packages both chose the correct text styles and colors for an embedded reading guide. Only the new package offered a dedicated skill by name. A separate helper-text question led to an explicit field-helper role. A fresh reviewer then found the role in the skill itself and correctly withheld a contrast verdict without rendered colors. These exercises used written scenarios. See the separate [installation receipt](INSTALLATION-1.1.56-VERIFICATION-2026-11-15.md).
