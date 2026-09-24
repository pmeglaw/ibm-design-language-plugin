# IBM Design Language 1.1.12

Adds a short task-based pattern selector and a version-qualified Next.js App
Router shell recipe, selectively synthesized from seven supplied teaching
documents. The documents themselves are not bundled or treated as authority.

- Routes feedback, loading, search, filtering, form containers, control states
  and deletion choices into the existing detailed references. Preserves task
  constraints and identifies local thresholds as heuristics.
- Adds three reusable shell assets with shared routes, explicit narrow
  navigation, exact/ancestor selection, one open utility panel, a real skip
  target, controlled dismissal, and keyboard focus handling.
- Adds a separate four-case guidance suite with 19 assertions. The existing
  21-case regression suite and three-case intake suite remain unchanged.
- Records current primary sources and package boundaries, including the direct
  PasswordInput export in @carbon/react 1.117.0 and the IBM Products boundary.

The shell compiled with Next.js 16.3.6, React 19.3.0, @carbon/react 1.117.0,
@carbon/styles 1.116.0 and @carbon/icons-react 11.89.0. A separate fixture passed
16 Chromium tests covering routing, responsive navigation, forward/reverse Tab,
Escape, focus restoration, panel switching, long names, white/G100 themes and
automated axe checks. Selected screenshots were inspected. These checks do not
certify browser zoom, screen-reader behavior, every contrast pair, all themes,
other browsers, application auth or backend interactions.

A bounded independent text-only forward check addressed all four new guidance
scenarios; author review found the 19 criteria satisfied. This was two responses
(the first combined three scenarios), not four isolated frozen harness runs,
not a baseline comparison, and not evidence of general skill improvement.
