# 2x Grid

Read this for layout geometry, responsive behavior, gutter choice, grid-influencing panels, style models, Figma setup, or Carbon grid code. It reflects the Carbon 2x Grid Overview, Usage, and Code guidance last updated 9 September 2026 (React Components `^1.115.0`).

## Overview

### Mini unit

The geometric base is an 8px square mini unit. Use mini-unit multiples for fixed columns, rows, boxes, outer margins, padding, and the fixed dimension of hybrid boxes. At breakpoint boundaries, a fixed master grid maps cleanly to fluid column widths and row heights. Between breakpoints, columns are percentages; margins and padding stay fixed.

Do not turn this into a rule that every component gap must be divisible by 8. Carbon's component spacing scale also includes 2px, 4px, and 12px tokens.

### Grid fundamentals

The rhythm comes from multiplying or dividing by two. Fluid grids divide available space; fixed grids tile a selected fixed unit and multiply it. The two systems align at breakpoint boundaries.

#### Columns and rows

- **Fluid grid:** hold the column count constant within a breakpoint and let columns scale with the viewport. Start from one region and divide by two as density requires.
- **Fixed grid:** choose a base from the fixed sizing scale, tile boxes, and wrap or scroll when needed. The column count emerges from the available width instead of being predetermined.
- **Hybrid grid:** make one dimension fluid and the other fixed when users expect only one dimension to resize. Use fluid column multiples for the fluid axis and the sizing scale for the fixed axis; aspect ratios do not apply.
- For dense content, use mini units for additional alignment and spatial guidance.

#### Margins

Outer grid margins are fixed within each breakpoint even though columns are fluid.

#### Padding

Standard box padding is 16px at every standard breakpoint. Align type to the inner edge created by the padding; remove design-tool text-box padding that creates a second, accidental inset.

#### Gutters

Grid gutters are optional. A gutterless grid suits closely related content. When content needs separation, 16px on each neighboring box produces a 32px gutter. The Usage guidance defines wide, narrow, and condensed implementation modes below.

#### Breakpoints

Test designs and code at every standard breakpoint. Add custom media queries only for a demonstrated content need.

| Breakpoint | Value | Columns | Column share | Boundary column size | Padding | Outer margin |
|---|---:|---:|---:|---:|---:|---:|
| Small | 320px / 20rem | 4 | 25% | 80px | 16px | 0 |
| Medium | 672px / 42rem | 8 | 12.5% | 80px | 16px | 16px |
| Large | 1056px / 66rem | 16 | 6.25% | 64px | 16px | 16px |
| X-Large | 1312px / 82rem | 16 | 6.25% | 80px | 16px | 16px |
| Max | 1584px / 99rem | 16 | 6.25% | 96px | 16px | 24px |

### Grid behaviors

Choose behavior from what resizing should give the user. If the goal is to see more items, tile fixed boxes and let the count grow. If the goal is to see more within each item, keep the column count fixed and let items scale.

#### Fluid columns

Use for editorial content, dashboards, images, video, and data visualization when content should scale. Column count is fixed per breakpoint; row height may follow column-width multiples and a preferred aspect ratio. Columns are percentage widths between breakpoints.

#### Fixed boxes

Use for repeated tiles, toolbar icons, and similar items when browser width should change how many items are visible. Select a base size, build boxes from its multiples, and wrap or use intentional overflow.

#### Hybrid boxes

Use when one axis should scale and the other should not.

| Example | Width | Height |
|---|---|---|
| Header | Fluid grid | Fixed mini units |
| Toolbar | Fluid grid | Fixed mini units |
| Side panel | Fixed | Fluid grid |
| Menu | Fixed | Fluid to content |
| Content region | Fixed | Fluid to content |
| Data table | Fluid grid | Fluid to content |

#### Key lines

Maintain visible horizontal and vertical alignments across multiple objects. Vertical alignment alone is insufficient; repeated horizontal key lines provide rhythm and make relationships easier to scan.

### Grid influencers

Grid influencers are persistent or invoked UI regions that change the content grid rather than merely overlay it.

