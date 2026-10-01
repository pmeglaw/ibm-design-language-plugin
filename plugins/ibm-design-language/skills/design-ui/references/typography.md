# Typography

Read this for IBM Plex, productive versus expressive selection, regional blending, type-token roles, fluid behavior, or `@carbon/type` implementation. The earlier reference used the 9 September 2026 website baseline (`^1.115.0`). The 29 September audit reviewed all four public source pages and their type-table data/rendering source at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`. Selected Sass APIs were compiled with `@carbon/type@11.68.0` and Sass 1.105.0; visual specimens, loaded faces and actual responsive rendering remain unverified.

## Overview

Carbon typography uses IBM Plex, a common scale, and role-based type tokens to establish hierarchy. Choose a token from the task and layout structure; do not assemble arbitrary font size, weight, and line-height values.

### Productive and expressive sets

| Set | Primary context | Base size | Behavior |
|---|---|---:|---|
| Productive | Products, controls, forms, data, focused tasks | 14px | Compact bodies and fixed headings |
| Expressive | Editorial/marketing reading, scanning, exploration | 16px | Larger bodies, fixed small headings, fluid large headings/display |

Utility and body tokens ending `-01` are productive; those ending `-02` are expressive. Productive headings are fixed. Expressive large headings are fluid across breakpoints.

## Typeface: IBM Plex

For family variants, font features, languages, Math, licensing sources, and acquisition, read [Typeface](typeface.md). For audit scope, see [Typeface coverage](typeface-coverage.md).

Use Light 300, Regular 400, and SemiBold 600 for digital experiences. SemiBold is useful for section and component headings but not long text. Larger display sizes generally become lighter. Italic is reserved for titles of works, technical terms, device names, captions, or short emphasis—not whole passages.

Font stacks:

```css
font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
font-family: 'IBM Plex Serif', Georgia, Times, serif;
font-family: 'IBM Plex Mono', Menlo, 'DejaVu Sans Mono',
  'Bitstream Vera Sans Mono', Courier, monospace;
