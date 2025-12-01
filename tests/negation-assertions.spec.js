import { test, expect } from '@playwright/test';

test("negation assertions practice", async ({ page }) => {
  // 1. Navigate to the login page
    await page.goto('https://the-internet.herokuapp.com/login');

    const successFlash = page.getByText('You logged into a secure area!');
    const usernameError = page.getByText('Your username is invalid!');
    const passwordError = page.getByText('Your password is invalid!');

  // 2. Assert BEFORE any actions:
  //    - success message NOT visible
  //    - error message NOT visible
    await expect(successFlash).not.toBeVisible();
    await expect(usernameError).not.toBeVisible();
    await expect(passwordError).not.toBeVisible();

    const usernameInput = page.getByLabel('Username');
    const passwordInput = page.getByLabel('Password');
    const loginButton = page.getByRole('button', {name: 'Login'});

  // 3. Act: type INVALID username & password, click login
    await usernameInput.fill('wrong');
    await passwordInput.fill('wrong');
    await loginButton.click();
  // 4. Assert:
  //    - error message IS visible
  //    - success message is NOT visible
    await expect(successFlash).not.toBeVisible();
    await expect(usernameError).toBeVisible();
    await expect(passwordError).not.toBeVisible();

  // 5. Act: type VALID username, INVALID password,and click login
    await usernameInput.fill('tomsmith');
    await passwordInput.fill('wrong');
    await loginButton.click();

  // 6. Assert:
  //    - error message is visible
  //    - success message is NOT visible
    await expect(successFlash).not.toBeVisible();
    await expect(usernameError).not.toBeVisible();
    await expect(passwordError).toBeVisible();

  // 7. Act: type VALID username AND password, click login
    await usernameInput.fill('tomsmith');
    await passwordInput.fill('SuperSecretPassword!');
    await loginButton.click();

  // 8. Assert: 
  //    - error message is Not visible
  //    - success message is visible
    await expect(successFlash).toBeVisible();
    await expect(usernameError).not.toBeVisible();
    await expect(passwordError).not.toBeVisible();
});
