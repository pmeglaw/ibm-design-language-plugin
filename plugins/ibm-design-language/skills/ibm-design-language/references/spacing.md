# Spacing

Read this for negative space, token selection, Stack, responsive spacing decisions, whitespace, or `@carbon/layout` implementation. It reflects Carbon's Spacing Overview and Code pages last updated 9 September 2026 (React Components `^1.115.0`).

## Introduction

Spacing is the negative area between elements and components, usually implemented with margin, padding, or gap. Carbon supplies tokens and layout utilities so these relationships remain consistent.

## Spacing

## Spacing scale

Carbon spacing complements the 2x Grid and type scale with increments based on two, four, and eight. Use tokens both inside components and between components; small values express close relationships and larger values control layout density.

| Token | rem | px | | Token | rem | px |
|---|---:|---:|---|---|---:|---:|
| `$spacing-01` | 0.125 | 2 | | `$spacing-08` | 2.5 | 40 |
| `$spacing-02` | 0.25 | 4 | | `$spacing-09` | 3 | 48 |
| `$spacing-03` | 0.5 | 8 | | `$spacing-10` | 4 | 64 |
| `$spacing-04` | 0.75 | 12 | | `$spacing-11` | 5 | 80 |
| `$spacing-05` | 1 | 16 | | `$spacing-12` | 6 | 96 |
| `$spacing-06` | 1.5 | 24 | | `$spacing-13` | 10 | 160 |
| `$spacing-07` | 2 | 32 | | | | |

## Applying spacing

Use tokens for margin, padding, and gap in any axis or shorthand combination. Prefer a parent layout to own relationships instead of giving every child independent margins.

```scss
margin: $spacing-03 $spacing-01;
margin-right: $spacing-05;
padding: $spacing-07 $spacing-04 0;
```

### Other spacing options

Non-token options have narrow purposes:

- `center`/paired auto margins center an element fluidly.
- One-sided `auto` absorbs undefined space for an asymmetric fluid layout.
- Grid gutters establish inter-column spacing; use the current 2x Grid reference rather than the outdated 12-column wording still present in the Spacing page.

## Stacking

Carbon's Stack component creates equal spacing between children using the spacing scale and supports horizontal or vertical orientation. It lets children remain free of layout margins and assigns positioning to the parent. A custom `gap` is supported, but prefer a token unless content demonstrates a real exception.

## Designing with space

### Creating relationships

Proximity communicates association. Repeat the same spacing pattern for items with equal meaning; increase space to weaken a relationship. Group related content with space before adding rules or decorative dividers.

### Creating hierarchy

More surrounding space generally increases perceived importance; tighter space lowers it. Do not pack a high-priority element into a dense group where it will be overlooked.

### White space

White space helps users process information and rest between dense zones. A section may be dense, but an entire page should not be uniformly crowded.

## FAQ decisions

- Avoid increments outside the scale unless a demonstrated constraint requires one.
- Continue using the Carbon grid for horizontal spacing.
- Percentages such as halves or thirds are valid for division and min/max widths.
- Spacing tokens are fixed; they do not change value automatically at breakpoints. A layout may deliberately switch to another token step at a breakpoint.

## Code

`@carbon/react` normally includes the layout support its components need. Direct Sass usage:

```scss
@use '@carbon/layout';

.selector {
  margin-bottom: layout.$spacing-05;
  width: layout.rem(24px);
  height: layout.rem(24px);
}
```

The package exports `$spacing-01` through `$spacing-13`, the `$spacing` map, `$fluid-spacing-01` through `$fluid-spacing-04`, the `$fluid-spacing` map, `em()` and `rem()` functions, and `$base-font-size`. Configurable `!default` values may be changed with Sass Modules; do not change `$base-font-size` merely to make a local component fit.

## Review checks

- Every fixed spacing decision uses a Carbon token unless the exception is recorded.
- Proximity matches semantic grouping and hierarchy.
- Children do not fight a parent Stack or grid with independent margins.
- Responsive layouts switch token steps intentionally; tokens themselves are not described as responsive.
- The page includes calm whitespace between dense zones.
