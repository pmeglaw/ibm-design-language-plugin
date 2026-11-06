# 1.1.51 installation verification - 6 November 2026

The existing private USER-scoped account plugin `ibm-design-language@created-by-me-remote`
already reported remote version and local version 1.1.51 when this check began. Its
update to 1.1.51 ran through the host's supported account flow after the publication
closeout and outside the recorded publication task. This receipt records the live
verification performed on 2026-11-06, not the update itself. The native marketplace
inventory contains no jp-personal Git entry; no duplicate was created. No install,
cache edit, policy or trust change was made during this check.

PASS: all four published assets were freshly downloaded into a new directory. The
ZIP matches `SHA256SUMS` and the frozen `releases/1.1.51/plugin.zip`
(`f051636546aa47be34ea88716cbe21afa3bc683ab42873574b50c05c7e04c045`); `files.json`
and `NOTES.md` are byte-identical to the frozen copies.

PASS: the installed cache passes `python -B scripts/verify-install.py INSTALL_DIRECTORY`
from default-branch commit `a081a324004baf9bb350c261148694013513d5de`, whose package,
release manifest and verifier are unchanged from release commit
`f286c87a18ca8d49ae0abeb28129d3b352ca4c50`: 179 files, zero missing, extra or changed,
including the exact validated host compatibility wrapper reported as host metadata.

PASS: native app-server (codex-cli 0.165.0) plugin/list with forceRefetch confirms the
same account identity and remote plugin ID, version/localVersion 1.1.51, installed and
enabled. skills/list with forceReload returns all three enabled qualified skills:
design-ui, review-product-experience and seat-planner-ui-ux. Each has pluginId
ibm-design-language@created-by-me-remote and a path under the installed 1.1.51 tree.
Discovery completed in **1.202 seconds**, under one shared monotonic five-second
deadline covering initialization, catalog refresh and discovery, with no stderr
warnings. No extra roots, policy/trust changes or manual cache edits were used.

Observation only: a separate claude.ai-synced Claude Code copy reports 1.1.51 and
matches all 178 manifest files. The verifier reports three host-owned extras there
(its `.claude-plugin/plugin.json` wrapper and two `.in_use` lock files), so it does
not return pass for that copy. It is not the recorded destination.

Limits: unlike earlier closeouts, the account archive was not re-downloaded, because
its signed download URL comes from the host's Plugin Creator interface and was not
available in this session. Account-side parity is therefore established only through
the cache the host installed. Existing-chat refresh, automatic selection and other
hosts remain unverified. Publication and asset verification are recorded in the
[publication receipt](RELEASE-1.1.51-PUBLICATION-2026-11-05.md).
