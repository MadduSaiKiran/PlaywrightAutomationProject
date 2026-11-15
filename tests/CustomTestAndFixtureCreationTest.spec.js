const { test, expect } = require('@playwright/test');
const { customTest } = require('../utils/customTestAndFixtureCreation');
const { PageObjectsManager } = require('../pageObjects/PageObjectsManager');
const dataSet = JSON.parse(JSON.stringify(require("../TestData/placeOrderTestData.json"))); //convert JSON --> String --> Java Script object. 

//the below customeTest have ability of general test() and additionally having testDataForOrder fixture since we extended test and created custom test.
customTest.only('TC001 - Custom Test and Fixture Creation Test', async ({ page, testDataForOrder }) => {

   const username = testDataForOrder.username; //"anshika@gmail.com";
   const password = testDataForOrder.password;    //     "Iamking@000";
   const productName = testDataForOrder.productName; // 'ZARA COAT 3';
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






