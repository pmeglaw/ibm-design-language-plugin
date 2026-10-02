# Release fixture

Model-free geometry checks for the Carbon React 1.117.0 header, table, search, and form benchmarks added in plugin versions 1.1.20 through 1.1.23. Corrected must pass every check. Missed is a negative control, not a defect to repair.

This is not an IBM product. A green run does not change `ibm-design-language` 1.1.23, does not replace the 1.1.17 practical verdict, and is not a model evaluation or an assistive-technology certification. IBM Plex files in `public/fonts/` stay under the SIL Open Font License copied beside them. Carbon is Apache-2.0.

## Run

```sh
npm install
npx playwright install chromium
npm test
```

`npm test` starts Vite on `127.0.0.1:4174`. `RELEASE_FIXTURE_CHROME` may point Playwright at an existing Chromium. Do not commit that override.

## Contract

Twenty-nine checks. Corrected is 29 of 29 on White, on Gray 100, and at 390px. Missed is 0 of 29 at both widths, and every check id fails. The form gutter is the 32px guideline, not the 16px measured demo pair.

## Placement

Lives at `tests/release-fixture/` in [pmeglaw/ibm-design-language-plugin](https://github.com/pmeglaw/ibm-design-language-plugin). CI must run `npm test` here before a later plugin release is published. Do not fold it into `tests/nextjs-shell` or into the frozen 1.1.23 plugin tree.