```

Use Mono for code and technical values, Serif for a deliberate editorial/quotation moment, and Sans for normal product UI.

## Scale and color

The scale begins at 12px and follows Carbon's equation rather than a conventional modular ratio. Common steps are 12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 54, 60, 68, 76, 84, and 92px, with larger display steps available.

Keep running text neutral. Carbon defaults use core blue for links and primary actions; implement the approved semantic interaction tokens of the consuming product. This generic default does not authorize replacing a governed brand palette. Reserve other colored text for semantic cases such as warnings, alerts, or code, and verify contrast on every surface.

## Style strategies

### Productive moments

Use productive type when users are completing a specific job, interacting through controls, remaining in one workspace, and being measured on completion time or abandonment. Density supports task focus.

Pair:

- `body-compact-01` with `heading-compact-01`.
- `body-01` with `heading-01`.

### Expressive moments

Use expressive type when users are learning, exploring, scanning, reading long-form material, or moving through several pages. Larger type and responsive hierarchy support browsing.

Pair:

- `body-compact-02` with `heading-compact-02`.
- `body-02` with `heading-02`.

Use fluid headings for large expressive hierarchy.

### Blending the sets

Blend by a discrete task, region, or full-page moment—not token by token inside one component.

- An expressive site may use a productive set for search, commerce, configuration, account creation, filters, tabs, or another focused tool.
- A product may use an expressive full-width home, page header, or banner where content is not constrained inside cards, tables, or form containers.
- Keep one set internally consistent within a component or task so type size continues to communicate hierarchy predictably.

## Type sets

### Utility styles

| Token | Size/line | Weight | Tracking | Use |
|---|---|---:|---:|---|
| `code-01` | 12/16 | 400 | 0.32px | Productive inline/small code |
| `code-02` | 14/20 | 400 | 0.32px | Expressive/larger code |
| `label-01` | 12/16 | 400 | 0.32px | Product fields, errors, captions—not body copy |
| `label-02` | 14/18 | 400 | 0.16px | Expressive labels, errors, captions—not body copy |
| `helper-text-01` | 12/16 | 400 | 0.32px | Product field explanation |
| `helper-text-02` | 14/18 | 400 | 0.16px | Expressive field explanation |
| `legal-01` | 12/16 | 400 | 0.32px | Product legal copy |
| `legal-02` | 14/18 | 400 | 0.16px | Web legal copy |

### Body styles

| Token | Size/line | Use |
|---|---|---|
| `body-compact-01` | 14/18 | Product component copy up to about four lines |
| `body-01` | 14/20 | Product paragraphs over four lines; always left-aligned |
| `body-compact-02` | 16/22 | Expressive short copy and expressive components |
| `body-02` | 16/24 | Expressive paragraphs of four or more lines; always left-aligned |

All use Regular 400. Productive styles track at 0.16px; expressive body styles use zero tracking.

### Fixed headings

| Token | Size/line | Weight | Role |
|---|---|---:|---|
| `heading-compact-01` | 14/18 | 600 | Product component/layout heading paired with compact body |
| `heading-01` | 14/20 | 600 | Product component/layout heading paired with body |
| `heading-compact-02` | 16/22 | 600 | Small expressive heading paired with compact body |
| `heading-02` | 16/24 | 600 | Small expressive heading paired with body |
| `heading-03` | 20/28 | 400 | Product component/layout heading |
| `heading-04` | 28/36 | 400 | Product layout heading |
| `heading-05` | 32/40 | 400 | Product layout heading |
| `heading-06` | 42/50 | 300 | Large product layout heading |
| `heading-07` | 54/64 | 300 | Largest fixed product layout heading |

Fixed means the type size does not change with the viewport.

### Fluid headings

`fluid-heading-03` through `fluid-heading-06` belong to the expressive set and interpolate between breakpoint values. They may be used on a product page only as a deliberate outside-container expressive region. Do not put fluid headings inside cards, fields, tables, or other fixed product containers.

At the Large/1056px breakpoint, the website source-data specimens are (size/leading in px at a 16px rem base; rounded design values, not exact computed CSS):

| Token | Size/line | Weight |
|---|---|---:|
| `fluid-heading-03` | 20/28 | 400 |
| `fluid-heading-04` | 28/36 | 400 |
| `fluid-heading-05` | 42/50 | 300 |
| `fluid-heading-06` | 42/50 | 600 |

Use package tokens for the complete interpolation rather than recreating breakpoint values.

### Fluid display styles

- `fluid-paragraph-01`: large expressive paragraphs, usually at least three lines.
- `fluid-quotation-01` and `fluid-quotation-02`: Plex Serif quotation treatments.
- `fluid-display-01` through `fluid-display-04`: major expressive display moments.

These styles are fluid and stay outside containers. At Large/1056px, `fluid-display-04` is 92/102, Light 300, with -0.64px tracking; let `@carbon/type` calculate other widths.

## Code

`@carbon/react` normally supplies the type support used by its components. For direct Sass usage:

```scss
@use '@carbon/type';

@include type.reset();
@include type.default-type();
@include type.type-classes();
```

Use Carbon type-style helpers instead of setting `font-size`, `font-weight`, `line-height`, and tracking independently:

```scss
@use '@carbon/type';

.heading {
  @include type.type-style('heading-01');
}

