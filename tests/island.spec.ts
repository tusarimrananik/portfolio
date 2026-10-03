import { test, expect } from "@playwright/test";

test("island navigation reveals real portfolio content and simple view bypasses WebGL", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "A little world. A lot of ideas." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Work", exact: true }).click();
  await expect(page.locator("#work")).toBeVisible();
  await expect(page.locator("[data-project]")).toHaveCount(12);
  await page.getByRole("button", { name: "Return to island" }).click();
  await page.getByRole("button", { name: "Simple view", exact: true }).click();
  await expect(page.locator("canvas")).toHaveCount(0);
  for (const id of ["work", "about", "education", "contact"])
    await expect(page.locator(`#${id}`)).toBeVisible();
});
