# Offline casebook renderer checks

Uses Node's test runner and Chromium through the existing pinned Playwright
dependency. No server is needed; the shipped viewer opens through a file URL.

Prepare/install the existing fixture dependencies once:

```sh
python -B scripts/prepare_shell_fixture.py
npm ci --prefix .verification/nextjs-shell
cd .verification/nextjs-shell
npx playwright install chromium
cd ../..
node --test tests/casebook/renderer.test.cjs
```

`CASEBOOK_TEST_DEPS` can point at another directory with the same pinned
Playwright installation. Tests cover all 20 supported study/theme/size states,
image loading, content and links, invalid selections, literal hostile text,
URL scheme rejection and recovery. Hostile DOM/data mutations are preventive
hardening probes, not evidence of an external attacker input in this viewer.
