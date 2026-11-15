import { test, expect } from '@playwright/test'

// const { test, expect } = require('@playwright/test');

test('TC001 - Child Window/Tabs Handlings Test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator('#username');
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");
  await documentLink.waitFor();
  const [newPage] = await Promise.all(
    [
      context.waitForEvent('page'), //listen for any new page pending,rejected,fulfilled
      documentLink.click(),

    ])//new page is opened
    const newPageText = await newPage.locator(".red").textContent();
    console.log(newPageText);

    const arrayText = newPageText.split("@");
    const domain = arrayText[1].split(" ")[0];
    
    expect(domain.trim()).toEqual("rahulshettyacademy.com");

    await page.locator("#username").fill(domain);
    expect(await page.locator("#username").inputValue()).toEqual(domain);  // use inputValue() bcz textContent() won't work here since user dynamically enters a value into input tag and it is not attached to DOM.

});

