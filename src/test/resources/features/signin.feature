Feature: Sign in

  Scenario: Sign in as registered user
    Given the user is on the "sign in" page
    When the user signs in with email and password
    Then the user is signed in

  Scenario: Sign in as unregistered user
    Given the user is on the "sign in" page
    When the user fills in sign in details with unregistered email
    Then error message is displayed

  Scenario: Forgotten Password
    Given the user is on the "sign in" page
    When the user clicks forgotten password
    Then Confirmation message is displayed

  Scenario: Sign out
    Given the user is on the "sign in" page
    When the user signs out
    Then verify user signed out

  Scenario:Change account preferences
    Given the user is signed into their account
    When the user changes account settings to opt in to offers and newsletter
    Then the updated account alert is displayed

  Scenario: Sign in Using invalid password
    Given the user is on the "sign in" page
    When the user inputs valid email
    And enters invalid password
    Then the invalid password alert displayed

  Scenario: Add new address to account
    Given the user is on the account page
    And on the address section
    When the user adds a new address
    Then the new address is displayed

  Scenario: signed in with existing account details and have an existing order
    Given the user is signed into their account
    When the user navigates to a pre-existing order and adds a message
    Then the updated order alert is displayed

  Scenario: Use and unregistered email to get forgotten password
    Given the user is on the "sign in" page
    When the user inputs and unregistered email in the forgotten password input
    Then the unregistered email alert is displayed
