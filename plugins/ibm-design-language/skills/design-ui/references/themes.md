# Themes

Read this for theme terminology, customization, theme switching, system preference handling, or `@carbon/themes` implementation. The earlier reference used the 9 September 2026 website baseline (`^1.115.0`). The 29 September audit reviewed both public source pages at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`, inspected React 1.117.0 Theme/Layer, and compiled selected Sass with themes11.82.0/Sass1.105.0. Images, rendered cascade and system-theme behavior remain unverified. Read `color-and-brand.md` when an approved product palette changes Carbon's generic color values.

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
@use '@carbon/themes/scss/themes' as presets;
@use '@carbon/themes' with (
  $fallback: presets.$g100,
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

## Installed API boundaries (29 September audit)

### Sass names, configuration and values

The website's custom example imports both modules with namespace `themes`, which fails. Give the preset module a separate alias as above. The placeholder `$token-01` is not a built-in token; use a real role such as `themes.$text-primary`, or define the custom token explicitly. Configuring a Sass module must precede its first load; trace component imports before adding a late `with` configuration.

`$theme` is merged over `$fallback`, which defaults to White. A dark custom theme should specify its dark fallback so missing roles do not retain a light default. `themes.theme(...)` emits custom properties at the chosen selector; configuration changes fallbacks but does not alone emit a page's runtime theme scope. The installed mixin's additional arguments are component-token maps, not a boolean nesting switch. The website's `theme($g10, true)` compiles but emits an empty `--cds-true` property; omit that argument and define scoped nesting explicitly.

Use `themes.get('text-primary')` when a Sass computation needs the configured concrete value. It produces a build-time value and will not respond to a later runtime CSS theme switch. A Sass token variable such as `$text-primary` emits `var(--cds-text-primary, ...)`; applying `rgba` to that hex-valued variable can compile into `rgba(var(...), .25)` without establishing a valid browser color. Use a real semantic overlay/alpha role or an approved browser-supported color formulation, then verify runtime switching on the painted selector. Compilation is not proof of CSS color validity.

### Runtime scope and preferences

In React 1.117.0, `GlobalTheme` provides ThemeContext and forwards a ref to a single valid child; it does not apply theme classes or CSS variables to the root. `Theme` renders the selected `cds--white/g10/g90/g100` class (prefix configurable), `cds--layer-one`, and a local ThemeContext. It needs the corresponding Carbon CSS. It does not emit the documentation's `data-carbon-theme` attribute unless supplied by the caller, nor implement storage, a preference selector or automatic system matching. `usePrefersDarkScheme()` observes the media query; application logic still resolves explicit choice before system preference. Do not assume `GlobalTheme`'s context value includes the `isDark` field that the scoped Theme implementation supplies.

`Theme` resets LayerContext to 1. Layer's `level` is zero-based (0/1/2 maps to one/two/three), and its child context increments and clamps at 2. Default `withBackground` is false: a layer class does not by itself request a painted background. Keep layer role, painted surface and context aligned. A portal outside a theme's DOM subtree needs explicit CSS scope even when React context follows it. Verify overlays and nested opposite-theme sections at their actual mount locations.

The system-preference example relies on selector specificity and source order so explicit attributes win. Preserve initial server/client agreement and existing persistence behavior; test no saved choice, explicit light/dark, subsequent OS changes, reload, nested scopes and popup placement before claiming completion.

### JavaScript exports

Installed `@carbon/themes@11.82.0` exports `themes`, `white`, `g10`, `g90`, `g100`, `textPrimary`, and `interactive`. The website's `interactive01`/`interactive02` bindings are absent. JavaScript values describe package themes; they are not a readback of custom properties currently painted by a user-selected or branded scope. Do not use them to override the application's semantic token layer.

Sources: [Themes Overview](https://carbondesignsystem.com/elements/themes/overview/), [Themes Code](https://carbondesignsystem.com/elements/themes/code/). Nine compile probes yield seven compiled outputs and two errors; two compiled outputs intentionally illustrate questionable recipes, so this is not seven implementation passes. JS exports and source receipts do not establish contrast, cascade, system switching or a final candidate evaluation pass.
