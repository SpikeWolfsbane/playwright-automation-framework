const {test, expect} = require('@playwright/test');
const{LoginPage} = require('../pages/login-page');

test.describe('Invalid Login - Data Driven', () => {
    const invalidCreds = [
        {user:'wrong', pass:'wrong',message:'Your username is invalid!'},
        {user:'tomsmith',pass:'wrong',message:'Your password is invalid!'},
        {user:'',pass:'SuperSecretPassword!',message:'Your username is invalid!'},
        {user:'tomsmith',pass:'',message:'Your password is invalid!'}
    ];
    
    for (const data of invalidCreds){
        test(`Login fails: user="${data.user}" pass="${data.pass}"`, async ({page}) => {
            const loginPage = new LoginPage(page);
            await loginPage.open();

            await loginPage.login(data.user, data.pass);
            await loginPage.assertFlashContains(data.message);

            await expect(page).toHaveURL(/login/);
        })
    }
});