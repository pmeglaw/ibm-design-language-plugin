# 1.1.44 publication verification — 29 October 2026

- [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.44).
- Immutable tag: `v1.1.44`; full commit: `8ba51becc9362bf247667d37f0b92d9cc79b0ecb`.
- Implementation: [PR #86](https://github.com/pmeglaw/ibm-design-language-plugin/pull/86).

Before publication, exact merged-commit workflows passed:
- [Verify plugin](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40969371365), including Windows/Linux package checks, casebook, release fixture, behavior fixture and Next.js shell.
- [Release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40969371391).
- [Seat evaluation adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40969371366).
- [Push on main](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40969371393).

Local exact-commit package verification passed: 178 files, 402 local links,
synthetic evaluator tests, preserved frozen packages through 1.1.44. The earlier
unit suite passed 38 tests with two skips; no new model evaluation ran.

All four public release assets were downloaded and matched byte-for-byte.
ZIP integrity and all 178 entry hashes match the manifest and source.

| Asset | SHA-256 |
|---|---|
| files.json | `2927bf46edc80dda3ff3928a5634888ae3e49e5b10f6132dacc004d0af3dd2e3` |
| NOTES.md | `9c4b55da95b47ff6f48cf50c95952377dc010cf02530cb968d8143587a4a8169` |
| plugin.zip | `14874e9e25091b72a3387d89e30021a6cc1ce7f688955993aeaa79045590eb64` |
| SHA256SUMS | `a882cd5111cfb5acc3f89df301e28c85c8dc68095b0693ce69c9e3ce72c8c351` |

Frozen candidate notes retain their original unpublished wording as history;
the GitHub release description and this receipt establish publication.
Destination verification is separate in the [installation receipt](INSTALLATION-1.1.44-VERIFICATION-2026-10-29.md).
No Bench change, dependency change, product-quality or AT certification is claimed.
