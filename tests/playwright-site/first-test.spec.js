import {test, expect} from '@playwright/test';

test(" first test - check Playwright header", async ({page}) => {
    //Navigate to Playwright homepage
    await page.goto('https://playwright.dev/');

    //Locate main header element
    const header = page.getByRole('heading',{name: 'Playwright enables reliable end-to-end testing for modern web apps.'});
    //Assert header visible
    await expect(header).toBeVisible();
});