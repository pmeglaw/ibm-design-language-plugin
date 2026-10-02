# Keyboard gate

Model-free keyboard checks for the Carbon React 1.117.0 header, search, table, and form. Corrected must pass every check. Missed is a negative control, not a defect to repair.

This is not an IBM product. A green run does not change `ibm-design-language` 1.1.23, does not replace the release fixture's geometry gate, and is not a screen-reader certification. IBM Plex files in `public/fonts/` stay under the SIL Open Font License copied beside them. Carbon is Apache-2.0.

## Run

```sh
npm install
npx playwright install chromium
npm test
```

`npm test` starts Vite on `127.0.0.1:4175`.

## Contract

Thirteen checks. The driver sends real keys.

- The menu button is the first Tab stop. Enter opens it. Escape closes it and returns focus.
- Typing enters the search query. The clear control empties the field and leaves focus there.
- Tab reaches the table filter. Arrow keys bring the end of the long cell into view.
- The project name label belongs to its field. Enter on a failed submit focuses that field.
- At 320px, and again in right-to-left, every operable control stays inside the frame. English stays `lang="en"`.

Corrected is 13 of 13 on White and on Gray 100. Missed is 0 of 13, and every check id fails.
