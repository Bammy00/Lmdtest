import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Generate a random yopmail email addresses
const randomEmailPrefix = Math.random().toString(36).substring(7);
const yopmailEmail = `${randomEmailPrefix}@yopmail.com`;

Given("I am on the e-commerce site", () => {
  cy.visit("/");
});

When("I search for a {string}", () => {
  cy.get(".search-input").first().type("phone").type("{enter}");
});

When("I click on the first product", () => {
  cy.get(".lazy-load").first().click();
});

When("I add the product to the cart", () => {
  cy.get("#entry_216842 > .text").click();
  // Assert that the cart alert is visible and contains the specified text
  cy.get(".toast-body")
    .should("be.visible")
    .should("contain", "Success: You have added iPhone to your shopping cart!");
});

When("I proceed to checkout", () => {
    cy.get('.form-row > :nth-child(2) > .btn').click();
});

When("I fill in my details", () => {
    cy.get('#input-payment-firstname').type("John");
    cy.get('#input-payment-lastname').type("Doe");
    cy.get('#input-payment-email').type(yopmailEmail);
    cy.get('#input-payment-telephone').type ("012452728")
    cy.get('#input-payment-password').type("Cityville");
    cy.get('#input-payment-confirm').type("Cityville")
    cy.get('#input-payment-company').type("Zone")
    cy.get('#input-payment-address-1').type("White House Lane")
    cy.get('#input-payment-address-2').type("White House Lane")
    cy.get('#input-payment-city').type("Lagos")
    cy.get('#input-payment-postcode').type("23401")
    cy.get('#input-payment-country').select ("Nigeria")
    cy.get('#input-payment-zone').select("Lagos")
});

When("I uncheck the store newsletter option", () => {
    cy.get("label[for='input-newsletter']").click();
    cy.get ("label[for='input-account-agree']").click()
    cy.get ("label[for='input-agree']").click()
});

When("I complete the checkout process", () => {
    cy.get('#button-save').click()
    // Assert that the current URL matches the expected URL
cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/checkout/confirm');
    cy.get('#button-confirm')
    .should("be.visible")
    .click()
});

Then("I should see a successful checkout message", () => {
  // Assert that the current URL matches the expected URL
cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=checkout/success');
  cy.get('#content')
    .should("be.visible")
    .and("contain", "Your order has been placed!");
});
