Feature: BuyJourney

  Scenario: Select Item from homepage
    Given user is on the "home" page
    When the user goes to a product
    And clicks more
    Then the Product Page is displayed

  Scenario: Add Item to Cart on homepage
    Given user is on the "home" page
    When the user clicks add to cart
    Then product has been added to cart

  Scenario: Add Item to Cart on productpage
    Given user is on the "product" page
    When the user specifies exact purchase
    And clicks add to cart
    Then verify product has been added to cart

  Scenario: Add Message to Previous Order
    Given user is on the "home" page
    And user is signed in
    When user fills out message form on details page
    Then message is sent off

  Scenario: Filters Display Correct Products
    Given user is on the "dresses" page
    When filters are selected
    Then correct product is displayed

  Scenario: Clear Filters Restores Products
    Given user is on the "dresses" page
    And filters are selected
    When  the user clears filters
    Then all products are displayed

  Scenario: Subscribe to Newsletter
    Given user is on the "home" page
    When user completes the newsletter form with a valid email address
    Then a success message is displayed

  Scenario: Send Message Through Contact Us Page
    Given user is on the "home" page
    And user is signed in
    When the user completes the contact us form
    Then a confirmation message is displayed

  Scenario: Buy Summer Dress via Menu
    Given user is on the "home" page
    When user goes to summer dress page
    And the user adds product to cart
    Then product has been added to cart

  Scenario: Add Item via Search
    Given user is on the "home" page
    When the user searches for product
    And the user adds product to cart
    Then product has been added to cart

  Scenario: Buy Second Item
    Given user is on the "home" page
    And the user adds product to cart
    When the user continues and buys another item
    Then cart page has both items

  Scenario: Order Large Quantity of Item
    Given user is on the "home" page
    When user attempts to buy large quantity of product
    Then out of stock message appears
    And add to cart button is disabled

  Scenario: Product Available in Different Options
    Given user is on the "home" page
    When user selects product with different options
    Then product available with different options message is displayed

  Scenario: Reorder Product
    Given user is on the "home" page
    And user is signed in
    When user reorders item
    And user completes purchase
    Then purchase is successful

