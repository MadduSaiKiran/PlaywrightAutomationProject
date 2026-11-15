import { test, expect } from '@playwright/test'

// const { test, expect } = require('@playwright/test');

test('TC001 - Screenshots Validation Test', async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  await expect(page.locator("#displayed-text")).toBeVisible();

  // Element level screenshot
  await page.locator("#displayed-text").screenshot({ path: './Screenshots/ElementScreenshot.png' });

  await page.locator("#hide-textbox").click();

  // Page level screenshot
  await page.screenshot({ path: './Screenshots/PageScreenshot.png' });
  
  await expect(page.locator("#displayed-text")).toBeHidden();

});

test('TC002 - Take Screenshot & Compare with Expected Screenshot Test', async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");
  await page.waitForLoadState('networkidle');

  //Takes Screenshot & Compare with Expected Screenshot. 
  //If Expected Screenshot not found then test fails and Playwright will take acutal screenshot and make it use for expected result in next runs. 
  expect(await page.screenshot()).toMatchSnapshot("DemoWebShopHomeLandingPage.png",{ maxDiffPixels: 100 });

});



