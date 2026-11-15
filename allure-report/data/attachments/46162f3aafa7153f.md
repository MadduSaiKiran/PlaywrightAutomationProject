# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CustomTestAndFixtureCreationTest.spec.js >> TC001 - Custom Test and Fixture Creation Test
- Location: tests\CustomTestAndFixtureCreationTest.spec.js:7:12

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('.em-spacer-1 .ng-star-inserted') resolved to 2 elements:
    1) <label _ngcontent-sqp-c39="" class="ng-star-inserted"> | 6a181f0217ee3e78baa4155b | </label> aka getByText('| 6a181f0217ee3e78baa4155b |')
    2) <label _ngcontent-sqp-c39="" class="ng-star-inserted"> | 6a181f0217ee3e78baa4155e | </label> aka getByText('| 6a181f0217ee3e78baa4155e |')

Call log:
  - waiting for locator('.em-spacer-1 .ng-star-inserted')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e7]:
        - link "Automation Automation Practice":
          - /url: ""
          - generic [ref=e8] [cursor=pointer]:
            - heading "Automation" [level=3] [ref=e9]
            - paragraph [ref=e10]: Automation Practice
      - text: 
      - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
        - /url: https://techsmarthire.com/
      - list [ref=e12]:
        - listitem [ref=e13] [cursor=pointer]:
          - button " HOME" [ref=e14]:
            - generic [ref=e15]: 
            - text: HOME
        - listitem
        - listitem [ref=e16] [cursor=pointer]:
          - button " ORDERS" [ref=e17]:
            - generic [ref=e18]: 
            - text: ORDERS
        - listitem [ref=e19] [cursor=pointer]:
          - button " Cart" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22] [cursor=pointer]:
          - button "Sign Out" [ref=e23]:
            - generic [ref=e24]: 
            - text: Sign Out
    - table [ref=e26]:
      - rowgroup [ref=e27]:
        - row "Thankyou for the order. You can see all the Orders in Orders History Page | 6a181f0217ee3e78baa4155b | | 6a181f0217ee3e78baa4155e | Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV Questions? We're on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e28]:
          - cell "Thankyou for the order. You can see all the Orders in Orders History Page | 6a181f0217ee3e78baa4155b | | 6a181f0217ee3e78baa4155e | Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV Questions? We're on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e29]:
            - table [ref=e30]:
              - rowgroup [ref=e31]:
                - row [ref=e32]:
                  - cell [ref=e33]
                - row [ref=e34]:
                  - cell [ref=e35]
                - row [ref=e36]:
                  - cell [ref=e37]
                - row "Thankyou for the order. You can see all the Orders in Orders History Page | 6a181f0217ee3e78baa4155b | | 6a181f0217ee3e78baa4155e |" [ref=e38]:
                  - cell "Thankyou for the order. You can see all the Orders in Orders History Page | 6a181f0217ee3e78baa4155b | | 6a181f0217ee3e78baa4155e |" [ref=e39]:
                    - table [ref=e40]:
                      - rowgroup [ref=e41]:
                        - row "Thankyou for the order. You can see all the Orders in Orders History Page | 6a181f0217ee3e78baa4155b | | 6a181f0217ee3e78baa4155e |" [ref=e42]:
                          - cell "Thankyou for the order. You can see all the Orders in Orders History Page | 6a181f0217ee3e78baa4155b | | 6a181f0217ee3e78baa4155e |" [ref=e43]:
                            - table [ref=e44]:
                              - rowgroup [ref=e45]:
                                - row "Thankyou for the order." [ref=e46]:
                                  - cell "Thankyou for the order." [ref=e47]:
                                    - heading "Thankyou for the order." [level=1] [ref=e48]
                                - row "You can see all the Orders in Orders History Page" [ref=e49]:
                                  - cell "You can see all the Orders in Orders History Page" [ref=e50]:
                                    - text: You can see all the Orders in
                                    - generic [ref=e51] [cursor=pointer]: Orders History Page
                                - row "| 6a181f0217ee3e78baa4155b | | 6a181f0217ee3e78baa4155e |" [ref=e52]:
                                  - cell "| 6a181f0217ee3e78baa4155b | | 6a181f0217ee3e78baa4155e |" [ref=e53]:
                                    - generic [ref=e54]: "| 6a181f0217ee3e78baa4155b |"
                                    - generic [ref=e55]: "| 6a181f0217ee3e78baa4155e |"
                - row [ref=e56]:
                  - cell [ref=e57]
                - row "Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV" [ref=e58]:
                  - cell "Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV" [ref=e59]:
                    - table [ref=e60]:
                      - rowgroup [ref=e61]:
                        - row [ref=e62]:
                          - cell [ref=e63]
                        - row "Items in your order may ship separately. View your order for shipping updates." [ref=e64]:
                          - cell "Items in your order may ship separately. View your order for shipping updates." [ref=e65]:
                            - text: Items in your order may ship separately.
                            - text: View your order for shipping updates.
                        - row "Click To Download Order Details in CSV" [ref=e66]:
                          - button "Click To Download Order Details in CSV" [ref=e67] [cursor=pointer]
                - row [ref=e68]:
                  - cell [ref=e69]
                - row "Questions? We're on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e70]:
                  - cell "Questions? We're on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e71]:
                    - table [ref=e72]:
                      - rowgroup [ref=e73]:
                        - row [ref=e74]:
                          - cell [ref=e75]
                        - row "Questions? We're on call." [ref=e76]:
                          - cell "Questions? We're on call." [ref=e77]
                        - row "Monday to Friday 9am - 9pm" [ref=e78]:
                          - cell "Monday to Friday 9am - 9pm" [ref=e79]
                        - row "Saturday to Sunday 10am - 6pm" [ref=e80]:
                          - cell "Saturday to Sunday 10am - 6pm" [ref=e81]
                        - row "dummywebsite@rahulshettyacademy.com" [ref=e82]:
                          - cell "dummywebsite@rahulshettyacademy.com" [ref=e83]: dummywebsite@rahulshettyacademy.com
                        - row [ref=e84]:
                          - cell [ref=e85]
                - row [ref=e86]:
                  - cell [ref=e87]
                - row
  - generic "Order Placed Successfully" [ref=e89]
