import { test, expect } from '@playwright/test';
import { allure, LabelName } from "allure-playwright";

test.describe('level 1', () => {
  test.describe('level 2.1', () => {
    test('test 1', async ({ page }) => {
      allure.label({ name: LabelName.LANGUAGE, value: "typescript" });
      allure.label({ name: LabelName.SUITE, value: "suite 1" });

      await page.addInitScript({
        path: './node_modules/gremlins.js/dist/gremlins.min.js',
      });

      await page.goto('https://auth-wte02.devoffice.ru/landing');

      await expect(page.locator("[data-co-logo='product-logo_wfm']")).toHaveText('Documents');


      try {
        await page.evaluate(() => {
          gremlins.createHorde().unleash()
        });
      } catch (e) {
        console.log(e);
      }
      await page.close();
    });
  });

  test('test2', async ({ page }) => {
    await page.addInitScript({
      path: './node_modules/gremlins.js/dist/gremlins.min.js',
    });
  
    await page.goto('https://auth-wte02.devoffice.ru/landing');
  
    await expect(page.locator("[data-co-logo='product-logo_wfm']")).toHaveText('Documentss');
  
  
    try {
      await page.evaluate(() => {
        gremlins.createHorde().unleash()
      });
    } catch (e) {
      console.log(e);
    }
  });
});

