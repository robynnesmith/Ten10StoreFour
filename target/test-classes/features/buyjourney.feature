Feature: BuyJourney

  Scenario: Select Item from homepage
    Given the user is on the home page
    When the user goes to a product
    And clicks more
    Then the Product Page is displayed