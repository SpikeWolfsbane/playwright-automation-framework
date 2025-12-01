import {test, expect} from '@playwright/test';

test('locators: getByLabel example', async ({ page }) => {

    //Arrange - Go to demo login page
    await page.goto('https://the-internet.herokuapp.com/login');

    //Arrange - Find inputs by labels
    const usernameInput = page.getByLabel('Username');
    const passwordInput = page.getByLabel('Password');

    //Assert - Inputs visible
    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    //Act - Type into fields
    await usernameInput.fill('tomsmith');
    await passwordInput.fill('SuperSecretPassword');

    //Act - Click login button
    await page.getByRole('button', {name: 'Login'}).click();

    //Assert - landed in secure area
    await expect( 
        page.getByRole('heading',{name: 'Secure Area'})
    ).toBeVisible();
});
