class HomePage {
  visit() {
    cy.visit("/");
  }

  searchForProduct(productName) {
    cy.get(".search-input").first().type(productName).type("{enter}");
  }
}

export default new HomePage();