#### Screen regions

Keep expected regions consistent across breakpoints: header, global side navigation, local side navigation, dropdown/menu, main content, footer, and dialog.

#### Panel behavior

Vertical panels fill the viewport height.

- **Flexible panels:** support collapsed and expanded states. Expanded width is fixed and not user-resizable. Expansion may condense the content/grid or push content beyond the viewport; do not rely on hover as the only accessible activation mechanism even where legacy guidance illustrates hover expansion.
- **Fixed panels:** keep a static width, cannot collapse, and sit outside the responsive grid.
- **Floating panels:** overlay and conceal content without changing the grid. They must be dismissible. Inline menus, dropdowns, and tooltips are floating elements.

### Sizing scale

Use the scale for content and negative space so unrelated screens retain common rhythm.

#### Fixed base unit

| Size | Mini units |
|---:|---:|
| 8px | 1x |
| 16px | 2x |
| 24px | 3x |
| 32px | 4x |
| 48px | 6x |
| 64px | 8x |
| 80px | 10x |

Choose one of these as the base for fixed icons, boxes, and vertical layout spacing.

#### Fluid base unit

In a fluid grid, column width is the base. A box spans column multiples; its height may also use column-width multiples. This suits leadspaces, editorial sections, and some modal or media layouts.

#### Scaling multiple

After choosing a fixed or fluid base, multiply it consistently. Apply a preferred aspect ratio when both box dimensions scale together.

#### Aspect ratio

Preferred ratios are **1:1, 2:1, 2:3, 3:2, 4:3, and 16:9**, in portrait or landscape. Measure width against columns and derive height. Ratios may change adaptively at breakpoints; use a different ratio or scale multiple when the content genuinely requires it.

#### Vertical rhythm

Use fixed-scale top or bottom margin between sections. Align spacers to the actual text box, not an imagined line-height box; in Figma, use Auto height so the text box fits its content.

#### Components

Components may be fixed, fluid, or hybrid. When their interiors are cramped, use Carbon's minor spacing scale rather than forcing every inset onto the 8px grid. Consistent component heights and internal spacing create their own visible grid.

## Guidelines

### UI galleries

IBM's Pattern Asset Library has product-screen galleries, including Security examples, but much of it is IBM-employee-only. Treat gated examples as optional references, not requirements available to every user.

### Fit for purpose

Start from content and the user's goal. Decide whether the experience is long-form reading, a task flow, or dense operation before choosing the layout. Each page should tell a story that leads to a clear action or outcome.

### Content hierarchy

Use type, components, size, proximity, and whitespace to establish priority.

#### Basic scaffolding

Compose product pages as repeatable layout modules inside stable screen regions. Leadspace and content alignments should recur across pages so navigation into denser areas does not disorient users.

#### Four columns

Four-column organization is the backbone of most IBM experiences. Product entry pages often use it for breathing room, then retain its typographic alignments as content becomes denser. Even two- or three-region arrangements often align their type to an underlying four-column structure.

#### Denser layouts

Preserve the leadspace anchor and key alignments as other column groupings emerge. In very dense visualization regions, fixed mini-unit spacing may be more useful than fluid columns.

#### Layout modules and micro layouts

Layout modules combine components, tokens, icons, type, and grid behavior into reusable structures. Carbon React does not provide these modules; Carbon for IBM Products does, with migration status varying. Use them as references only when their maturity and access fit the project.

#### Odd column configurations

The 16-column grid favors division by two and groups of four. Legacy three-column scaffolding can still be achieved with Carbon's grid, but prefer refactoring toward the 2x structure when practical.

### Continuity and contrast

#### Continuity

Judge a component in its page and journey, not in isolation. Product experiences depend on repeated geometry and key alignments across screens. Repeat enough to reduce cognitive load, but use whitespace and scale changes to avoid monotony.

#### Aspect ratios

Use preferred ratios to create continuity in tiles, catalogs, dashboards, media, and imagery. Same-purpose tiles benefit most from shared ratios.

#### Adaptive aspect ratios

