const { LoginPage } = require('../pageObjects/LoginPage');
const { DashboardPage } = require('../pageObjects/DashboardPage');
const { CartPage } = require('../pageObjects/CartPage');
const { OrdersHistoryPage } = require('../pageObjects/OrdersHistoryPage');
const { OrdersReviewPage } = require('../pageObjects/OrdersReviewPage');

class PageObjectsManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page); //or LoginPage(page) instead of this.page in arguments
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);

    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getOrdersHistoryPage() {
        return this.ordersHistoryPage;
    }

    getOrdersReviewPage() {
        return this.ordersReviewPage;
    }

}
module.exports = { PageObjectsManager };