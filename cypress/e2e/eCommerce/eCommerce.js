import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/homePage";
import ProductPage from "../../pages/productPage";
import CheckoutPage from "../../pages/checkoutPage";

// Generate a random yopmail email addresses
const randomEmailPrefix = Math.random().toString(36).substring(7);
const yopmailEmail = `${randomEmailPrefix}@yopmail.com`;

Given("I am on the e-commerce site", () => {
  HomePage.visit();
});

When("I search for a {string}", (productName) => {
  HomePage.searchForProduct(productName);
});

When("I click on the first product", () => {
  ProductPage.clickOnFirstProduct();
});

When("I add the product to the cart", () => {
  ProductPage.addToCart();
  ProductPage.assertCartAlertText("Success: You have added iPhone to your shopping cart!");
});

When("I proceed to checkout", () => {
  CheckoutPage.proceedToCheckout();
});

When("I fill in my details", () => {
  CheckoutPage.fillInDetails("John", "Doe", yopmailEmail, "012452728", "Cityville", "Cityville", "Zone", "White House Lane", "White House Lane", "Lagos", "23401", "Nigeria", "Lagos");
});

When("I uncheck the store newsletter option", () => {
  CheckoutPage.uncheckOptions();
});

When("I complete the checkout process", () => {
  CheckoutPage.completeCheckoutProcess();
});

Then("I should see a successful checkout message", () => {
  cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=checkout/success');
  cy.get('#content').should("be.visible").and("contain", "Your order has been placed!");
});