# Evaluation history and evidence boundaries

Historical observations inform this skill. They are not a universal performance guarantee and should not be embedded as expected answers in future unseen prompts.

## Completed comparisons

| Separate protocol | Observed result | Interpretation |
|---|---|---|
| Repaired baseline 1.1.3 versus rc.1: API-key, billing and motion | Both 19/20 assertions and 2/3 cases; API-key visuals all 4/5 | No overall candidate advantage in that sample |
| rc.1 versus rc.2: API-key build | 8/10 versus 10/10; visuals tied at 4/5 | Better semantic-token consumption in one pair; rc.2 still used a generic disabled-text role outside that broad criterion |
| rc.1 versus rc.2: theme switching, nested layers and disabled states | 29/30 versus 30/30; visuals tied at 4/5 | One corrected Gray 100 disabled-button fill; theme and layer cases tied |

The first row used six model attempts, the second two and the third six. These were distinct protocols with one sample per case/version. Review was non-blind and involved the skill author. They followed an earlier 12-attempt comparison that included two timeouts; its archive remains separate. Do not pool these results or claim statistical superiority.

The three-case transfer comparison used standalone HTML/CSS/JS prototypes, four explicit themes, and desktop/mobile review. It does not establish installed Carbon React Theme/Layer behavior. Readable/enabled-text contrast measurements passed; those checks do not certify inactive controls, screen-reader output or all visual states.

## Composition comparison: frozen 1.1.4 versus 1.1.5-rc.1

The separate composition-transfer-v1.2 protocol completed six approved attempts with gpt-6-astra/high, Codex CLI 0.155.0 and 1200 seconds per attempt. Five returned valid responses. All 72 required screenshots were reviewed: 60 formal and 12 diagnostic-only.

| Case | Baseline | Candidate | Comparison |
|---|---|---|---|
| Handoff queue | 12/12; five visual scores of 4/5 | 12/12; five visual scores of 4/5 | Tie |
| Partial bulk update | Execution failed; 12 formally untested | 12/12; five visual scores of 4/5 | Incomplete |
| Workshop | 12/12; five visual scores of 4/5 | 12/12; five visual scores of 4/5 | Tie |

Baseline coverage is 24 passed plus 12 formally untested out of 36; candidate coverage is 36/36. Keep the failed attempt in the denominator. Its diagnostic checks cannot confer a formal pass. The positive-transfer condition was not met; improvement remains unproven.

During candidate handoff generation, the host added `model_reasoning_summary="concise"`. The user approved continuation with disclosure; explicit model and high reasoning stayed fixed. This was not an unchanged-host comparison. The bulk baseline then failed after a usage-limit error during automatic approval review, with no final response. That review failure was not a determination that the action was unsafe. After renewed credit authorization, only the remaining workshop runs continued. No replacement runs were made.

Eight earlier composition attempts under separate protocols remain archived (six finished responses, including two invalid directory artifact lists, one quota failure and one interruption). With these six attempts, the composition history totals fourteen. Do not pool protocols. Cases were reused, one sample per case/version, and review was by the known-version primary author, not an independent blind judge. The comparison is of packages, not causal evidence for the casebook. Standalone prototypes, fallback fonts and two themes do not certify installed Carbon React behavior, Plex rendering or assistive technology.

The directory-list failures motivated a common external evaluator correction, frozen before the latest six runs. That exact evaluator is now integrated into rc.2 with five additional synthetic tests. No new model run evaluates rc.2 itself. Design instructions, the casebook and bundled case assertions are unchanged from rc.1.

## Candidate provenance

Stable 1.1.4 promoted the exact rc.2 skill. Its canonical relative-path-to-file-hash map SHA-256 is 768dfe2d099ced47cdee0106688cc3306f42a5b6215349afe8a1bcf6848c298a.

The repaired comparison harness SHA-256 is 600e9c73799e86482c5eaf8f5bb5a792ba6a8205baa8189543e1a1d5fd5d7ee2. That implementation is integrated in 1.1.5-rc.1. The original repaired test suite had 35 passing synthetic tests. The rc.1 release validation recorded 36 passing relocated synthetic tests and PowerShell option checks. These are evaluator-mechanics results, not design-quality scores.

The rc.2 evaluator SHA-256 is `af2f6a7c64da86b48130ab27c10fa70e4ce594711a4a01bc2ab8410c8835a420`. It matches the external composition-transfer-v1.2 evaluator. Its local regression suite has 41 tests; preparation validation receipts accompany this release.

The earlier semantic-token worked example passed 285 browser assertions and 42 enabled-text contrast measurements. That example is unchanged; these historical results must not be reported as new checks of this candidate or of the visual casebook.

## Evidence location

The original delivery retains these companion artifacts outside the plugin:

- ibm-carbon-focused-rerun-report.md and ibm-carbon-focused-rerun-evidence.zip
- ibm-carbon-rc1-rc2-comparison-report.md and ibm-carbon-rc1-rc2-comparison-evidence.zip
- ibm-carbon-rc1-rc2-unseen-comparison/report.md and ibm-carbon-rc1-rc2-unseen-comparison-evidence.zip
- ibm-carbon-rc2-review.md
- ibm-carbon-comparison-report.md for the initial 12-attempt phase
- ibm-carbon-composition-comparison-v1.2/final-review.md, comparison-summary.json, gallery.html and the matching evidence ZIP
- ibm-carbon-composition-transfer-v1.2 for frozen composition prompts, fixtures, rubric and external evaluator

These names identify provenance; their absence in a copied plugin must not be treated as accessible evidence. Obtain the archived receipts before reproducing or regrading a specific historical result.

## Still unverified

The completed composition comparison does not establish that 1.1.5-rc.1 improves task outcomes; rc.2 has no separate model-performance result. The complete bundled suite, independent blind or repeated holdouts, version-specific Carbon React integration, screen readers, real browser zoom, other browser engines, physical devices and broader IBM creative disciplines are not certified by the results above.

An annotated casebook can explain a design decision and expose tradeoffs. Its author-created examples and local checks are not independent model-performance evidence.
