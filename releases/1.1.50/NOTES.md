# 1.1.50 Header image routing

Link the saved header images and the 29 October header observation record
directly from the `design-ui` entry point again, beside the composition
benchmarks route. In 1.1.49 these links moved one step away, into
`references/release-gates.md`. A 60-run research-step routing comparison of
1.1.48 and 1.1.49 (Claude Code, three runs per task) found that 1.1.49 header
runs still reached the header benchmark and acceptance checks but opened the
saved header images in 0 of 3 runs, compared with 3 of 3 for 1.1.48.

The entry point grows from 16,348 to 16,524 bytes. No other guidance, links,
runtime assets, dependencies, product code, evaluation contracts or fixture
assertions change. Earlier frozen releases remain unchanged. The effect of this
change on routing and on generated output is evaluated separately and is not
established by these notes.
Publication and destination installation require separate verification.
