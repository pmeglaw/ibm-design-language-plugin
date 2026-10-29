# First-time installation

Use this path to install the published package in Codex. For an existing owner-managed installation, drift, restoration, or rollback, use [Recovery](RECOVERY.md). Host support and autocomplete can vary; the CLI commands below are the repository's documented installation route.

The published recovery target is **1.1.46**. All four downloaded assets match
the frozen 178-file release; see the [publication receipt](RELEASE-1.1.46-PUBLICATION-2026-10-29.md).
The existing private account installation has complete 179-file parity including
the validated host wrapper, installed/enabled catalog state and fresh native
discovery of all three skills in 1.391 seconds within the shared five-second
bound; see the [installation receipt](INSTALLATION-1.1.46-VERIFICATION-2026-10-29.md).
Existing account plugins use their supported update flow in
[Recovery](RECOVERY.md#uploaded-account-installations); do not create a duplicate
Git marketplace installation. New destinations require their own verification.

Published 1.1.36 has verified downloaded assets; see the [publication receipt](RELEASE-1.1.36-PUBLICATION-2026-10-21.md). The existing owner installation was subsequently updated to verified 1.1.36 through its separately authorized supported account flow. Complete 172-file account/installed parity and fresh discovery of all three enabled skills passed at 1.578 seconds within the shared five-second deadline; identity, sharing and earlier evidence were preserved. Existing desktop-session refresh and automatic selection remain unverified. Future updates
to an existing account plugin use its supported flow under applicable authority;
publication alone does not update an installation.

The dated 1.1.44 [publication](RELEASE-1.1.44-PUBLICATION-2026-10-29.md) and [installation](INSTALLATION-1.1.44-VERIFICATION-2026-10-29.md) receipts preserve its separate verification.

## Select the published release

1. Obtain the [published 1.1.46 release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.46). Resolve the full commit behind `v1.1.46` in a repository checkout with `git rev-parse 'v1.1.46^{commit}'` after fetching that tag. Use the immutable commit rather than `main`.
2. Verify the downloaded ZIP against the checksum and file manifest in [Recovery](RECOVERY.md#release-identity). From the matching checkout, run `python -B scripts/verify.py`.
3. Run `codex plugin marketplace list --json` first. This repository declares its marketplace name as `jp-personal`; that name is a catalog identifier, not a requirement to adopt the owner's personal configuration. If the name is already in use for another source, stop and resolve the collision without replacing unrelated entries.

## Install and confirm

For a fresh setup, substitute the full reviewed release commit for `RELEASE_COMMIT`:

```sh
codex plugin marketplace add https://github.com/pmeglaw/ibm-design-language-plugin.git --ref RELEASE_COMMIT --json
codex plugin add ibm-design-language@jp-personal --json
codex plugin list --marketplace jp-personal --json
```

Confirm version `1.1.46`, enabled state, and the returned installation directory for this fresh installation. From the matching checkout, run:

```sh
python -B scripts/verify-install.py INSTALL_DIRECTORY
```

Replace `INSTALL_DIRECTORY` with that directory, quoting paths containing spaces. Verify fresh skill discovery using the app-server procedure in [Recovery](RECOVERY.md#restore-and-verify). Expect all three: `ibm-design-language:design-ui`, `ibm-design-language:review-product-experience`, and `ibm-design-language:seat-planner-ui-ux`. A listed installation alone does not prove that a session loaded the intended skill.

Open the intended project and use the [quick-start prompts](../README.md#quick-start). Installing this guidance does not install application dependencies or authorize product edits, Git publication, or production changes. The owner's synchronization directive in release maintenance applies to maintenance of this plugin, not to every product using it.
