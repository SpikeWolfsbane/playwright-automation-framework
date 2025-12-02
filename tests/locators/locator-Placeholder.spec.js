import { test, expect } from '@playwright/test';

test('locators: getByPlaceholder example (mock login form)', async ({ page }) => {
  // Arrange – build a tiny mock login form with placeholders
  await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">
      <body>
        <main>
          <h1>Placeholder demo</h1>
          <form>
            <input placeholder="username" />
            <input placeholder="password" type="password" />
            <button type="submit">Log in</button>
          </form>
        </main>
      </body>
    </html>
  `);

  // Arrange – find inputs by their placeholder
  const usernameInput = page.getByPlaceholder('username');
  const passwordInput = page.getByPlaceholder('password');

  // Assert – inputs are visible
  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  // Act – type into fields
  await usernameInput.fill('DanielTester');
  await passwordInput.fill('SuperSecret123');

  // Assert – values were entered correctly
  await expect(usernameInput).toHaveValue('DanielTester');
  await expect(passwordInput).toHaveValue('SuperSecret123');
});
