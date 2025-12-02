import {test, expect} from '@playwright/test';

test("Login form interaction test", async ({page}) => {

    //Arrange - go to login page
    await page.goto('https://the-internet.herokuapp.com/login');

    //Arrange - locate inputs and button
    const usernameInput = page.getByLabel('Username');
    const passwordInput = page.getByLabel('Password');
    const loginButton = page.getByRole('button', {name: 'Login'});

    //Assert - inputs and button visible
    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(loginButton).toBeVisible();

    //Act -input credentials
    await usernameInput.fill('tomsmith');
    await passwordInput.fill('SuperSecretPassword!');

    //Act - click login
    await loginButton.click();

    //Assert - success message is shown
    const successFlash = page.getByText('You logged into a secure area!');
    await expect(successFlash).toBeVisible();
    
});