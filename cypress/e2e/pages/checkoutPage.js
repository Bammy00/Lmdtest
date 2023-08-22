class CheckoutPage {
    proceedToCheckout() {
      cy.get('.form-row > :nth-child(2) > .btn').click();
    }
  
    fillInDetails(firstName, lastName, email, telephone, password, confirmPassword, company, address1, address2, city, postcode, country, zone) {
      cy.get('#input-payment-firstname').type(firstName);
      cy.get('#input-payment-lastname').type(lastName);
      cy.get('#input-payment-email').type(email);
      cy.get('#input-payment-telephone').type(telephone);
      cy.get('#input-payment-password').type("Cityville");
    cy.get('#input-payment-confirm').type("Cityville")
    cy.get('#input-payment-company').type("Zone")
    cy.get('#input-payment-address-1').type("White House Lane")
    cy.get('#input-payment-address-2').type("White House Lane")
    cy.get('#input-payment-city').type("Lagos")
    cy.get('#input-payment-postcode').type("23401")
    cy.get('#input-payment-country').select ("Nigeria")
    cy.get('#input-payment-zone').select("Lagos")
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
