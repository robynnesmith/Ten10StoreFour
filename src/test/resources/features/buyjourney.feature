Feature: BuyJourney

  Scenario: Select Item from homepage
    Given user is on the "home" page
    When the user goes to a product
    And clicks more
    Then the Product Page is displayed

  Scenario: Add Item to Cart on homepage
    Given user is on the "home" page
    When the user clicks add to cart
    Then verify product has been added to cart

  Scenario: Add Item to Cart on productpage
    Given user is on the "product" page
    When the user specifies exact purchase
    And clicks add to cart
    Then verify product has been added to cart