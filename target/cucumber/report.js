$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registration.feature");
formatter.feature({
  "name": "Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register user with already registered email address",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserIdOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the registration form with an registered email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.registrationFormWithRegisteredEmailAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the already registered alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.registeredAlertDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register as new user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserIdOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the registration form with an unregistered email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.the_user_completes_the_registration_form_with_an_unregistered_email_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is registered and the account page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.userRegisteredAndAccountDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register using name with numeric value",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserIdOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the registration form with an unregistered email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.the_user_completes_the_registration_form_with_an_unregistered_email_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters a name with numeric values",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.entersANameWithNumericValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the invalid name alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theInvalidAlertIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register using numeric values for password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserIdOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the registration form with an unregistered email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.the_user_completes_the_registration_form_with_an_unregistered_email_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters numeric values into the Password field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.entersNumericValuesIntoThePasswordField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "invalid password alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.invalidAlertIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register with invalid birthdate",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserIdOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the registration form with an registered email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.registrationFormWithRegisteredEmailAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters an invalid birthdate",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.entersAnInvalidBirthdate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the invalid birthdate alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theInvalidBirthDateAlertIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
});