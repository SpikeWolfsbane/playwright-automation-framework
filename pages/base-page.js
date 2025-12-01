const {expect} = require('@playwright/test');

exports.BasePage = class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.flashMessage = page.locator('#flash');
    }

    async goto(path= '/login'){
        await this.page.goto(`https://the-internet.herokuapp.com${path}`);
    }
    
    async assertFlashContains(text){
        await expect(this.flashMessage).toContainText(text);
    }

    async assertUrlContains(fragment) {
        await expect(this.page).toHaveURL(new RegExp(fragment));
    }

}