A tile's ratio may change at a breakpoint. When a standard ratio damages content or hierarchy, choose a better ratio or scale multiple deliberately.

#### Contrast

Create contrast with type/image juxtaposition, scale, negative space, asymmetry, and selective grid changes—not color alone. Group related content, then use spacing and scale to express dependencies. A technically aligned layout can still fail when everything has equal visual weight.

### Grid influencers

Influencers resize or reduce the page grid whenever present or engaged.

#### Left-hand navigation

The grid-influencer UI Shell variant is common in IBM products. Opening or closing its left navigation keeps the logical column count while fluidly reallocating available width.

#### Slide-in side panels

Use an influencing side panel when users must reference the page while completing the panel task. Introducing it resizes page content and may reduce the usable column count. Follow Carbon for IBM Products for the selected side-panel component and sizes.

### Style models

Choose a model consistently from content needs. The key distinction is what happens above the 1584px Max breakpoint.

| Model | Use | Above Max |
|---|---|---|
| Editorial | Marketing and expressive reading; occasionally low-density product screens | Keep max width and center the grid |
| Product and docs | Products or long-form content with deep hierarchy and left navigation | Keep max width and left-align the grid |
| High-density interface | Complex tools, catalogs, and data-heavy dashboards | Use full width and add columns in increments of two |

Only software UI uses the grid-influencer Carbon UI Shell. IBM.com marketing typically uses Editorial; IBM.com documentation uses Product and docs.

### Gutter modes

Carbon Figma templates default to a 32px gutter at every breakpoint. Type blocks should not have less than 32px separation. Containers may hang into gutters to restore type alignment; type itself never hangs.

#### Wide: 32px

Use for separate content with separate destinations and text-heavy compositions. Container edges stay on columns, so text inside a padded container may not align with outside text. Labeled fixed components such as inputs and dropdowns **must** use wide mode.

#### Narrow: 16px

This is common in product UI. The container—not its type—hangs 16px into the gutter so text inside and outside containers can align. It saves space and mirrors naturally for RTL layouts. Labeled fixed components remain wide.

#### Condensed: 1px

Use when separate tiles form one larger picture, such as dashboards, overviews, portals, and resource collections. Add a 1px `$border-subtle` border to tiles/cards so the gutter remains perceptible in light and dark themes. Keep all type on the column grid; labeled fixed components remain wide.

### Mixing gutter modes

Mixing modes is normal. Forms often require wide gutters while surrounding product containers use narrow or condensed modes.

#### Nested grids and subgrid

Carbon v11 Grid uses CSS Grid. A Grid nested inside another Grid becomes a subgrid and should be wrapped in a Column so it inherits a valid column definition and the Column's responsive parameters.

### Using grids in Figma

Use Carbon Screen or Screen + Grid influencers components from the Assets panel. Toggle the grid with Control+G, then select the breakpoint variant in the component properties. Combine constraints and Auto Layout only as the composition requires.

## Code

### CSS Grid components

Current Carbon uses CSS Grid. In `@carbon/react`, use `Grid` and `Column` to express breakpoint spans against the 16-column model; avoid custom flex, positioning, and width overrides when the grid can represent the layout.

### AspectRatio

Use Carbon's `AspectRatio` component and its `ratio` prop for fluid cards or assets that must preserve a width-to-height proportion. React and Vue implementations are documented.

### Breakpoint API and helpers

For Sass breakpoint logic:

```scss
@use '@carbon/grid' as *;

.component {
  display: block;

  @include breakpoint-down('md') {
    display: none;
  }
}
```

For visibility helpers:

```scss
@use '@carbon/styles/scss/utilities/helper-classes';

.my-class {
  @include helper-classes.hide-at-sm();
}
```

Prefer semantic responsive layout over hiding essential content. Verify the installed package API and version before copying mixin or helper names.

### Legacy FlexGrid

The v11 default is CSS Grid. Enable the legacy Flexbox implementation only for an existing dependency that cannot yet migrate:

```scss
@use '@carbon/grid';

@include grid.flex-grid();
```

Do not start new work on `FlexGrid`.
