# Carbon-rendered anatomy examples

Controlled local Chromium captures, reviewed on **2026-10-27 PDT**
(capture timestamps are **2026-10-28 UTC**). These supplement the 40 static
casebook composition images; they do not replace them.

## Provenance

- Source fixture: `tests/release-fixture/` in the plugin repository, using the
  corrected pattern. Its runtime is unchanged from base commit
  `e9b96ce35f029fe58bc661d3c1c95a3709f03a8d`; the capture test is new local work.
- Installed versions: `@carbon/react@1.117.0`, `@carbon/styles@1.116.0`,
  `@carbon/icons-react@11.89.0`, React/React DOM `19.2.0`,
  `@playwright/test@1.63.0`; Chromium `153.0.8010.12` on Windows x64.
- Bundled IBM Plex Sans 400/600 and Mono 400; the fixture's existing font
  license and provenance apply. Fonts and the painted theme were ready before
  capture; a fresh judge run passed all 29 corrected geometry checks in each
  theme/viewport combination.
- Desktop viewport: 1440x900; mobile viewport: 390x844. These are element
  crops inside the fixture, not 1440px/390px-wide page screenshots. Desktop
  table/form/search crops are 734px wide; mobile crops are 308px wide.
- One CSS pixel per image pixel, reduced motion, hidden caret, animations
  disabled and pointer/focus moved away from the captured regions.
- Four JSON records below contain actual timestamps, installed versions,
  platform, source/font byte hashes, viewport, image dimensions and PNG hashes.
  Source hashes describe the capture checkout, including its line endings.

## Capture index

| Region | White desktop | Gray 100 desktop | White 390px | Gray 100 390px |
|---|---|---|---|---|
| Table | [PNG](carbon-table-white-desktop.png) | [PNG](carbon-table-g100-desktop.png) | [PNG](carbon-table-white-mobile.png) | [PNG](carbon-table-g100-mobile.png) |
| Form | [PNG](carbon-form-white-desktop.png) | [PNG](carbon-form-g100-desktop.png) | [PNG](carbon-form-white-mobile.png) | [PNG](carbon-form-g100-mobile.png) |
| Header | [PNG](carbon-header-white-desktop.png) | [PNG](carbon-header-g100-desktop.png) | [PNG](carbon-header-white-mobile.png) | [PNG](carbon-header-g100-mobile.png) |
| Search | [PNG](carbon-search-white-desktop.png) | [PNG](carbon-search-g100-desktop.png) | [PNG](carbon-search-white-mobile.png) | [PNG](carbon-search-g100-mobile.png) |
| Provenance | [JSON](carbon-white-desktop.json) | [JSON](carbon-g100-desktop.json) | [JSON](carbon-white-mobile.json) | [JSON](carbon-g100-mobile.json) |

## How to use the evidence

Use the table and form crops to examine component anatomy: header/row
alignment, toolbar attachment, field labels, helper text, 32px related-field
gutter and action hierarchy. Use the header/search crops to compare silhouette,
utility rhythm, glyph/text alignment and reserved control space.

These are real Carbon components composed with **local fixture CSS**. They are
not official IBM exemplars, Storybook captures or product screenshots. The
Statements table and project/note form have different tasks, data and layouts
from the static casebooks; they are related anatomy examples, not recreations.
The form's demonstration heading/action copy is not a recommended product flow.

The fixture clips its long table name without establishing full-value recovery.
Header links and utilities use demonstration handlers; the narrow menu trigger
does not establish an operational navigation panel. Search holds a sample query
without filtering the collection, and the form prevents submission without
saving. Do not infer these behaviors from the images.

All 16 crops were inspected for expected theme, text rendering, region bounds,
desktop field pairing, narrow field stacking and visible actions. This is
bounded visual review. It does not establish interactions, keyboard recovery,
assistive technology, Gray 10/90, system/forced colors, 320px, RTL, zoom,
localization, additional content/error states or improved model generation.
The existing geometry and keyboard gates remain separate.

## Regeneration

From `tests/release-fixture/`, install the lockfile dependencies and matching
Chromium, then run `npm run screenshots`. Generated PNGs and JSON records go to
ignored `screenshots/`. Review the whole set before copying it here and update
this index's date, versions and review scope. The capture command never writes
packaged assets.

Regenerate after Carbon, fixture styling/fonts or capture settings change.
Pixel rasterization can differ across platforms; these are teaching assets,
not pixel-diff baselines. Local source changes do not authorize a version bump
or a rewrite of frozen release hashes; retain and report the expected package
integrity mismatch until a separate release is authorized.
