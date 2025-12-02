import { test, expect } from '@playwright/test';

test('css/xpath fallback: highlight an article card', async ({ page }) => {
  // Arrange – go to Playwright docs homepage
  await page.goto('https://playwright.dev/');

  // CSS: "inside <nav>, find an <a> whose href is '/docs/intro'"
  const docsLinkCss = page.locator('nav a[href="/docs/intro"]');

  await expect(docsLinkCss).toBeVisible();

  // XPath: any <a> under a <nav> whose text is exactly 'Docs'
  const docsLinkXPath = page.locator('//nav//a[normalize-space() = "Docs"]');

  await expect(docsLinkXPath).toBeVisible();
});
