---
name: typography-and-color
description: Use when a Carbon design question centers on typography or color, including IBM Plex type pairs, productive and expressive headings, semantic color tokens, nested theme layers, interaction states, or text contrast.
---

# Carbon typography and color

A type style describes the text's job in its region. A color token describes the element's job on its surface. The same words can serve different jobs in a reading guide and in an adjacent work panel.

## Type by region

| Text role | Focused product task | Editorial or reading region |
|---|---|---|
| Short component copy and its heading | `body-compact-01` + `heading-compact-01`, 14/18 | `body-compact-02` + `heading-compact-02`, 16/22 |
| Paragraph and its small section heading | `body-01` + `heading-01`, 14/20 | `body-02` + `heading-02`, 16/24 |

Numbers are size/line height in CSS pixels. These pairs use IBM Plex Sans Regular for copy and SemiBold for headings. Use the complete type style, including tracking. Heading level follows the document outline. Product headings use fixed styles. A large editorial headline can use a fluid style while its small section headings stay fixed. Choose Plex Mono for code and technical identifiers. For labels, helper text, larger headings, breakpoints and package-specific Sass syntax, consult the [type tables and examples](../design-ui/references/typography.md).

## Color by surface and state

| Theme | Page background → first layer → second layer |
|---|---|
| White | White → Gray 10 → White |
| Gray 10 | Gray 10 → White → Gray 10 |
| Gray 90 | Gray 90 → Gray 80 → Gray 70 |
| Gray 100 | Gray 100 → Gray 90 → Gray 80 |

An inline theme establishes a new local theme. A layer advances within it. Give an embedded reading guide its own background paint when it should cover the surrounding panel. [Theme implementation](../design-ui/references/themes.md)

| Element | Color role |
|---|---|
| Running text and secondary detail | Neutral `text-primary` and `text-secondary`. A link uses the link role and a recognizable affordance, such as an underline in prose. |
| Help beneath a form field | The field component supplies its helper type style and `text-helper` foreground. Check its installed implementation for the exact style and theme value. |
| Interactive row | The layer's hover role follows the pointer, active lasts during a press, and selected persists while the row is chosen. Keyboard focus has its own visible indicator. |
| Warning or error | A support role identifies severity alongside explicit wording or a meaningful icon. Component-specific tokens belong to their named component. |

For example, a guide can retain its expressive paragraph style on White beside a compact Gray 90 work panel. A link in either region uses its local link color. An approved product theme can supply that value. Resolve exact values and implementation names from the project's installed Carbon version and brand mappings. [Token values and states](../design-ui/references/tokens.md) · [Approved brand mappings](../design-ui/references/color-and-brand.md)

For text contrast, compare the foreground with the background actually painted behind it in the relevant state. Ordinary text needs 4.5:1. Large text needs 3:1 from 24 CSS px regular or 14 pt bold (about 18.67 CSS px). A SemiBold label alone does not establish bold qualification. A token choice or screenshot without measured colors leaves the ratio unverified. [Contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) · [Use of color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)

Carbon's foundations explain the design intent. [Typography overview](https://www.carbondesignsystem.com/building-blocks/foundations/typography/overview) · [Color overview](https://www.carbondesignsystem.com/building-blocks/foundations/color/overview)
