# 1.1.55 publication verification

[PR #120](https://github.com/pmeglaw/ibm-design-language-plugin/pull/120) delivered the shared breakpoint review guidance. The stable [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.55) and tag `v1.1.55` resolve to `b283b8a3f37bd55a9979eda8f9471566d5382dd8`. The merged tree matches the tested candidate `18fcff98da3f142a86fbaafcbce4de086eb6f187`.

The [package, evaluator and browser jobs](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43561786509) passed on that commit. Windows and Linux verified the package and evaluator. Local verification covered all frozen archives, skill validation, 51 unit tests with two platform skips, and 56 passing browser tests across the release, keyboard, shell and casebook suites.

All four downloaded assets match the candidate byte for byte. ZIP integrity and all 178 manifest entries passed. Archive SHA-256 is `9765700b37e1c914a747cb323a202291d9be9b33317d872a7295444dde9edf07`.

A replay on an existing prototype compared 520px and 521px at a fixed height of 740px. The first option moved down 112.7px and the number of fully visible names and prices dropped from two to one. This verifies that the review procedure exposes the reported issue in that artifact. Its effect on new designs remains unmeasured. See the separate [installation receipt](INSTALLATION-1.1.55-VERIFICATION-2026-11-14.md).

The first [publication-triggered documentation check](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43561966980) and the [tag-push check](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/43561963865) both found the previous published version in the documentation. After the companion updates merge, verify the default-branch documentation run and rerun the release-event job against that checkout. The tag records the original candidate files.
