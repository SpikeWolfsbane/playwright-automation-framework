import {test, expect} from '@playwright/test';

test('soft assertion practice', async ({page}) => {
    //go to page
    await page.goto('https://playwright.dev/');
    
    //Assert - main heading is visible
    const mainHeading = page.getByRole('heading',{level:1});
    await expect.soft(mainHeading).toBeVisible();

    //Assert - get started link is visible
    const getStartedLink = page.getByRole('link', {name: 'Get started'});
    await expect.soft(getStartedLink).toBeVisible();

    //Assert - search input visible
    const searchboxInput = page.getByLabel('Search');
    await expect.soft(searchboxInput).toBeVisible();
    
});