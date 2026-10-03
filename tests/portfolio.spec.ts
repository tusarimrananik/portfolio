import { test, expect } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`responsive layout, anchors and no errors at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/?view=simple');
    await expect(page).toHaveTitle('MD. Tusar Imran — Software & AI Product Builder');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const portrait = page.getByRole('img', { name: 'Portrait of MD. Tusar Imran' });
    await expect(portrait).toBeVisible();
    await expect.poll(() => portrait.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBeTruthy();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
    for (const id of ['work', 'about', 'education', 'contact']) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await expect(page.locator(`#${id}`)).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
    }
    for (const anchor of await page.locator('a[href^="#"]').all()) {
      const href = await anchor.getAttribute('href');
      expect(await page.locator(href!).count()).toBe(1);
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await mkdir('/tmp/portfolio-redesign-screenshots', { recursive: true });
    await page.screenshot({ path: `/tmp/portfolio-redesign-screenshots/portfolio-${width}.png`, fullPage: true });
    expect(errors).toEqual([]);
  });
}

test('resume downloads a real PDF and contact links use the correct email', async ({ page, request }) => {
  await page.goto('/?view=simple');
  const response = await request.get('/resume.pdf');
  expect(response.ok()).toBeTruthy();
  expect(response.headers()['content-type']).toContain('application/pdf');
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Résumé', exact: true }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('resume.pdf');
  expect(await download.failure()).toBeNull();
  await expect(page.getByRole('link', { name: 'tusarimrananik@gmail.com', exact: true })).toHaveAttribute('href', 'mailto:tusarimrananik@gmail.com');
});

test('all categories have correct counts and reduced motion disables smooth scrolling', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/?view=simple');
  for (const [category, count] of [['Web apps', 3], ['Extensions', 3], ['Mobile', 1], ['AI & media', 4], ['Automation', 1], ['All projects', 12]] as const) {
    await page.getByRole('button', { name: category, exact: false }).click();
    await expect(page.locator('[data-project]')).toHaveCount(count);
    await expect(page.getByRole('status')).toHaveText(`Showing ${count} projects: ${category}`);
  }
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
});

test('project filters work with a keyboard and preserve all twelve projects', async ({ page }) => {
  await page.goto('/?view=simple');
  await expect(page.locator('[data-project]')).toHaveCount(12);
  const extensions = page.getByRole('button', { name: 'Extensions', exact: false });
  await extensions.focus();
  await page.keyboard.press('Enter');
  await expect(extensions).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('[data-project]')).toHaveCount(3);
  await expect(page.getByRole('heading', { name: 'Focus Guard', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'HealthSentinel BD', exact: true })).toHaveCount(0);
  await page.getByRole('button', { name: 'All projects', exact: false }).click();
  await expect(page.locator('[data-project]')).toHaveCount(12);
});