.expressive-heading {
  @include type.type-style('fluid-heading-05', true);
}
```

The website's `type.style(...)` example fails with an undefined mixin in 11.68.0. Its `fluid-heading-01` example also fails: the installed fluid-heading tokens are `03` through `06`. The supported examples above compile. A fluid token must use the second argument `true`; omitting it fails here because the token's breakpoint map cannot be serialized as a CSS property. Do not describe that omission merely as disabling interpolation.

`type-classes()` emits `.cds--type-{token}`, font-family utilities (Sans, Mono, Serif and language variants), font-weight utilities, and `.cds--type-italic`. Use utilities where markup-level styling is appropriate; prefer the mixin in maintained component Sass.

The optional `type.reset()` establishes top-level font properties, rendering defaults, and maps `<strong>` to SemiBold. `type.default-type()` styles common elements such as headings and paragraphs. Inspect an existing application before adding either globally so it is not reset twice.

The raw `$type-scale` and `type-scale()` function remain available, but role-based type styles are the recommendation.

## Review checks

- Every text style maps to a Carbon role token; no arbitrary font assembly.
- Productive/expressive choice follows the user's task, not a decorative preference.
- Blending happens across a clear region or task, never randomly inside one component.
- Fluid styles stay outside fixed containers and use package interpolation.
- Large type becomes lighter where the token specifies it.
- Running text is neutral, readable, and left-aligned; semantic color passes contrast.
- Reset/default type emission is intentional and not duplicated.

## Wrapped heading verification

Apply the complete type style, including line-height. A 28px heading inheriting a 20px body line-height can overlap when it wraps. Inspect secondary headings as well as the hero at narrow widths (including 320px) with long realistic copy. Check computed size/leading and the rendered result; absence of horizontal overflow alone does not establish legibility.

## Installed type-package boundaries (29 September audit)

- Modern `heading-01` is 14px with about 20px leading; legacy `productive-heading-01` is 14px with about 18px leading and aliases `heading-compact-01`. An older token that compiles is not necessarily the same role as a similarly numbered modern token. Keep body/heading pairings intentional. `helper-text-01` does not supply an explicit weight in the inspected map; the table's 400 describes its intended specimen, so verify inherited weight in the app. Source marks helper-text tokens deprecated; check the consuming component's current role before creating new utility use.
- Fixed type styles emit CSS variables with map fallbacks, permitting approved runtime token overrides. Complete type styles may include a family (Mono code, Serif quotation) as well as size/leading/weight/tracking. Fluid styles emit viewport-based `calc()` and breakpoint rules; line-height remains a ratio. The two code paths are not interchangeable. Inspect the output when customizing breakpoint maps or theme type variables.
- The website type-set widget starts its simulated width at 1056px, uses a handwritten specimen data map and chooses a breakpoint rather than calculating package interpolation. Its displayed leading is specified in rem, while the installed package uses unitless ratios. Examples such as the maximum `fluid-heading-03` specimen (24/28) differ from the installed map's 24px × 1.334 (about 32px). Treat website specimens as design guidance, not a guarantee of exact package output. The scale table lists through 92px; installed step 23 also exists and compiles to 9.75rem (156px at the default base), despite the source comment saying the scale supports through 92px.
- `reset()` plus `default-type()` compiles but emits global heading, paragraph and link rules. In this version, its paragraph default is `body-02`, and its link rule has a Carbon-blue fallback. Scope or adapt emission to approved product roles instead of assuming a productive 14px page or owner brand is preserved by default. Preserve semantic heading rank independently of visual token size; use a styled inline element for a control label rather than nesting a heading inside its button.
- `reset()`, `default-type()` and `type-classes()` emit no `@font-face` in these probes. A family declaration or matching computed `font-family` is not proof of a loaded Plex face. Use the project's approved font-loading pipeline, verify successful font requests and the actual rendered face, and check the intended weight/script rather than synthetic or fallback glyphs. Do not copy historical paths such as `~@ibm/plex` without resolving them through the actual build tool.
- Website body guidance says left-aligned. For localized RTL text, review logical alignment, bidi isolation and mixed-script code with representative content and a fluent reader; do not blindly pin all scripts to physical left or apply page direction to code syntax. Keep 200% text enlargement, narrow long headings, user spacing and font-failure states in rendered verification.

Sources: [Overview](https://carbondesignsystem.com/elements/typography/overview/), [Style strategies](https://carbondesignsystem.com/elements/typography/style-strategies/), [Type sets](https://carbondesignsystem.com/elements/typography/type-sets/), [Code](https://carbondesignsystem.com/elements/typography/code/). The source-data and Sass receipts do not establish a final candidate evaluation pass.
