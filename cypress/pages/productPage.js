class ProductPage {
    clickOnFirstProduct() {
      cy.get(".lazy-load").first().click();
    }
  
    addToCart() {
      cy.get("#entry_216842 > .text").click();
    }
  
    assertCartAlertText(expectedText) {
      cy.get(".toast-body").should("be.visible").should("contain", expectedText);
    }
  }
  
  export default new ProductPage();
  