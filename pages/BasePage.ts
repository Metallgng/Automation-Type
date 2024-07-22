import { Page, Locator } from "@playwright/test";
import { locators } from "../pages/locators";
import { testData } from "../steps/testData";

export class BasePage{
    constructor (page: Page){
        this.page = page;
    }
    private page: Page;

    //Web Element location

    /**
     * @return Abv logo
     */
    public getABVlogo(): Locator {
        return this.page.locator(locators.testlocator);
    }

    /**
     * @return Second Web element
     */
    public getSecondWebElemnt(): Locator {
        return this.page.getByRole("button", { name: testData.test});
    }
}