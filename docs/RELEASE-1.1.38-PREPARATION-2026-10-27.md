# 1.1.38 candidate preparation

## Scope and identity

The owner authorized preparation of an unpublished candidate, complete release
gates, and a commit/push plus draft PR for review. This does not include merging,
tagging, publication, installation or marketplace updates.

- Source branch: `codex/carbon-visual-benchmarks-20261027`.
- Base commit: `e9b96ce35f029fe58bc661d3c1c95a3709f03a8d`.
- Source version: **1.1.38, unpublished**.
- Candidate: 198 files; [ZIP](../releases/1.1.38/plugin.zip),
  [file manifest](../releases/1.1.38/files.json),
  [checksum](../releases/1.1.38/SHA256SUMS), and
  [notes](../releases/1.1.38/NOTES.md).
- ZIP SHA-256: `0e2054f026def6d8ca61b0d1495b1cee938a78a9c855175c348f873e894db894`.
- Published recovery remains **1.1.37** from
  `fa2f1fa5e3fed0c3119806fd968ace7a81c5074d`,
  [tag v1.1.37](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.37).

The candidate archive uses sorted package-relative paths, fixed ZIP timestamps
and regular-file modes. No dependency tree, local paths or temporary diagnostic
files are included. Every pre-existing release file and the earlier
`RELEASE_NOTES.md` suffix are preserved byte-for-byte.

## Changes and limits

The [capture index](../plugins/ibm-design-language/skills/design-ui/assets/casebook/screens/README-carbon-benchmarks.md)
links 16 inspected local element crops: table, form, header and filled search,
in White/Gray 100 at 1440px and 390px viewports. Four JSON records identify the
actual capture date, installed versions, platform, source/font fingerprints,
image dimensions and PNG hashes.

The repository fixture gains a screenshot command and explicit font/theme
readiness plus fresh geometry checks. Generated captures are ignored and
promoted manually after review. The table/form cases and header/search
benchmarks route to the related anatomy examples. Their fictional content,
clipped table value and demonstration handlers are preserved and disclosed.

The source version, release-note prefix and verifier CURRENT intentionally
advance for this new candidate. The verifier explicitly retains 1.1.37 in its
archive list. Published recovery/installation guidance remains unchanged.
All three skill entrypoints, fixture runtime and existing assertions,
evaluator code/suites, historical evidence and scores remain unchanged.

Images and fixed fixture gates do not establish functioning product workflows,
assistive-technology behavior or improved model generation. No new 320px/RTL
image matrix, state catalog, consuming-product test or model evaluation is
claimed. Existing keyboard/shell gates retain their bounded test scope.

## Verification

The results below were obtained before the candidate commit. Local checks
apply to the candidate ZIP above and its source tree. CI must additionally pass
on the exact PR head; a future merge/release commit needs its own required CI.

| Check | Result |
|---|---|
| `python -B scripts/verify.py` | **PASS:** 198 source/manifest/ZIP files, all 35 release archives, 426 package-local links and synthetic evaluator checks; zero model calls or installation changes |
| `python -B scripts/verify_release_docs.py --github` | **PASS:** published 1.1.37/tag/commit and unpublished 1.1.38 source documented consistently; downloaded assets and installation are separate |
| Python unit discovery with task-local temporary directory | **PASS:** 38 tests, 36 passed and two host-symlink skips |
| Release fixture `npm run build` and `npm test` | **PASS:** TypeScript/Vite build and eight tests, including the four capture cases; corrected 29/29 and negative controls preserved |
| Keyboard fixture `npm test` | **PASS:** three tests; corrected 13/13 on White/Gray 100 and negative control |
| Prepared Next.js shell `npm run build` and `npm test` | **PASS:** production build and all 20 browser tests |
| `node --test tests/casebook/renderer.test.cjs` | **PASS:** all 25 tests |
| Capture provenance, links and frozen-byte preservation | **PASS:** 16 PNGs/four records and source/font/image hashes; 498 local links across package and changed companion guidance; all 115 pre-existing release files and 170 unaffected package files preserved; prior release-note suffix unchanged |
| Deterministic archive reconstruction | **PASS:** independently rebuilt in memory and byte-identical to the candidate ZIP |
| Whitespace with preserved CRLF endings | **PASS:** `git -c core.whitespace=cr-at-eol diff --check`; existing `* -text` byte policy retained |
| Independent candidate review | **PASS:** no findings; separately verified archive/source/manifest parity, checksum, 115 preserved prior release files, 170 unaffected package files, release-note suffix, capture provenance, 498 local links and published/candidate documentation |

The fixtures use their unchanged pinned lockfiles and matching Chromium.
The candidate browser suites ran outside the Windows sandbox so their runners
could terminate their own test servers; no assertions or runtime assets were
changed. Python used a task-local temporary directory. Two existing symlink
tests skipped because that capability is unavailable on this host; Linux CI
remains required.

Dependency installation/audit reported inherited fixture advisories:
`next@16.3.8` is rated critical and `vite@6.4.3` high. Their existing fixture
manifests/lockfiles were not changed. These dependencies are outside the
skills-only release ZIP; this candidate does not claim they were remediated.
Keep their remediation separate from this teaching-asset change.

Earlier local implementation passed its build, eight release-fixture tests,
25 renderer tests and 36 Python tests with two host-symlink skips. It also
passed a fresh read-only source/image review. Those are historical
implementation results; they are not substituted for the candidate checks
above. The initial local parity failure was expected before this authorized
candidate version/manifest preparation.

## Delivery boundary

This record describes candidate preparation. A draft PR, its exact head and
live CI results will be reported separately. No tag or GitHub release is
created, no published recovery target is advanced, and no installed plugin or
marketplace configuration is changed by this phase.
