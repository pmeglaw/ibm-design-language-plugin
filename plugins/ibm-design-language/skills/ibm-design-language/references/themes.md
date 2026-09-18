# Themes

Read this for theme terminology, customization, theme switching, system preference handling, or `@carbon/themes` implementation. It reflects Carbon's Themes Overview and Code pages last updated 9 September 2026 (React Components `^1.115.0`). Read `color-and-brand.md` when an approved product palette changes Carbon's generic color values.

## Theming basics

Themes customize existing components by changing shared token values rather than editing each component.

### Theme terms

| Term | Meaning |
|---|---|
| Theme | A collection of visual attributes assigned to tokens to create an aesthetic |
| Token | A role-based identifier whose name and purpose remain stable across themes |
| Role | The permitted systematic use of a token; it does not change between themes |
| Value | The concrete color, space, type, or other value assigned in one theme |

Carbon supplies White, Gray 10, Gray 90, and Gray 100. White is the default for `@carbon/react` unless Sass configuration selects another theme.

### Default theme

Use White unless the product or user context calls for Gray 10, Gray 90, or Gray 100. Configure the Sass module once rather than restyling components individually.

## Customizing a theme

Start from a Carbon theme, then replace only the token values a product must change or add intentional product tokens. Preserve each Carbon token's role. A semantic product layer may map product meaning to Carbon tokens, but must not turn one system token into unrelated meanings across themes.

## Tokens

### Color

Use role-based foregrounds, backgrounds, layers, borders, and interaction/support states. A governed product palette may replace approved values at the semantic token boundary, but it must preserve these roles; see `color-and-brand.md`.

### Spacing

Use the fixed spacing scale within components and layouts; read `spacing.md` for the current application rules.

### Typography

Use role-based type styles within components and page regions; read `typography.md` for selection and implementation.

### Global

Global and component-specific variables control layer behavior, border widths, and other shared structural styling.

The full source of truth is the `@carbon/themes` package for `white`, `g10`, `g90`, and `g100`.

## Theming applied

Names and roles stay constant while values change. Representative mappings:

| Token | Role | White | Gray 100 |
|---|---|---|---|
| `$text-secondary` | Labels/secondary text | Gray 70 | Gray 30 |
| `$text-primary` | Primary text | Gray 100 | Gray 10 |
| `$border-strong` | Strong/bottom border | Gray 50 | Gray 60 |
| `$icon-primary` | Primary icon | Gray 100 | Gray 10 |
| `$field-01` | Field on first layer | Gray 10 | Gray 90 |
| `$background` | Page background | White | Gray 100 |

Do not invert a theme mechanically; use the supplied role mappings and verify every custom role in both light and dark contexts.

## Code

### Select a default theme

In an `@carbon/react` Sass build:

```scss
@use '@carbon/react/scss/themes';
@use '@carbon/react/scss/theme' with (
  $theme: themes.$g100
);
```

For the standalone package:

```scss
@use '@carbon/themes/scss/themes' as *;
@use '@carbon/themes' with (
  $theme: $g100
);
```

### Inline themes

Emit theme custom properties at a scoped selector so a page or region can switch themes without rebuilding component CSS:

```scss
@use '@carbon/themes/scss/themes' as *;
@use '@carbon/themes';

:root {
  @include themes.theme($white);
}

[data-carbon-theme='g10'] {
  @include themes.theme($g10);
}
```

### Custom tokens

Extend from an explicit fallback and keep raw values inside the theme/token layer:

```scss
@use '@carbon/themes/scss/themes';
@use '@carbon/themes' with (
  $fallback: themes.$g100,
  $theme: (
    product-accent: #000000,
  )
);
```

In real product code, replace the example raw value with the approved brand mapping.

### System preferences

When the user has not chosen an in-product preference, match `prefers-color-scheme`. A saved explicit user choice overrides the system. Opposite-theme sections are allowed when their boundary and token scope are clear; test nested layers, focus, hover, and overlays at the boundary.

### JavaScript

`@carbon/themes` exports the `themes` object and direct `white`, `g10`, `g90`, and `g100` bindings. Use these for token-aware logic, not to hand-style each component.

## Review checks

- Component code consumes role tokens, not theme-specific raw values.
- Token roles remain stable across every theme.
- White/Gray 10 and Gray 90/Gray 100 variants are rendered, not merely inferred.
- User choice, system preference, and fallback order are explicit.
- Scoped opposite-theme regions include correct layer, focus, hover, border, and overlay behavior.
