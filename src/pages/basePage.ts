import {
    Page,
} from '@playwright/test';



export default abstract class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    abstract goTo(args: string[]): Promise<void>;
}
