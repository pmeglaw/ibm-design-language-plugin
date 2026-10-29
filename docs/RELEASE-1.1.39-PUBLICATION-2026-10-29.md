# 1.1.39 publication verification

Verified 29 October 2026 PDT.

## Identity and delivery

- [Published v1.1.39](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.39).
- Immutable tag resolves directly to `d34cb0621b636fcc72d4971eb411d79cddd16c84`, the reviewed merge of [PR #76](https://github.com/pmeglaw/ibm-design-language-plugin/pull/76).
- Published at `2026-10-29T16:41:14Z`; no previous tag was moved.
- All 12 exact-merge checks passed before publication: Windows/Linux package and
  adapter, release, keyboard, casebook, production shell, documentation and analysis.
  [Package/browser CI](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40913435400),
  [documentation CI](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40913435340).
- Independent package review found no actionable defects. Source, manifest and
  archive contain 177 matching files; 175 skill files match frozen 1.1.37.
  All 119 prior release files remain unchanged.

All four published assets were downloaded without authentication and compared
byte-for-byte with the committed files. All 177 ZIP entries match the downloaded
manifest, and the downloaded checksum matches the ZIP.

| Asset | SHA-256 |
|---|---|
| files.json | `e539f8271fbdb30ec173bf2a32fb70384abd12f2a35b71064167ca19c097d07d` |
| NOTES.md | `54b0b75310f28fcb2e2753afc3e8d9b0703d297fca8d05fbfdb588d15e3aaa84` |
| plugin.zip | `b69dd299002d804b9e6e85bc898d20c42adc2a74e24080b404c20004c60c9ec2` |
| SHA256SUMS | `d0234399abfe78dcfe49e03be54ba135e83cb73dc144227b73dbf813b4129769` |

## Transition and limits

At publication, default-branch documentation still identified published 1.1.38.
The initial live local documentation check failed with the expected latest-release
mismatch. That result and the [publication-event documentation failure](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40914019543) remain preserved;
current companion documentation is corrected in a separate follow-up, without
rewriting frozen package notes, archives or historical receipts.

The existing account and installed payload already match this release. Their
parity, enabled state and unresolved fresh-discovery failures are recorded in the
[installation verification](INSTALLATION-1.1.39-VERIFICATION-2026-10-29.md).
Publication and byte parity do not establish discovery readiness, automatic
selection, desktop refresh, improved generated output or AT certification.
