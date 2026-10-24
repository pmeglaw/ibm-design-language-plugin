# 1.1.37 publication and downloaded-asset verification

24 October 2026. Publication time below is UTC. This receipt establishes
publication identity and downloaded bytes, not destination installation or
generated-product quality.

## Published identity

- Stable release: [v1.1.37](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.37).
- Published at: `2026-10-24T19:58:44Z`; release ID `422950425`.
- Immutable tag: `v1.1.37`, resolved to `fa2f1fa5e3fed0c3119806fd968ace7a81c5074d`.
- The four uploaded assets are the unchanged files committed in `releases/1.1.37/`.
- All 177 downloaded ZIP entries match both the manifest and source.

The existing-tag release form retains `main` in GitHub's target_commitish
field. The independently resolved immutable tag establishes the actual commit;
the later documentation correction does not retarget the package.

## Public downloads

All four assets were freshly downloaded without authentication from their final
public URLs into a new ignored verification directory. Every byte matches the
frozen asset. The downloaded checksum agrees with the ZIP; all 177 entry hashes
match the downloaded manifest and source. Duplicate, unsafe and symlink entries
were rejected, and the ZIP CRC check passed. Upload digests alone were not used
as downloaded-byte proof.

| Asset | Bytes | SHA-256 | Result |
| --- | ---: | --- | --- |
| [NOTES.md](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.37/NOTES.md) | 1,093 | `3957465c7845c27e382615676161f852fb0c90af2d3704d4a3e7d5c7c85239ae` | exact match |
| [SHA256SUMS](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.37/SHA256SUMS) | 77 | `5cdf6fc97f2cffe2e20d4a5148cbe4f26f4d35b148018a87d6b58ed5cd70933f` | exact match |
| [files.json](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.37/files.json) | 23,287 | `775ccf72cc6c1a34951794671ec43d0dc8f7c0fd590fea9a03b676492dbdc62f` | exact match |
| [plugin.zip](https://github.com/pmeglaw/ibm-design-language-plugin/releases/download/v1.1.37/plugin.zip) | 4,282,690 | `e5c57f25c688262c9846c2ea5334ee7733e408049dff1309b896089f77d825e7` | exact match |

## CI and documentation transition

All nine validation jobs passed on the exact merged release target before
publication: [package/browser gates](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40127160338),
[adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40127160458)
and [release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40127160329).
The new tag's additional runs also passed before publication:
[package/browser gates](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40127553785),
[adapter](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40127553701)
and [release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40127553694).
These model-free fixture results do not establish model-quality or AT passes.

Publication temporarily made default-branch guidance stale: it still described
published 1.1.36. The unchanged local live documentation check failed with
`GitHub latest release differs from documented version`, and
[publication workflow 40127715552](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/40127715552) failed.
Those failures are preserved; the failed workflow was not rerun or erased.
The transition updates README, Recovery, Installation and History and adds this
receipt. It preserves all older Version entries, rollback identities, dated
receipts, preparation notes, package assets and assertions. Maintenance CURRENT
stays 1.1.37. The accompanying documentation PR and
[documentation workflow](https://github.com/pmeglaw/ibm-design-language-plugin/actions/workflows/verify-release-docs.yml)
record subsequent correction-commit and merged-main CI separately.

Package preflight passed before publication: 177 payload files, all 34 release
archives, 397 local links and 55 synthetic evaluator tests. No new local browser
or model evaluation is claimed for publication; the exact-target browser CI
above supplies that bounded regression evidence. Earlier failed local attempts
and the two host-symlink skips retain their original preparation scope.

## Scope, preservation and installation limits

The owner authorized 1.1.37 publication, public-download verification and current
documentation reconciliation. Installation and marketplace updates remain
separate. No account update, installer, marketplace edit or fresh destination
discovery ran. Present destination version/parity/enabled state and 1.1.37
discovery remain unverified. The earlier
[1.1.36 installation receipt](INSTALLATION-1.1.36-VERIFICATION-2026-10-21.md)
retains its dated scope; publication does not activate the new guidance there.

All 33 earlier release archives, historical evidence and scores, evaluators,
runtime assets and dependencies are preserved. The three skill identities and
frontmatter blocks and both sibling SKILL.md files are unchanged; design-ui
routing intentionally changes. Local heuristics remain separate from official
summaries and productive Carbon contracts. Only three selected static Gallery
assets add visual observations. Complete visual/production catalogs, asset
permissions and consuming-product runtime/theme/AT results remain partial or
unverified. No narrow/RTL remediation, Seat Planner skill change, migration,
model evaluation or historical regrading ran.

Frozen package release notes and `releases/1.1.37/NOTES.md` retain their original
unpublished preparation wording. The [preparation record](RELEASE-1.1.37-PREPARATION-2026-10-24.md)
and [reference-review record](UI-DESIGN-COVERAGE-2026-10-24.md) are unchanged.
This receipt and the published GitHub release establish the later publication.

GitHub CLI was not authenticated. Supported Git authentication pushed only the
new tag; the existing authenticated Chrome session published the release and
four assets through supported browser controls. No credentials were extracted,
copied or added, and no security settings changed.
