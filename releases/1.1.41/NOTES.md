# 1.1.41 Carbon deprecation checklist

Add a dated, source-linked deprecation checklist to framework guidance and route
implementation intake to it from design-ui. Cover legacy package replacements,
v10 Elements, framework-specific icons, React support boundaries, resolved
lockfiles, stylesheet ownership and historical tutorial examples. Require current
release/peer verification and authorized, tested migrations; do not infer v12
availability or today's latest React version from the notice.

No dependency, product code, runtime asset or fixture assertion changes. Fixture
checks establish regressions only; no new model or assistive-technology evaluation
is claimed. Publication and destination installation require separate verification.
