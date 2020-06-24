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
formatter.uri("file:src/test/resources/features/signin.feature");
formatter.feature({
  "name": "Sign in",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sign in as registered user",
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
  "name": "the user signs in with email and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userSignsinWithEmailAndPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is signed in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userIsSignedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sign in as unregistered user",
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
  "name": "the user fills in sign in details with unregistered email",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.signsInWithUnregisteredEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.errorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Forgotten Password",
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
  "name": "the user clicks forgotten password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userClicksForgottenPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirmation message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.confirmation_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sign out",
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
  "name": "the user signs out",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userSignsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user signed out",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.verify_user_signed_out()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Change account preferences",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is signed into their account",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.signedIntoAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user changes account settings to opt in to offers and newsletter",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.changesAccountSettingsAndOptsIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the updated account alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.updatedAccountAlertIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sign in Using invalid password",
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
  "name": "the user inputs valid email",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.InputsEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.entersInvalidPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the invalid password alert displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.invalidPasswordAlertDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new address to account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the account page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.onAccountsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "on the address section",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.onAddressSection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds a new address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userAddsNewAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the new address is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.newAddressDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "signed in with existing account details and have an existing order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is signed into their account",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.signedIntoAccount()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.name: password (tried for 20 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat pageObjects.BasePage.findAndType(BasePage.java:43)\r\n\tat pageObjects.SignInPage.enterPassword(SignInPage.java:195)\r\n\tat pageObjects.SignInPage.login(SignInPage.java:248)\r\n\tat stepdefs.SignInStepDef.signedIntoAccount(SignInStepDef.java:78)\r\n\tat ✽.the user is signed into their account(file:///C:/Users/amelia.nock/Documents/Ten10StoreFour/src/test/resources/features/signin.feature:43)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.name: password\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-1055\u0027, ip: \u0027192.168.1.96\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:408)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:643)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:640)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat pageObjects.BasePage.findAndType(BasePage.java:43)\r\n\tat pageObjects.SignInPage.enterPassword(SignInPage.java:195)\r\n\tat pageObjects.SignInPage.login(SignInPage.java:248)\r\n\tat stepdefs.SignInStepDef.signedIntoAccount(SignInStepDef.java:78)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user navigates to a pre-existing order and adds a message",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userNavigatesToOrderAndAddsMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the updated order alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.updatedOrderAlertIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Use and unregistered email to get forgotten password",
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
  "name": "the user inputs and unregistered email in the forgotten password input",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userInputsForgottenPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the unregistered email alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.unregisteredEmailAlertIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
});