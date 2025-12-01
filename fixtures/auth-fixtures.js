const base = require('@playwright/test');
const {LoginPage} = require('../pages/login-page');
const {SecureAreaPage} = require('../pages/secure-area-page');

exports.test = base.test.extend({
    secureAreaPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        const securePage = new SecureAreaPage(page);

        await loginPage.open();

        await loginPage.login('tomsmith', 'SuperSecretPassword!');

        await securePage.assertOnPage();

        await use(securePage);
    },
});