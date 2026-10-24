# Infographics and chart selection

Use to choose between a conceptual symbol, technical diagram, compact data graphic and analytical chart. Selection/correction advice here is **local craft guidance**. Read [chart behavior](chart-behavior.md) for domains, missing data and interaction, [chart integration](chart-example-integration.md) for demo/code boundaries, and [brand authority](color-and-brand.md) before applying color.

## Choose the information contract — local decision path

| Question | Starting format | What must remain explicit |
|---|---|---|
| Is this only the idea of analytics/data? | Pictogram or conceptual illustration | Do not present invented marks as actual results |
| Does the reader need structure, components or sequence? | Technical diagram | Node/edge meanings, direction, grouping and legend |
| Is one real statistic supported by a compact graphic? | Infogram when its limited scale fits | Exact statistic, units, context and the data relationship |
| Must people compare, explore or inspect multiple values? | Appropriate analytical chart and accessible data alternative | Domains, scale, time period, missing values and actual interactions |

## Technical diagrams and infograms: source anchors

IDL [Technical diagrams Design](https://www.ibm.com/design/language/infographics/technical-diagrams/design/) describes bullet, small and large nodes, connector meaning and an underlying grid. Bullet nodes suit compact labels; small nodes include icons; large nodes accommodate more text and nesting. Orthogonal routing is a default, with other paths available when needed for clarity. **Local craft guidance:** use node size for information needs, label relationships whose meaning is uncertain, and reduce crossings before adding colors or effects. Use [existing diagram detail](status-and-dataviz.md#technical-diagrams) for the dated numeric summary and recheck source/tooling when drawing. Design-kit access is separate from source review.

IDL [Infograms](https://www.ibm.com/design/language/infographics/infograms/) covers six types: bar, line, multiline, scatter plot, circular gauge and donut. These show real data, unlike chart-shaped pictograms. The source uses a 32px construction grid, constrained plot geometry, highlighted values and different standard/radial construction considerations. These are illustration specifications, not a live chart component API.

**Local craft guidance:** pair a compact infogram with a readable exact statistic, units and period outside the artwork when needed. Check the final display size; do not copy the source artwork's 6px type into ordinary product text. Its standard-grid approximation guidance does not authorize changing recorded data or concealing precision loss. Keep exact values available, preserve meaningful differences and use a larger chart when rounding or crowding would change the story. In radial work, accuracy takes priority over grid snapping. A pretty data glyph is unsuitable for precise comparisons when people need the full series.

## Chart catalog routing, reviewed 2026-10-24

IDL [Charts](https://www.ibm.com/design/language/data-visualization/charts/) organizes examples by comparison, trend, part-to-whole, correlation, relationships and maps. The table below is a **local selection heuristic**, not a verbatim taxonomy: some catalog categories contain charts whose suitability depends on the data rather than the heading they sit under. Carbon's [current overview](https://www.carbondesignsystem.com/building-blocks/data-visualization/overview) separates Simple, Flow and Spatial and labels some examples Design only.

| Data question | Useful starting point and alternatives | Decision trap |
|---|---|---|
| Compare magnitudes/categories | Aligned bars; grouped bars for repeated categories; lollipop as a lighter comparison | Bubbles, radar or wordcloud need a reason when precise comparison matters |
| Show change over ordered time | Line or step; area when amount matters; sparkline for limited supporting context | Preserve elapsed time and gaps; a histogram or boxplot is a distribution summary, not automatically a time trend |
| Show distribution or paired variables | Histogram/boxplot for distribution; scatter for pairs; bubble for an additional magnitude | Correlation does not establish causation; state bins, units and encodings |
| Show parts and a meaningful total | Stacked bars/area, donut/pie for a small readable set; treemap/circle pack for hierarchy | Keep denominators and totals clear; use bars when differences are hard to compare by area/angle |
| Compare a value with a target/range | Bullet, meter/proportional meter or gauge | A dramatic gauge does not explain the baseline or target |
| Show flows or relationships | Alluvial for flow, network for connections, tree for hierarchy, parallel coordinates for multiple dimensions | Structure and flow amounts differ; a thumbnail does not supply graph layout or a released API |
| Show geography | Choropleth, proportional symbol or connection map when location is meaningful | Use appropriate rates versus totals; a map is not a substitute for a simpler ranking |
| Combine encodings or show a dense matrix | Combo/heatmap when the shared question warrants it | Label scales and category meaning; avoid a combination that invites a false comparison |

The Simple catalog additionally routes floating/stacked variants; use the official overview for the full current inventory and demos. The table covers the selection families, not every option or export. Parallel coordinates and several geographic examples carry Design only labels. A stream example in IDL or a linked implementation badge is not proof of a released component. The separately documented [Gantt route](https://carbondesignsystem.com/data-visualization/gantt-charts/) needs its own availability check. Verify the installed Charts package, framework and selected chart before promising implementation.

## Craft corrections — local heuristics

| Candidate | Correction |
|---|---|
| A campaign palette assigns unrelated colors to ordered magnitude | Use the applicable sequential/diverging encoding and verify [data color roles](chart-behavior.md#color-and-legends) |
| A sparse chart floats inside a heavily decorated card | Let the data establish emphasis; reduce surrounding competition and retain interpretive labels |
| An attractive infographic omits units, source or time period | Add the context required to interpret the claim before polishing its styling |
| Layout and axes imply certainty for unavailable periods | Retain gaps and explain missingness; do not substitute zero |
| A technical diagram resembles a quantitative Sankey without measured flows | Clarify whether width encodes data or is only a connector style |

For IBM chart styling, [Design basics](https://www.ibm.com/design/language/data-visualization/design/basics/) routes emphasis, color and motion; preserve real data relationships rather than borrowing visual effects alone. Essential values need an accessible equivalent under [accessibility](accessibility.md). Source palette recommendations and small artwork examples do not prove rendered text/graphical contrast or screen-reader access.

Limits: selected public prose and catalog labels were reviewed, not the complete chart demos, options, assets, kits or a Charts runtime. No API catalog, statistical validation, model evaluation, interaction, theme or assistive-technology pass is claimed. This strengthens selection/routing while full implementation and visual catalog coverage remain partial.
