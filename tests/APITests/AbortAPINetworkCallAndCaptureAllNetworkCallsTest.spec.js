const { test, expect } = require('@playwright/test');




test('TC001 - Abort API Network Call & Capture All Network Calls Test', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  const email = "rahulshettyacademy";
  const password = "Learning@830$3mK2";
  const userName_Locator = page.locator("#username");
  const password_Locator = page.locator("[type='password']");
  const signIn_Locator = page.locator("#signInBtn");
  
  page.route("**/*.css",route=> route.abort());  //abort or block the .css network call.
  page.route("**/*.{jpg, png, jpeg}",route=> route.abort());  //abort or block the imgs related network call so fail to loading into UI.
  
  //To Capture and log All request & Response call in console.
  page.on("request",request=>console.log(request.url()));
  page.on("response",response=>console.log(response.url() + " : " + response.status()));
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  //Login 
  await userName_Locator.fill("");
  await userName_Locator.type(email);
  await password_Locator.fill("");
  await password_Locator.type(password);
  await signIn_Locator.click();
  await page.waitForLoadState('networkidle');
  // page.pause();
  // you can notice that the UI without css in Login page & without product Images in the product details.


});





