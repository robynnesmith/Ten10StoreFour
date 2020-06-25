$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/buyjourney.feature");
formatter.feature({
  "name": "BuyJourney",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Select Item from homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to a product",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.selectItemFromHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"more\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"product page\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Item to Cart on homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"add to cart\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product has been added to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.verifyItemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Item to Cart on productpage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"product\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user specifies exact purchase",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.selectItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"add to cart on product page\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product has been added to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.verifyItemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Message to Previous Order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user signs in with \"BuyJourney\" email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userSignsIn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out \"message form on details page\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.fillOutMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message is sent off",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.verifyMessageSent()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filters Display Correct Products",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"dresses\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"filters\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"correct product\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Clear Filters Restores Products",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"dresses\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"filters\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"clear filters\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"all products\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Subscribe to Newsletter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out \"newsletter form\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.fillOutMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"success message\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Send Message Through Contact Us Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user signs in with \"BuyJourney\" email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userSignsIn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out \"contact us form\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.fillOutMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"contact confirmation message\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buy Summer Dress via Menu",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"summer dresses\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds product to cart",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.addProductToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product has been added to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.verifyItemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Item via Search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user searches for product",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.searchProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds product to cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.addProductToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product has been added to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.verifyItemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buy Second Item",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds product to cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.addProductToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user continues and buys another item",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.buySecondItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cart page has both items",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.checkCartPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order Large Quantity of Item",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user attempts to buy large quantity of product",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.buyLotOfProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"out of stock message\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "add to cart button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.cartButtonDisabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Product Available in Different Options",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects product with different options",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.selectProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"product available with different options message\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Reorder Product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user signs in with \"BuyJourney\" email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userSignsIn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reorders item",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.reorderItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user completes purchase",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.completePurchase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "purchase is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.purchaseSuccessful()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/registration.feature");
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the registration form with \"a registered email address\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.registrationForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"already registered alert\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the registration form with \"an unregistered email address\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.registrationForm(java.lang.String)"
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the registration form with \"an unregistered email address and a name with numeric values\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.registrationForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"invalid name alert\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the registration form with \"an unregistered email address and a password with numeric values\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.registrationForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"invalid numeric password alert\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the registration form with \"a registered email address and an invalid birthdate\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.registrationForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"invalid birthdate alert\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user signs in with \"registered\" email",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userSignsIn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is signed \"in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userIsSignedIn(java.lang.String)"
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user signs in with \"unregistered\" email",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userSignsIn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"error message\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
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
  "name": "\"confirmation message\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
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
  "name": "the user is signed \"out\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userIsSignedIn(java.lang.String)"
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
  "name": "the user is on the \"account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
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
  "name": "\"updated account alert\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
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
  "name": "\"invalid password alert\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
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
  "name": "the user is on the \"account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
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
  "name": "\"new address\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
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
  "name": "the user is on the \"account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to a pre-existing order and adds a message",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userNavigatesToOrderAndAddsMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"updated order alert\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "location": "stepdefs.RegistrationStepDef.theUserOnThePage(java.lang.String)"
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
  "name": "\"unregistered email alert\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});