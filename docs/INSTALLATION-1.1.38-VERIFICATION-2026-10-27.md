# 1.1.38 existing-installation verification

Verified on 2026-10-27 PDT (2026-10-28 UTC), after
[publication and downloaded-byte verification](RELEASE-1.1.38-PUBLICATION-2026-10-27.md).

## Authorized destination and preservation

The owner explicitly confirmed synchronization of the existing installation.
The selected destination is the same private, USER-scoped uploaded account
plugin named `ibm-design-language`, initially at 1.1.37. Its verified backend
identity and observed current release were used for the guarded update.
Private identifiers, signed download URLs and raw native catalog data remain
outside this public repository.

Complete pre-update account parity passed: 177 files matched the frozen
1.1.37 payload, plus its existing generated host manifest. The update archive
contained the unchanged 198-file published 1.1.38 payload plus that host
manifest, with only its version advanced to 1.1.38. Presentation, private
sharing, scope and unrelated plugins were preserved. No duplicate Git
marketplace installation was created and no unrelated marketplace SHA changed.

## Verification performed

- Supported account update succeeded as version **1.1.38** on the same plugin.
- Source read-back confirmed version 1.1.38 in both manifests and unchanged
  USER/private metadata.
- Complete account-archive read-back matched all **198 frozen release hashes**
  plus the expected host wrapper.
- A fresh native catalog read observed **1.1.38** advertised and locally
  materialized, already installed and enabled.
- `python -B scripts/verify-install.py INSTALL_DIRECTORY` from the matching
  release checkout passed: **199 files**, zero missing, extra or changed files.
  The 198 release files were hash-checked; the generated
  `.codex-plugin/plugin.json` was reported separately as validated
  `host_metadata`, not ignored.
- Fresh native app-server discovery passed at **1.54 seconds** within one
  shared **five-second deadline**, including initialization, forced catalog
  refresh and forced skill reload. No deadline reset, extra skill roots,
  policy changes or feature/trust overrides were used.

The complete enabled skill set belonged to the verified destination and its
1.1.38 cache path:

- `ibm-design-language:design-ui`
- `ibm-design-language:review-product-experience`
- `ibm-design-language:seat-planner-ui-ux`

## Limits

This verifies that particular account and native installation, byte parity,
enabled state and fresh-session discovery. It does not prove automatic skill
selection, reload of an already running desktop conversation, model behavior,
generated-product quality, AT behavior or another user's installation.

The existing upload-wrapper compatibility rules in the verifier were used
unchanged. No cache-only edit, reinstall workaround, broadened acceptance rule,
historical receipt rewrite or unrelated configuration cleanup was performed.
