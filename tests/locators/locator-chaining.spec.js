import {test, expect} from '@playwright/test'

test('chaining: first sidebar link is visible', async ({page}) => {

    await page.goto('https://playwright.dev/docs/intro')

    const sidbarLinks = page
        .getByRole('navigation')
        .getByRole('link');

    const firstLink = sidbarLinks.first();

    await expect(firstLink).toBeVisible();
});

test('chaining: third sidebar link is visible', async ({ page }) => {
  // Arrange
  await page.goto('https://playwright.dev/docs/intro');

  const sidebarLinks = page
    .getByRole('navigation')
    .getByRole('link');

    const thirdLink = sidebarLinks.nth(2);

    await expect(thirdLink).toBeVisible();
    await expect(thirdLink).toHaveText(/API/i);         

});


test('chaining: filter API link and click it', async ({ page }) => {
  // Arrange - go to docs page
  await page.goto('https://playwright.dev/docs/intro');
  const navLinks = page
    .getByRole('navigation')
    .getByRole('link');

  //Act - filter to the link containing "API"
  const apiLink = navLinks.filter({hasText: /^API$/});

  //Assert - API Link is visible
  await expect(apiLink).toBeVisible();
  
  //Act - click the API link
  await apiLink.click();

  //Assert - URL contains "api" (or starts with docs/api)
  await expect(page).toHaveURL(/api/i);

});