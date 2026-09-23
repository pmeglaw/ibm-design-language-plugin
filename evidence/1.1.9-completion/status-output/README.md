Use `status-legend.css` inside your existing Carbon White or Gray 10 console. Add `ops-status-scope` to the region containing the legend and table. `usage.jsx` supplies the five labels and approved Carbon library symbols inside the requested 16px circles. Keep the table component's existing row hover styles.

Healthy, warning, critical and in progress consume Carbon's `support-success`, `support-warning`, `support-error` and `support-info`. There is no neutral/not-started support token: the local `--ops-status-not-started` role uses Carbon Gray 60. It is deliberately not `icon-secondary` or `text-helper`.

The support fills remain unchanged. Yellow needs a contrasting edge on light surfaces; Green 50 falls to 2.74:1 on the #e8e8e8 hover surface. Local Yellow 60 and Green 60 edge roles address those boundaries. The 2px edge is a local craft heuristic for this 16px carrier. All marks include distinct library symbols plus persistent labels so color is not the only cue. The static status has no focus stop, live region or animation.

No framework, packages, styles or project guidance were present in the empty workspace. This is integration CSS and example JSX, not a running console. No packages were installed. Check icon exports against your installed version. Browser rendering, symbol legibility at 16px, table integration, zoom, forced colors and assistive technology remain untested. The supplied contrast evidence is calculated from stock light-theme values, not browser measurements; custom product themes need their own measurements. Dark themes and selected/pressed rows are outside this request.

Sources consulted:
- [Carbon color tokens](https://carbondesignsystem.com/elements/color/tokens/)
- [Carbon status indicator pattern](https://carbondesignsystem.com/patterns/status-indicator-pattern/)
- [Carbon icon code](https://carbondesignsystem.com/elements/icons/code/)

The snapshot's general icon advice and status-specific advice differ in emphasis. This follows the status pattern's symbol-plus-color approach with visible labels. Palette values are isolated in three local semantic roles; other authored colors consume Carbon roles. No global Carbon tokens or table styles are overridden.
