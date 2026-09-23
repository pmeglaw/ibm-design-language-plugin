# Canonical plugin behavioral evaluation — 2026-09-23

The canonical 1.1.7 candidate received six targeted cases. Its refined successor, 1.1.8, received three follow-up cases against unchanged criteria. These are nine model calls, not a full-suite or repeatability result. Earlier Seat Planner derivative scores are excluded.

| Candidate | Case | Assertions passed | Case verdict |
| --- | --- | --- | --- |
| 1.1.7 | 2 | 8/8 | pass |
| 1.1.7 | 4 | 6/7 | fail |
| 1.1.7 | 7 | 6/7 | fail |
| 1.1.7 | 22 | 6/6 | pass |
| 1.1.7 | 23 | 6/6 | pass |
| 1.1.7 | 24 | 3/3 | pass |
| 1.1.8 | 2 | 8/8 | pass |
| 1.1.8 | 4 | 6/7 | fail |
| 1.1.8 | 7 | 7/7 | pass |

## Findings and changes

- Added evidence-reporting guidance distinguishing source/caption reads from image inspection and source calculations from browser measurements.
- Made untested container choices provisional, with observable reasons to reconsider them. The modal follow-up passed all seven assertions; its initial run missed the reconsideration criterion.
- Corrected contrast scope to essential information and actual adjacent surfaces; preserved requested labeled dots while explaining Carbon's distinct-symbol alternative. Primary references: [WCAG non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) and [Carbon status indicators](https://carbondesignsystem.com/patterns/status-indicator-pattern/).
- The strict status assertion still fails: delivered marks are identical circles. Both versions retain complete visible labels and independently pass 18/18 essential boundary/text contrast checks on the stated default/hover surfaces. This is a Carbon pattern/rubric miss, not proof of a color-only WCAG violation. The failure was not relabeled as a pass.
- Image-inspection claims in several responses are not independently substantiated by the retained CLI event stream. Missing events may reflect logging coverage; they do not prove viewing never occurred. Those limits remain despite the guidance change.
- Case 24's wording says “verifies,” while its frozen prompt and expected output permit a requested inspection. It passed as guidance only; no rendered typography test was credited. Clarify that contract in a separately versioned future rubric before a broader comparison.

## Method and limits

Codex CLI 0.156.1, configured gpt-6-astra, medium reasoning, 600-second per-case ceiling, ephemeral workspace-write runs. Exact entrypoint and supporting snapshot delivered; case outputs generated in isolated temporary directories. Python was 3.9.6 on this host, below the harness documentation's recommended 3.11+, with successful execution and scoring; supported-runtime and Windows/Linux CI coverage remain unverified. Declared config hashes are retained only in local raw archives; host policies and other context are not claimed to be eliminated.

A separate agent graded each response without generating it. The grader knew version paths and reviewed the follow-up after initial cases; grading was not blind. Initial overbroad critical-finding classifications were corrected without changing assertion outcomes; original reviews remain archived. None of these guidance cases establishes a working production UI, browser appearance, assistive-technology behavior or installed-plugin discovery. Web retrieval failures are disclosed in outputs. Single runs on known cases do not establish general improvement.

## Evidence and replay

[Structured results and reviews](results.json) identify exact snapshot hashes, criteria, verdicts, limitations, and raw archive SHA-256 values. This public summary omits host configuration fingerprints and redacts local absolute paths; hashes refer to the original archived bytes. Full packets, generated files, initial/final reviews, calculations and execution logs are preserved locally under ignored `.verification/behavior/` as ZIPs; raw transcripts are not included in tracked source. Frozen 1.1.7 and 1.1.8 releases preserve the respective skill bytes.

To audit locally, extract an archive into a fresh temporary directory and run its archived `snapshot/scripts/evaluate.py score` for each case with that directory's `review.json`, then `report`. Original command, prompt and review-path fields retain their historical temporary locations; do not rewrite archives or scores. The raw archives must be retained separately if sharing the summary. No plugin installation, commit, push, tag or publication occurred.

## Final local validation

Skill validation, diff whitespace review (preserving CRLF), 171 plugin-relative links, JSON/Python parsing, archive/source identity and all 41 synthetic evaluator tests passed. Release archives 1.1.4–1.1.8 verified; implementation assets and evaluator source remain unchanged from the repository base. Both raw evaluation ZIPs passed checksum and CRC checks. Extracting the refined packet into a fresh temporary directory and rescoring reproduced 21/22 with the expected non-passing report exit. No application code changed; Seat Planner application tests were not run.
