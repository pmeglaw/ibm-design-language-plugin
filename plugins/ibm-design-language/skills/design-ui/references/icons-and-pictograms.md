# Icons and pictograms

Read this when selecting, sizing, aligning, coloring, or coding a Carbon icon or pictogram. The earlier reference used the 9 September 2026 website baseline (`^1.115.0`). The 29 September audit reviewed both Usage and Code source pages at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631` and inspected/SSR-rendered selected icons-react11.89.0 APIs. Dynamic libraries, individual artwork visuals and pictograms-react runtime remain unverified. Use the live libraries to confirm the current component name and import path; do not reproduce or invent a near-match when an approved symbol exists.

## Choose the right family

| Family | Purpose | Typical scale | Do not use as |
|---|---|---|---|
| Icon | Compact symbol for an idea, object, status, or UI action | 16, 20, 24, or 32px | Illustration or decoration |
| Productive pictogram | Simple explanatory illustration across digital or physical contexts | 48px minimum, then accepted increments | UI control, logo, or lockup |
| Expressive pictogram | Visually prominent illustration using depth, gradients, layering, and transparency | Large and intentionally rare | UI control, repeated decoration, logo, or lockup |

## Icons

### Library

Search the live IBM UI Icon Library by name or category. Import by the exact exported name. Categories cover AI, navigation, status, data, formatting, operations, systems, technology, time, toggle, user, weather, travel, and other domains; category membership is discovery help, not semantic permission to repurpose an icon.

### Usage

#### Sizing

- Carbon components normally use a 16px artboard.
- Supported sizes are 16, 20, 24, and 32px; keep one consistent size for equivalent actions.
- 16px and 20px icons are optically balanced with 14px and 16px IBM Plex respectively. Do not alter the icon-to-type ratio to force alignment.

#### Touch targets

Use the documented component target and the applicable input context. Aim for at least 44x44px for touch through padding or layout; do not enlarge the glyph to create the target or silently override every compact component variant.

#### Color

Icons are solid and monochromatic unless the library icon explicitly provides two tones. Their foreground color must meet the same 4.5:1 contrast threshold as text. When paired with text, use the same foreground color. Interaction states belong to the component or its background, not to an independently animated icon color.

#### Alignment

Center-align icons beside text. Optical centering wins over baseline alignment or purely geometric offsets.

### Code

Carbon supports vanilla, React, Angular, and Vue packages. For React:

```sh
npm install -S @carbon/icons-react
```

```tsx
import { Add } from '@carbon/icons-react';

