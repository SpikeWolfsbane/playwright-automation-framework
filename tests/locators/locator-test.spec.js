import {test, expect} from '@playwright/test';

test("locators: getByText example", async ({ page }) => {

    //Arrange - Navigate to Playwright homepage
    await page.goto("https://playwright.dev/");

    //Arrange - locate the "Get started" link by its visible text
    const link = page.getByText('Get started');

    //Assert - Make sure it's visible
    await expect(link).toBeVisible();

    //Act - Click the link
    await link.click();

    // Assert - make sure page  navigated correctly
    await expect(page).toHaveURL(/docs\/intro/);
});