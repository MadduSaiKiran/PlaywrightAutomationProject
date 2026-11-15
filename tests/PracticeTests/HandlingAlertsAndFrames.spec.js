import { test, expect } from '@playwright/test'

// const { test, expect } = require('@playwright/test');

test('TC001 - Handling Alert Popup in UI', async ({ page }) => {
  // Approach 01
  /*
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  page.on("dialog", async (dialog) => await dialog.accept());
  await page.locator("#confirmbtn").click();

  // Approach 02
  await page.goto("https://demoqa.com/alerts");
  await page.pause();
  let dialogCount = 0;
  page.on("dialog", async (dialog) => {
    dialogCount++;

    if (dialogCount === 1) {
      await dialog.accept();
    } else if (dialogCount === 2) {
      await dialog.accept();
    } else if (dialogCount === 3) {
      await dialog.dismiss();
    }
    else if (dialogCount === 4) {
      await dialog.accept("Text");
    }
  });

  await page.locator("#alertButton").click();
  await page.locator("#timerAlertButton").click();
  await page.locator("#confirmButton").click();
  await page.locator("#promtButton").click();

*/
  //Approach 03

  await page.goto("https://demoqa.com/alerts");
  // 1st - Alert - accept
  page.once("dialog", async (dialog) => {
    await dialog.accept();
  });
  await page.locator("#alertButton").click();

  // 2nd - Alert - accept 
  page.once("dialog", async (dialog) => {
    await dialog.accept();
  });
  await page.locator("#timerAlertButton").click();
  await page.waitForTimeout(7000); //introduced since not to overlap with 3rd alert
  // 3rd - Alert - dismiss 
  page.once("dialog", async (dialog) => {
    await dialog.dismiss();
  });
  await page.locator("#confirmButton").click();

  // 4th - Alert - accept with input
  page.once("dialog", async (dialog) => {
    await dialog.accept("Test");
  });
  await page.locator("#promtButton").click();

});


test('TC002 - Handling Frames in UI', async ({ page }) => {


  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  const framesPage = page.frameLocator("#courses-iframe");

  // if locator returns two elements but one element is visble then we can fileter it by adding :visible at end of locator.
  await framesPage.locator("li a[href *= 'lifetime-access']:visible").click();   

  const textCheck = await framesPage.locator(".text h2").textContent();
  console.log(textCheck.split(" ")[1]);


});





