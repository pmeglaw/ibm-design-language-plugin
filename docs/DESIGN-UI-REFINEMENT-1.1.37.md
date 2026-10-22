# Design-ui refinement candidate 1.1.37

Prepared on 2026-10-22 from base
`913638dd9859b83916ce414fce7f9ef7c528c69c` on
`codex/design-ui-focused-refinement`. This is an unpublished candidate, not a
release or installation receipt. Published 1.1.36 remains the recovery target.

Before draft-PR delivery, the candidate was reconciled with main commit
`90fdff6b2b5262b59774e682c3b21c2d712ac1a8`, which records the separately
completed 1.1.36 installation. Its installation and recovery documentation are
preserved, and README retains that status alongside the unpublished candidate.
This documentation reconciliation does not change the prepared package bytes.
The release-documentation check caught an outdated repository-contents line
during reconciliation; the candidate line was restored before committing.

## Changes and rationale

| Change | Result and boundary |
|---|---|
| Correct `case-01-a03` | A justified active creation flow can have its own scoped primary action in a modal, nonmodal panel or focused creation task. The page-level New key action remains. Only this criterion and the suite's revision summary change. |
| Separate navigation and rendering | Three guidance locations distinguish pagination/load-more/continuous browsing from virtualization. Virtualization can coexist with pagination when the installed implementation supports it; keyboard, selection, focus and scroll restoration still require verification. |
| Preserve useful secondary actions | Both progressive-disclosure shortcuts now keep frequently used secondary actions visible and reserve overflow for less frequent contextual commands. |
| Add scoped product acceptance | Ordinary header/table/search/form work uses a concise checklist with all 29 geometry and 13 keyboard fixture IDs. It selects applicable outcomes by task, component version and required state, without importing fixture-specific pixels, selectors or irrelevant controls. |
| Keep maintenance evidence separate | Exact fixture definitions and release blockers remain available for maintenance or assertion inspection. Detailed historical practical narratives move to evaluation history; the implementation reference retains a short evidence boundary and its engineering requirements. |

The new checklist preserves ordinary keyboard reachability, the product's
first-focusable skip link, full-content access, normal-viewport containment,
language/direction distinctions, explicit untested states and separate visual,
functional, keyboard and assistive-technology claims. Header/body typography is
explicitly checked against the selected table variant.

The evaluator regression previously required the historical criterion verbatim.
Its updated test asserts that archived wording first, then permits only the exact
documented replacement in a copied expectation. Existing equality checks for the
frozen cases' other assertions, expected outputs and visual dimensions remain.
The frozen evaluation-contract file and evaluator implementation are unchanged.

New baseline/candidate rubric comparisons must use the same revised suite and
matching suite hashes. Existing result packets retain their original criteria;
they must not be regraded in place or compared as an unchanged aggregate score.
The canonical JSON hash of the revised suite is
`3723947fb40729288d03e055fcbb6bf0456aecbfae590e9059b0ac1a58eb9229`.

## Package identity and preservation

The candidate contains 172 files. Thirteen reviewed UTF-8 files differ from the
public 1.1.36 package, including version/release-note bookkeeping and the new
acceptance reference; the other 159 files retain their original hashes. No file
is removed. The paired review and Seat Planner skills, runtime assets, dependency
manifests, canonical fixture assertions, packaged gate definitions and Missed
patterns are unchanged.

Source, ZIP and manifest agree. Candidate ZIP SHA-256:

`377fbd97c527ecd9f14b9b815baaccca2d69267ea3724c656f92bc854a0e98ce`

The moved historical block is exactly 6,514 bytes and remains byte-identical.
Earlier evaluation-history content is an exact prefix; previous release notes
remain an exact suffix. A new preamble explains that preserved references to
guidance "above" refer to the original practical implementation reference.
Frozen releases through 1.1.36 are unchanged and remain verified by the validator.

## Verification performed

| Check | Observed result | Scope |
|---|---|---|
| `python -B scripts/verify.py` | Pass: 172 package files, releases 1.1.4 through 1.1.37, 351 local Markdown file links | Package, manifest, archive, source and evaluator integrity; no model or installer calls |
| Synthetic evaluator tests within the verifier | 55 tests: 54 passed, one Windows-only test skipped on Linux | Harness behavior; not model-generated product quality |
| `python -B -m unittest discover -s tests -p 'test_*.py'` | 38 passed | Repository regression suite |
| `python -B scripts/verify_release_docs.py` | Pass, offline | Published 1.1.36 versus unpublished source 1.1.37 consistency; no installation or downloaded-asset claim |
| `npm run build` in the pinned release fixture | Pass | TypeScript and production bundling; not fixture execution |
| Focused independent source review and follow-up | No remaining actionable findings | Skill guidance, rubric scope, preservation and the regression-test exception |
| Local browser gates | Untested | Chromium downloads returned invalid zero-byte archives; no local rendered, keyboard, casebook or shell-fixture pass is claimed |
| Exact candidate-commit CI | Not run at preparation | Must be checked separately before release |

