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
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
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
  "name": "clicks more",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.clickMore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Product Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.productPageDisplayed()"
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
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks add to cart",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.clickAddToCart()"
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
  "name": "user is on the \"product\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-0943\u0027, ip: \u0027192.168.1.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\DARREN~1.CAR\\AppData\\Local\\Temp\\scoped_dir24468_158511009}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49388}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.106, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 83c5a50f112eedf919a02d3b4296fab4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isSelected(RemoteWebElement.java:140)\r\n\tat org.openqa.selenium.support.ui.Select.setSelected(Select.java:322)\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:120)\r\n\tat pageObjects.ProductPage.selectSize(ProductPage.java:39)\r\n\tat stepdefs.BuyJourneyStepDef.selectItem(BuyJourneyStepDef.java:74)\r\n\tat ✽.the user specifies exact purchase(file:///C:/Users/darren.carverbalsige/Documents/AutomationTraining/Ten10StoreFour/src/test/resources/features/buyjourney.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "clicks add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.addToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "product has been added to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.verifyItemInCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add Message to Previous Order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is signed in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.signIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out message form on details page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.fillOutMessage()"
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
  "name": "user is on the \"dresses\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "filters are selected",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.selectFilters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "correct product is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.verifyProductDisplayed()"
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
  "name": "user is on the \"dresses\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "filters are selected",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.selectFilters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clears filters",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.clearFilters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all products are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.verifyAllProductsDisplayed()"
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
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user completes the newsletter form with a valid email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.completeNewsletterForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.subscribeSuccess()"
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
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is signed in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.signIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the contact us form",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.contactUsForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a confirmation message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.confirmationMessage()"
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
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes to summer dress page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.goToSummerDressPage()"
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
  "name": "Add Item via Search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
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
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
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
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
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
  "name": "out of stock message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.outOfStockMessage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-0943\u0027, ip: \u0027192.168.1.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\DARREN~1.CAR\\AppData\\Local\\Temp\\scoped_dir24468_158511009}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49388}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.106, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 83c5a50f112eedf919a02d3b4296fab4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\r\n\tat pageObjects.ProductPage.verifyOutOfStock(ProductPage.java:62)\r\n\tat stepdefs.BuyJourneyStepDef.outOfStockMessage(BuyJourneyStepDef.java:182)\r\n\tat ✽.out of stock message appears(file:///C:/Users/darren.carverbalsige/Documents/AutomationTraining/Ten10StoreFour/src/test/resources/features/buyjourney.feature:69)\r\n",
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
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
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
  "name": "product available with different options message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.differentOptionsMessage()"
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
  "name": "user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.homepageSetUp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is signed in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.signIn()"
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
});