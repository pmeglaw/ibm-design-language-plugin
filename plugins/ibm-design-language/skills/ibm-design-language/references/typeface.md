# IBM Plex Typeface

Use this for family selection, font features, script coverage, acquisition, and Typeface-page coverage. Use [Typography](typography.md) for Carbon role tokens and productive/expressive composition. See [coverage checklist](typeface-coverage.md) for scope and verification limits.

Source: [IBM Design Language: Typeface](https://www.ibm.com/design/language/typography/typeface/), reviewed 2026-09-15; page dated 2026-09-10. The inventories below describe that page, not a guarantee about every downloaded font. Recommendations explicitly marked as implementation checks are this skill's application guidance.

## Resources and identity

IBM Plex is IBM's corporate typeface. Start with the page's Resources links and [official releases](https://github.com/IBM/plex/releases/latest). Record the exact font package/version used; plugin version and font version are independent.

## Subfamilies, weights, and styles

Inventory: Sans, Mono, Serif, Condensed; Thin, ExtraLight, Light, Regular, Text, Medium, SemiBold, Bold; roman and italic.

Implementation choices:

- Sans: retain the existing product type system for ordinary interface copy.
- Mono: choose for code where character alignment communicates structure; do not use it to make prose look technical.
- Serif: use for a deliberate reading or quotation role, consistent with the surrounding type system.
- Condensed: evaluate only when a narrower face serves a defined layout need. Do not horizontally distort Sans or use Condensed as a blanket fix for crowded controls. Test realistic labels first.
- The full family inventory is not a direction to use every weight in a UI. Keep Carbon role-token choices from typography.md. Do not infer CSS weight values for Text or infer italic availability across scripts; inspect the delivered font metadata and stylesheets. Avoid synthetic weight/italic when the intended face is available.

## Type tester

Use the online tester linked on the source page for exploration. Implementation check: compare realistic headings, paragraphs, identifiers, diacritics, and mixed-script strings at intended sizes. A specimen is not evidence that the application's font loaded; inspect the rendered font and layout in the actual app separately.

## Typeface features

Inventory: Sans/Serif ligatures, fractions, alternate glyphs, currency symbols, arrows; accessed through OpenType or glyph palettes.

Implementation checks: confirm the selected font actually contains each needed glyph and feature. Avoid enabling optional features globally without checking identifiers and copy/paste behavior. Test fractions against the source numeric data. Use actual currency characters and verify fallback behavior. Decorative font arrows do not replace the UI icon and accessible-name requirements. Keep semantic text intact when choosing alternate glyphs.

## Mono versus sans

IBM describes Mono as fitting glyphs into 600 units and recommends it for code examples.

Implementation check: distinguish character alignment from ordinary text readability. Verify punctuation, ambiguous characters, selection, and wrapping with actual technical strings. Follow the existing Carbon code role rather than composing unrelated size and line-height values.

## Language support

The page reports extended Latin coverage, including Vietnamese, and provides a full language inventory. Consult that live inventory for the requested language rather than assuming every subfamily has identical coverage.

Implementation checks: select the font file for the language and region; verify glyph coverage, combining marks, shaping, fallback, and line-box clipping using representative text. A script label is not a font package name. Do not assume a webfont subset includes all languages of the parent release.

## Non-Latin scripts

These are the page's individual specimen categories. Implementation checks below are verification tasks, not claims that IBM prescribes one universal treatment.

| Specimen category | Implementation check |
|---|---|
| Sans Arabic | Review connected shaping and mixed-direction text with a fluent reader. |
| Sans TC | Confirm Traditional Chinese locale and punctuation. |
| Mono Cyrillic | Check code alignment and mixed Latin/Cyrillic identifiers. |
| Sans Cyrillic | Check regional glyphs and fallback in UI strings. |
| Serif Cyrillic | Verify the intended reading role and available styles. |
| Sans Devanagari | Review conjuncts and marks for clipping. |
| Sans Greek | Test accented text and mixed mathematical notation. |
| Sans Hebrew | Review right-to-left layout and embedded numbers. |
| Sans JP | Test Japanese punctuation, line breaks, and locale-specific glyphs. |
| Sans KR | Test Korean text and mixed-script line metrics. |
| Sans Thai | Review shaping, marks, and line wrapping. |
| Sans Thai Looped | Select this variant deliberately; compare readability with a fluent reader. |

The source mixes available and developing coverage. Confirm release assets before promising support. Do not infer a Simplified Chinese font from the TC specimen. Do not use a global font-size adjustment as a substitute for checking script-specific metrics.

## IBM Plex Math

The page identifies a mathematical family compatible with Serif Regular and requiring LaTeX or equivalent mathematical typesetting.

Implementation check: use an appropriate equation renderer; changing a CSS font alone does not implement mathematical layout. Verify fractions, scripts, operators, and exported output. The linked Math release could not be retrieved during this update, so no release-specific feature compatibility is asserted.

## Open-source licenses

The source points to the Open Font License shipped with the fonts. Read that exact license before redistribution; route alternative licensing questions to the appropriate legal team. This reference does not grant additional rights or interpret a particular distribution agreement.

## Where else to get Plex

Google Fonts and Adobe Fonts are listed; IBM prefers its GitHub releases for currency.

Implementation check: record provenance and compare actual versions before substituting providers. This plugin does not bundle font binaries.

## Design team

Use the source page's Design team section for provenance and current credits. This is a background reference, not a component implementation rule.

## Awards

Use the source page's Awards section when historical recognition is relevant. Do not convert awards into evidence of suitability or accessibility for a particular application.

## Feedback and questions

Follow the source page's issue and support links. For a useful report, gather the font version, renderer, language, reproducible sample, expected result, and actual result; obtain authorization before sending any private content externally.
