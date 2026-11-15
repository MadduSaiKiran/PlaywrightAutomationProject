import { test, expect } from '@playwright/test'

// const { test, expect } = require('@playwright/test');

test('TC001 - Non - Valid Login Credentials and Validate Error Popup', async ({ page }) => {
  // Locators
  const userName_Locator = page.locator("#username");
  const password_Locator = page.locator("[type='password']");
  const signIn_Locator = page.locator("#signInBtn");
  //Data
  const email = "sai@gmail.com";
  const password = "Test@123";
  const productName = 'zara coat 3';

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  //type() - types characters one by one like real user typing... - hence it is slow
  //fill() - Fill the entire input instantly - hence it is fast 

  await userName_Locator.fill("");
  await userName_Locator.type(email);
  await password_Locator.fill("");
  await password_Locator.type(password);
  await signIn_Locator.click();
  await page.waitForLoadState('networkidle');

  //wait until locator shown up on the page.
  const errorMsgLocator = await page.locator("[style*='block']"); // wait for locator with style attribut value contains block

  await expect(errorMsgLocator).toContainText("Incorrect username/password.");

  //  const actualValue=errorMsgLocator.textContent(); 
  //  expect(actualValue.trim()).toEqual("Incorrect username/password.");

});

test('TC002 - Web Client App login', async ({ page }) => {

  const email = "anshika@gmail.com";
  const productName = 'zara coat 3';
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");

  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").type("Iamking@000");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();

  const firstItemTitle = await page.locator(".card-body b").first().textContent();
  const secondItemTitle = await page.locator(".card-body b").nth(1).textContent();
  const lastItemTitle = await page.locator(".card-body b").last().textContent();
  console.log("First Item Title : " + firstItemTitle);
  console.log("Second Item Title : " + secondItemTitle);
  console.log("Last Item Title : " + lastItemTitle);

  const titles = await page.locator(".card-body b").allTextContents();
  console.log("All Item Titles : " + titles);

});