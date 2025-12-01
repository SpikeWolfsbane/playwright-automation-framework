const {test, expect} = require('../fixtures/auth-fixtures');
const {LoginPage} = require('../pages/login-page');

test.describe('Secure Area Behavior', () => {
    test('user can log out and return to the login page', async ({page, secureAreaPage}) => {

        await secureAreaPage.assertOnPage();

        await secureAreaPage.logout();

        const loginPage = new LoginPage(page);
        await loginPage.assertFlashContains('You logged out of the secure area!');

        await loginPage.assertUrlContains('/login');
    });

});