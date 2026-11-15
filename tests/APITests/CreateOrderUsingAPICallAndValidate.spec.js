const { test, expect, request } = require('@playwright/test');

const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };

let token;
let orderId;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {

    data: loginPayLoad

  }
  );
  expect((await loginResponse).ok()).toBeTruthy();

  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;

  console.log("Token Id: " + token);

  //Create Order API
  const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
    data: orderPayLoad,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  });

  const orderResponseJson = await orderResponse.json();
  console.log(orderResponseJson);
  orderId = await orderResponseJson.orders[0];

});


test('TC001 - Create an order using API calls and Validate Test', async ({ page }) => {
  //Insert the token into localStorage | what value we need to pass into function should specify in second argument. ex: .addInitScript(value=>..., token); 
  await page.addInitScript(value => {

    window.localStorage.setItem('token', value);
  }, token);

  //Bypassed login using token with API calls

  const email = "anshika@gmail.com";
  const productName = 'ZARA COAT 3';
  await page.goto("https://rahulshettyacademy.com/client");

  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
 
  //Check the order created using API in myorders

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");


  for (let i = 0; i < await rows.count(); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();

});