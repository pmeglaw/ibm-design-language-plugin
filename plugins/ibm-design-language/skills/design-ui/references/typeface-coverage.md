# Typeface coverage checklist

Reviewed 2026-09-15 for plugin 1.1.2 against [IBM Typeface](https://www.ibm.com/design/language/typography/typeface/). All page sections and its 12 named non-Latin specimen subcategories have a local entry or an explicit source route. This is guidance coverage, not an offline copy of the site.

| Source category | Local entry | Coverage method |
|---|---|---|
| Resources / Our typeface | [Guidance](typeface.md#resources-and-identity) | Local summary and source links |
| Subfamilies / weights / styles | [Guidance](typeface.md#subfamilies-weights-and-styles) | Four families; eight weights; roman and italic; selection checks |
| Type tester | [Guidance](typeface.md#type-tester) | Linked tool and specimen checks |
| Typeface features | [Guidance](typeface.md#typeface-features) | Ligatures, fractions, alternates, currency, arrows |
| Mono versus sans | [Guidance](typeface.md#mono-versus-sans) | Local guidance |
| Language support | [Guidance](typeface.md#language-support) | Live inventory linked; implementation checks |
| Non-Latin scripts | [Guidance](typeface.md#non-latin-scripts) | All 12 specimen categories mapped individually |
| IBM Plex Math | [Guidance](typeface.md#ibm-plex-math) | Local summary; release retrieval limitation |
| Open-source licenses | [Guidance](typeface.md#open-source-licenses) | Source and exact-license verification |
| Where else to get Plex | [Guidance](typeface.md#where-else-to-get-plex) | Providers and provenance |
| Design team | [Guidance](typeface.md#design-team) | Source-linked background |
| Awards | [Guidance](typeface.md#awards) | Source-linked background |
| Feedback and questions | [Guidance](typeface.md#feedback-and-questions) | Source-linked support and report preparation |

## Acceptance checks

- [x] Typeface reference is routed from SKILL.md and typography.md.
- [x] Family, weight, style, feature, and script inventories are represented.
- [x] Every named non-Latin specimen has an individual verification prompt.
- [x] Tester, full language inventory, credits, awards, and support are source-linked rather than copied.
- [x] Local recommendations are distinguished from source claims.
- [x] Existing Carbon typography guidance is preserved.

## Boundaries

Type basics and Type scale are sibling pages, not part of this update. No font binaries, interactive tester, or exhaustive language list are bundled. The source page and general release link were retrieved; the Math release link failed to load. Provider catalogs, every individual font asset, legal applicability, glyph shaping, and browser rendering have not been independently tested. Before asserting a language works in an application, validate the exact font files and renderer with representative text.

When the source changes, recheck its headings and specimen categories, update the reference and date, and preserve these distinctions between documented guidance and tested runtime behavior.
