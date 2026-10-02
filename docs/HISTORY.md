# Release history and evidence

This history preserves the published summaries and their evidence limits. The current plugin package is 1.1.25; repository-only test gates do not change frozen earlier packages or their historical evaluation results. See the [README](../README.md) for usage and [release maintenance](RELEASING.md) for current publication requirements.

This package preserves verified work so restoration does not require repeating model evaluations. The 1.1.6 guidance passed 9/9 on one known screenshot regression. This author-graded case does not establish general improvement or repeatability; host skill-description truncation warnings are disclosed in the evidence. Earlier composition comparisons had two tied pairs, one incomplete pair and host configuration drift. Synthetic tests check evaluator mechanics, not design taste.

See [reviewed intake](../docs/REVIEWED-INTAKE.md) for the target correction, adopted changes and evidence limits. The [earlier targeted report](../evidence/1.1.8-targeted/REPORT.md) preserves the 1.1.7/1.1.8 failures. The [1.1.9 completion report](../evidence/1.1.9-completion/REPORT.md) records the final targeted checks, unchanged status criterion and evidence limitations. Passing targeted cases is not a full-suite or general-quality certification.

The [1.1.10 candidate report](../evidence/1.1.10-candidate/REPORT.md) records its local checks and one text-only design critique evaluation. It is not a rendered design validation.

## Release validation

See the [1.1.12 candidate evidence](../evidence/1.1.12-candidate/REPORT.md) and [reproducible shell fixture](../tests/nextjs-shell/README.md). The evidence report records the state before publication; current publication identity belongs to the [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.25). Follow [recovery](../docs/RECOVERY.md) for checksum and destination-installation checks.

Version 1.1.13 replaces HTML-string rendering in the offline casebook with DOM construction and strict control-value checks. See the [casebook regression tests](../tests/casebook/README.md) for all 20 supported combinations and hostile-input/recovery coverage.

Version 1.1.14 adds focused fluid-styles guidance and a release-to-installation synchronization workflow. Use the read-only installation verifier described in [release maintenance](../docs/RELEASING.md) to check the installed plugin against its published manifest.

Version 1.1.16 expands public Carbon documentation intake and version-aware implementation guidance, with explicit source coverage and evaluation limits. See [the intake report](../evidence/1.1.16-intake/REPORT.md).

Version 1.1.17 strengthens real navigation destinations, observable supporting-action outcomes, nested narrow/RTL sizing, code scroll-owner keyboard verification and async focus recovery. The fresh known practical evaluation passed 9 of 11 assertions; 320px containment and RTL failures remain accepted for follow-up, not resolved or waived from the rubric. See [the candidate report](../evidence/1.1.17-candidate/REPORT.md).

Version 1.1.18 refines agent entrypoints, task-scoped workflow, source freshness and published evaluation boundaries. Documentation validation passed; no new model generation was run. The prior 1.1.17 practical verdict remains 9/11 with deferred 320px failures. See [the documentation review](../evidence/1.1.18-docs/REPORT.md).

Version 1.1.19 renames the main skill to `design-ui`, exposed in Codex as `ibm-design-language:design-ui`. The plugin and sibling review skill keep their identities; design guidance and historical evaluation results are unchanged.

Version 1.1.20 adds a source-linked UI shell header visual benchmark and concrete craft correction pairs. See the [header guidance review](../evidence/1.1.20-header/REPORT.md) for reference inspection and validation limits.

Version 1.1.21 adds an official data table visual benchmark and version-qualified sizing reconciliation. See the [table guidance review](../evidence/1.1.21-table/REPORT.md) for source inspection and evidence limits.

Version 1.1.22 adds an official Search visual benchmark and the supported four-size mapping. See the [Search guidance review](../evidence/1.1.22-search/REPORT.md) for source inspection and evidence limits.

Version 1.1.23 adds the official Form visual benchmark and Web Components demo boundaries. See the [Form guidance review](../evidence/1.1.23-form/REPORT.md) for spacing/sizing reconciliation and evidence limits.

Version 1.1.24 improves committed route-heading focus, same-route focus, and skip-to-main history behavior in the maintained Next.js shell. The [published release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.24) records completed package, browser-gate, and downloaded-byte verification. No fresh model generation or manual screen-reader evaluation was performed for this release; earlier practical results remain unchanged.

Version 1.1.25 restores the Theme tokens Markdown table separator and adds scoped engineering craft checks for touch/hybrid hover, font-display choices, measured critical font preloads and language-safe subsetting. The guidance preserves supported Carbon behavior, native activation, focus/state feedback and the approved font-loading pipeline. It does not change runtime assets, component APIs, evaluation assertions or historical verdicts. No fresh model generation, product font-performance test or manual screen-reader evaluation was performed for this documentation release.

The [release fixture](../tests/release-fixture/README.md) is a model-free browser gate for the 1.1.20 through 1.1.23 header, table, search, and form benchmarks. Corrected must be 29 of 29 on White, Gray 100, and a 390px width. The Missed candidate must fail all 29 checks. A later plugin release is not ready to publish until `npm test` in that directory passes. The gate does not change the frozen 1.1.23 package, does not replace the 1.1.17 practical verdict, and is not a model evaluation.

The [keyboard gate](../tests/behavior-fixture/README.md) is a separate publication blocker for the same four compositions. It sends real keys. Corrected must be 13 of 13 on White and on Gray 100. Missed must fail all 13 checks, including 320px containment and right-to-left with English left as `lang="en"`. A green run is not a screen-reader certification and does not change the frozen 1.1.23 package.
