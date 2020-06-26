Feature: ShoppingCart

Scenario: user removes item from their basket
Given the user is on the homepage
Given the user has an item in their basket
  When the user navigates to basket
  And the user deletes an item from their basket
  Then the item is deleted from the basket

Scenario: user increases quantity of product in basket
  Given the user is on the homepage
    Given the user has an item in their basket
    When the user navigates to basket
    And the user increases the quantity of the item
    Then the quantity is increased

Scenario: user proceeds to checkout not logged in
  Given the user is on the homepage
  Given the user has an item in their basket
  When the user navigates to basket
  And clicks on proceed to checkout
  Then sign in page is displayed

Scenario: user logs in and makes a purchase
  Given the user is on the homepage
    Given the user logs in
    And the user has an item in their basket
    When the user navigates to basket
    And clicks on proceed to checkout
    And fills out shipping page details
    Then the order confirmation page is displayed

Scenario: user adds a new address
  Given the user is on the homepage
    Given the user logs in
    And the user has an item in their basket
    When the user navigates to basket
    And clicks on proceed to checkout
    And adds a new address
    Then the new address will be added

Scenario: users shipping address is different to billing
  Given the user is on the homepage
  Given the user logs in
  And the user has an item in their basket
  When the user navigates to basket
  And clicks on proceed to checkout
  And selects a different address for shipping
  Then the shipping address has changed

Scenario: user adds comment to order
  Given the user is on the homepage
  Given the user logs in
  And the user has an item in their basket
  When the user navigates to basket
  And clicks on proceed to checkout
  And adds a message to their order
  Then a message is added to the order

Scenario: shopping cart is emptied after log out
  Given the user is on the homepage
  Given the user logs in
  And the user has an item in their basket
  When the user navigates to basket
  And clicks on proceed to checkout
  And user logs out and logs back in
  Then basket is empty

Scenario: price is displayed correctly when multiple items in basket
  Given the user is on the homepage
  Given the user logs in
  And the user has an item in their basket
  When the user adds a different product to basket
  Then the price and counter are displayed correctly