import {
    Locator, Page,
} from '@playwright/test';
import BasePage from '../basePage';

export default class Mobiles extends BasePage {
    readonly electronicsList: Locator;
    readonly electronicSubMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.electronicsList = page.locator('._1QrT3s ._1fwVde');
        this.electronicSubMenu = page.getByText('Electronics').first();
    }

    async goTo() {
        await this.page.goto('https://www.flipkart.com/');
    }

    async returnMobilesList() {
        await this.electronicSubMenu.hover();
        await this.page.waitForTimeout(2000);
        const mobilesList = await this.electronicsList.first().locator('a').allInnerTexts();
        mobilesList.shift();
        for (let i = 0, n = mobilesList.length; i < n; i++) {
            mobilesList[i] = [i + 1] + ". " + mobilesList[i]
        }

        console.log(mobilesList)
        return mobilesList
    }

}



