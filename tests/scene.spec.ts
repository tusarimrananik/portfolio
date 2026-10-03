import { test, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";
for (const width of [390, 1440])
  test(`3D landmarks and keyboard panels at ${width}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.locator("canvas")).toBeVisible();
    await expect(page.getByRole("button", { name: "01 Workshop" })).toBeVisible(
      { timeout: 30000 },
    );
    await page.waitForTimeout(2200);
    await mkdir("/tmp/portfolio-island", { recursive: true });
    await page.screenshot({
      path: `/tmp/portfolio-island/island-${width}.png`,
      fullPage: true,
    });
    for (const [name, id] of [
      ["01 Workshop", "work"],
      ["02 About", "about"],
      ["03 Campus", "education"],
      ["04 Say hello", "contact"],
    ]) {
      await page.getByRole("button", { name, exact: false }).click();
      await expect(page.locator(`#${id}`)).toBeVisible();
      await expect(page.getByRole("dialog")).toBeFocused();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).toHaveCount(0);
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
    expect(errors).toEqual([]);
  });
test("context loss preserves portfolio in simple view", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("canvas")).toBeVisible();
  await page
    .locator("canvas")
    .evaluate((el) => el.dispatchEvent(new Event("webglcontextlost")));
  await expect(page.locator("canvas")).toHaveCount(0);
  await expect(page.locator("#about")).toBeVisible();
});
