# Local UI-design reference improvements

## Scope and plan

Base: `42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`, published package 1.1.36.
Branch: `codex/ui-design-coverage-1.1.36`. The initial reference amendment left
the package version unchanged. After review, the owner authorized local 1.1.37
candidate preparation; see the [preparation record](RELEASE-1.1.37-PREPARATION-2026-10-24.md).
Frozen earlier releases, evidence, scores, evaluators and installations remain
unchanged. The initial scope excluded commit, push, PR, tag and publication;
the later Git handoff authorization is recorded in the preparation record.

- Add focused local playbooks for expressive layout/Gallery, identity/app icons,
  imagery, creative animation and infographic/chart selection.
- Add desktop composition corrections using the existing benchmark boundaries.
- Connect register/brand decisions through design-ui routing, composition, color
  and taste; retain all three skill entrypoints and their frontmatter.
- Update only affected source coverage and limits; preserve authority order and
  historical evaluation/benchmark receipts.
- Run the unchanged offline verifier, unit regressions and focused metadata/link/
  preservation checks. Do not run or regrade model evaluations.

## Source and version intake

Official public IBM Design Language prose and Carbon guideline routes were
inspected on 2026-10-24. New references link their specific sources and label
local craft judgments separately. Three static Gallery assets were visually
inspected; no live product or complete gallery was exercised.

The plugin has no installed Carbon runtime. Repository fixtures pin React
1.117.0 and styles 1.116.0. A separately available installed package was inspected
read-only (React 1.118.0, styles 1.117.0); it does not change fixture or historical
benchmark versions. Context7 discovery returned main-branch material, including
legacy Sass syntax; it was not used to assert new released APIs. Direct official
design prose and existing version-qualified receipts govern this amendment.

## Verification record

Before edits, `python -B scripts/verify.py` passed: 171 working-package files,
33 frozen releases, 337 local links, synthetic evaluator tests, zero model calls
and zero installation changes.

The initial unit run hit sandbox temporary-directory write errors. Retrying
with Python's temporary directory inside ignored `.verification/test-temp`
passed: 38 tests, two skipped. No assertions were changed.

The following checks record the initial unversioned amendment on the base above,
before the later authorized 1.1.37 preparation:

| Check | Result and boundary |
|---|---|
| `python -B scripts/verify.py` | **FAIL:** `Plugin differs from frozen release`. All 33 archive checksum/ZIP-manifest checks execute before this parity assertion and passed. Working references intentionally differ; the script and manifests were not changed |
| `python -B -m unittest discover -s tests -p 'test_*.py'` with a task-local temporary directory | **PASS:** 38 tests, two skipped by the existing suite; final run 2.416s. No model calls or installation |
| `python -B -X utf8 plugins/ibm-design-language/skills/design-ui/scripts/test_evaluate.py` with task-local `IBM_EVAL_TEST_TMP` | **PASS:** 55 synthetic tests, 4.007s; this is evaluator regression testing, not a model evaluation |
| Task-local reference/preservation check | **PASS:** exactly 12 intended changed/new files; 454 other tracked files byte-identical to HEAD, including frozen releases, evidence, evaluators, fixtures and scripts |
| Local links, anchors and JSON | **PASS:** 466 package Markdown links; 29 anchors in changed guidance; all package JSON parses and source-map local references resolve |
| Skill frontmatter | **PASS:** YAML parsed for all three unique entrypoints; all three frontmatter blocks byte-identical to HEAD; the two sibling SKILL.md files entirely unchanged |
| Authority and historical records | **PASS:** authority order, original source entries outside this amendment, casebook record, audit and published evaluation records preserved |
| Existing evaluator suites | **PASS:** unchanged suite schemas validate (21/121, 3/15 and 4/19 cases/assertions); no assertions or scores changed |
| `git diff --check` and focused diff review | **PASS:** no whitespace errors; unchanged source-map regions retain their original bytes/line endings |
| Direct external URL probe | **PARTIAL:** 27 of 34 returned HTTP 200; seven Carbon URLs returned HTTP 403 to standard-library requests. Web retrieval supplied the six current Carbon guideline/overview texts; Gantt retrieval was a cached page from about three weeks earlier. This is source access, not endpoint/runtime acceptance |
| Runtime, full theme matrix, keyboard, AT and model quality | **UNTESTED:** no new product, Storybook or model runs; existing historical evidence retains its limits |

The task-local checks and logs are in ignored `.verification/`. They supplement
the explicit failure of the unchanged release-parity gate; they do not turn it
into a passing release check. No frozen release bytes were regenerated.

## Files and decisions improved

New references under `plugins/ibm-design-language/skills/design-ui/references/`:

- `expressive-surfaces.md`: region/register choice, hybrid page composition,
  expressive layout and three observed Gallery stills.
- `brand-marks-and-app-icons.md`: 8-bar/Rebus contracts, corporate versus app
  identity, app-icon branches and placement corrections.
- `imagery-and-illustration.md`: illustration branch/fidelity choice, photography
  subject/crop decisions and accessible handoff.
- `creative-animation.md`: narrative/loop choice, storyboarding and the boundary
  between creative animation and live component motion.
- `infographics-and-chart-selection.md`: conceptual symbols versus real-data
  graphics, diagram/infogram decisions and catalog-family routing/API limits.
- `composition-craft.md`: desktop hierarchy, reading edges, spacing, regional
  density, action scope and state-growth correction pairs.

Modified `design-ui/SKILL.md` routing, `references/source-map.json`, and the
cross-references/decision paths in `color-and-brand.md`, `composition.md` and
`taste.md`. At the initial amendment stage, this task record was the only changed
file outside the working package. The later candidate adds version/release
bookkeeping described in its preparation record.

## Remaining limits and next step

Coverage is deliberately partial. Complete Gallery and visual asset catalogs,
illustration Usage/Production branches, source kits, asset permissions, chart
options/exports and actual product delivery remain to be checked for a concrete
task. New guidance is source-grounded author synthesis, not demonstrated model
improvement or new official IBM policy.

## Local review follow-up, 2026-10-24

The local diff and all six new references received an independent read-only
editorial/source review, alongside the primary review. Public-source intake,
selected official pages and all three Gallery stills were inspected. This was
artifact review, not a model evaluation or a regrading of historical results.

No critical or important findings. One minor routing issue was found and fixed:
the new animation and imagery guidance referred to accessibility.md for criteria
it does not contain. The new references now link directly to W3C Pause, Stop,
Hide, Three Flashes or Below Threshold, and the WAI image decision tree, with
brief applicability guidance. The existing accessibility reference remains
unchanged. The reviewer rechecked the correction and found no remaining issue.

Focused preservation, local-link/anchor, JSON and YAML checks passed again:
12 intended files, 454 unrelated/protected tracked files unchanged, 466 local
links, 29 anchors and all three entrypoints preserved. The three new W3C URLs
returned HTTP 200. `git diff --check` passed. The unchanged offline verifier was
rerun and still fails solely at working-source parity after checking all frozen
archives. Prior unit/synthetic regression results above were reused for these
link/prose-only corrections; no executable code or evaluator changed.

Reviewed working package: 177 files. File-map SHA-256:
`b318a404098c8f32f7a72136d6f22584516dc52b74b687770807fec788da30c0`.
This hashes the sorted relative-path-to-file-SHA256 map serialized as JSON with
sorted keys and compact separators.

Local version/release preparation was subsequently authorized and is recorded
separately. No commit, push, PR, tag, publication, installation or marketplace
update had been performed at the end of that preparation. The owner later
approved commit, push and PR creation; merge, tag, publication, installation and
marketplace updates remain outside this task's approval.
