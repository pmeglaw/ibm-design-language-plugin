# Chart semantics and implementation boundaries

Read with [status and data visualization](status-and-dataviz.md). For injected chart demos, load [chart example integration](chart-example-integration.md) for field mappings, shared-state hazards, loading/zoom behavior and historical sandbox compatibility. Reviewed 2026-09-29 against Carbon's [chart anatomy](https://carbondesignsystem.com/data-visualization/chart-anatomy/), [types](https://carbondesignsystem.com/data-visualization/chart-types/), [axes](https://carbondesignsystem.com/data-visualization/axes-and-labels/), [legends](https://carbondesignsystem.com/data-visualization/legends/), [palettes](https://carbondesignsystem.com/data-visualization/color-palettes/), [dashboards](https://carbondesignsystem.com/data-visualization/dashboards/), [flow](https://carbondesignsystem.com/data-visualization/flow-charts/), [spatial](https://carbondesignsystem.com/data-visualization/spatial-charts/), and [Gantt](https://carbondesignsystem.com/data-visualization/gantt-charts/) guidance. Several pages explicitly identify work-in-progress or design-only boundaries.

## Data question before geometry

Use bars for magnitude comparison, lines for time trends, scatter for correlation, and suitable part-to-whole encodings for composition. Treemaps suit hierarchical composition with many categories when precise comparisons are secondary; circle packs expose hierarchy with lower space efficiency and often require zoom. Sankey/alluvial diagrams show flows between connected indicators, not correlations between unconnected stages. Network components supply building blocks; the documented library does not supply the whole graph layout algorithm.

Do not infer chart implementation from a design thumbnail. Simple-chart examples are injected from `@carbon/charts/demo/data`; reading the MDX placeholder is not inspecting the examples or testing their options. Verify the installed Carbon Charts package, version, framework and exports. The reviewed Gantt page explicitly says its charts are not in the library; geographic chart examples and some flow charts also have availability limits. Do not invent a Gantt import or assume every design-only feature is released. Recheck support at implementation time.

## Domains and missing data

Magnitude comparison/part-to-whole axes, including bars and areas, start at zero. A cropped line/scatter domain may expose a trend but must remain clearly labeled and must not imply exaggerated magnitude comparisons.

Keep unavailable periods as gaps and label their boundaries. Do not interpolate unknown values or substitute zero. Keep time ticks at consistent increments; missing records must not compress elapsed time silently. If compressing an axis, explicitly show an axis break. The documented break treatment uses a sinusoidal segment; the X break has a 16px minimum and the Y break uses a recommended fixed 16px. Available connecting data across a break uses the documented thin segment treatment; unknown data stays empty. Confirm package support before promising this visual behavior.

Use locale/user-preferred dates and time formats; establish timezone and interval semantics in the data contract. Title, axes, units and tooltip values must agree. A tooltip includes both axis values and relevant context, with an accessible route to equivalent information.

## Color and legends

Categorical color distinguishes unrelated groups; keep category assignments stable across related widgets and interactions. Sequential color encodes ordered magnitude; higher values are darker on light themes and lighter on dark themes. Diverging color expresses distance on either side of a meaningful midpoint; it need not be symmetric or always zero. Follow the approved palette and product mappings. A general gradient is not a replacement for a sequential palette. The spatial guidance discusses continuous diverging heatmaps while the palette page warns about unsupported gradients: treat this as a chart/version-specific support question rather than a universal rule.

Prefer direct labels where they fit. A single category normally needs no legend. For multiple categories, keep an accessible legend or equivalent explicit mapping; hiding it to fit mobile reduces clarity. Use texture, shape, labels or a readable data alternative where color alone is insufficient. The heatmap guidance's specific 3:1 contrast exception is not permission to waive contrast for axes, controls, essential boundaries or ordinary chart marks.

Documented legend behavior: hover highlights a category and reduces other categories to 30% opacity; selection isolates data and adds a checkmark; selecting all returns to default. Implement equivalent keyboard/touch operation and preserve selected state, not hover-only filtering. Bottom is the default legend position; top/side positions depend on layout. Legend overflow begins after two lines, expands through View more, and scrolls once taller than 30% of chart height. These measurements are chart guidance, not global layout constants.

## Dashboard composition and evidence

Presentation dashboards prioritize the current important metrics. Exploration dashboards support drilldown/filter/zoom and need linked updates where charts represent related data. Keep units, category meanings and legend placement coherent; annotations must not conceal marks. Choose hierarchy for the audience's reading direction and task rather than prescribing an F-pattern for every language or dashboard.

For implementation, test empty/all-zero data, missing periods, outliers, many categories, long labels, narrowed/zoomed layouts, both supported theme families, keyboard selection, touch, and alternate access to all meaningful values. Tiny circular slices can disappear in documented behavior; a data alternative must retain them. Source guidance and package status are separate from rendered quality, screen-reader access and quantitative correctness. A text evaluation cannot certify chart accessibility or senior engineering capability.
