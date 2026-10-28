import { expect, test } from "@playwright/test";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const FIXTURE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(FIXTURE, "screenshots");
const THEMES = [
  { name: "white", button: "White", background: "rgb(255, 255, 255)" },
  { name: "g100", button: "Gray 100", background: "rgb(22, 22, 22)" },
] as const;
const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
] as const;
const REGIONS = [
  { name: "table", selector: ".release-table-block" },
  { name: "form", selector: "[data-release-form]" },
  { name: "header", selector: "[data-release-header]" },
  { name: "search", selector: "[data-release-search]" },
] as const;

test.use({ deviceScaleFactor: 1, colorScheme: "light", reducedMotion: "reduce" });

test.describe("Carbon visual benchmarks (corrected)", () => {
  for (const theme of THEMES) {
    for (const viewport of VIEWPORTS) {
      test(`regions · ${theme.name} · ${viewport.name}`, async ({ page, browser }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto("/");
        await page.getByRole("button", { name: theme.button, exact: true }).click();

        const root = page.locator('[data-release-root="corrected"]');
        await expect(root).toBeVisible();
        await expect(root.locator("[data-release-stage]")).toHaveCSS("background-color", theme.background);
        const fontsReady = await page.evaluate(async () => {
          const fonts = await Promise.all([
            document.fonts.load('400 14px "IBM Plex Sans"'),
            document.fonts.load('600 20px "IBM Plex Sans"'),
            document.fonts.load('400 14px "IBM Plex Mono"'),
          ]);
          await document.fonts.ready;
          return fonts.every((faces) => faces.length > 0 && faces.every((face) => face.status === "loaded"));
        });
        expect(fontsReady, "bundled Plex fonts must load before capture").toBe(true);
        // Remove the theme button's hover/focus treatment before cropping regions.
        await page.getByRole("button", { name: theme.button, exact: true }).blur();
        await page.mouse.move(0, 0);
        await expect(page.locator("[data-release-summary]")).toHaveText("Corrected 29 of 29.", { timeout: 15000 });

        // Read current geometry after fonts/theme settle; the UI summary can be stale after resize.
        const checks = await page.evaluate(async () => {
          const checksModulePath = "/src/checks.ts";
          const { judgeRelease }: typeof import("../src/checks") = await import(checksModulePath);
          return judgeRelease(document.querySelector<HTMLElement>("[data-release-root]")!)
            .map(({ id, verdict }) => ({ id, verdict }));
        });
        expect(checks).toHaveLength(29);
        expect(checks.filter((check) => check.verdict !== "pass")).toEqual([]);

        await mkdir(OUT, { recursive: true });
        const images = [];
        for (const region of REGIONS) {
          const locator = root.locator(region.selector);
          const file = `carbon-${region.name}-${theme.name}-${viewport.name}.png`;
          const pixels = await locator.screenshot({
            path: path.join(OUT, file),
            animations: "disabled",
            caret: "hide",
            scale: "css",
          });
          const bounds = await locator.boundingBox();
          expect(bounds).not.toBeNull();
          images.push({
            file,
            region: region.name,
            width: pixels.readUInt32BE(16),
            height: pixels.readUInt32BE(20),
            cssWidth: bounds!.width,
            cssHeight: bounds!.height,
            sha256: createHash("sha256").update(pixels).digest("hex"),
          });
        }
        const versions: Record<string, string> = {};
        for (const dependency of ["@carbon/react", "@carbon/styles", "@carbon/icons-react", "@playwright/test", "react", "react-dom"]) {
          const manifest = JSON.parse(await readFile(path.join(FIXTURE, "node_modules", dependency, "package.json"), "utf8"));
          versions[dependency] = manifest.version;
        }
        const sourceHashes: Record<string, string> = {};
        for (const source of [
          "package-lock.json", "playwright.config.ts", "src/main.tsx", "src/candidate.tsx",
          "src/desk.tsx", "src/checks.ts", "src/styles.css", "tests/screenshots.spec.ts",
          "public/fonts/IBMPlexSans-Regular.woff2", "public/fonts/IBMPlexSans-SemiBold.woff2",
          "public/fonts/IBMPlexMono-Regular.woff2",
        ]) {
          sourceHashes[source] = createHash("sha256").update(await readFile(path.join(FIXTURE, source))).digest("hex");
        }
        const metadata = {
          schemaVersion: 1,
          capturedAt: new Date().toISOString(),
          fixture: "tests/release-fixture",
          pattern: "corrected",
          theme: theme.name,
          viewport: { width: viewport.width, height: viewport.height },
          deviceScaleFactor: 1,
          colorScheme: "light",
          reducedMotion: "reduce",
          platform: { os: process.platform, arch: process.arch },
          browser: { name: "chromium", version: browser.version() },
          versions,
          sourceHashes,
          geometry: { passed: checks.length, total: 29 },
          images,
        };
        await writeFile(path.join(OUT, `carbon-${theme.name}-${viewport.name}.json`), JSON.stringify(metadata, null, 2) + "\n");
      });
    }
  }
});
