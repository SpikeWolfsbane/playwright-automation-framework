import {test, expect} from '@playwright/test';

test('practice: 8 checks', async ({page}) => {

    //Navigate
    await page.goto('https://playwright.dev/');

    //Assert - Main heading visible
    const mainHeading = page.getByRole('heading', {level:1});
    await expect(mainHeading).toBeVisible();

    //Assert - Get started visible
    const getStartedLink = page.getByRole('link', {name: 'get started'});
    await expect(getStartedLink).toBeVisible();

    //Act - Click get started
    await getStartedLink.click();

    //Assert - URL contains "intro"
    await expect(page).toHaveURL(/.*intro/);

    //Assert - "Installation" sidebar item exists
    const installation = page.getByRole('link',{name: 'Installation'});
    await expect(installation).toBeVisible();

    //Act - click Installation
    await installation.click();

    //Assert: Installation page heading is visible
    const installHeading = page.getByRole('heading', {name: 'Installation'});
    await expect(installHeading).toBeVisible();
});