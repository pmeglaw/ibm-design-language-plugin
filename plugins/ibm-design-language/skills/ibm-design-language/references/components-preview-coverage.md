# Carbon preview components coverage

Reviewed 2026-09-15 for plugin 1.1.3.

## Inventory

- [x] All 41 entries from the [source overview](https://preview.carbondesignsystem.com/building-blocks/core/components/overview/components) have selection guidance and a source-linked entry.
- [x] Two linked UI shell panel pages are included.
- [x] 1470 heading occurrences across 43 entries preserve nested source sections. Dropdown and Multiselect intentionally share headings.
- [x] Form-to-pattern and Multiselect-to-Dropdown routing is explicit.
- [x] SKILL.md routes component work to the [guide](components-preview.md) and [subsection index](components-preview-index.md).
- [x] Prior Patterns and Typeface additions remain present.

## What coverage means

Every overview category and every retrieved guideline-page heading has a route in the index. Selection guidance is local; detailed subsection content remains at the linked official page. This is not an offline manual, a complete component implementation, or evidence that runtime behavior passes.

The index covers guideline sections, not every outgoing page, all Storybook controls, specifications tables, or accessibility-tab subsections. Button specifications and accessibility were opened as spot checks. Retrieve relevant linked pages for implementation-specific details. Employee-only destinations were not accessed.

The source was retrieved through the browsing tool after direct HTTP returned 403. No claim is made that all visual examples or live demos were exercised. No browser, keyboard, or assistive-technology implementation test was performed.

## Maintenance

Re-read the overview when updating this inventory. Compare component names, redirects, and all heading levels; inspect variant tables as well as headings. Keep page status separate from feature availability, and document unavailable sources instead of marking them covered. Check source links and package APIs again when applying guidance to a project.
