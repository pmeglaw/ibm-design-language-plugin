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

## Published 1.1.17 practical regression

These 2026-09-30 observations use the same known private 11-assertion rubric, whose canonical SHA-256 is `087629a407d5a7125eaae775b12ca2db9699149b7623d8d0ea8e289d595a21f2`. Preserve separate generated outputs and verdicts:

| Attempt | Pass / fail / untested | Boundary |
|---|---|---|
| Fresh released 1.1.16 | 8 / 3 / 0 | Narrow sizing, RTL and code scrolling failed |
| Separately repaired prototype | 11 / 0 / 0 | Assisted repair-technique proof; not unassisted generation |
| First candidate saved output | 9 / 2 / 0 | Generation timed out during cleanup; no formal response |
| Completed candidate recovery | 7 / 4 / 0 | Destinations, supporting action, narrow sizing and RTL failed |
| Fresh 1.1.17 candidate | 9 / 2 / 0 | Completed formal response; a08 narrow sizing and a09 RTL failed |

The released skill snapshot is `a29ee79082ee5037e80476857c9687dc6c83be03ca705040be8544e6ebf285bc`; its fresh generated output is `acbce500e58f6abdf109794c95ec41be29e16b92b95126ded707f792c0adb8e9`. Fresh visual scores were 4/3/4/4/3 and the overall verdict remained FAIL. At 320px, open content reached 336px against 305px available, and RTL Copy began at x=-31px. Tested 390px/1920px layouts fit. The owner deferred the 320px failures for publication; acceptance of a release is separate from passing this rubric.

Rendered checks used Chrome 154.0.8037.58. Native Tab reached the actual PRE despite no authored tabindex; collapsed/expanded keyboard endpoints passed. Exact clipboard readback allowed Windows newline normalization, and a real Permissions-Policy denial reported failure. Other browsers and assistive technology were not tested; sampled enabled-text contrast is not exhaustive conformance.

Fresh generation used gpt-5.5/medium, Codex 0.159.2, 1800 seconds and the recovery completion prefix. The baseline used 1200 seconds without that prefix. An initially stalled sandbox install completed through a scoped elevated retry. This comparison is not perfectly controlled, blind or repeated. Generation and frozen-output review were separate agents, but the review remains author-associated, with no external independent score. Source/package/CI/install checks prove integrity, not model quality.

