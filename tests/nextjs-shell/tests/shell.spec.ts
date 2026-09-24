import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const theme of ['white', 'g100']) {
  for (const width of [320, 1440]) {
    test(`long name and ${theme} theme at ${width}px`, async ({ page, context }, testInfo) => {
      await context.addCookies([
        { name: 'fixture-theme', value: theme, url: 'http://127.0.0.1:49424' },
        { name: 'fixture-long-name', value: 'true', url: 'http://127.0.0.1:49424' },
      ]);
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/');
      const name = 'WorkspaceAdministrationAndReportingWithAnUnbrokenProductName';
      await expect(page.getByRole('link', { name, exact: true })).toBeVisible();
      await expect(page.getByRole('link', { name, exact: true })).toHaveAttribute('title', name);
      const switcher = page.getByRole('button', { name: 'Switch products', exact: true });
      const box = await switcher.boundingBox();
      expect(box!.x + box!.width).toBeLessThanOrEqual(width);
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      for (const state of ['closed', 'navigation', 'utilities']) {
        if (state === 'navigation') await page.getByRole('button', { name: 'Open navigation', exact: true }).click();
        if (state === 'utilities') await switcher.click();
        expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()).violations).toEqual([]);
        await page.screenshot({ path: testInfo.outputPath(`${theme}-${width}-${state}.png`), fullPage: true });
      }
    });
  }
}

test('skip link is first and focuses the real main content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
});

test('exact, ancestor, sibling prefix, root, and history selection', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Primary', exact: true });
  await expect(nav.getByRole('link', { name: 'Overview' })).toHaveAttribute('aria-current', 'page');
  await nav.getByRole('link', { name: 'Reports' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Reports');
  await expect(nav.getByRole('link', { name: 'Reports' })).toHaveAttribute('aria-current', 'page');
  await page.getByRole('main').getByRole('link', { name: 'Quarterly report' }).click();
  await expect(nav.getByRole('link', { name: 'Reports' })).toHaveAttribute('aria-current', 'true');
  await expect(nav.getByRole('link', { name: 'Overview' })).not.toHaveAttribute('aria-current');
  await page.getByRole('main').getByRole('link', { name: 'Archived reports' }).click();
  await expect(nav.getByRole('link', { name: 'Reports' })).not.toHaveAttribute('aria-current');
  await page.goBack();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Quarterly report');
  await expect(nav.getByRole('link', { name: 'Reports' })).toHaveAttribute('aria-current', 'true');
  await page.goForward();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Archived reports');
});

for (const width of [320, 768, 1055, 1056, 1440]) {
  test(`navigation works and closes at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/reports');
    const nav = page.getByRole('navigation', { name: 'Product navigation' });
    await page.getByRole('button', { name: 'Open navigation', exact: true }).click();
    await expect(nav).toBeVisible();
    await expect(nav.getByRole('link').first()).toBeFocused();
    if (width < 1056) {
      await expect(nav.getByRole('link', { name: 'Reports', exact: true })).toBeVisible();
      await nav.getByRole('link', { name: 'Reports', exact: true }).click();
      await expect(nav).toBeHidden();
      await expect(page.getByRole('main')).toBeFocused();
      await page.getByRole('button', { name: 'Open navigation', exact: true }).click();
    }
    await page.keyboard.press('Escape');
    await expect(nav).toBeHidden();
    await expect(page.getByRole('button', { name: 'Open navigation', exact: true })).toBeFocused();
    await page.getByRole('button', { name: 'Open navigation', exact: true }).click();
    await page.getByRole('button', { name: 'Close navigation', exact: true }).click();
    await expect(nav).toBeHidden();
    await page.getByRole('button', { name: 'Open navigation', exact: true }).click();
    await page.locator('.cds--side-nav__overlay').click({ position: { x: width - 12, y: 500 } });
    await expect(nav).toBeHidden();
    await expect(page.getByRole('button', { name: 'Open navigation', exact: true })).toBeFocused();
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

test('non-modal navigation allows reverse Tab and closes on leaving', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 900 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open navigation', exact: true }).click();
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('button', { name: 'Switch products', exact: true })).toBeFocused();
  await expect(page.getByRole('navigation', { name: 'Product navigation' })).toBeHidden();
  await page.getByRole('button', { name: 'Open navigation', exact: true }).click();
  await page.getByRole('navigation', { name: 'Product navigation' }).getByRole('link', { name: 'Settings' }).focus();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('main').getByRole('link', { name: 'Quarterly report' })).toBeFocused();
  await expect(page.getByRole('navigation', { name: 'Product navigation' })).toBeHidden();
});

test('utilities are ordered, exclusive, dismissible, and restore focus', async ({ page }) => {
  await page.goto('/');
  const notifications = page.getByRole('button', { name: 'Notifications', exact: true });
  const account = page.getByRole('button', { name: 'Account', exact: true });
  const switcher = page.getByRole('button', { name: 'Switch products', exact: true });
  const boxes = await Promise.all([notifications, account, switcher].map((locator) => locator.boundingBox()));
  expect(boxes[0]!.x).toBeLessThan(boxes[1]!.x);
  expect(boxes[1]!.x).toBeLessThan(boxes[2]!.x);
  await notifications.click();
  await expect(page.getByRole('region', { name: 'Notifications' })).toBeFocused();
  await account.click();
  await expect(page.getByRole('region', { name: 'Notifications' })).toHaveCount(0);
  await expect(page.getByRole('region', { name: 'Account' })).toBeVisible();
  await switcher.click();
  await expect(page.getByRole('region', { name: 'Account' })).toHaveCount(0);
  await expect(page.getByRole('region', { name: 'Switch products' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(switcher).toBeFocused();
  await expect(page.getByRole('region', { name: 'Switch products' })).toHaveCount(0);
  await notifications.click();
  await page.getByRole('button', { name: 'Dismiss panel' }).click();
  await expect(notifications).toBeFocused();
  await account.click();
  await page.getByLabel('Page notes').click();
  await expect(page.getByRole('region', { name: 'Account' })).toHaveCount(0);
  await expect(page.getByLabel('Page notes')).toBeFocused();
});

test('utility reverse Tab reaches the header; closed panels leave no controls', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch products', exact: true }).click();
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('button', { name: 'Switch products', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('main').getByRole('link', { name: 'Quarterly report' })).toBeFocused();
  await page.getByRole('button', { name: 'Switch products', exact: true }).click();
  await page.getByRole('button', { name: 'Dismiss panel' }).focus();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('main').getByRole('link', { name: 'Quarterly report' })).toBeFocused();
  await expect(page.getByRole('region', { name: 'Switch products' })).toHaveCount(0);
});

for (const width of [320, 1440]) {
  test(`automated accessibility and rendered evidence at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/');
    for (const state of ['closed', 'navigation', 'utilities']) {
      if (state === 'navigation') await page.getByRole('button', { name: 'Open navigation', exact: true }).click();
      if (state === 'utilities') await page.getByRole('button', { name: 'Notifications', exact: true }).click();
      const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(result.violations).toEqual([]);
      await page.screenshot({ path: testInfo.outputPath(`${state}-${width}.png`), fullPage: true });
    }
    expect(errors).toEqual([]);
  });
}
