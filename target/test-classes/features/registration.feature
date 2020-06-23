Feature: Registration

  Scenario: Register user with already registered email address
    Given the user is on the "sign in" page
    When the user completes the registration form with an "registered" email address
    Then the already registered alert is displayed