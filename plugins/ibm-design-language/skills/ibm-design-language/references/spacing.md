# Spacing

Read this for negative space, token selection, Stack, responsive spacing decisions, whitespace, or `@carbon/layout` implementation. The earlier reference used the 9 September 2026 website baseline (`^1.115.0`). The 29 September audit reviewed both public source pages at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`, inspected Stack in React 1.117.0, and compiled selected layout functions with Sass 1.105.0. Visual examples and rendered Stack geometry remain unverified.

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

Carbon's Stack component creates equal spacing between children using the spacing scale and supports horizontal or vertical orientation. It lets children remain free of layout margins and assigns positioning to the parent. In React 1.117.0, a numeric `gap` is a spacing-scale step, not pixels: `gap={5}` selects the step for 16px. A string gap is written to the prefixed Stack CSS custom property and can use a project-approved token, for example `gap="var(--cds-spacing-05)"` with the corresponding CSS loaded. Prefer a scale step or approved semantic token unless content demonstrates a real exception. Orientation defaults to vertical; there is no JavaScript default gap. `as` changes the wrapper element, so preserve required list/group semantics when choosing it.

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
  width: layout.to-rem(24px);
  height: layout.to-rem(24px);
}
```

The package exports `$spacing-01` through `$spacing-13`, the `$spacing` map, `$fluid-spacing-01` through `$fluid-spacing-04`, the `$fluid-spacing` map, `em()`, `to-rem()` and the deprecated `rem()` alias, and `$base-font-size`. Configurable `!default` values may be changed with Sass Modules; do not change `$base-font-size` merely to make a local component fit.

## Review checks

- Every fixed spacing decision uses a Carbon token unless the exception is recorded.
- Proximity matches semantic grouping and hierarchy.
- Children do not fight a parent Stack or grid with independent margins.
- Responsive layouts switch token steps intentionally; tokens themselves are not described as responsive.
- The page includes calm whitespace between dense zones.

## Version and verification boundaries

`@carbon/layout@11.60.0` converts 24px to 1.5rem with its default 16px base; `$spacing-05` compiles to 1rem. Prefer `to-rem()`: source marks `rem()` deprecated, but both compiled successfully in the inspected Sass 1.105.0 fixture. Do not repeat the source comment's blanket claim that modern Sass necessarily rejects `rem()`. Conversion relies on the configured base, not a measurement of a user's computed browser font size.

Fixed spacing tokens and fluid-spacing exports are separate tools; the existence of fluid exports does not make `$spacing-05` automatically responsive. Stack generates scale classes for numeric gaps and a CSS variable for string gaps; component source alone does not prove the installed stylesheet, wrapping behavior or overflow. Verify long children, both orientations, responsive token changes, theme and RTL geometry in the consuming application.

Sources: [Spacing Overview](https://carbondesignsystem.com/elements/spacing/overview/), [Spacing Code](https://carbondesignsystem.com/elements/spacing/code/). Source prose, installed Stack/layout APIs and narrow Sass compilation have been reviewed; no final candidate model evaluation or rendered spacing pass is implied.
