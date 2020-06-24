Feature Shopping Cart

Scenario: user removes item from their basket
Given the user has an item in their basket
  When the user navigates to basket
  And the user deletes an item from their basket
  Then the item is deleted from the basket

Scenario: user increases quantity of product in basket
    Given the user has an item in their basket
    When the user navigates to basket
    And the user increases the quantity of the item
    Then the quantity is increased

Scenario: user proceeds to checkout not logged in
  Given the user has an item in their basket
  And is not logged in
  When the user navigates to basket
  And clicks on proceed to checkout
  Then sign in page is displayed