<Add size={24} />
```

The default size is 16. Set fill through a semantic class rather than inline raw color. For a library two-tone icon, target `[data-icon-path='inner-path']` only as documented for that icon.

Icon components default to decorative `aria-hidden="true"`. If the SVG itself conveys information, supply `aria-label` or `aria-labelledby`; Carbon then adds the appropriate role. If the icon sits inside a button or link, normally name the control and leave the SVG decorative. Prefer a native button or link for an action and keep the SVG decorative. `tabIndex` alone does not implement button semantics, keyboard activation or disabled behavior. Do not add a second focus stop inside an already interactive control.

## Pictograms

### Library

Search the live IBM Pictogram Library and use the exact exported artwork. Productive and expressive masters are separate resources.

### Usage

#### Productive versus expressive

Productive pictograms are the default. They can work alone or in groups and across many scales. Expressive pictograms have greater visual complexity and presence; reserve them for an occasional focal moment.

Treat both as illustration. Never substitute a pictogram for a UI icon, product mark, event mark, merchandise logo, or header lockup.

#### Sizing

The minimum is 48px. Use the original size or scale by accepted increments; do not freely stretch either axis.

#### Alignment

Pictograms are optically centered on their artboard. Preserve that alignment when placing multiple pictograms side by side or inside containers.

#### Containers

Use only a circle or rectangle/square derived from the required padding. Keep the pictogram at scale, optically centered, and uncropped. Do not invent decorative container shapes.

#### Clearance

Minimum clear space on every side is one quarter of the scaled pictogram grid. Increase clearance only in additional one-quarter-grid increments. The same rule applies with or without a container and is measured inward from a container edge.

#### Color

Foreground/background pairs must satisfy contrast and the IBM five-step family rule. Pair within one color family or use gray backgrounds. Light backgrounds should be White or grades 10–20; dark backgrounds should be grades 70–100 for productive pictograms.

Do not put light artwork on a light background, dark artwork on a dark background, any gradient pictogram on a gradient background, or gradient/expressive artwork on mid-tone backgrounds.

#### Expressive pictogram themes

| Background value | Artwork theme |
|---|---|
| White, 10–20 | Light |
| 30–50 | Monochromatic light (black artwork) |
| 50–70 | Monochromatic dark (white artwork) |
| 80–100, Black | Dark |

The general recommendation is still to place expressive pictograms only on backgrounds at 20 or lighter or 80 or darker. Match the supplied artwork theme to the background instead of recoloring individual layers ad hoc.

#### Pictograms in action

Use pictograms to simplify or introduce a complex idea in websites, product UI, signage, events, or physical applications. They support the content hierarchy; they do not become repeated UI chrome or replace the primary message.

### Code

Carbon supports vanilla, React, Angular, and Vue packages. For React:

```sh
npm install -S @carbon/pictograms-react
```

```tsx
import { Airplane } from '@carbon/pictograms-react';
```

CommonJS and UMD builds are also available. Style fill with a semantic class. The website documents the same decorative/naming behavior for pictograms, but that package was not installed or runtime-verified in this audit; label the SVG only when its meaning is not otherwise expressed, and avoid making it a separate focus target inside another control.

## Review checks

- The symbol comes from the current Carbon library and its meaning matches the action or content.
- Equivalent symbols use one size; icon/type ratios remain intact.
- Every interactive icon has an accessible control name and a target appropriate to its documented component and touch context.
- Icons meet 4.5:1 on every state surface.
- Pictograms are at least 48px, retain one-quarter-grid clearance, and are not acting as UI controls or logos.
- Expressive pictograms are rare, background-compatible, and never placed over a gradient.

## Installed icon and documentation boundaries (29 September audit)

- React icons default to 16px and `fill="currentColor"`. `Add` uses its 32px viewBox even at size24, while `WarningFilled` selects size-specific artwork at 16/20/24 and otherwise its 32px version. Do not infer every icon uses the same viewBox or that any arbitrary scaled size is an approved artboard. Additional width/height props can override the size dimensions; verify square aspect and optical alignment in rendered layout.
- Actual SSR markup from icons-react11.89.0 confirms: an unlabelled icon gets `aria-hidden="true"`; setting `aria-hidden={false}` without a name does not defeat that helper behavior. Supplying a non-empty label adds `role="img"`, but an explicitly supplied `aria-hidden={true}` is retained. Do not assume a label always makes the SVG exposed. Provide one coherent decorative or informative contract and inspect its accessible representation.
- `tabIndex={0}` without a label is dropped by the inspected helper. With a label it emits tabindex0 and focusabletrue. This is focus metadata, not a tested accessibility pass or support promise for IE11. Prefer `<button type="button" aria-label="Add"><Add /></button>` for an icon-only action, with real click/keyboard behavior, target size and visible focus. For a visible text label, name the control through that text and keep the adjacent icon decorative.
- WarningFilled has an inner-path marker with opacity0; the two-tone override needs both the intended fill and opacity1. Website examples use an unrelated label “Add” and mismatched class names for a warning icon; correct action/status semantics and selectors rather than copying them. Raw rebeccapurple/yellow examples show API mechanics, not approved product colors. Its code fences marked CSS also contain `//` comments: use valid CSS comments or actual Sass.
- The Usage page's monochrome rule has the Code page's documented two-tone exception. Its statement about interaction backgrounds explicitly references Carbon v10; check the current component's state tokens before assuming its icon foreground never changes. Carbon's documented icon contrast target here is 4.5:1; this is a design-system rule, not a blanket description of every accessibility criterion. Verify the actual foreground, inner path and every state surface.
- Pictogram themes are separate artwork, especially expressive gradients. Do not assume the productive React component exports every expressive variant or that a single inherited fill recolors all gradient layers. Confirm the exact file, theme, dimensions and provenance before using it. Do not add packages merely to follow installation examples when existing assets or dependencies already meet the need.
- The expressive theme table overlaps at grade50 and lists monochrome variants for mid-tones, while nearby guidance rejects expressive/gradient art on mid-tones. Treat that as a documentation distinction needing exact-asset review; use the appropriate monochrome artwork or a recommended extreme background and verify contrast, rather than inventing a universal grade50 choice. Clearance follows the scaled artwork grid; SVG width alone is not proof of the required quarter-grid spacing or touch target.

Sources: [Icons Usage](https://carbondesignsystem.com/elements/icons/usage/), [Icons Code](https://carbondesignsystem.com/elements/icons/code/), [Pictograms Usage](https://carbondesignsystem.com/elements/pictograms/usage/), [Pictograms Code](https://carbondesignsystem.com/elements/pictograms/code/). Nine actual SSR cases establish emitted markup only; no browser accessible-name computation, assistive technology, library visual review, target geometry, contrast, pictograms runtime or final candidate model pass is implied.

For injected gallery metadata, search/category scope, dynamic asset resolution and source-level focus/copy/download concerns, see [dynamic SVG libraries](dynamic-svg-libraries.md).
