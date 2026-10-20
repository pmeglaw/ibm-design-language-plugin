# 1.1.35 catalog-only candidate

Unpublished package candidate based on `9a3413e593e6fb16e30471a06fab382044662953`.
Published and installed 1.1.34 remain unchanged. This work does not include the
separate Seat Planner source proposal in PR #61 or any earlier external candidate.

## Scope and measured size

Only `Reference routing` in `plugins/ibm-design-language/skills/design-ui/SKILL.md`
changes instruction text: forty rows become eleven grouped routes. The heading
and `reference-routing` anchor, all 51 destination occurrences (with the same
multiplicities), useful component-name lookup cues and topic coverage remain.
Every byte before the heading and from the following coverage paragraph onward
is unchanged, including frontmatter, focused-question precedence, benchmarks,
accessibility, authorization, design-deliverable retention and evidence rules.
Both companion SKILL.md files and all supporting references/assets are unchanged.

| Static measurement | Before | Candidate | Reduction |
| --- | ---: | ---: | ---: |
| Catalog, UTF-8 bytes | 6,909 | 6,437 | 472 (6.83%) |
| Complete entrypoint, UTF-8 bytes | 17,171 | 16,699 | 472 (2.75%) |
| Catalog route rows | 40 | 11 | 29 |

The catalog boundary includes its heading and blank separator before the final
coverage paragraph. The earlier read-only audit's line-range measurement excluded
one separator byte and reported 6,908; no frozen audit or source was rewritten.
These are byte counts, not token counts or observed provider-context savings.

Original entrypoint SHA-256:
`f18a9243bff8dce981b11158a609fb1fc33671973a6703a85bdacdef1dc3149a`.
Candidate entrypoint SHA-256:
`b9479366d72ef5c734161fc5fd45a28749de8fb2252fc06e8b010eb7958b3f43`.

## Routing preservation

The eleven groups cover acceptance/runnable work; patterns/component selection
and composition; core/menu interactions; date/selection/forms/action feedback;
accessibility/grid/tokens/themes/spacing/type/icons/motion; fluid styles/UI shell;
framework/Next.js/Context7/MCP/Carbon Next; community/spatial/artifact intake;
status/charts/content/AI; workflow/taste/casebook/engineering; and documentation,
asset scope, source coverage and evaluation.

The old/new link-destination multisets match exactly. A lexical check after
removing Markdown destinations retains the original lookup vocabulary; only
connective or generic process words disappear: a, between, choosing, for, from,
its, locating, or, reconcile, reviewing, selecting, task, the. This check supports
the routing audit; it does not replace independent review of each original row's
topic-to-reference association or establish model retrieval behavior.

## Candidate bookkeeping and verification scope

The only additional package changes are version 1.1.35 and a release-note prefix;
the earlier note bytes remain an exact suffix. The candidate's 171-file payload
is recorded in [files.json](../releases/1.1.35/files.json), with a fresh
[ZIP](../releases/1.1.35/plugin.zip) and [checksum](../releases/1.1.35/SHA256SUMS).
Validator `CURRENT` advances to 1.1.35 while retaining explicit verification of
1.1.34 and all earlier releases. README and maintenance identify the unpublished
candidate; recovery, installation and published-version history remain pinned to
1.1.34. Existing gates, assertions and dependency manifests are unchanged.

Repository, structural, package and browser-fixture results are recorded with
the delivery PR. They establish their own bounded checks, not generated-product
quality, assistive-technology usability, improved triggering, reduced model
context use, or removal of historical truncation warnings.

## Local verification

Windows verification used Python 3.12.14, Node 24.21.0 and the fixtures' pinned
Playwright 1.63.0 Chromium/Headless Shell 153.0.8010.12 (revision 1243).
No dependency manifest, fixture, assertion, retry setting or workflow changed.

| Check | Result |
| --- | --- |
| Package verifier | PASS: 171 payload files, 335 local links, all 32 archives from 1.1.4 through 1.1.35; 55 model-free evaluator tests passed |
| Repository Python suite | PASS: 38 run, 36 passed, two skipped |
| Skill structural validator | PASS for all three skills |
| Release documentation | PASS offline consistency and live published 1.1.34 release/tag identity |
| Evaluation adapter | PASS: five model-free tests; prepared model cases remain not run |
| Release fixture | PASS: four tests, including Corrected/Missed controls and the 29-check gate |
| Keyboard behavior fixture | PASS: three tests, including Corrected/Missed controls and the 13-check gate |
| Casebook | PASS: 25 browser tests |
| Production Next.js shell | PASS build and 20 browser tests |
| Scoped preservation | PASS: exact outside-catalog bytes, both companion skills, prior release-note suffix and all 103 existing release files |
| Whitespace | PASS for changed lines via `git diff --check`; frozen historical whitespace remains untouched |

Initial local attempts remain separately preserved: the sandbox Python suite
encountered temporary-directory cleanup denials; its first host retry returned
OK with a child-output decoding error. A task-local temporary directory and
process-local UTF-8 profile produced the clean final result above. Initial
browser runs failed before assertions because the pinned browser was absent;
installing that exact binary in the task packet allowed the unchanged gates to
pass. No security policy or account configuration was changed. Non-failing
color-environment warnings and the uncached-build notice remain in the logs.
Exact-head GitHub CI is tracked on the delivery PR; local results alone do not
establish that remote status.

No new model experiment, historical regrading, generated-page repair, production
access, account/security configuration change, merge, tag, publication,
deployment or reinstall is part of this work. The loading experiment remains
parked. Earlier results, failures, frozen assets, external candidates, unrelated
Bench work and installed 1.1.34 are preserved.
