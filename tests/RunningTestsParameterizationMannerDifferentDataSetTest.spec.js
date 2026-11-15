const { test, expect } = require('@playwright/test');
const { PageObjectsManager } = require('../pageObjects/PageObjectsManager');
const dataSet = JSON.parse(JSON.stringify(require("../TestData/placeOrderParameterizationDifferentDataSetTestData.json"))); //convert JSON --> String --> Java Script object. 
// JSON array contains two different dataset hence will run twice.
for (const data of dataSet) {
   test(`Data Driven Test - WebShop E2E Login with ${data.username} via Parameterized Different Data Sets Test`, async ({ page }) => {

      const username = data.username; //"anshika@gmail.com" , "rahulshetty@gmail.com";
      const password = data.password;    //     "Iamking@000", "Iamking@000";
      const productName = data.productName; // 'ZARA COAT 3', "Adidas Originals";
      const pageObjectsManager = new PageObjectsManager(page);
      const loginPage = pageObjectsManager.getLoginPage();
      await loginPage.goTo("https://rahulshettyacademy.com/client");
      await loginPage.validLogin(username, password);
      const dashboardPage = pageObjectsManager.getDashboardPage();
      await dashboardPage.searchProductAddCart(productName);
      await dashboardPage.navigateToCart();

      const cartPage = pageObjectsManager.getCartPage();
      await cartPage.VerifyProductIsDisplayed(productName);
      await cartPage.Checkout();

      const ordersReviewPage = pageObjectsManager.getOrdersReviewPage();
      await ordersReviewPage.searchCountryAndSelect("ind", "India");
      const orderId = await ordersReviewPage.SubmitAndGetOrderId();
      console.log(orderId);
      await dashboardPage.navigateToOrders();

      const ordersHistoryPage = pageObjectsManager.getOrdersHistoryPage();
      await ordersHistoryPage.searchOrderAndSelect(orderId);
      expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

   });
}







