import {
    Locator, Page,
} from '@playwright/test';
import BasePage from './basePage';


export default class FlipkartHomePage extends BasePage {
    closeLoginPopupButton: Locator;
    bannerTab: Locator

    constructor(page: Page) {
        super(page);
        this.bannerTab = this.page.locator("._3eARKq");
        this.closeLoginPopupButton = this.page.getByRole('button', { name: '✕' });

    }

    async goTo() {
        await this.page.goto('https://www.flipkart.com/');
    }

    async clickCloseButton() {
        await this.closeLoginPopupButton.first().click();
    }
    async clickRandomBanner() {
        const link = await this.page.locator('._3eARKq').first().locator('a').first().getAttribute('href');
        await this.page.goto("https://www.flipkart.com/" + link);

    }

}