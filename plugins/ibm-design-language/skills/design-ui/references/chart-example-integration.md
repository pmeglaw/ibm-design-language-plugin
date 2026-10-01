# Chart example integration

Read with [chart semantics](chart-behavior.md) when translating an injected Carbon website demo into an application. Source review: Carbon website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`, its resolved `@carbon/charts` **0.55.1**, all 29 unbundled `demo/data` JavaScript modules and the complete `demo/create-codesandbox.js` helper. This is historical source evidence, not a current-release API guarantee or a chart runtime/accessibility pass. The generated UMD demo bundle was not fully reviewed. Verify the actual application's installed chart package and framework before using an option.

## Establish the quantitative contract

Record the question, record shape, groups, units, domain, missing-value meaning, locale/timezone and interactive state before choosing a component. The reviewed examples include flat records and older nested `labels`/`datasets` objects; these are not interchangeable. `axes.*.mapsTo`, `groupMapsTo`, `pie.valueMapsTo`, radius mappings and combo `correspondingDatasets` must match real fields and exact group names. A successful render does not establish meaningful mappings.

Some examples contain inconsistencies: bubble axis labels describe employees/sales while fields map to sales/profit; combo loading options name a temperature group absent from their supplied data; a meter formatter's MB label conflicts with its GB context. Audit labels, fields, group mappings, legends and tooltip units together. Titles such as “time series” do not prove that records contain dates; check the histogram example's actual transaction/value fields.

| Family | Implementation checks |
| --- | --- |
| Bars, grouped/stacked, lollipop | Check vertical/horizontal axis placement, stable group order and selection, zero baseline, negative/divergent interpretation and scalar versus floating-range values. A fixed domain can hide marks. Truncated labels need an accessible full-text route beyond hover. |
| Line, step, area | Preserve null gaps and true zero/negative observations. Check ordering, elapsed-time spacing, curve interpolation, custom domains, stacked/percentage interpretation and bounded-area minimum/maximum meaning. Positive-only examples do not establish log behavior for zero/negative values. |
| Pie, donut, meter | Verify the mapped quantity, total and remainder, units and small/zero categories. Proportional meters need an explicit total; gauge delta and warning/danger thresholds need product meaning. Adjacent status ranges need a tested boundary precedence. |
| Scatter, bubble, radar | Check each axis's meaning and unit, group mapping and radius/angle mapping. Verify perceptual radius/area behavior in the installed chart. Missing radar observations are not zero; order and compatible units affect comparisons. |
| Boxplot, histogram | The boxplot examples supply raw observations; do not assume a precomputed quartile schema. Establish bin boundaries and interval ownership explicitly. A requested bin number is not proof of a particular rendered interval width. |
| Treemap, circle pack, tree | Validate hierarchy fields, leaf quantities, parent aggregation, drill/zoom state and access to concealed nodes. A 2000px demo tree is not responsive evidence; a chart tree is not automatically an accessible TreeView. |
| Alluvial, heatmap, word cloud | Check source/target/node identifiers, flow totals and categories; custom color keys must match actual groups. Distinguish zero cells from absent cells and specify calendar order and midpoint/quantization. Word repetition, case and placeholder text are not a meaningful production frequency analysis. |

Sparkline examples hide axes, legends and points; supply enough surrounding context and equivalent values to keep the abbreviated chart understandable. Demo widths of 400px, maximum bar widths, arbitrary hex scales and experimental flags are examples, not responsive acceptance criteria or approved product tokens.

## Isolate data and option state

Several modules reuse data or mutate options. The bubble time-series transformation mutates imported line records and generates random radii; heatmap examples also use random values. Step options are shallow copies, and zoom/toolbar helpers and the demo index mutate shared option objects. Do not reuse these globals as independent application state. Create deterministic task data and fresh nested options, retaining formatter functions and Date semantics deliberately; a JSON round trip silently loses those functions.

The demo index's subtraction of string titles is not a valid alphabetical comparator. Its development-only high-scale group is not a public performance guarantee. Measure chart limits with the product's actual data and viewport.

Loading, empty, failure and loaded values are separate states. Examples can supply populated data while `data.loading` is true; zoom loading and locked state are separate options. Exercise selection, zoom domain, retry and update behavior explicitly. A custom toolbar callback that only logs to the console is not an implemented product action. Verify names, disabled state, focus, overflow and actual effects for toolbar controls and equivalents for meaningful chart data.

## Treat generated sandboxes as historical examples

The reviewed helper uses `JSON.stringify` to serialize data/options. Function-valued formatters and callbacks disappear; Dates become strings. Compare generated data/options with the in-page demo and restore callbacks and date parsing intentionally before treating the sandbox as equivalent.

Framework templates target old toolchains: React 16/CRA 3 and `ReactDOM.render`, Angular 8 with legacy CLI configuration, Vue 2 registration/new-instance APIs, and Svelte 3/Vite 2 with a mutable `next` plugin version. The Angular generated file set references files it does not return. Read the complete returned manifest and files, replace obsolete APIs using installed-version documentation, and build before promising that a generated example runs. Do not blindly execute install or postinstall scripts; this historical chart package declares a telemetry postinstall.

Templates also load global legacy Carbon CSS and external fonts. Verify stylesheet ownership, theme compatibility, reproducible font delivery and actual font MIME/content, rather than accepting an HTTP 200 response as font success. Resolve framework-specific chart export names from the installed package; a vanilla-to-wrapper name map is not evidence that a current wrapper exports the same name.

CodeSandbox define URLs embed serialized files, including data, in their parameters. Generate/share only authorized data and code for the intended destination; use synthetic fixtures for evaluation. Do not send private office records into a sandbox to inspect documentation.

## Evidence required

Source review establishes these example hazards and integration questions. A chart implementation still requires independent quantitative assertions and a rendered review covering empty/all-zero/missing/outlier/high-cardinality data, responsive labels and legends, supported themes, keyboard/touch interactions, zoom/reset/selection updates and access to all meaningful values. Preserve failures and mark untested screen-reader, runtime or framework behavior explicitly. Neither these source notes nor a text-only evaluation certify senior design engineering ability.
