# Typography

Read this for IBM Plex, productive versus expressive selection, regional blending, type-token roles, fluid behavior, or `@carbon/type` implementation. It reflects Carbon's Typography Overview, Style strategies, Type sets, and Code pages last updated 9 September 2026 (React Components `^1.115.0`).

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

Keep running text neutral. Use core blue for links and primary actions. Reserve other colored text for semantic cases such as warnings, alerts, or code, and verify contrast on every surface.

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

At the Large/1056px breakpoint, the documented specimens are:

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
  @include type.type-style('productive-heading-01');
}

.expressive-heading {
  @include type.type-style('fluid-heading-01', true);
}
```

The documentation also shows `type.style(...)` in one example; verify the installed package API and prefer the supported `type.type-style(...)` form used by the standard/fluid token examples.

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
