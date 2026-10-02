import { expect, test, type Page } from "@playwright/test";

const IDS = [
  "header-compact",
  "header-rule",
  "header-full",
  "header-identity",
  "header-utilities",
  "header-action",
  "table-density",
  "table-type",
  "table-pad",
  "table-edges",
  "table-borders",
  "table-toolbar",
  "table-long",
  "table-clip",
  "search-height",
  "search-rule",
  "search-shape",
  "search-glyph",
  "search-icon",
  "search-room",
  "search-clear",
  "search-place",
  "form-label",
  "form-anatomy",
  "form-edge",
  "form-cards",
  "form-gutter",
  "form-stack",
  "form-action",
] as const;

async function expectAll(page: Page, verdict: "pass" | "fail") {
  for (const id of IDS) {
    await expect(page.locator(`[data-check="${id}"]`)).toHaveAttribute("data-verdict", verdict, { timeout: 15000 });
  }
}

test("corrected passes all 29 checks on White", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await expect(page.locator("[data-release-summary]")).toHaveText("Corrected 29 of 29.", { timeout: 15000 });
  await expectAll(page, "pass");
});

test("corrected still passes on Gray 100 and at 390px", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await expect(page.locator("[data-release-summary]")).toHaveText("Corrected 29 of 29.", { timeout: 15000 });
  await page.getByRole("button", { name: "Gray 100" }).click();
  await expect(page.locator("[data-release-summary]")).toHaveText("Corrected 29 of 29.", { timeout: 15000 });
  await expectAll(page, "pass");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator("[data-release-summary]")).toHaveText("Corrected 29 of 29.", { timeout: 15000 });
  await expectAll(page, "pass");
});

test("missed fails every check, including at 390px", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await expect(page.locator("[data-release-summary]")).toHaveText("Corrected 29 of 29.", { timeout: 15000 });
  await page.getByRole("button", { name: "Missed" }).click();
  await expect(page.locator("[data-release-summary]")).toHaveText("Missed 0 of 29.", { timeout: 15000 });
  await expectAll(page, "fail");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator("[data-release-summary]")).toHaveText("Missed 0 of 29.", { timeout: 15000 });
  await expectAll(page, "fail");
});
