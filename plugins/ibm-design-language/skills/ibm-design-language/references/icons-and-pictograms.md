# Icons and pictograms

Read this when selecting, sizing, aligning, coloring, or coding a Carbon icon or pictogram. It reflects the Library, Usage, and Code pages for both categories, last updated 9 September 2026 (React Components `^1.115.0`). Use the live libraries to confirm the current component name and import path; do not reproduce or invent a near-match when an approved symbol exists.

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

Icon components default to decorative `aria-hidden="true"`. If the SVG itself conveys information, supply `aria-label` or `aria-labelledby`; Carbon then adds the appropriate role. If the icon sits inside a button or link, normally name the control and leave the SVG decorative. Make the SVG directly focusable with `tabIndex={0}` only when the SVG itself is the interactive element—do not add a second focus stop inside an already interactive control.

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

CommonJS and UMD builds are also available. Style fill with a semantic class. Accessibility behavior matches icons: pictograms default to decorative; label the SVG only when its meaning is not otherwise expressed, and avoid making it a separate focus target inside another control.

## Review checks

- The symbol comes from the current Carbon library and its meaning matches the action or content.
- Equivalent symbols use one size; icon/type ratios remain intact.
- Every interactive icon has an accessible control name and a target appropriate to its documented component and touch context.
- Icons meet 4.5:1 on every state surface.
- Pictograms are at least 48px, retain one-quarter-grid clearance, and are not acting as UI controls or logos.
- Expressive pictograms are rare, background-compatible, and never placed over a gradient.
