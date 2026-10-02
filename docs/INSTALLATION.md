# First-time installation

Use this path to install the published package in Codex. For an existing owner-managed installation, drift, restoration, or rollback, use [Recovery](RECOVERY.md). Host support and autocomplete can vary; the CLI commands below are the repository's documented installation route.

## Select the published release

1. Obtain the [published 1.1.23 release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.23). Resolve the full commit behind `v1.1.23` in a repository checkout with `git rev-parse 'v1.1.23^{commit}'` after fetching that tag. Use the immutable commit rather than `main`.
2. Verify the downloaded ZIP against the checksum and file manifest in [Recovery](RECOVERY.md#release-identity). From the matching checkout, run `python -B scripts/verify.py`.
3. Run `codex plugin marketplace list --json` first. This repository declares its marketplace name as `jp-personal`; that name is a catalog identifier, not a requirement to adopt the owner's personal configuration. If the name is already in use for another source, stop and resolve the collision without replacing unrelated entries.

## Install and confirm

For a fresh setup, substitute the full reviewed release commit for `RELEASE_COMMIT`:

```sh
codex plugin marketplace add https://github.com/pmeglaw/ibm-design-language-plugin.git --ref RELEASE_COMMIT --json
codex plugin add ibm-design-language@jp-personal --json
codex plugin list --marketplace jp-personal --json
```

Confirm version `1.1.23`, enabled state, and the returned installation directory. From the matching checkout, run:

```sh
python -B scripts/verify-install.py INSTALL_DIRECTORY
```

Replace `INSTALL_DIRECTORY` with that directory, quoting paths containing spaces. Verify fresh skill discovery using the app-server procedure in [Recovery](RECOVERY.md#restore-and-verify). Expect both `ibm-design-language:design-ui` and `ibm-design-language:review-product-experience`. A listed installation alone does not prove that a session loaded the intended skill.

Open the intended project and use the [quick-start prompts](../README.md#quick-start). Installing this guidance does not install application dependencies or authorize product edits, Git publication, or production changes. The owner's synchronization directive in release maintenance applies to maintenance of this plugin, not to every product using it.
