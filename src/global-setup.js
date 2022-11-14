import { chromium, expect } from "@playwright/test";

async function globalSetup(config) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("MY_URL");
  // Click input[name="login"]
  await page.locator('input[name="login"]').click();

  // Click input[name="login"]
  await page.locator('input[name="login"]').click();

  // Fill input[name="login"]
  await page.locator('input[name="login"]').fill("MY_SUPER_LOGIN");

  // Click input[name="password"]
  await page.locator('input[name="password"]').click();

  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill("MY_SUPER_PASSWORD");

  // Click button:has-text("Log In")
  await page.locator('button:has-text("Log In")').click();

  await expect(page).toHaveURL("https://auth-wte02.devoffice.ru/landing");

  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
}

export default globalSetup;
