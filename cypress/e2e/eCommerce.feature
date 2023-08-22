Feature: E-commerce Purchase Process
  As a user
  I want to be able to search, add a product to the cart, and complete the checkout process

  Scenario: Purchase a product
    Given I am on the e-commerce site
    When I search for a "phone"
    And I click on the first product
    And I add the product to the cart
    And I proceed to checkout
    And I fill in my details
    And I uncheck the store newsletter option
    And I complete the checkout process
    Then I should see a successful checkout message
