# Release fixture

Model-free geometry checks for the Carbon React 1.117.0 header, table, search, and form benchmarks added in plugin versions 1.1.20 through 1.1.23. Corrected must pass every check. Missed is a negative control, not a defect to repair.

This is not an IBM product. A green run does not change `ibm-design-language` 1.1.23, does not replace the 1.1.17 practical verdict, and is not a model evaluation or an assistive-technology certification. IBM Plex files in `public/fonts/` stay under the SIL Open Font License copied beside them. Carbon is Apache-2.0.

## Run

```sh
npm ci
npx playwright install chromium
npm test
```

`npm test` starts Vite on `127.0.0.1:4174`. `RELEASE_FIXTURE_CHROME` may point Playwright at an existing Chromium. Do not commit that override.

## Screenshots

```sh
npm run screenshots
```

Runs only the four screenshot cases; `npm test` includes them alongside the
existing geometry checks. Both commands use the same Vite/Chromium configuration.
Before reusing an existing server on port 4174, confirm it serves this checkout;
CI requires a fresh server.

Writes 16 PNGs and four JSON capture records into ignored `./screenshots/`:
table, form, header and filled search, each in White and Gray 100 at 1440x900
and 390x844. These are element crops inside the fixture layout, not full-width
page screenshots. The capture waits for bundled Plex fonts and the selected
theme, then independently reads all 29 corrected geometry checks before writing.
Animations are disabled and the caret is hidden for capture.

The JSON records include capture time, installed dependency/browser versions,
viewport, source hashes, image dimensions and PNG SHA-256 hashes. Review every
image after all four capture cases pass, before copying the PNGs and JSON records into
`plugins/ibm-design-language/skills/design-ui/assets/casebook/screens/`; the
command never updates packaged assets automatically. The packaged
[capture index](../../plugins/ibm-design-language/skills/design-ui/assets/casebook/screens/README-carbon-benchmarks.md)
records the reviewed set and limits.

The examples use real `@carbon/react@1.117.0` with `@carbon/styles@1.116.0`
and fixture CSS adaptations. Their fictional content and compositions differ
from the static casebook stories. They teach component anatomy, not complete
application behavior: header handlers are demonstrations, search does not query
the sample collection, and the form does not save.

Regenerate and review the entire set when Carbon, fixture styling, fonts or
capture settings change. Preserve the version/date of older evidence until its
replacement is reviewed. Platform font rasterization can differ; these are
teaching assets, not pixel-diff baselines, a substitute for the keyboard gate,
or evidence of assistive-technology or model performance.

## Contract

Twenty-nine checks. Corrected is 29 of 29 on White, on Gray 100, and at 390px. Missed is 0 of 29 at both widths, and every check id fails. The form gutter is the 32px guideline, not the 16px measured demo pair.

## Placement

Lives at `tests/release-fixture/` in [pmeglaw/ibm-design-language-plugin](https://github.com/pmeglaw/ibm-design-language-plugin). CI must run `npm test` here before a later plugin release is published. Do not fold it into `tests/nextjs-shell` or into the frozen 1.1.23 plugin tree.
