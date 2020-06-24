Feature: Registration

  Scenario: Register user with already registered email address
    Given the user is on the "sign in" page
    When the user completes the registration form with an registered email address
    Then the already registered alert is displayed

Scenario: Register as new user
    Given the user is on the "sign in" page
    When the user completes the registration form with an unregistered email address
    Then the user is registered and the account page is displayed


  Scenario: Register using name with numeric value
    Given the user is on the "sign in" page
    When the user completes the registration form with an unregistered email address
    And enters a name with numeric values
    Then the invalid name alert is displayed

    Scenario: Register using numeric values for password
      Given the user is on the "sign in" page
      When the user completes the registration form with an unregistered email address
      And enters numeric values into the Password field
      Then invalid password alert is displayed

      Scenario: Register with invalid birthdate
        Given the user is on the "sign in" page
        When the user completes the registration form with an registered email address
        And enters an invalid birthdate
        Then the invalid birthdate alert is displayed
