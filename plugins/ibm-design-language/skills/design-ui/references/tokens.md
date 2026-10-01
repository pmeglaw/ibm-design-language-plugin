# Tokens — color, type, space, grid, motion

Values resolved against Carbon v11 source (`@carbon/colors`, `@carbon/themes`, `@carbon/type`, `@carbon/layout`, `@carbon/grid`, `@carbon/motion`). An optional standalone White/Gray 100 baseline lives at ../assets/carbon-tokens.css; see [asset scope](asset-scope.md). Use installed theme APIs for other themes and nested layers.

## Contents
- [The palette](#the-palette)
- [Color family rules](#color-family-rules)
- [Contrast by counting steps](#contrast-by-counting-steps)
- [Theme tokens](#theme-tokens)
- [How interaction states are derived](#how-interaction-states-are-derived)
- [Spacing and sizing](#spacing-and-sizing)
- [The 2x Grid](#the-2x-grid)
- [Type](#type)
- [Motion](#motion)

---

For an end-to-end selector example, read [semantic token consumption](semantic-token-example.md). A palette match alone does not establish a semantic role.

## The palette

Twelve listed families × ten grades, plus black and white. Grade 10 is lightest, 100 darkest.

| Family | 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Blue | 001141 | 001d6c | 002d9c | 0043ce | **0f62fe** | 4589ff | 78a9ff | a6c8ff | d0e2ff | edf5ff |
| Cyan | 061727 | 012749 | 003a6d | 00539a | 0072c3 | 1192e8 | 33b1ff | 82cfff | bae6ff | e5f6ff |
| Teal | 081a1c | 022b30 | 004144 | 005d5d | 007d79 | 009d9a | 08bdba | 3ddbd9 | 9ef0f0 | d9fbfb |
| Green | 071908 | 022d0d | 044317 | 0e6027 | 198038 | 24a148 | 42be65 | 6fdc8c | a7f0ba | defbe6 |
| Yellow | 1c1500 | 302400 | 483700 | 684e00 | 8e6a00 | b28600 | d2a106 | f1c21b | fddc69 | fcf4d6 |
| Orange | 231000 | 3e1a00 | 5e2900 | 8a3800 | ba4e00 | eb6200 | ff832b | ffb784 | ffd9be | fff2e8 |
| Red | 2d0709 | 520408 | 750e13 | a2191f | da1e28 | fa4d56 | ff8389 | ffb3b8 | ffd7d9 | fff1f1 |
| Magenta | 2a0a18 | 510224 | 740937 | 9f1853 | d02670 | ee5396 | ff7eb6 | ffafd2 | ffd6e8 | fff0f7 |
| Purple | 1c0f30 | 31135e | 491d8b | 6929c4 | 8a3ffc | a56eff | be95ff | d4bbff | e8daff | f6f2ff |
| Gray | 161616 | 262626 | 393939 | 525252 | 6f6f6f | 8d8d8d | a8a8a8 | c6c6c6 | e0e0e0 | f4f4f4 |
| Cool Gray | 121619 | 21272a | 343a3f | 4d5358 | 697077 | 878d96 | a2a9b0 | c1c7cd | dde1e6 | f2f4f8 |
| Warm Gray | 171414 | 272525 | 3c3838 | 565151 | 726e6e | 8f8b8b | ada8a8 | cac5c4 | e5e0df | f7f3f2 |

Hover steps are palette entries, not alphas: `white→e8e8e8`, `gray10→e8e8e8`, `gray20→d1d1d1`, `gray30→b5b5b5`, `gray40→999999`, `gray50→7a7a7a`, `gray60→5e5e5e`, `gray70→636363`, `gray80→474747`, `gray90→333333`, `gray100→292929`, `blue60→0050e6`, `blue70→0053ff`, `red60→b81922`, `green50→208e3f`.

Three gray families exist so a design can pick a temperature. Cool gray carries a slight blue bias that pairs naturally with the core blue; warm gray softens. Pick one and stay in it.

## Color family rules

Colors are organized into 4-color families, each containing core blue. Combine freely inside a family; subdivide to 3, 2, or 1.

- **Avoid mixing green with red, magenta, or purple.**
- **Avoid mixing teal with red or magenta.**
- Data visualization is the sanctioned exception.

Gradients: two colors only, from an approved 2-color family, no more than two grades apart, values 30–60 for vibrancy, 45° angle. No radial gradients, no three-color blends.

## Contrast by counting steps

Palette grades help shortlist pairs; they are not a uniform luminance scale or a proof of contrast. "Steps" = how many grades apart two colors sit.

| Color 1 | Pairs at 4.5:1 | Pairs at 3:1 |
|---|---|---|
| Black | 50 → White (6 steps) | 60 → White (5) |
| 100 | 50 → White (5) | 60 → White (4) |
| 90 | 50 → White (4) | 60 → White (3) |
| 80 | 40 → White (4) | 50 → White (3) |
| 70 | 30 → White (4) | 40 → White (3) |
| 60 | 10 → White (4) | 20 → White (4) |
| 50 | 90 → Black (4) | 80 → Black (3) |
| 40 | 80 → Black (4) | 70 → Black (3) |
| 30 | 70 → Black (4) | 70 → Black (4) |
| 20 | 70 → Black (5) | 60 → Black (4) |
| 10 | 60 → Black (5) | 50 → Black (4) |
| White | 60 → Black (6) | 50 → Black (5) |

The step rule is a fast filter, not a substitute for measurement — yellow and orange break it badly because their luminance doesn't track their grade number. Yellow 30 (`#f1c21b`), Carbon's warning color, is only 1.68:1 on white and fails the 3:1 requirement for graphical elements. Use yellow 50 (`#b28600`) or yellow 60 (`#8e6a00`) for warning *outlines and borders* on light themes; yellow 30 is fine on dark. Carbon does exactly this in its own chart alert stroke. Run `scripts/check_contrast.py` on anything yellow or orange.

### Known contrast traps

Run `scripts/check_contrast.py --preset status-light status-dark text-light text-dark` before finalising a palette — one call, every surface. These are the failures it finds every time, so you can design around them from the start rather than discovering them at review:

**Check marks against the surface they land on when hovered, not at rest.** In the listed light-theme example, rows, tiles and list items darken on hover (`layer-01` #f4f4f4 → `layer-hover-01` #e8e8e8), so the resting surface is never the worst case. This is the single most common way an otherwise careful status palette fails.

| Status role | Carbon's light-theme token | Against white / layer-01 / hover | Use instead |
|---|---|---|---|
| Warning | yellow 30 `#f1c21b` | 1.68 / 1.53 / 1.37 — fails everywhere | yellow 60 `#8e6a00` (or 50 if it never sits on a hover surface) |
| Caution | orange 40 `#ff832b` | 2.46 / 2.24 / 2.01 — fails everywhere | orange 60 `#ba4e00` |
| Success | green 50 `#24a148` | 3.35 / 3.05 / **2.74** — passes at rest, fails on hover | green 60 `#198038` |
| Error | red 60 `#da1e28` | 5.00 / 4.55 / 4.08 — fine | — |
| Info | blue 70 `#0043ce` | 7.79 / 7.09 / 6.36 — fine | — |
| Draft | gray 60 `#6f6f6f` | 5.02 / 4.57 / 4.10 — fine | — |

The listed dark baseline checks do not establish contrast on deeper layers, selected/active surfaces, inverse regions or custom themes. Verify each actual foreground/background pair in every state; neither a light nor dark pass proves the other.

Note what this does *not* mean. Carbon's `$support-warning` token is correct as a **fill** behind a dark icon and as the theme's semantic anchor; it just can't carry the contrast on its own as a border, stroke, dot or chart mark. Keep the token for fills and reach for the darker grade for the *drawn* part. Carbon does exactly this itself — its chart alert stroke is yellow 50, not yellow 30.

The split has a limit: at indicator size (16–20px) the drawn part has to do real work. The outline is **1px minimum, 2px preferred at 16px**, and a light fill (yellow 30, orange 40, green 50) must not be the only substantial area of colour — a yellow 30 triangle with a hairline yellow 60 edge is still a 1.68:1 mark in grayscale. Either fill with the accessible grade too, or make the outline heavy enough that the shape reads without the fill. Run the check against the outline *and* ask whether the mark survives with the fill removed.

Against a gradient, check text against the lowest-contrast stop regardless of where the text currently sits — users resize and respace text, and it will move.

## Theme tokens

Four themes: White, Gray 10 (light), Gray 90, Gray 100 (dark). Surfaces stack in a layering ladder; each rung has its own hover, active and selected value.

| Token | White | Gray 10 | Gray 90 | Gray 100 |
| `background` | ffffff | f4f4f4 | 262626 | 161616 |
| `layer-01` | f4f4f4 | ffffff | 393939 | 262626 |
| `layer-02` | ffffff | f4f4f4 | 525252 | 393939 |
| `layer-03` | f4f4f4 | ffffff | 6f6f6f | 525252 |
| `layer-hover-01` | e8e8e8 | e8e8e8 | 474747 | 333333 |
| `layer-active-01` | c6c6c6 | c6c6c6 | 6f6f6f | 525252 |
| `layer-selected-01` | e0e0e0 | e0e0e0 | 525252 | 393939 |
| `layer-accent-01` | e0e0e0 | e0e0e0 | 525252 | 393939 |
| `field-01` | f4f4f4 | ffffff | 393939 | 262626 |
| `border-subtle-01` | c6c6c6 | e0e0e0 | 6f6f6f | 525252 |
| `border-strong-01` | 8d8d8d | 8d8d8d | 8d8d8d | 6f6f6f |
| `border-inverse` | 161616 | 161616 | f4f4f4 | f4f4f4 |
| `border-interactive` | 0f62fe | 0f62fe | 4589ff | 4589ff |
| `text-primary` | 161616 | 161616 | f4f4f4 | f4f4f4 |
| `text-secondary` | 525252 | 525252 | c6c6c6 | c6c6c6 |
| `text-helper` | 6f6f6f | 6f6f6f | c6c6c6 | a8a8a8 |
| `text-error` | da1e28 | da1e28 | ffb3b8 | ff8389 |
| `text-on-color` | ffffff | ffffff | ffffff | ffffff |
| `link-primary` | 0f62fe | 0f62fe | 78a9ff | 78a9ff |
| `focus` | 0f62fe | 0f62fe | ffffff | ffffff |
| `overlay` | black @ 60% | black @ 60% | black @ 60% | black @ 60% |
| `support-error` | da1e28 | da1e28 | ff8389 | fa4d56 |
| `support-success` | 24a148 | 24a148 | 42be65 | 42be65 |
| `support-warning` | f1c21b | f1c21b | f1c21b | f1c21b |
| `support-info` | 0043ce | 0043ce | 4589ff | 4589ff |

Note `focus` flips to white on dark themes — a blue ring on near-black doesn't read.

Buttons: `button-primary` blue 60 → hover `0050e6` → active blue 80. `button-secondary` gray 80 → `474747` → gray 60. `button-danger-primary` red 60 → `b81922` → red 80. `button-disabled` gray 30 on light.

## How interaction states are derived

- **Hover** on a layer is never an alpha — it's the palette's paired hover step. Only `background-hover` uses alpha: gray 50 @ 12% light, 16% dark.
- **Active** is a discrete jump: light themes land on gray 30; dark themes step up the ladder. `background-active` = gray 50 @ 50% light, 40% dark.
- **Selected** sits between: `layer-selected-*` = gray 20 light, one rung up on dark. `background-selected` = gray 50 @ 20% light, 24% dark.
- **Disabled** uses the component's documented role mapping. Filled buttons use `button-disabled` with `text-on-color-disabled`; transparent controls may use `text-disabled`. Do not impose one opacity formula across controls. Preserve native or component disabled behavior; see the [worked example](semantic-token-example.md).
- **Skeleton**: background is the hover step of the theme's base; element is a mid gray.

## Spacing and sizing

Read `spacing.md` for application, Stack behavior, responsive decisions, whitespace, and `@carbon/layout` APIs.

Mini unit is **8px** in product and web. Spacing scale:

| Token | px | | Token | px |
|---|---|---|---|---|
| spacing-01 | 2 | | spacing-08 | 40 |
| spacing-02 | 4 | | spacing-09 | 48 |
| spacing-03 | 8 | | spacing-10 | 64 |
| spacing-04 | 12 | | spacing-11 | 80 |
| spacing-05 | 16 | | spacing-12 | 96 |
| spacing-06 | 24 | | spacing-13 | 160 |
| spacing-07 | 32 | | | |

Permitted layout multiples of the base unit: **1x, 2x, 3x, 4x, 6x, 8x, 10x, 12x**.

Fixed sizes: xs 24, sm 32, md 40, lg 48, xl 64, 2xl 80. Icons: 16, 20, 24, 32px.

In print the mini unit scales with viewing distance — 2mm handheld, 4mm arm's reach, 8mm poster, 16mm human-scale, 32mm across a room, 64mm across a street — and type multiplies with it (4x posters, 8x human-scale, 32x across the street).

Form spacing: inputs are 40px tall in product regardless of context. Dedicated-page forms use 32px between inputs; contained forms (side panel, modal) drop to 24 or 16. Leave 48px between the last input and the button group.

## The 2x Grid

Read `2x-grid.md` for the maintained grid guidance: breakpoint geometry, fluid/fixed/hybrid behavior, optional gutters, wide/narrow/condensed modes, grid influencers, style models, Figma setup, and code APIs. Do not infer the grid from the spacing scale alone: the 8px mini unit governs grid geometry, while Carbon component spacing also includes finer 2px and 4px tokens.

## Type

Read `typography.md` for productive/expressive selection, regional blending, complete token roles, font stacks, and `@carbon/type` APIs.

IBM Plex — Sans, Serif, Mono, Condensed; eight weights; 100+ Latin languages plus Arabic, CJK, Cyrillic, Devanagari, Greek, Hebrew, Thai. Mono fits every glyph in 600 units and is for code and specs only.

Scale steps (px): 12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 54, 60, 68, 76, 84, 92, 102, 112, 122, 132, 144, 156.

**Fixed (productive) set** — use for product UI:

| Token | Size/leading | Weight | Tracking |
|---|---|---|---|
| label-01 / helper-text-01 / legal-01 | 12/16 | 400 | .32 |
| code-01 (Mono) | 12/16 | 400 | .32 |
| body-compact-01 | 14/18 | 400 | .16 |
| body-01 | 14/20 | 400 | .16 |
| code-02 (Mono) | 14/20 | 400 | .32 |
| heading-compact-01 | 14/18 | 600 | .16 |
| heading-01 | 14/20 | 600 | .16 |
| body-compact-02 | 16/22 | 400 | 0 |
| body-02 | 16/24 | 400 | 0 |
| heading-compact-02 | 16/22 | 600 | 0 |
| heading-02 | 16/24 | 600 | 0 |
| heading-03 | 20/28 | 400 | 0 |
| heading-04 | 28/36 | 400 | 0 |
| heading-05 | 32/40 | 400 | 0 |
| heading-06 | 42/50 | 300 | 0 |
| heading-07 | 54/64 | 300 | 0 |

**Fluid (expressive) set** - sizes change per breakpoint. `fluid-heading-05` runs 32 → 36 → 42 → 48 → 60px across sm/md/lg/xlg/max, dropping from weight 400 to 300 as it grows. `fluid-display-04` runs 42 → 68 → 92 → 122 → 156px with -0.64px then -0.96px tracking at the top end. Use primarily for editorial and marketing surfaces. A product may use one as a deliberate full-width, outside-container page/header/banner moment; never place fluid type inside a product component or dense task region.

**Type craft rules:** use the approved logical reading alignment; review localized RTL text separately rather than applying physical left alignment universally. Sentence case; title case only for proper product names. Curly quotes, real apostrophes and primes, em dash for breaks, en dash for ranges, hyphen for compounds. Plex is designed to be spaced generously — don't track it tight. Stack headlines over two or three lines. Add extra right padding inside containers so text never runs edge to edge. Fix rags, orphans and widows.

## Motion

Read `motion.md` for motion strategy, choreography, sequencing, adaptive behavior, and `@carbon/motion` APIs.

| Curve | Productive | Expressive |
|---|---|---|
| standard | `cubic-bezier(.2, 0, .38, .9)` | `cubic-bezier(.4, .14, .3, 1)` |
| entrance | `cubic-bezier(0, 0, .38, .9)` | `cubic-bezier(0, 0, .3, 1)` |
| exit | `cubic-bezier(.2, 0, 1, .9)` | `cubic-bezier(.4, .14, 1, 1)` |

Durations: fast-01 70ms, fast-02 110ms, moderate-01 150ms, moderate-02 240ms, slow-01 400ms, slow-02 700ms. Duration scales with distance and size.

IBM's reading of the classic animation principles, where it differs from convention:
- **Arc** is inverted — translate on one axis at a time with slight overlap, rather than organic arcs. Purpose reads as deliberate.
- **Squash and stretch** stays subtle: acceleration and reaction, never cartoonish deformation.
- **Timing** is decisive A to B; avoid long exponential eases as things settle.
- **Exaggeration** means demonstrating function clearly, not adding decoration.

Craft: animate stroke weight from zero rather than crossfading; animate between swatch colors rather than fading opacity — both keep silhouettes clean. Reveal type left to right, top to bottom, one axis, and leave it long enough to read. Never distort Plex. Dense compositions get small textural motion; sparse ones can take expansive movement. 24fps minimum.

## Carbon color audit boundaries (29 September 2026)

Overview, Usage and Code source prose were reviewed at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`. Tokens-page prose, its widget source and all 19 injected groups were read: 297 tokens and 1,188 theme entries. This is source-data review, not verification of every rendered table or token in every package. Images, video, Figma operations and browser-painted color remain unverified.

### Role and layer application

Use palette swatches to define an approved theme or brand layer; components consume semantic roles. `colors.$blue-50` emits a fixed hex, whereas `themes.$text-primary` emits a CSS variable with a fallback. A palette import alone does not implement theme switching or authorize a brand change. Preserve component-only roles and the specialized scope of AI and chat tokens rather than reusing them as general accents.

Explicit layer sets associate the painted host with its next field/container layer: a field on layer02 uses field03 and border-strong03. Contextual tokens need actual Layer scope; dropping a numeric suffix in a design spec does not create that scope. A background/selected/accent state is not automatically a new structural layer. Match CSS scope, React Layer context, painted surface and popup mount; see [Themes](themes.md) for zero-based levels, layer saturation and Theme behavior.

The overview's table says g90/g100 background values are #262626/#161616, but its embedded ColorBlock examples use #282828/#171717. Installed themes11.82.0 confirms the table values. The injected website table is handwritten data, not an installed-package readback: inverse hover, layer-accent hover/active, selected-disabled, placeholder and dark helper-text values differ from the inspected package. Prefer current installed APIs for implementation and investigate design mismatches; do not copy the website's hex table into a new parallel token system.

### States and contrast

Hover, active, selected and focus have different semantics; a selected color does not establish aria-selected/checked, and disabled styling does not enforce disabled interaction. Do not replace the component's current behavior with the overview's universal no-focus claim: native disabled and aria-disabled/composite patterns can differ. Preserve and verify the actual component contract.

The overview's simplified above-24px contrast wording omits the bold-text threshold and exact boundary. Follow [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html): ordinary text needs 4.5:1; large text at least 18pt or 14pt bold needs 3:1. Do not assume Plex SemiBold automatically qualifies as bold. Keep unrounded ratios for threshold decisions. Readonly, placeholder, hover and error text still need their applicable contrast; a disabled exception does not extend to everything styled faintly.

Alpha values require compositing over the actual backing surface, including nested and inverse themes. Focus geometry and contrast need both adjacent surfaces and inset treatment checked. The overview's generic state-step formulas do not override installed exceptions, governed brand values or specific component roles. Avoid turning optional dark mode into a new feature without scope authorization, and do not repeat its health-benefit prose as a product guarantee.

### Palette API checks

Installed colors11.59.0 confirms JS `black`, `blue[50]` and `warmGray100`; explicitly import each binding used in a snippet. Sass variables compile, but map lookup must match actual key types: `map.get(colors.$colors, blue, 50)` returns Blue50 here, while the quoted `'blue'` lookup returns null and silently emits no background. Named CSS colors can parse differently from strings in Sass. Use the direct exported swatch or inspect map keys rather than treating a successful compilation with empty CSS as success. For iteration use `@each $grade, $value in $grades` to bind both map members.

Sources: [Overview](https://carbondesignsystem.com/elements/color/overview/), [Usage](https://carbondesignsystem.com/elements/color/usage/), [Tokens](https://carbondesignsystem.com/elements/color/tokens/), [Code](https://carbondesignsystem.com/elements/color/code/). A comparison of all 1,188 website theme entries with themes11.82.0 JS exports does not establish browser cascade, complete contrast, component Sass availability or final candidate evaluation.

### Syntax and component-specific roles

Syntax colors are a separate semantic family, not permission to recolor arbitrary product text. The website data repeats “Color literal” descriptions across unrelated tokens and contains palette-label/hex conflicts: control-keyword says Purple70 but supplies Purple60; definition-keyword says Cyan70 but supplies #00bcd4. Installed themes11.82.0 exports different values for these roles. Validate the actual installed syntax theme, code language, diff/selection states and backing surface rather than trusting a palette grade or using color as the only cue. Code remains readable in RTL layouts without reordering its syntax; test both language direction and copied payload.

Link, icon and focus roles stay distinct from button fills. Inverse link states and inset focus need their own surrounding-surface checks. Support colors identify status, with accompanying text and an appropriate icon; a caution-purple token does not authorize a product's unrelated purple role. Tag background, text/icon, hover and border form a coordinated set, not interchangeable swatches. A component's color state still requires its actual native/ARIA state and working action.

Button, content-switcher, tag and notification website tokens were absent from this selected themes JS export comparison. That does not establish that their installed component Sass tokens are unavailable: inspect the relevant component token module before choosing an import or custom replacement. The content-switcher table's transparent background has an empty hex field; an empty serialized string is not a valid CSS color. Preserve transparency deliberately through the installed API.

Notification inverse action roles belong to the notification's specific background and button treatment. Light status backgrounds become neutral dark surfaces in the listed dark themes; do not infer status from the surface alone. Skeleton element/background roles indicate loading presentation, while the overlay role is a particular scrim treatment, not a requirement for every floating panel.

### AI and chat roles

Keep aura, gradient-border, shadow, AI skeleton and overlay roles confined to justified AI treatments. Gradients require paired start/end values, explicit stops, alpha compositing and the actual theme surface. The source table has inconsistencies: light aura-hover-start labels 32% but supplies opaque hex; dark aura-hover-background labels layer-hover but supplies a light hex; dark border-end labels Red50 but supplies Blue50. Resolve against installed tokens and the relevant component's design contract; do not copy these literals into a theme.

Chat roles distinguish bot/agent/user avatar, user/agent bubble and text, prompt, header and shell. Chat quick-action text, hover, active and selected are separate roles; they do not supply button semantics or selection behavior. Retain readable sender labels and accessible action names rather than identifying people or state solely through color. A chat-token import neither implements a conversation experience nor permits adopting Carbon blue where owner brand rules govern.

Evaluation boundary: all groups received source review, and the JS comparison reports literal differences, including equivalent alpha spellings and absent component exports. Its 590 differences are not 590 defects. Browser painting, all contrast pairs, assistive technology and a fresh model evaluation of this revised candidate remain required before claiming comprehensive implementation competence.
