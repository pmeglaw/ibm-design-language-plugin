# 1.1.28 validation fixes candidate - unpublished

Reject empty or malformed contrast JSON batches before emitting any results.
Preserve contrast thresholds and valid-input exit codes. Require explicit
visual_dimensions in custom evaluation cases during preparation, before any
model launch; [] remains valid for cases without visual scoring.

The companion installation verifier recognizes the exact skills-only Codex upload
compatibility manifest separately from release bytes. Unexpected metadata,
identity changes, alternate skill paths, symlinks and release drift still fail.
Add CLI, preparation and installation regressions, and document the contracts.

This candidate preserves previous releases and historical evaluation results.
No fresh model generation or manual assistive-technology evaluation is claimed.
Publication and destination installation remain pending until separately verified.
