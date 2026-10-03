import { expect, test, type Page } from "@playwright/test";
import type { Driver } from "../src/driver";
import { BEHAVIOR_IDS, runKeyboard, runNarrow, runRtl, type BehaviorCheck } from "../src/sequence";

function playwrightDriver(page: Page): Driver {
  return {
    async focus(selector) {
      await page.locator(selector).focus();
    },
    async tab() {
      await page.keyboard.press("Tab");
    },
    async press(key: string) {
      await page.keyboard.press(key, key.startsWith("Arrow") ? { delay: 15 } : undefined);
    },
    async type(text) {
      await page.keyboard.type(text);
    },
    async settle() {
      await page.waitForTimeout(40);
    },
    async activeMatches(selector) {
      return page.evaluate((sel) => window.__behavior.activeMatches(sel), selector);
    },
    async attr(selector, name) {
      return page.evaluate(([sel, attrName]) => window.__behavior.attr(sel, attrName), [selector, name] as const);
    },
    async valueOf(selector) {
      return page.evaluate((sel) => window.__behavior.valueOf(sel), selector);
    },
    async visible(selector) {
      return page.evaluate((sel) => window.__behavior.visible(sel), selector);
    },
    async longEndVisible() {
      return page.evaluate(() => window.__behavior.longEndVisible());
    },
    async fieldLabeled() {
      return page.evaluate(() => window.__behavior.fieldLabeled());
    },
    async operableOutside() {
      return page.evaluate(() => window.__behavior.operableOutside());
    },
    async rootLang() {
      return page.evaluate(() => window.__behavior.rootLang());
    },
    async rootDir() {
      return page.evaluate(() => window.__behavior.rootDir());
    },
    async rootWidth() {
      return page.evaluate(() => window.__behavior.rootWidth());
    },
    async englishCopy() {
      return page.evaluate(() => window.__behavior.englishCopy());
    },
  };
}

async function collect(page: Page): Promise<BehaviorCheck[]> {
  await page.waitForFunction(() => Boolean(window.__behavior));
  const driver = playwrightDriver(page);
  await page.getByRole("button", { name: "Wide", exact: true }).click();
  await page.getByRole("button", { name: "Left to right", exact: true }).click();
  const keyboard = await runKeyboard(driver);
  await page.getByRole("button", { name: "320", exact: true }).click();
  await page.getByRole("button", { name: "Left to right", exact: true }).click();
  await driver.settle();
  const narrow = await runNarrow(driver);
  await page.getByRole("button", { name: "Right to left", exact: true }).click();
  await driver.settle();
  const rtl = await runRtl(driver);
  return [...keyboard, narrow, rtl];
}

test("corrected passes all 13 checks", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");
  const checks = await collect(page);
  const failed = checks.filter((item) => item.verdict !== "pass");
  expect(failed.map((item) => `${item.id}: ${item.detail}`)).toEqual([]);
  expect(checks.map((item) => item.id)).toEqual([...BEHAVIOR_IDS]);
});

test("corrected still passes on Gray 100", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");
  await page.getByRole("button", { name: "Gray 100", exact: true }).click();
  const checks = await collect(page);
  const failed = checks.filter((item) => item.verdict !== "pass");
  expect(failed.map((item) => `${item.id}: ${item.detail}`)).toEqual([]);
});

test("missed fails every check", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");
  await page.getByRole("button", { name: "Missed", exact: true }).click();
  const checks = await collect(page);
  expect(checks.map((item) => item.id)).toEqual([...BEHAVIOR_IDS]);
  expect(checks.map((item) => item.verdict)).toEqual(BEHAVIOR_IDS.map(() => "fail"));
});
