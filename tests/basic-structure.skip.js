import {test, expect} from '@playwright/test';

test('basic structure example', async ({page}) => {
    //Navigate
    await page.goto ('https://playwright.dev/');

    //Locate element
    const getStartedLink = page.getByRole('link', {name: 'Get started' });

    //Assertion: is link visible
    await expect(getStartedLink). toBeVisible();

    //Action: click
    await getStartedLink.click();

    //Assertion: URL contains "intro"
    await expect(page).toHaveURL(/.*intro/);
});