// flow-login-and-nav.spec.js
import { test, expect } from '@playwright/test';
import { connected } from 'process';

test('login flow: successful login shows secure area', async ({ page }) => {
  // Arrange - go to login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Arrange - locate inputs and button
  const usernameInput = page.getByLabel('Username');
  const passwordInput = page.getByLabel('Password');
  const loginButton   = page.getByRole('button', { name: 'Login' });

  // Act - fill in valid credentials
  await usernameInput.fill('tomsmith');
  await passwordInput.fill('SuperSecretPassword!');
  await loginButton.click();

  // Assert - success message and secure area visible
  const successFlash = page.getByText('You logged into a secure area!', { exact: false });
  await expect(successFlash).toBeVisible();

  // (Nice extra) Assert URL contains /secure
  await expect(page).toHaveURL(/\/secure/);

  //Assert - logout button visible
  const logout = page.getByRole('link', {name: 'Logout'});
  await expect(logout).toBeVisible();

});

test('login flow: invalid password shows error message', async ({ page }) => {
  // Arrange - go to login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Arrange - locate inputs and button
  const usernameInput = page.getByLabel('Username');
  const passwordInput = page.getByLabel('Password');
  const loginButton   = page.getByRole('button', { name: 'Login' });

  // Act - fill in WRONG credentials
  await usernameInput.fill('tomsmith');
  await passwordInput.fill('WrongPassword');
  await loginButton.click();

  // Assert - error message is visible
  const errorFlash = page.getByText('Your password is invalid!', { exact: false });
  await expect(errorFlash).toBeVisible();

  // Assert - still on the login page (URL ends with /login)
  await expect(page).toHaveURL(/\/login/);
});

test('full flow: home → login → secure → back home', async ({ page }) => {
  // Arrange - start on the home page
  await page.goto('https://the-internet.herokuapp.com/');

  //Arrange - navi to login page via link
  const loginLink = page.getByRole('link', {name: 'Form Authentication'});
  await expect(loginLink).toBeVisible();
  await loginLink.click();

  //Assert - at login page
  await expect(page).toHaveURL(/\/login/);

  //Act - perform login
  const usernameInput = page.getByLabel('Username');
  const passwordInput = page.getByLabel('Password');
  const loginButton   = page.getByRole('button', { name: 'Login' });

  await usernameInput.fill('tomsmith');
  await passwordInput.fill('SuperSecretPassword!');
  await loginButton.click();

  //Assert - secure area visible
  const secureHeading = page.getByRole('heading', {level: 2, name: 'Secure Area'});
  await expect(secureHeading).toBeVisible();

  //Act - browser back button
  await page.goBack();
  await page.goBack();
  //Assert - confirm homepage
  const homeHeading = page.getByRole('heading', {name: 'Welcome to the-internet'});
  await expect(homeHeading).toBeVisible();
});