```

# Test source

```ts
  1  | const { expect } = require("@playwright/test");
  2  | 
  3  | class OrdersReviewPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.country = page.locator("[placeholder*='Country']");
  7  |         this.dropdown = page.locator(".ta-results");
  8  |         this.emailId = page.locator(".user__name [type='text']").first();
  9  |         this.submit = page.locator(".action__submit");
  10 |         this.orderConfirmationText = page.locator(".hero-primary");
  11 |         this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
  12 | 
  13 |     }
  14 |     async searchCountryAndSelect(countryCode, countryName) {
  15 |         await this.country.pressSequentially("ind");
  16 |         // await this.country.fill(countryCode,{delay:100});
  17 |         await this.dropdown.waitFor();
  18 |         const optionsCount = await this.dropdown.locator("button").count();
  19 |         for (let i = 0; i < optionsCount; ++i) {
  20 |             const text = await this.dropdown.locator("button").nth(i).textContent();
  21 |             if (text.trim() === countryName) {
  22 |                 await this.dropdown.locator("button").nth(i).click();
  23 |                 break;
  24 |             }
  25 |         }
  26 | 
  27 |     }
  28 | 
  29 |     async VerifyEmailId(username) {
  30 |         await expect(this.emailId).toHaveText(username);
  31 |     }
  32 | 
  33 |     async SubmitAndGetOrderId() {
  34 |         await this.submit.click();
  35 |         await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
> 36 |         return await this.orderId.textContent();
     |                                   ^ Error: locator.textContent: Error: strict mode violation: locator('.em-spacer-1 .ng-star-inserted') resolved to 2 elements:
  37 |     }
  38 | }
  39 | module.exports = { OrdersReviewPage };
  40 | 
```