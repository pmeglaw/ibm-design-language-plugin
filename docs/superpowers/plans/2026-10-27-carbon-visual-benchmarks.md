# Carbon Visual Benchmarks Implementation Plan

The initial local implementation below is complete. The subsequently authorized
1.1.38 candidate, commit/push and draft-PR phase is tracked separately in
[candidate preparation](../../RELEASE-1.1.38-PREPARATION-2026-10-27.md).
The original phase's local/uncommitted restrictions below describe that phase;
merging, publication and installation remain outside the candidate/PR phase.

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task by task. Keep work local and uncommitted.

**Goal:** Supply real Carbon table/form anatomy examples, plus header/search, alongside the static casebook.

**Architecture:** Add a dedicated Playwright capture command to the existing release fixture. Capture its corrected regions with the pinned dependencies, copy reviewed PNGs into reference assets, and describe their provenance and limits.

**Tech Stack:** Carbon React 1.117.0, Carbon styles 1.116.0, Playwright Test 1.63.0, TypeScript, Markdown.

**Spec:** Owner-supplied `ibm-design-language-plugin-handoff-2026-10-27.md` (table/form first, header/search extension).

## Global constraints

- Preserve frozen releases, evaluator assertions, historical scores and existing fixture behavior.
- No version bump, commit, push, PR, release, installation or model evaluation in this local task.
- Capture White and Gray 100 at 1440x900 and 390x844; 320px, RTL, state expansion and AT are out of scope.
- Describe fixture examples as related anatomy references with different content, not reproductions of the casebook studies.

## Review focus

- Fonts and selected theme must be ready before capture; fail when expected fonts do not load.
- A stale geometry summary must not stand in for the current layout; read the judge after readiness.
- Keep raw generated captures ignored; promote reviewed assets explicitly.
- Cropped regions must retain useful context and preserve narrow overflow honestly.
- Local package edits intentionally fail frozen-source parity; preserve and report that failure.

### Task 1: Capture command and baseline

**Files:** `tests/release-fixture/tests/screenshots.spec.ts`, its `package.json`, `.gitignore` and `README.md`.

- [x] Verify untouched package integrity and existing release fixture tests.
- [x] Add four theme/viewport capture cases, waiting for Plex fonts and the painted theme; require all 29 corrected checks from a fresh judge run.
- [x] Capture table, form, header and search without caret/focus artifacts and save per-combination metadata with versions, browser, viewport, dimensions and PNG hashes.
- [x] Add `npm run screenshots`; ignore generated captures; document regeneration and evidence boundaries.
- [x] Run the fixture build and complete fixture test command.

### Task 2: Reviewed assets and reference routing

**Files:** `design-ui/assets/casebook/screens/carbon-*`, `references/casebook/{table,form}.md`, `references/{visual-casebook,ui-shell,forms-and-upload}.md`.

- [x] Inspect all 16 PNGs, promote them and their provenance metadata, and record the review.
- [x] Add table/form images and header/search links, with all theme/viewport combinations discoverable in the asset README.
- [x] Verify local links, metadata hashes, frozen paths and the final diff.
- [x] Run Python regressions and the offline verifier; report expected frozen-source mismatch separately from fixture results.
- [x] Obtain one fresh read-only review, address important findings, and leave the local branch uncommitted.
