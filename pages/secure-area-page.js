const {BasePage} = require('./base-page');
const {expect} = require('@playwright/test');

exports.SecureAreaPage = class SecureAreaPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        this.secureHeader = page.locator('h2');
        this.logoutButton = page.locator('a[href="/logout"]');
    }

    async assertOnPage() {
        await expect(this.secureHeader).toHaveText('Secure Area');
        await this.assertUrlContains('/secure');
    }

    async assertSuccessMessage(text) {
        await this.assertFlashContains(text);
    }

    async logout() {
        await this.logoutButton.click();
    }
};
