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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.cssSelector: #myModalLabel (tried for 20 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat pageObjects.BasePage.waitUntilVisible(BasePage.java:48)\r\n\tat pageObjects.HomePage.addedToCart(HomePage.java:93)\r\n\tat stepdefs.BuyJourneyStepDef.verifyItemInCart(BuyJourneyStepDef.java:61)\r\n\tat ✽.product has been added to cart(file:///C:/Users/darren.carverbalsige/Documents/AutomationTraining/Ten10StoreFour/src/test/resources/features/buyjourney.feature:18)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.cssSelector: #myModalLabel\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-0943\u0027, ip: \u0027192.168.1.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:408)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat pageObjects.BasePage.waitUntilVisible(BasePage.java:48)\r\n\tat pageObjects.HomePage.addedToCart(HomePage.java:93)\r\n\tat stepdefs.BuyJourneyStepDef.verifyItemInCart(BuyJourneyStepDef.java:61)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-0943\u0027, ip: \u0027192.168.1.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\DARREN~1.CAR\\AppData\\Local\\Temp\\scoped_dir22552_919776645}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62231}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: da7750c686099b707cd2be62e4d84f99\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\r\n\tat pageObjects.ProductPage.verifyOutOfStock(ProductPage.java:62)\r\n\tat stepdefs.SignInStepDef.isDisplayed(SignInStepDef.java:113)\r\n\tat ✽.\"out of stock message\" is displayed(file:///C:/Users/darren.carverbalsige/Documents/AutomationTraining/Ten10StoreFour/src/test/resources/features/buyjourney.feature:68)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "add to cart button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.cartButtonDisabled()"
});
formatter.result({
  "status": "skipped"
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
formatter.uri("file:src/test/resources/features/shoppingcart.feature");
formatter.feature({
  "name": "ShoppingCart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user removes item from their basket",
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
  "name": "the user has an item in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to basket",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.navToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"deletes\" an item in the basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userDeletesItem(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the item is deleted from the basket",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user increases quantity of product in basket",
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
  "name": "the user has an item in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to basket",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.navToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user \"increases the quantity of\" an item in the basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userDeletesItem(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the quantity is increased",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.quantityIsIncreased()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user proceeds to checkout not logged in",
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
  "name": "the user has an item in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to basket",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.navToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"proceed to checkout\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"sign in section\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user logs in and makes a purchase",
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
  "name": "the user logs in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userLogsIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has an item in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to basket",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.navToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"proceed to checkout\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out \"shipping page details\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.fillOutMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"order confirmation page\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user adds a new address",
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
  "name": "the user logs in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userLogsIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has an item in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to basket",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.navToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"proceed to checkout\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out \"new address form\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.fillOutMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"new address on checkout\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "users shipping address is different to billing",
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
  "name": "the user logs in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userLogsIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has an item in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to basket",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.navToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"proceed to checkout\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects a different address for shipping",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.selectDifferentShippingAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"new shipping address\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user adds comment to order",
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
  "name": "the user logs in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userLogsIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has an item in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to basket",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.navToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"proceed to checkout\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out \"message for order\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.fillOutMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"order message\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.isDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "shopping cart is emptied after log out",
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
  "name": "the user logs in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userLogsIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has an item in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to basket",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.navToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks \"proceed to checkout\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs out and logs back in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.logOutLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "basket is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.basketIsEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "price is displayed correctly when multiple items in basket",
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
  "name": "the user logs in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userLogsIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has an item in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds a different product to basket",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userAddsADifferentProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the price and counter are displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.pricesAndCounterCorrect()"
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