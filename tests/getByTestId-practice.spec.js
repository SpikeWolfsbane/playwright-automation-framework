import { test, expect } from '@playwright/test';

test("getByTestId: Spike's mock login error", async ({ page }) => {
  // ARRANGE – build a tiny mock page in memory
  await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">
      <body>
        <main>
          <h1 data-testid="heading">Spike Test App</h1>

          <form>
            <label>
              Username
              <input data-testid="username" />
            </label>

            <label>
              Password
              <input data-testid="password" type="password" />
            </label>

            <button
              type="button"
              data-testid="submit"
              onclick="submitForm()"
            >
              Log in
            </button>

            <p data-testid="error" hidden>
              Invalid username or password
            </p>

            <p data-testid="success" hidden>
              Welcome, Spike!
            </p>
          </form>
        </main>

        <script>
          function submitForm() {
            const username = document.querySelector('[data-testid="username"]').value;
            const password = document.querySelector('[data-testid="password"]').value;
            const error = document.querySelector('[data-testid="error"]');
            const success = document.querySelector('[data-testid="success"]');

            const isValid = username === 'Spike' && password === 'SuperSecret123';

            if (isValid) {
              // hide error, show success
              error.hidden = true;
              success.hidden = false;
            } else {
              // show error, hide success
              error.hidden = false;
              success.hidden = true;
            }
          }
        </script>
      </body>
    </html>
  `);


const heading = page.getByTestId('heading');
const usernameInput = page.getByTestId('username');
const passwordInput = page.getByTestId('password');
const submitButton = page.getByTestId('submit');
const errorMessage = page.getByTestId('error');
const successMessage = page.getByTestId('success');

await expect(heading).toHaveText('Spike Test App');
await expect(errorMessage).toBeHidden();
await expect(successMessage).toBeHidden();

await usernameInput.fill('Spike');
await passwordInput.fill('wrong-password');
await submitButton.click();

await expect(errorMessage).toBeVisible();
await expect(errorMessage).toHaveText('Invalid username or password');
await expect(successMessage).toBeHidden();

});

test("getByTestId: Spike's mock login success", async ({ page }) => {
  // Arrange – same mock page as before
  await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">
      <body>
        <main>
          <h1 data-testid="heading">Spike Test App</h1>

          <form>
            <label>
              Username
              <input data-testid="username" />
            </label>

            <label>
              Password
              <input data-testid="password" type="password" />
            </label>

            <button
              type="button"
              data-testid="submit"
              onclick="submitForm()"
            >
              Log in
            </button>

            <p data-testid="error" hidden>
              Invalid username or password
            </p>

            <p data-testid="success" hidden>
              Welcome, Spike!
            </p>
          </form>
        </main>

        <script>
          function submitForm() {
            const username = document.querySelector('[data-testid="username"]').value;
            const password = document.querySelector('[data-testid="password"]').value;
            const error = document.querySelector('[data-testid="error"]');
            const success = document.querySelector('[data-testid="success"]');

            const isValid = username === 'Spike' && password === 'SuperSecret123';

            if (isValid) {
              error.hidden = true;
              success.hidden = false;
            } else {
              error.hidden = false;
              success.hidden = true;
            }
          }
        </script>
      </body>
    </html>
  `);

const heading = page.getByTestId('heading');
const usernameInput = page.getByTestId('username');
const passwordInput = page.getByTestId('password');
const submitButton = page.getByTestId('submit');
const errorMessage = page.getByTestId('error');
const successMessage = page.getByTestId('success');

await expect(heading).toHaveText('Spike Test App');
await expect(errorMessage).toBeHidden();
await expect(successMessage).toBeHidden();

await usernameInput.fill('Spike');
await passwordInput.fill('SuperSecret123');
await submitButton.click();

await expect(errorMessage).toBeHidden();
await expect(successMessage).toBeVisible();
await expect(successMessage).toHaveText('Welcome, Spike!');

});