# Packaged release-gate definitions

These files are byte-for-byte copies from the canonical repository at
`b63641855c241a7fbbabde15144405c4e1613131`. They let installed guidance enumerate
the check IDs, titles, conditions and fixture assertions offline. The repository
fixtures remain the execution source; `scripts/verify.py` checks copy parity.
Preserve assertion rules and the Missed controls.

- Geometry: [29 check IDs and fixture assertions](release-fixture/tests/release.spec.ts)
  and [check conditions](release-fixture/src/checks.ts).
- Keyboard: [13 check IDs and sequence](behavior-fixture/src/sequence.ts),
  [driver contract](behavior-fixture/src/driver.ts), [DOM conditions](behavior-fixture/src/dom.ts)
  and [fixture assertions](behavior-fixture/tests/behavior.spec.ts).

These definitions are reading material, not a bundled runnable fixture app.
Apply only relevant product criteria, record any adaptation, and verify the
interface under review. The keyboard sequence starts from the candidate root;
its menu-first check does not replace a product shell's first skip-link stop.
The narrow checks measure the candidate frame, not whole-document reflow.
No-op demonstration actions are not proof of product readiness.

A fixture pass is neither a model-generation result nor a screen-reader
certification. Report unrun product checks as untested.
