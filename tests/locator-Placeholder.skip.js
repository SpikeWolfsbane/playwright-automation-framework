import {test, expect} from '@playwright/test';

test('locators: getByPlaceholder example', async ({ page }) => {
    
    //Arrange - Go to Playwright demo login page
    await page.goto('https://demo.playwright.dev/login');

    //Arrange - Find inputs by their labels
    const usernameInput = page.getByPlaceholder('username');
    const passwordInput = page.getByPlaceholder('password');

    //Assert - Inputs are visible
    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    //Act - Type into fields
    await usernameInput.fill('DanielTester');
    await passwordInput.fill('SuperSecret123');

    //Assert - Values were entered correctly
    await expect(usernameInput).toHaveValue('DanielTester');
    await expect(passwordInput).toHaveValue('SuperSecret123');
});