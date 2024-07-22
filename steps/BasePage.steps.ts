import { Page, expect } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export default class BasePageSteps_{
    constructor(basePage: BasePage){
        this.basePage = basePage;
    }
    private basePage: BasePage;

    //Actions
    async clickOnLogo(){
        await this.basePage.getABVlogo().click();
    }
}