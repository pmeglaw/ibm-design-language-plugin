# Next.js shell verification fixture

This independent fixture imports the plugin's three shell assets. It does not
execute the supplied HTML teaching documents. Cookies select only test themes
and long-name content; they are not authentication or application preferences.

From the repository root:

```sh
python -B scripts/prepare_shell_fixture.py
cd .verification/nextjs-shell
npm ci
npx playwright install chromium
npm run build
npm test
```

The preparer copies assets from source; it does not preserve a second manually
maintained implementation. It records their hashes in the prepared fixture.
Use the pinned lockfile. Review dependency installation scripts according to
your environment's policy. No script approvals are needed for the recorded run.

Tests start and stop their own production server on loopback port 49424.
They cover route boundaries/history, responsive navigation, skip focus, Escape,
reverse Tab, dismissal/restoration, utility order/exclusivity, long names,
white/G100 CSS themes, and automated axe checks. Screenshots and traces belong
to the local test output. Screenshots require separate inspection; axe does not
establish screen-reader usability, all contrast pairs or browser zoom support.

This fixture is not a general application scaffold. It does not test auth,
backend effects, dirty-form handling, notification services or product links.
