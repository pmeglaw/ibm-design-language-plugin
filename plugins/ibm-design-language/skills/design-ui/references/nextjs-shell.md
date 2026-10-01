# Carbon shell in the Next.js App Router

Use this recipe when integrating the product shell, after reading [UI shell](ui-shell.md).
The [GlobalHeader example](../assets/nextjs-shell/GlobalHeader.tsx),
[shared routes](../assets/nextjs-shell/navigation.ts), and
[composition styles](../assets/nextjs-shell/shell.scss) are a small starting point,
not an authentication system or an application scaffold.

## Framework and package contract

Target checked for this recipe: Next.js 16.3.6, React 19.3.0,
`@carbon/react` 1.117.0, `@carbon/styles` 1.116.0, and
`@carbon/icons-react` 11.89.0. Recheck peer dependencies,
exports and behavior for the consuming application's versions. The example uses
the default `cds` prefix; adapt its scoped styles if the application changes it.

Keep the root layout a Server Component. Import Carbon's component styles once,
then the composition stylesheet. Pass route content through the client shell's
`children` slot; that does not turn the passed Server Components into Client
Components. Interactive shell state, DOM refs and pathname tracking live in the
client shell. For example, after copying the three asset files into `components/shell`:

```tsx
// app/layout.tsx (Server Component)
import '@carbon/styles/css/styles.css';
import '../components/shell/shell.scss';
import GlobalHeader from '../components/shell/GlobalHeader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <GlobalHeader productName="Workspace">{children}</GlobalHeader>
  </body></html>;
}
```

The example uses Carbon's default theme. Apply the product's supported theme API
and semantic brand mapping before adoption. Replace the illustrative switcher
destinations with real product URLs; do not use the switcher for pages inside the
same product. No IBM prefix is imposed on a non-IBM product.

## Decisions implemented by the example

- A shared route array supplies header links and `HeaderSideNavItems`. Carbon
  hides/shows the appropriate representation at its breakpoint; it does not
  discover and transfer links from another component. Avoid a competing Tailwind
  `lg` breakpoint. Secondary Settings remains in the side navigation.
- Match path segments, not raw prefixes: `/reports-old` is not inside `/reports`.
  The root route is exact-only. A selected ancestor uses Carbon's `aria-current="true"`;
  only an exact destination uses `"page"`. Reconcile trailing slashes, locale and
  base-path conventions with the actual router. Rewrites need a hydration check.
- Navigation is a collapsible, **non-modal overlay** in this example at all sizes,
  not a persistent desktop rail. It permits Tab to leave. Do not infer a modal
  focus trap from overlay positioning or apply this contract to a modal side panel.
  `isCollapsible` keeps the menu trigger available on desktop. A scoped style
  extends Carbon's narrow-only scrim to desktop. Closed navigation is unmounted
  so desktop hidden links cannot enter the Tab sequence; this intentionally omits
  a closing transition. Keep `HeaderSideNavItems` and `SideNavItems` as sibling
  lists rather than nesting a `ul` directly inside another `ul`.
- One `activePanel` concept (the `panel` union state) makes utility panels mutually
  exclusive. Utility order is Notifications, Account, Switcher. The example
  renders one non-modal panel and removes it when closed; hidden controls do not
  remain as offscreen Tab stops.
- Controlled SideNav state handles its toggle callback, overlay click, blur and
  Escape. Blur uses the event's focus destination so clicking the trigger does
  not close then reopen the menu. Dismissal restores the invoking control where
  appropriate; outside pointer interaction keeps focus at the user's destination.
- Opening a utility panel focuses its heading/content region. Escape and the
  dismiss action restore the opener. Tabbing out into page content closes the
  panel without moving focus back. Opening navigation focuses its first visible link.
  The example disables HeaderPanel's internal focus listeners because the shell
  owns this non-modal panel's dismissal contract. SideNav's toggle handler accepts
  an optional second argument to accommodate the Carbon/native `onToggle` type
  intersection in React 19. It handles Carbon's close requests by event type.
  Shell Escape handling uses capture so a header tooltip cannot swallow it
  before the open shell region is dismissed. Revisit event ownership if adding
  nested widgets that need their own Escape behavior.
- The first focusable skip link targets a real `Content id="main-content"` with
  `tabIndex={-1}`. Route changes and selecting the current route close overlays
  and focus content. If a product has its own route announcer or focus manager,
  integrate with it instead of adding competing focus changes.

## Application responsibilities

The shell does not implement authorization, preserve form drafts, or persist all
page state. Use URL state for suitable shareable filters/views, and the appropriate
product/session storage for non-shareable state. Avoid secrets in URLs. Define
unsaved-work behavior before introducing editing inside the shell or navigating
away from a dirty task. Do not turn the example's empty notification text into a
claim that a notification service is connected.

The example's long-name truncation is limited to the compact shell name; retain
the full accessible name and do not propagate it to page titles or field labels.

## Verify in the consuming application

Check exact, ancestor, sibling-prefix and root route selection; desktop and narrow
links; header order; same-route clicks; Back/Forward; skip focus; Escape; reverse
Tab; outside/overlay dismissal; trigger toggling; utility switching; long names;
zoom; supported themes; and relevant rendered contrast pairs. Record actual
package versions and separate compile, automated browser, visual and assistive-
technology evidence. A passing fixture does not validate a different product's
auth, data, routing or unsaved-work behavior.

Sources: [Next.js server/client composition](https://nextjs.org/docs/app/getting-started/server-and-client-components),
[header usage](https://carbondesignsystem.com/components/UI-shell-header/usage/),
[HeaderSideNavItems source](https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/react/src/components/UIShell/HeaderSideNavItems.tsx),
[SideNav 1.117.0](https://unpkg.com/@carbon/react@1.117.0/lib/components/UIShell/SideNav.js),
[SkipToContent 1.117.0](https://unpkg.com/@carbon/react@1.117.0/lib/components/UIShell/SkipToContent.js),
[Content 1.117.0](https://unpkg.com/@carbon/react@1.117.0/lib/components/UIShell/Content.js).
