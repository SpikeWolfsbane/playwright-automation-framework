import { test, expect } from '@playwright/test';

test('roles: advanced locator practice', async ({ page }) => {

    // Navigate
    await page.goto('https://playwright.dev/');

    // 1. Locate the main heading by role + level
    const mainHeading = page.getByRole('heading', { level: 1 });
    await expect(mainHeading).toBeVisible();

    // 2. Locate the “Get started” link using role + name
    const getStarted = page.getByRole('link', { name: 'Get started' });
    await expect(getStarted).toBeVisible();

    // 3. Click it
    await getStarted.click();

    // 4. Assert the URL contains "/intro"
    await expect(page).toHaveURL(/.*intro/);

    // 5. Find the left sidebar "Installation" entry
    const installationTab = page.getByRole('link', { name: 'Installation' });
    await expect(installationTab).toBeVisible();

    // 6. Click it
    await installationTab.click();

    // 7. Assert the heading (role: heading, name: Installation) is visible
    const installHeading = page.getByRole('heading', { name: 'Installation' });
    await expect(installHeading).toBeVisible();

    // 8. Write a NEW assertion here using getByRole with a different filter
    // YOUR TASK: Choose any role + name on this page and assert it is visible.
    await page.goto('https://playwright.dev/');

    const browsers = page.getByRole('img', {name:'Browsers (Chromium, Firefox, Webkit)'});
    await expect(browsers).toBeVisible();

});