The initial full verifier failed because the existing regression required the
old `case-01-a03` text. The narrowly updated regression passed, and the complete
verifier then passed. The original failure is not a model-evaluation failure.

The source review checked all 29 geometry and 13 keyboard trace IDs, the intended
JSON changes, historical byte preservation and 112 local file/anchor references
across the changed/new guidance. It identified two small clarity issues: the
relocated historical "above" references and the table-typography omission. Both
were corrected and rechecked. This review did not evaluate generated interfaces.

`git -c core.whitespace=cr-at-eol diff --check` passes. The raw `git diff --check`
returns exit 2 with 38 CRLF-at-EOL diagnostics in the changed, byte-preserved
files. The CRLF-aware result does not replace that raw result. Frozen bytes and
the repository's `* -text` policy are preserved.

## Exploratory hosted build comparison

Two fresh hosted agents received the same bounded equipment-loan screen brief,
with neutral arm labels and only their absolute snapshot/workspace paths changed.
They used actual installed Carbon/React packages and synthetic data. They were
not told which arm was baseline or revised, or the review diagnoses. They could
read their supplied skill tree and installed dependency APIs; source inspection
of the repository's fixture implementation or the other arm was excluded.

This was not the repository's Codex CLI evaluator: no Codex CLI was installed.
The agents inherited the host model/reasoning settings; the exact model identifier
and complete host configuration were not independently observable. There was one
attempt per arm, no independent product-quality grading, and no repeatability or
exclusive-reliance claim. Supporting runtime information and instructions remain
potential confounders.

Both arms used `@carbon/react` 1.117.0, `@carbon/styles` 1.116.0, React/ReactDOM
19.2.0, TypeScript 5.9.3 and Vite 6.4.3 through the same supplied dependency
lockfile. Its SHA-256 is
`f120ee6e971e8ac9541c7bf74e885d8bf65fb63456336a9e84ab8aec7b0befb3`.
The declared `node_modules` symlink pointed to those shared installed dependencies;
it was recorded separately from the application file map.

| Arm | Snapshot | Generation status | Independent build of frozen source copy |
|---|---|---|---|
| `r2` | Frozen published 1.1.36 paired skills | Implementation and decision note completed | Pass: TypeScript and Vite |
| `m6` | Revised draft paired skills, before the final three small follow-ups below | Interrupted before its decision note and final production rebuild; source frozen without assisted completion | Pass: TypeScript and Vite; this does not complete the missing deliverable |

The `m6` snapshot predates the final historical-location preamble, the explicit
table-typography phrase and the evaluator regression adjustment. It is therefore
not an exact-final-candidate evaluation. Its original `dist` predates its last
source adjustment; independent builds used separate copies and did not overwrite
the frozen output. The interruption and missing decision note are disclosed as
incompleteness, not attributed to a demonstrated skill-quality regression.

Snapshot and output identity use SHA-256 over canonical JSON maps of relative
paths to per-file SHA-256 values. Output maps include the handed-off source and
`dist`, and exclude the separately declared dependency symlink.

| Identity | SHA-256 |
|---|---|
| `r2` paired skill map | `d1b31732e773eca074f26bcd82b82c4486e54138b077c8611d940198df51be6d` |
| `m6` paired skill map | `084f9861ca3a130c32a0becd29c5786fd2ddc81e7340156d5f575f59e52e51a7` |
| `r2` frozen application map | `b72a8ff84410e89225c9757794aaf0b5a723f56ce146a381da66c6635930fd24` |
| `m6` frozen application map | `c0b362ae7caee536175d0c821cdd62c0be5ad1334d82769807dbf4b691af3006` |

Rendered appearance and containment at 1920/390/320px, White/Gray 100, English
LTR/RTL, actual keyboard/focus behavior, browser lifecycle behavior, contrast,
loaded-font behavior and assistive-technology results remain untested. No visual
scores or practical pass are assigned. These build results establish compilable
source under the supplied dependencies; they do not establish an improvement
over 1.1.36 or replace the historical practical evaluation. Raw conversations,
generated applications and private probe files are not committed or packaged.

## Remaining evidence and delivery boundaries

The latest packaged completed practical result remains the historical 1.1.17
generation's 9/11 result with two failures. This candidate does not erase that
result or supply a new rendered pass. A future complete comparison should use
the exact final candidate, the same explicit model/settings and dependencies,
frozen completed outputs, independent grading and working browser evidence.

Before publication, the existing exact-commit Windows/Linux, casebook, release,
keyboard and Next.js shell gates remain required. A reviewable branch or PR is
not a merged change, published release or installed plugin. The candidate has
not changed the selected account plugin's version or audience.
