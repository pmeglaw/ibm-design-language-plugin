# UI shell: measured React example, 29 October 2026

Use this dated inspection alongside the [UI shell contracts](ui-shell.md), not
as a replacement for installed Carbon components, semantic theme tokens or the
approved product brand. These are observed example dimensions and mouse states,
not universal Carbon specifications or a product acceptance result.

## Source and inspection conditions

- Official React Storybook: [Header with Navigation and Actions](https://react.carbondesignsystem.com/?path=/story/components-ui-shell-header--header-w-navigation-and-actions).
- [Exact inspected iframe](https://react.carbondesignsystem.com/iframe.html?id=components-ui-shell-header--header-w-navigation-and-actions&viewMode=story&globals=measureEnabled%3A!true%3Bbackgrounds.value%3Ag90%3Boutline%3A!true&args=).
- Chrome, desktop mouse, CSS-pixel DOM bounding rectangles and computed styles,
  plus visual inspection and pointer movement through the browser controls.
- Initial viewport and document: **1920 x 889**, device pixel ratio **1**.
  Coordinates below are viewport-relative; fractional values are rounded to two
  decimal places. They depend on font metrics, labels, available width and state.
- The URL selects a **g90 background** and enables Storybook **measure** and
  **outline**. The observed shell surface is #262626. This is not verification
  of every semantic theme role or of a complete Gray 90 implementation.
- Blue measurement badges and colored element outlines are addon inspection
  aids. Do not reproduce them as product borders, focus rings or decoration.
- The deployed React package version was **not re-established in this inspection**.
  The earlier @carbon/react@1.117.0 record in ui-shell.md is historical evidence,
  not proof of the version served on 29 October. Check the consuming version.
- A 59-element visible DOM sweep included containers, text, links and icons.
  Detailed hover checks covered the visible controls, desktop submenu, responsive
  top-level and nested links, and demonstration modal controls. Sweeping a
  container is not evidence of an extra interaction or tooltip.
- No raw transcript, private product data or new screenshot asset is packaged.
  The tables are the retained observation record; this is not a screenshot corpus.

## Wide header geometry and typography

All sizes and positions in this section apply to the 1920 x 889 view.

| Part | x, y | Width x height |
|---|---|---|
| Header | 0, 0 | 1920 x 48 |
| IBM / [Platform] identity target | 0, 0 | 148.77 x 47 |
| Header navigation area | 148.77, 0 | 334.25 x 47 |
| Link 1 | 164.77, 0 | 73.56 x 47 |
| Link 2 | 238.33, 0 | 73.56 x 47 |
| Link 3 | 311.89, 0 | 73.56 x 47 |
| Link 4 disclosure | 385.45, 0 | 97.56 x 47 |
| Search target | 1776, 0 | 48 x 48 |
| Notifications target | 1824, 0 | 48 x 48 |
| App Switcher target | 1872, 0 | 48 x 48 |

- Header: fixed at the top, full available width, flex layout, #262626 surface,
  **1px #525252 bottom border**, square corners. The measured 47px identity/link
  boxes sit within the 48px header; do not shrink the header to 47px.
- Font stack: **IBM Plex Sans**, system-ui, -apple-system, BlinkMacSystemFont,
  .SFNSText-Regular, sans-serif. Computed font-family does not prove font delivery.
- Identity: **14px / 20px**, platform weight **600**, IBM prefix weight **400**,
  **0.1px letter spacing**, #f4f4f4 text. Leading padding **16px**, trailing
  **32px**; 2px transparent component borders were present.
- Navigation area has **16px leading padding**. Links use **14px / 18px**,
  weight **400**, #c6c6c6 text, **16px horizontal padding** and 2px transparent
  component borders. Widths reflect these particular placeholder labels.
- Link 4 is the current desktop section: **3px #4589ff bottom indicator**.
  Its chevron is **16 x 16**, at approximately **449.02, 15.5**.
- Utility targets are contiguous, with no gaps. Each icon is **20 x 20**, centered
  with **14px inset**; wide-view icon x positions are **1790, 1838, 1886**, y **14**.

## Wide hover, tooltips and submenu

These are computed values for this example. Use installed component styles and
semantic roles for other themes; do not hard-code these colors globally.

| Target | Observed resting / hover behavior |
|---|---|
| IBM / [Platform] | Transparent background; text stays #f4f4f4; no tooltip observed |
| Links 1-3 | #c6c6c6 text becomes #f4f4f4; #262626 surface gains rgba(141,141,141,0.16) hover background |
| Link 4 | Same hover treatment; current-section underline remains; hover alone does not expand it |
| Search, Notifications, App Switcher | Transparent resting button background becomes rgba(141,141,141,0.16); computed icon/button color #78a9ff becomes #a6c8ff; labeled tooltip appears |
| Carbon inline body link | #78a9ff, underlined on hover |
| Launch modal | #0f62fe becomes #0455ed; text remains white |

Header links transition background, border and color over **110ms**. Early
computed samples during transitions contained intermediate colors; those are not
additional design tokens. No pressed-state or keyboard-focus palette was verified.

| Wide tooltip | x, y | Width x height |
|---|---|---|
| Search | 1761.84, 55 | 76.33 x 22 |
| Notifications | 1791.22, 55 | 113.56 x 22 |
| App Switcher | 1794.50, 55 | 117.50 x 22 |

Tooltips use **#f4f4f4 background**, **#161616 text**, **14px / 18px**, weight
400, **2px vertical / 16px horizontal padding**. Their top edge is 7px below
the header. App Switcher shifts left near the viewport edge. Placement is an
observed outcome, not a universal fixed x coordinate. Hidden tooltip wrappers
may report visibility while their content has zero dimensions; that does not
mean all tooltips are displayed at once.

Clicking Link 4 opens its desktop dropdown. The three rows form a **200 x 144px**
stack beginning at **385.45, 47**. Each row is **200 x 48**, with top y values
**47, 95, 143**, **16px horizontal padding**, #393939 background and #c6c6c6
text. Every row visibly highlighted and brightened on hover. Exact settled
desktop submenu hover colors were not retained; intermediate RGB samples must
not be promoted to specifications. The trigger was clicked again to close it.
Placeholder destinations were not followed.

## Wide demonstration content

The following is the story's page composition, not required shell spacing.

| Region | x, y | Width x height |
|---|---|---|
| Main container | 42, 42 | 1836 x 742 |
| Grid | 168, 74 | 1584 x 678 |
| Grid row | 192, 74 | 1536 x 678 |
| Content column | 480, 74 | 1248 x 678 |
| Actual text area | x = 496 | 1216 wide |

Main padding is **32px**. Grid padding is **40px horizontally**, with measured
94px horizontal margins. Row margins are **0 -16px**. The column uses
`cds--col-lg-13 cds--offset-lg-3`, a **288px leading offset** and **16px horizontal
padding**. This offset is absent in the measured narrower layouts.

Headings are **32px / 40px**, weight **400**; body text is **16px / 24px**, weight
**400**; both are #f4f4f4. Heading-to-body margins are **30px**; subsequent headings
also have **30px top margin**.

| Content | Top y | Height |
|---|---|---|
| Purpose and function heading | 74 | 40 |
| First body block | 144 | 240 |
| Header responsive behavior heading | 414 | 40 |
| Its body block | 484 | 48 |
| Secondary navigation heading | 562 | 40 |
| Its body block | 632 | 72 |
| Launch modal button | 704 | 48 |

Launch modal is **170.08 x 48**, at x **496**, with white **14px / 18px** text,
weight 400, **0.16px letter spacing**, padding **14px top/bottom, 15px left,
63px right**, square corners and a transparent 1px border.

## Demonstration modal

Opening Launch modal showed **Account resources / Add a custom domain**. This
is demonstration content, not a shell feature or a working domain-management flow.

| Part | Observed measurement / styling |
|---|---|
| Modal container | 921.59 x 249.95; x 499.20, y 319.52; #393939 background |
| Header inner box | 919.59 x 63.98; padding 16px top/left, 48px right; 8px bottom margin |
| Eyebrow | 12px / 16px, weight 400, #c6c6c6; 4px bottom margin |
| Title | 20px / 28px, weight 400, #f4f4f4 |
| Body | 14px / 20px; inner box 919.59 x 111.97; padding 8px top, 16px sides, 48px bottom |
| Close target | 48 x 48; padding 12px; x 1371.80, y 320.52 |
| Footer | 919.59 x 64 |
| Cancel and Add | Each 459.80 x 64; white 14px / 18px text; padding 14px top, 15px left, 63px right, 32px bottom |

Cancel's resting background is **#6f6f6f** and darkens on hover (sample #636363).
Add changes **#0f62fe to #0455ed**. Close gains a translucent gray highlight;
its sampled intermediate value is not a settled token. All three were hovered;
the modal was dismissed through Close without submitting Add. No responsive
modal, focus-trap, Escape or assistive-technology pass is claimed.

## Responsive states and exact tested boundaries

Widths **1056, 1055, 1024, 768, 375 and 320** were checked at height **889**;
widths **672, 671, 375 and 320** were also checked at height **812**. These are
resized desktop Chrome views with mouse input, not physical-device tests.

| Boundary / state | Observed behavior |
|---|---|
| 1056px wide | Horizontal navigation visible; hamburger hidden |
| 1055px and narrower tested views | Hamburger visible; horizontal navigation hidden; explicitly composed HeaderSideNavItems exposes the same links in the drawer |
| 672px wide | Identity box 148.77px wide; padding 16px left, 32px right |
| 671px and narrower tested views | Identity box 132.77px wide; padding 16px on both sides |
| All tested widths | Header stays 48px high; visible utilities retain 48 x 48 targets and 20 x 20 icons |

The **1056px** and **672px** boundaries belong to this rendered example's CSS;
they are not universal Guidelines mandates. HeaderNavigation does not move its
children into SideNav automatically: preserve the explicit narrow composition
from a shared route model described in [UI shell](ui-shell.md).

Narrow views had a **15px vertical scrollbar**: for example innerWidth 375 had
document clientWidth 360, and innerWidth 320 had clientWidth 305. Header available
width followed clientWidth. Keep viewport and usable layout widths distinct.

### Hamburger, close control and overlay

- Hamburger target: **48 x 48**, x **0**, measured y **-0.5** within the 48px
  header; icon **20 x 20**, white. Identity starts at x **48**.
- Accessible label and state change from **Open menu / collapsed** to
  **Close menu / expanded**, with an X icon when open.
- Both hamburger and close hover use **rgba(141,141,141,0.16)** with white
  icon color; background/border transitions are **110ms**. The inspected
  close control also had a 1px white border after click/focus; this observation
  does not establish a separate hover-only border or keyboard-focus contract.
- Clicking the hamburger opened the drawer. Clicking Close menu or clicking the
  shaded area outside the drawer closed it; reopening also worked.
- The drawer overlays rather than shifts page content. Backdrop background is
  **rgba(0,0,0,0.6)**, beginning at y **48**, with **300ms** opacity/background
  transitions and cubic-bezier(0.5,0,0.1,1). Its measured box was viewport width
  by viewport height starting below the header; the visible remainder is clipped
  to the viewport. Do not interpret that box as an additional screen of content.

### Side navigation and nested links

| Part | Measurement / styling |
|---|---|
| Drawer | Fixed x 0, y 48; **256px wide** at tablet and phone sizes |
| Drawer height | **841px** in an 889px-high viewport; **764px** in an 812px-high viewport |
| Drawer background / text | **#262626 / #c6c6c6** |
| Item-list top padding | **16px** |
| Links 1-4 | Each **256 x 32**, at y **64, 96, 128, 160**; 16px horizontal padding |
| Top-level type | IBM Plex Sans **14px / 18px**, weight **600** |
| Link 4 chevron | **16 x 16**, x **224**, y **168** when closed |
| Expanded nested links | Each **256 x 32**, at y **192, 224, 256** |
| Nested padding / type | **68px left**, **16px right**; **14px / 18px**, weight **400** |
| Nested resting surface / text | **#393939 / #c6c6c6** |

Every top-level and nested link was hovered. All settled to **#f4f4f4 text**
with **rgba(141,141,141,0.16) background**. Color/background/outline transitions
were **110ms**. Link 4 expands inline on click, its chevron reverses, and the
nested rows extend the list rather than opening a floating desktop dropdown.
Hover alone did not expand it. No extra tooltip was observed for these labels.

Drawer inline-size/transform transitions are **110ms cubic-bezier(0.2,0,1,0.9)**
in the inspected state. No reduced-motion preference was tested. The **68px**
nested indent is specific to this HeaderSideNavItems composition; do not replace
the other SideNav variant dimensions recorded in ui-shell.md with this value.

### Phone utility hover and tooltips

At **375 x 812**, utility targets begin at x **216, 264, 312** and remain
48 x 48. Each was hovered: background becomes **rgba(141,141,141,0.16)** and
computed icon/button color becomes **#a6c8ff**, matching the wide state.

| Tooltip at 375px | x, y | Width x height |
|---|---|---|
| Search | 201.84, 55 | 76.33 x 22 |
| Notifications | 231.22, 55 | 113.56 x 22 |
| App Switcher | 234.50, 55 | 117.50 x 22 |

Typography, colors and padding match the desktop tooltip observations. The
rightmost tooltip shifts left to remain within available space. Touch has no
persistent mouse hover; these checks do not establish touch tooltip behavior.

## Observed narrow-layout limitations: do not copy

- At **320px**, the App Switcher target begins at x **276.77** and ends at
  **324.77**, beyond both innerWidth 320 and available clientWidth 305. Visual
  inspection showed clipping. Document scrollWidth remained 305; absence of
  document horizontal overflow is not proof that every fixed-header control fits.
- The story retains nested page/grid padding on phones. At **375px**, main is
  **276px** wide at x 42 with 32px padding; the grid/column is **212px** wide and
  the actual text column is **180px** wide at x 90. At **320px**, main is **221px**,
  grid/column **157px**, text **125px** wide. These are demo-page geometry, not
  recommended mobile reading widths.
- At **672px**, grid horizontal padding is 32px, text begins at x **106** and is
  **445px** wide. At **671px**, grid padding is 16px, text begins at x **90** and
  is **476px** wide. This discontinuity is part of the observed responsive grid.
- Heading type stays **32px / 40px**. The first heading grows from 40px high on
  wide views to **80px at 375px** and **120px at 320px**. The next heading is
  **120px** high at both phone widths. The body therefore becomes very tall;
  the measured main height was **2582px at 375px** and **3774px at 320px**.
- These limitations were observed, not repaired. Do not present the example as
  a complete responsive acceptance pass or reproduce clipped utility controls.

## Applying the record and remaining limits

Use the 48px header/action rhythm, compact identity and navigation, explicit
narrow representation, and state distinctions as comparison evidence. Recheck
installed Carbon behavior, semantic colors, approved brand, actual labels,
scrollbar width and available space before implementing. Placeholder hrefs and
demo utility names are not working product destinations or panel contracts.

The original viewport was restored to **1920 x 889**, menu collapsed and drawer
width zero. No application data or plugin code changed during browser inspection.
Mouse observation does not establish keyboard order, Escape dismissal, focus
restoration, skip-link behavior, screen-reader output, touch, RTL, native zoom,
reduced motion, a complete theme matrix, right utility panels, a 48px icon rail,
large SideNav rows or generated-product quality. Historical contracts, saved
images and previous evidence retain their original scope.
