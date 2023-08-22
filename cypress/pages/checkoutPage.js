class CheckoutPage {
    proceedToCheckout() {
      cy.get('.form-row > :nth-child(2) > .btn').click();
    }
  
    fillInDetails(firstName, lastName, email, telephone, password, confirmPassword, company, address1, address2, city, postcode, country, zone) {
      cy.get('#input-payment-firstname').type(firstName);
      cy.get('#input-payment-lastname').type(lastName);
      cy.get('#input-payment-email').type(email);
      cy.get('#input-payment-telephone').type(telephone);
      // ... other fields
    }
  
    uncheckOptions() {
      cy.get("label[for='input-newsletter']").click();
      cy.get("label[for='input-account-agree']").click();
      cy.get("label[for='input-agree']").click();
    }
  
    completeCheckoutProcess() {
      cy.get('#button-save').click();
      cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/checkout/confirm');
      cy.get('#button-confirm').should("be.visible").click();
    }
  }
  
  export default new CheckoutPage();
  