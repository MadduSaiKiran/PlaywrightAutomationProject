import { test , expect } from '@playwright/test'

// const { test, expect } = require('@playwright/test');

// test.describe.configure({mode: 'parallel'}); //to run this file in parallel, all test present in this file execute in parallel.
// test.describe.configure({mode: 'serial'}); //run this file in serial, one test fail then next tests automatically skipped. (depends on previous steps)
// By default all tests in this file execute one by one and there is not dependency concept(runs independetly){skipping concept won't applicable here}. 

//To run test associated with tags - npx playwright test --grep @Smoke  

test('@Smoke TC001 - Browser Context Playwright Test', async ({ browser }) => {
  //Usage - plugins / cookies / Tokens Passage
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://demowebshop.tricentis.com/");

  const titleValue = await page.title();
  const pageURL = await page.url();

  // Print on Console
  console.log("titleValue : " + titleValue);
  console.log("titleValue : " + pageURL);

});

test('TC002 - Page Playwright Test', async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const titleValue = await page.title();
  const pageURL = await page.url();
 
  // Assertions:
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
  await expect(pageURL).toEqual("https://demowebshop.tricentis.com/");

  await expect(page).toHaveTitle("Demo Web Shop");
  await expect(titleValue).toEqual("Demo Web Shop");
});

