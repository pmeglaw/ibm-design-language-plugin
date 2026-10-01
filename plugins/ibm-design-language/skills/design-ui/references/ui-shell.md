# UI shell and the global header pattern

For an App Router implementation, read the [Next.js shell recipe](nextjs-shell.md).
Header navigation does not discover and move its links into SideNav: compose the
narrow representation explicitly from the same route model. Keep one open utility
panel state, wire controlled navigation dismissal, and verify the skip target and
focus restoration with the installed components. A CSS resemblance to Carbon is
not evidence of Carbon behavior.

The header is a persistent orientation surface. Keep its structure and behavior predictable across related products while respecting each product's approved identity and actual capabilities.

## What good looks like: header benchmark

Use these owner-selected official examples as the visual standard for Carbon product shell headers:

- [Carbon UI shell header guidelines](https://www.carbondesignsystem.com/building-blocks/core/components/ui-shell-header/guidelines): anatomy, placement examples, content and responsive intent.
- [React UI shell header overview](https://react.carbondesignsystem.com/?path=/docs/components-ui-shell-header--overview): component API and runnable sibling stories. Start with **Header with Navigation and Actions** for a simple product, **Header with Navigation, Actions and Side Nav** for deeper navigation, or **Header with Actions and Right Panel** for utilities.

**Positive composition.** A slim, continuous, full-width top band establishes the product before the page begins. Compact product identity anchors the left, navigation follows on the same baseline, and spare space separates it from a contiguous group of utilities at the right edge. The header provides orientation while the page title and task actions below carry the work. Use the documented 48px header and action targets, compact 14px type styles and component spacing described below.

The following correction pairs are local craft judgments derived from those examples, not additional Carbon specifications:

| If the candidate shows | Prefer this benchmark quality |
|---|---|
| An inset floating card, rounded capsule or decorative shadow around the entire header | A continuous rectangular band aligned to the viewport; distinguish shell from content with the component's surface and border treatment |
| A giant wordmark or centered product name competing with page content | Brief, compact identity at the start of the navigation sequence; keep the page title in the content region |
| Separated pill buttons for account, help and notifications | Adjacent full-height utility targets with aligned glyphs and no inter-button gaps |
| New record or Export mixed into the account utility group | Place task actions with their page or collection; reserve the shell utility group for system scope |
| Extra icons added to make the header look complete | Use only working utilities the product needs; a standalone tool does not need a cross-product switcher |

**Apply the reference.** Choose the example matching the actual navigation depth and utilities. Compare the candidate and reference at comparable viewport, theme, zoom and open/closed state. Check the silhouette, baseline, name-to-link spacing, utility rhythm, selected/hover/focus treatment, and separation from page content. At narrow widths, inspect the explicit left-panel representation and long labels rather than shrinking type or squeezing targets. Explain meaningful departures using the approved product requirement. Use its semantic theme and brand; neither a black header nor IBM branding is universal. Storybook placeholders and demonstration handlers must become real application destinations and actions.

**Inspection boundary, 2026-10-01.** The current Guidelines prose and anatomy illustration were inspected in a browser. The React overview API and the white-theme Navigation and Actions story were inspected at wide and narrower preview widths; Storybook identified `@carbon/react@1.117.0`. This is source/example inspection, not a generated-product evaluation or a keyboard, responsive-matrix or assistive-technology pass. Earlier dated receipts below retain their original limits. Recheck the live examples and installed package when implementing.

**Scope: products only.** The shell is the chrome of a tool a user is signed into. It does not appear on marketing, landing, documentation-marketing or editorial pages — those are expressive surfaces and get a light masthead in the page's own type (wordmark, a few text links, one CTA on the page's grid). Reaching for the shell on a landing page is the productive/expressive mix-up in its most visible form.

## The organising axis

**Left to right runs product → global.** The left side holds what's relevant inside this product. The middle holds system-level controls. The far right holds the most global thing there is — the switcher, which spans products.

Cross that with persistence:

| | Definition |
|---|---|
| **Global** | Present everywhere in the UI, consistent from one context to another: navigation, authentication, notifications, account. |
| **Local** | Exists inside one product's context, and differs between products: the tasks the product exists to do. |

And with task scope: **system** tasks navigate the platform and manage things that apply to everything; **product** tasks are the product's core function. The 2×2 of persistence and scope tells you where anything belongs.

## Deciding the configuration

- **Header only** — a small number of main sections, no secondary navigation. More horizontal room for content; no room for sub-menus that need to stay open.
- **Header + left panel** — more navigation items, an extra level of hierarchy, and sub-menus that stay open without covering content. Use the left panel when there are more than five secondary items or users switch between them frequently.
- **Right panel** — system-level actions or content anchored to a header icon.

Ask first whether the product is standalone or one tool in a platform. Standalone: no switcher, and the system half of the header shrinks to account and help. Platform: the system half becomes a contract every tool must match identically. If it's standalone today but might not be, build the two-tier structure and leave the system side nearly empty — retrofitting a global tier later changes the top 48px of every page at once.

## Header anatomy and geometry

Header height **48px**, full viewport width. Usage describes a persistent product header; Style permits a sticky header or one that scrolls away. Choose the approved product behavior, account for content offsets and verify the installed CSS rather than declaring one positioning mode universal.

Left to right:
1. **Hamburger** (48×48) — only when there's a collapsible left panel.
2. **Header name** — the parent domain, brief. For IBM products it is preceded by "IBM". Other products follow their approved naming authority; HeaderName supports an optional prefix, including none. Give the name a meaningful home destination rather than a placeholder.
3. **Header links** — product navigation. Never open a new tab or leave the domain. Collapse into the left panel at narrow widths.
4. **Sub-menus** — down chevron, open on click, chevron points up when open. Close by selecting an item, clicking the label again, or clicking outside. **A sub-menu label opens the menu and nothing else — it can never also be a link.**
5. **Utilities** — universal system functions. Icon buttons, 48×48, **flush right with no gaps between them**. They open panels rather than navigating directly.

Preserve the relative utility order across related products. The positions below describe the full example set, not mandatory empty slots; omit capabilities the product does not have:

| Position | Icon |
|---|---|
| Leftmost of the group | Search — first so an expanding field doesn't displace anything |
| Middle | Product-specific icons |
| 4th from right | Help |
| 3rd from right | Notifications |
| 2nd from right | Account |
| Rightmost | Switcher — always last, never anything to its right |

Type: product name `heading-compact-01` (14/600); company prefix, links and sub-menus `body-compact-01` (14/400).

## Left panel

Width **256px** expanded, **48px** as an icon rail; positioned below the header, fixed left. Nav items 32px (48px for the large variant), link padding 0 16px, nested items indent to 32px (72px when the parent has an icon). Icons 16px with 24px margin-end. Dividers 1px with 8px/16px margins. Use the installed component transitions. For authored nearby off-canvas navigation, use productive standard easing when it closes and honor reduced motion; see [motion](motion.md).

Sub-menus expand in place and push items down; the same click collapses them. **The left panel does not support three tiers** — if there's more content below a sub-menu, use tabs in the page.

**Never put unbounded content in the side navigation.** User-generated lists have no upper limit and usability collapses; use a drill-down instead.

At narrow widths the header links move into the left panel *above* the existing items, pushing them down.

## Right panel

Invoked by a right-side header icon and anchored to it. Consistent width, full viewport height, flush right, **floats over page content**. Multiple right panels may exist but only one may be open at a time. When open, the triggering icon is outlined with its bottom border flowing into the panel. Dismiss by selecting an item or clicking the icon again. Usage says right-panel items have no selected state, while Style lists one and the installed SwitcherItem supports isSelected. Choose the intended product state deliberately; the API capability does not by itself override Usage guidance.

The switcher lives in a right panel. Switcher items are anything that changes which product occupies the shell; dividers group related items and should not separate every one.

## Sense of place

The header's job goes beyond linking. It is where users look to orient — and that covers **state as well as location**: which account they're using, whether they're logged in, and **whether they've entered a different mode**. If a product has a draft/published split, a sandbox, an impersonation session, or a non-production environment, the header is where that belongs, persistently, on every screen.

## Persistent state is your job

The pattern says to keep or restore page state so users can pivot without losing progress, and it says plainly that **this is not part of the component and must be added during implementation**. The recommended technique is to track essential state in the URL and return the user there automatically. If state will be lost, say so before it is.

Persist appropriate view/filter context in the URL or another approved store so reload/back navigation restores useful state. Keep secrets and private records out of shared URLs, and distinguish persistent navigation context from unsaved or transactional selection. Components do not implement this application policy.

## Drill-down and breadcrumbs

A drill-down can be triggered from any interactive element and opens a page focused purely on the selected object, with a breadcrumb of the path back to the root above the title. Breadcrumbs let users see where they are and climb back up.

## Organizing navigation

Structure by the tasks users need to do, not by the org chart or acquisition history. Schemes and their costs:

| Scheme | Good for | Cost |
|---|---|---|
| Most recent | Returning to the last object used | Loses logical grouping; better as a secondary view |
| Customized | Personal efficiency | Inconsistent between users |
| Audience / role | Surfacing role-relevant tasks | Hurts discovery when tasks overlap roles |
| Alphabetical | Users who know the exact label | Fails on synonyms — "pop-up, modal, lightbox, dialogue" |

**Related products should share navigation structures.** The research term is *transitional volatility*: every inconsistency between screens costs re-orientation, and users experience an inconsistent platform as slower even when it isn't. Consistency here is a performance argument, not an aesthetic one.

## Accessibility

- **Skip to main content** as the first focusable element on the page (WCAG 2.4.1).
- Landmark regions for each area — navigation, main, banner, search, form — with unique labels when there's more than one of a kind.
- Match DOM order to visual order (technique C27). Where CSS reorders for narrow screens, be deliberate about it.
- Heading levels must match their visual ranking so screen-reader users can navigate by structure.
- Header target areas span the full 48px height.


## Public documentation and released API receipts — 2026-09-29

The shell is a composition of optional header, product left navigation and global right utilities. Keep one owning layout rather than duplicating chrome in pages. Annotate product-specific names, routes, responsive representations, open state, dismissal and focus behavior once; annotate page deviations separately. Header menus are navigation disclosures, not interchangeable with command Menu or TreeView. Use a shared route model to keep narrow/wide labels, destinations and current-page state consistent.

### Header responsibilities

Selected `@carbon/react@1.117.0` source inspected:

- Header renders a header element and supplied children. It does not insert SkipToContent or name arbitrary icons. HeaderNavigation renders a named nav/ul; HeaderGlobalAction and HeaderMenuButton require caller-supplied accessible labels. The claim that Carbon provides default names describes composed examples, not every utility's props. Translate and contextualize names, including the switcher's actual product/site scope.
- SkipToContent is a separate anchor defaulting to #main-content and tabindex=0. Content defaults to a main element but does not assign that ID or focusability. Compose the first page stop and a real unique target; verify visible-on-focus behavior, actual skip focus/scroll outcome and fixed-header obstruction. A URL hash change alone does not prove the user can start interacting with main content.
- HeaderMenuButton's isActive changes icon/style; it does not generate aria-expanded/controls. HeaderGlobalAction similarly exposes style and click behavior, not automatic panel coordination. Add matching expanded state, controls and names according to the composition. Never treat an icon change as sufficient state announcement.
- HeaderContainer initializes local side-nav state from isSideNavExpanded, toggles via its render callback and listens globally for Escape; later prop changes are not synchronized by that source. Use an explicit owning controlled state when route transitions, breakpoints or several panels need coordinated closing. Test nested-popup Escape interactions instead of assuming the global listener respects an inner component's dismissal.
- HeaderName uses prefix=IBM by default and a replaceable shell Link. HeaderMenuItem uses isActive/current-state styling and forwards link props; isCurrentPage is deprecated. Explicit aria-current=page can be supplied. Current-page indication does not mean a native href becomes nonactivatable. Do not disable current links merely to copy the left-panel prose.
- HeaderMenu owns local expansion. Its trigger is an anchor href=# with aria-haspopup/expanded; Enter/Space toggles, Escape closes and focuses its ref, and blur outside descendants closes. Pointer child activation bubbles to the parent toggle path. A comment describes assigning child tabindex=-1, but the actual clone assigns only ref and HeaderMenuItem defaults tabindex=0. Verify rendered closed-item reachability/CSS, Tab/Shift+Tab, outside interaction and child navigation; do not infer a menubar arrow-key model from its class names or stale comments.
- HeaderSideNavItems is a separate ul wrapper, not a service that relocates HeaderNavigation children. Render the narrow route representation explicitly above existing side items. Check valid list nesting, duplicate IDs and only the visible representation being reachable. Long names, utilities and expanded search must fit without blocking navigation at small widths or zoom.

Documented header geometry is 48px high with 48px menu/action targets; product-name padding is 16px leading/32px trailing, links/submenu items 16px and chevron separation 8px. Product name uses heading-compact-01, prefix/links body-compact-01. Use semantic background, border, text, hover, active, selected and focus roles in the chosen inline shell theme. Position global utilities consistently; use the platform's actual set rather than inventing missing icons solely to fill nominal positions. Product shell guidance is not authority to add IBM branding to another organization's product.

### Left navigation responsibilities

SideNav supplies a named nav and optional overlay. expanded selects controlled mode at mount; defaultExpanded initializes uncontrolled state. onToggle(event, nextExpanded) reports requests, but rail mouse handlers can pass a boolean as the first argument. Treat the second argument as requested expansion rather than assuming every callback contains an Event. onOverlayClick is forwarded without automatically closing; onSideNavBlur is separate. Keep the chosen controlled mode stable and update owning state for the intended requests.

Default focus/Escape and rail hover listeners manage expansion. Disabling listeners removes that behavior; props spread after generated handlers can override it. Escape may navigate window.location.href when href is provided, so href is not a harmless focus-return ref. Prefer explicit invoker refs and deliberate route integration when no navigation is intended. Controlled rail expansion has a secondary hover state; verify actual visual and announced state on mouseleave, focus entry/exit and breakpoint changes.

The nonrail inert calculation uses expanded or the installed layout lg media query; rail remains non-inert. SideNavLink/SideNavMenu compute tab indices from context, but nested SideNavMenuItem does not have that same context branch. Submenu hiding still needs rendered/CSS traversal checks. The global Tab listener attempts to focus the nav from an expanded hamburger and does not expressly distinguish Shift+Tab; verify both traversal directions and transitions into actual links. The documentation's approximately 175% zoom example is not a universal trigger threshold: responsive behavior depends on viewport/breakpoint and zoom.

SideNavMenu has local defaultExpanded state, native button aria-expanded and in-place list disclosure. Escape collapses it; rail collapse preserves/reopens its previous expansion. Do not pass an imaginary controlled expanded prop expecting to own this submenu. isActive is a styling/current-descendant cue, not the open state. SideNavLink and SideNavMenuItem apply current classes but do not themselves generate aria-current=page; supply and verify it in route integration. Native links continue to navigate and do not automatically move focus to the top of new content. SPA route commits, unsaved-change vetoes and focus restoration belong to the application.

Documented side panel is 256px with 32px rows (the Code demos also expose large/rail variants), 16px edge padding, 32px nested leading padding, 16px icons and 4px selected border. Link/submenu labels use heading-compact-01 and child labels body-compact-01. Use contextual background/selected/focus roles. Keep meaningful bounded navigation rather than unbounded office/file lists. Limit this pattern to two navigation tiers; additional object hierarchy needs a suitable page pattern. Test overflow scrolling, full label access and usable targets with long translated content.

### Right utilities and switcher responsibilities

Only one utility panel should be open; own that policy with one panel identity or equivalent application state. A panel's selected trigger is not a selected destination. Product-switching items belong together with meaningful group dividers, not a divider between every item. Usage's left-panel link accidentally points to the right-panel route; use the real left-panel docs.

HeaderPanel is a div in the inspected release, despite Accessibility's generic nav claim. Name a real navigation region for route lists; account/help/forms may require different semantic content. expanded chooses controlled mode at mount; internal blur/Escape/outside attempts cannot change a controlled prop. onHeaderPanelFocus must update owner state and restore the intended invoker when appropriate. The callback is also used for blur/outside closing, so do not blindly steal focus on every close reason. addFocusListeners defaults true; disabling it transfers dismissal responsibility to the app.

HeaderPanel's Escape may navigate to href. Its outside-click logic is specific to a direct Switcher child and excludes header actions; a generic panel does not gain universal outside dismissal. It does not automatically close on successful item navigation or impose a dialog focus trap. Verify Tab/Shift+Tab, focused-trigger Escape, focus return and new-route focus as separate interactions. Rendered hidden content must be excluded appropriately; expanded styling alone does not establish that.

Switcher renders a named ul and clones recognized SwitcherItems with expanded/index/focus coordination. SwitcherItem defaults tabindex=0 when expanded and-1 otherwise, supports arrow navigation in addition to Tab and forwards native destination/target/rel. Its index fallback treats zero specially and the Switcher focus routine has index-dependent wrap logic: test first/last, a single item, dividers, disabled/unavailable items and dynamic lists rather than promising flawless arrow wrapping. The focus routine's enabled-item filter does not explicitly inspect disabled state. A click or route commit must close the owning panel when intended; SwitcherItem does not persist selected data or automatically notify HeaderPanel to close.

Right-panel geometry is 256px wide with 32px items / 16px horizontal padding and 20px trigger glyphs; item type heading-compact-01, layer/background/border/focus roles semantic. Style's header-action pair 48px / 8rem is an arithmetic error, not a 128px target requirement; header geometry 48px / 3rem is the coherent reference. Bound the floating panel to usable viewport space below shell chrome, preserve scrolling/focused actions and check clipping at narrow widths, zoom and mobile keyboards. Generic full-viewport prose is not permission to cover the header or offscreen content.

### Verification and evidence boundary

Check first skip link/target, one owning shell, named landmarks and utilities, valid lists/link semantics, current-page state, route destinations and modifier-click behavior, submenu Tab/Enter/Space/Escape/outside closing, one open utility, owning controlled state, successful/cancelled/stalled navigation, unsaved edits, focus return/new-page focus, hidden/inert descendants, rail focus/hover and overlay handling, responsive header-route parity, long labels, loading/error utilities, scrolling/RTL/zoom and actual theme contrast. No UI Shell runtime/AT pass was performed for this amendment. A stylesheet, docs badge or native header tag does not certify the composed shell.

Sources: [Header Usage](https://carbondesignsystem.com/components/UI-shell-header/usage/), [Style](https://carbondesignsystem.com/components/UI-shell-header/style/), [Code](https://carbondesignsystem.com/components/UI-shell-header/code/), [Accessibility](https://carbondesignsystem.com/components/UI-shell-header/accessibility/); [Left panel Usage](https://carbondesignsystem.com/components/UI-shell-left-panel/usage/), [Style](https://carbondesignsystem.com/components/UI-shell-left-panel/style/), [Code](https://carbondesignsystem.com/components/UI-shell-left-panel/code/), [Accessibility](https://carbondesignsystem.com/components/UI-shell-left-panel/accessibility/); [Right panel Usage](https://carbondesignsystem.com/components/UI-shell-right-panel/usage/), [Style](https://carbondesignsystem.com/components/UI-shell-right-panel/style/), [Code](https://carbondesignsystem.com/components/UI-shell-right-panel/code/), [Accessibility](https://carbondesignsystem.com/components/UI-shell-right-panel/accessibility/). Twelve public source tabs reviewed 2026-09-29 at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`; images/GIFs/Storybook demos uninspected. Selected installed UIShell JS receipts listed above are version-scoped, not all framework implementations.


## Global header pattern source review: 29 September 2026

Read the full [Global header pattern](https://carbondesignsystem.com/patterns/global-header/) source, including persistence/task hierarchy, header-only/header-with-left-panel configurations, system/product navigation, state retention, organizational schemes and accessibility. Artwork/GIFs, actual responsive relocation, URL persistence and AT were not inspected. This complements the version-scoped component receipts above; neither source prose nor a component export implements the whole navigation system.

Separate breadth of a task (system versus product) from persistence (global versus local). Choose the shell from bounded navigation depth and user tasks; a simple product may use only a header or panel. A persistent submenu that obstructs content is a reason to consider the left panel, not a reason to invent another navigation tier inside header menus. Keep unbounded user-generated records in drill-down content rather than growing the shell indefinitely. Recency, customization, role and alphabetical schemes each have tradeoffs; preserve approved IA rather than reorganizing routes from an example diagram.

The IBM-prefix rule is explicitly for IBM products, not a demand to add IBM branding to every Carbon-based application. Header-name destination is the approved domain home; menu labels toggle rather than double as destination links. Product navigation remains within its appropriate context. Utilities disclose relevant system functions and the switcher groups actual authorized products; do not invent notifications/settings/switcher capabilities just to match anatomy. Responsive product-links-to-left/system-links-to-right is a design intent requiring application integration, not automatic route relocation supplied by every UIShell export.

State restoration via URL is expressly not part of the UI Shell component. Decide which query/filter/drill-down state should survive navigation, and where unsaved work can block leaving. Validate serialized state against the current role/data and avoid placing secrets or private records in URLs. Route changes, back/forward, modifier-click, stale links and sign-out must follow the app's navigation/authentication contract. Keep current location/account/mode understandable; visual active classes alone do not establish programmatic current-page state.

Use a first accessible skip route to the actual main target and name multiple navigation landmarks distinctly. Align meaningful visual and DOM order, especially ordered workflow steps; responsive CSS repositioning must preserve coherent reading and keyboard order rather than creating duplicate active links with duplicate IDs. Heading rank conveys hierarchy independently of token size. No automatic autofocus into navigation is required merely because the source discusses starting there. Verify skip destination after route changes, hidden mobile descendants, focus restoration and one owning persistent shell in actual browser/AT checks.