The [published candidate receipt](https://github.com/pmeglaw/ibm-design-language-plugin/blob/9f4366bd78f69f30ae5f4e691ab6e44b3fb2570b/evidence/1.1.17-candidate/REPORT.md) is a sanitized summary. Private fixtures, transcripts and rendered receipts remain outside the package. Historical entries above retain their snapshot boundaries; these results do not retroactively verify them or later documentation changes.

## Detailed engineering evaluation records

The following records were moved from the practical implementation reference.
Their frozen inputs, outcomes and limitations are unchanged.
References to guidance "above" in these preserved records refer to the original
[practical implementation review](practical-implementation-review.md), where the
engineering acceptance requirements remain.

## Recorded evaluation boundary

The completed 2026-09-30 recovery generation of candidate `aa22ee1a95c1cac792e2a7615d14cb416cf1d1d72442bcc6a2c1578c55f42b58` failed the unchanged known rubric: 7 pass, 4 fail, 0 untested. Rendered review found clipped one-pixel ancestor targets, an enabled supporting action with no outcome, and open nested disclosure/action overflow at narrow LTR/RTL widths. Async recovery and actual code keyboard scrolling passed. Existing prose requested destinations/outcomes/containment, but the generated implementation did not satisfy them; the inventory and nested-chain acceptance above make those obligations concrete. Recovery used a longer execution ceiling and completion prefix than the timed-out attempt, so it is not a controlled statistical comparison. This motivated a candidate amendment. The subsequent fresh run is recorded below; this recovery result itself does not prove improved generation. Preserve failed outputs and separate any assisted repair.

A local 2026-09-30 rerun of the known Carbon practical rubric under final 1.1.16 recorded 8/11 pass and 3 failures: narrow overflow, RTL clipping and code keyboard scrolling. Reset and English language metadata behaved correctly. A separate assisted prototype repair passed all 11 assertions after local intrinsic-sizing constraints, focus on the actual code scroll owner and post-commit async focus recovery; it also removed the long keyboard retry circuit. The repaired result is evidence for these engineering techniques, not an unassisted skill-generation pass, a blind holdout, accessibility certification or assistive-technology validation. These amendments were subsequently included in the fresh 1.1.17 generation described below; historical scores are unchanged.

A known author-written practical case against frozen candidate 45a1163d4d5c244f5408d1bd34b31905564e736cd57e2393b655a5e123461f35 was reviewed 2026-09-29 with real Carbon 1.117.0 / React 19.3.0 / Sass 1.105.0 / esbuild 0.28.2. Independent rebuild matched both output files. Six of eleven assertions passed, four failed and one was not tested; the practical verdict failed. Heading/accordion, checkbox and async recovery checks passed. Dead breadcrumb destinations, misleading removal, classic-scrollbar overflow and broken snippet disclosure failed. Exact clipboard/denial, full contrast, zoom, burst races and screen reader remain unverified. This is a regression case graded by the author, not a blind holdout. Its frozen run predates this reference and does not evaluate these amendments.

## Later frozen practical regression

Frozen candidate `5e316597b1edd96088007405ef4a6cbdd8ba43415cc7104f42e86635099f6f6d` was evaluated with the same known case and pinned packages. It failed with 6/11 pass, 3 fail and 2 not tested; visual scores were 4/4/3/4/3. Independent rebuild reproduced JS/CSS, with the Sass CLI terminal newline explicitly matched and the initial API-only serialization difference retained. Snippet minExpanded 10, narrow layout, bulk/read-only controls and ordinary retry behaved correctly. Ancestor destinations and accordion trigger headings failed; Reset during pending allowed a stale completion to overwrite reset feedback and move focus. A Plex URL returned 404. Clipboard payload/channel equivalence and denial, full relevant contrast/matrix and assistive technology remain unverified. This is author-reviewed regression evidence, not a blind holdout or a practical pass. The heading/font recipes and request-fence guidance above were added after that snapshot; source/SSR/compile probes do not retroactively change its score.

The same frozen snapshot passed six criteria in a new author-written chart guidance case. That result supports the chart review guidance only, not rendered chart conformance or senior-engineer certification.

## Recipe snapshot evaluation

Frozen candidate `add261d63d7e9af095b925074b35a353cac151b3fd846b8b6696d91b48a44058` was evaluated against the same known author-written practical case. The author-agent review recorded 8/11 pass, 2 fail and 1 not tested; visual scores were 4/4/4/4/3, and the practical verdict remained failed. Independent JS/CSS compilation matched frozen outputs. Real ancestor views, heading-contained independent disclosures, selections, read-only protection, pending controls, first failure/retry, removal and narrow overflow behavior improved. Observed Plex Sans/Mono resources had font/woff2 MIME, WOFF2 magic and exact installed-package bytes. Native clipboard writing denied by browser Permissions-Policy produced explicit failure feedback. Reset's summary remained Applied, and RTL mislabeled English content as Arabic. Exact clipboard readback, complete code keyboard scrolling, full focus/state contrast, zoom, reduced motion and assistive technology were not established. Desktop RTL capture had a viewport/canvas mismatch and was not treated as an application clipping failure. The domain-state and language guidance above was added after that snapshot and is not covered by its score.

## Published 1.1.17 practical result

The completed fresh generation against the unchanged 11-assertion rubric used skill snapshot `a29ee79082ee5037e80476857c9687dc6c83be03ca705040be8544e6ebf285bc` and output `acbce500e58f6abdf109794c95ec41be29e16b92b95126ded707f792c0adb8e9`. It failed with 9 pass, 2 fail and 0 untested. Ancestor destinations and supporting actions passed, as did async recovery/reset and native code scrolling/exact copy/genuine denial. At 320px, a08 containment and a09 RTL still failed; tested 390px and 1920px layouts fit in White/Gray 100 and both directions. Accepting those limitations for publication did not waive the assertions or turn the result into a pass.

The generator used gpt-5.5/medium, Codex 0.159.2 and an 1800-second ceiling with the recovery completion prefix; the 1.1.16 baseline used 1200 seconds without that prefix. Review froze the output and saved the formal response before optional cleanup; no reviewer repair counted as an unassisted pass. The Chrome 154 native PRE-focus correction above belongs to that rendered review. One known author-written regression, sampled contrast and a separate author-agent reviewer do not establish blind/repeated reliability, other-engine behavior or screen-reader conformance. See [evaluation history](evaluation-history.md#published-1117-practical-regression) for the compact ledger and public receipt. Later documentation refinements have not had a fresh model evaluation.
