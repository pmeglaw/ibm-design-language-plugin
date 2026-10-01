# 1.1.23 Form guidance review

Scope: add an official Form visual benchmark using the owner-selected Carbon Guidelines and Web Components Default story; reconcile the demo's spacing and sizing with guidance and update a historical read-only note. No application code, stylesheet, component API, casebook rendering or evaluation assertion changes.

## Reference inspection - 2026-10-01

- [Form Guidelines](https://www.carbondesignsystem.com/building-blocks/core/components/form/guidelines): current prose reviewed. The page displayed a September 30, 2026 update date. Default forms use labels above fields, 32/40/48px input heights, roughly 32px vertical spacing and 32px wide column gutters; fluid uses internal labels, 64px input height, flush stacking and 1px condensed column gutters. Read-only is now described without the older Coming soon label.
- [Web Components Default story](https://web-components.carbondesignsystem.com/?path=/story/components-form--default): visually inspected the white desktop example from upper fields through its final Create project action. Labels, input surfaces, helper text, related rows and checkbox/radio groups provide a concrete composition reference. The story's particular field inventory, example password policy and button widths/emphasis are not universal product requirements.
- In the default story iframe, Project name and Project ID input rectangles were x=42 and x=350, each 292px wide and 40px high, producing a 16px gap. This is one browser geometry observation; it differs from the Guidelines' 32px default-form column recommendation and does not replace it.
- Story controls selected md; their size description explicitly says xs is supported by TextInput, Select and Search and other components clamp to sm. That statement belongs to the live example, not a verified versioned package API. Controls also expose readOnly, invalid, skeleton and onSubmit. Their presence is not evidence of every child's behavior, successful submission, native form participation or React equivalence. No deployed Web Components package version was established.

## Bounded reference retrieval

A read-only reviewer examined the original source against a developer question about the two exact benchmark URLs, all-input xs support, read-only availability and whether the Web Components story proves React submission behavior. It found useful existing Form rules and framework boundaries, but neither exact URL nor a dedicated positive Form benchmark; the sizing and historical read-only notes needed reconciliation.

The amendment adds both links, composition guidance, five labeled craft correction pairs, a comparable-render checklist and explicit source/framework limits. The entrypoint and taste rubric route to the same section, and the source map records partial coverage separately from historical source audits.

The reviewer repeated the same question after the amendment and retrieved both URLs, actionable visual criteria, the 32px/16px spacing distinction, story-only selective xs support and the corrected read-only note. It found no material contradiction or unsupported generalization and retained the framework/submission limits. This local retrieval check did not independently verify the browser observations.

## Evidence limits

Both skill frontmatter validations and all six installation-parity unit tests passed locally. Package verification passed for 135 files, 283 local links and all preserved releases from 1.1.4 through 1.1.23; all 42 synthetic evaluator tests passed. The existing 1.1.22 installation matched its 135-file manifest before updating. CI, publication and destination-installation results are separate delivery checks.

This is author-associated reference inspection and retrieval review, not a blinded evaluation or generated-product quality score. Other sizes, fluid/modal/AI/error variants, theme/responsive/RTL matrices, keyboard, submission and assistive technology were not tested. Historical practical verdicts and frozen releases remain unchanged, including prior deferred 320px/RTL failures. Package integrity, CI, downloaded-asset verification and destination installation are separate delivery gates.
