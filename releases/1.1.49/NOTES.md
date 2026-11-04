# 1.1.49 Lighter design-ui entry point

Move the header, data table, search and form benchmark routing from the
`design-ui` skill entry point into a Composition benchmarks section of
`references/release-gates.md`, so it loads only when one of those compositions
is in scope. Replace the grouped routing table with one row per reference and
route the semantic token example directly. The entry point shrinks from about
18.9 KB to 16.3 KB; benchmark wording, links and guidance are otherwise unchanged.

The repository verifier now also checks that Markdown heading anchors in packaged
links resolve. No runtime assets, dependencies, product code, historical
evaluation contracts or fixture assertions change. Earlier frozen releases remain
unchanged. No model evaluation was run for this restructuring, so its effect on
skill routing and generated output is untested.
Publication and destination installation require separate verification.
