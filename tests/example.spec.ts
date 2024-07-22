import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

let basePage: BasePage;

test.beforeEach(async ({page}) => {
  basePage = new BasePage(page)
});

test.afterEach(async({page})=>{
  await page.close();
})

test('has title', async ({ page }) => {
  await page.goto('www.abv.bg');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/АБВ Поща/);
});