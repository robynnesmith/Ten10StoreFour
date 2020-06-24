package stepdefs;



import config.DriverFactory;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.*;

public class BuyJourneyStepDef {

    private HomePage homepage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private ProductPage productPage = new ProductPage();
    private WomenPage womenPage = new WomenPage();
    private OrdersPage orderspage = new OrdersPage();
    private ContactUsPage contactuspage = new ContactUsPage();
    private CheckoutPage checkoutPage = new CheckoutPage();

    @Given("^user is on the \"([^\"]*)\" page$")
    public void homepageSetUp(String page) {
        homepage.clearCookies();
        switch (page){
            case "home":
                homepage.goTo();
                homepage.maximiseBrowserWindow();
                break;
            case "product":
                homepage.goTo();
                homepage.maximiseBrowserWindow();
                productPage.navigatetoProductPage();
                break;
            case "dresses":
                homepage.clickDresses();
                break;
            default:
                throw new IllegalArgumentException("Unrecognised Page Provided");
        }

    }

    @When ("^the user goes to a product$")
    public void selectItemFromHomepage() {
        homepage.hoverOverItem();
    }

    @And ("^clicks more$")
    public void clickMore() {
        homepage.clickMoreButton();
    }

    @Then ("^the Product Page is displayed$")
    public void productPageDisplayed() {
        productPage.productPageDisplayed();
    }

    @When ("^the user clicks add to cart$")
    public void clickAddToCart() {
        homepage.hoverOverItem();
        homepage.addItemToCart();
    }

    @Then("^product has been added to cart$")
    public void verifyItemInCart() {
        homepage.addedToCart();
    }

    @When("^the user specifies exact purchase$")
    public void selectItem() {
        productPage.selectQuantity();
        productPage.selectSize();
        productPage.selectColour();
    }

    @And("^clicks add to cart$")
    public void addToCart() {
        basketpage.addToCart();
    }

    @And("^user is signed in$")
    public void signIn() {
        homepage.navigateToSignInPage();
        signInPage.loginBuyJourneyTest();
    }

    @When("^user fills out message form on details page$")
    public void fillOutMessage() {
        orderspage.clickOrders();
        orderspage.clickDetails();
        orderspage.selectProductOnOrdersPage();
        orderspage.writeMessage();
    }

    @Then("^message is sent off$")
    public void verifyMessageSent() {
        orderspage.verifyMessageSent();
    }

    @When("^filters are selected$")
    public void selectFilters() {
        womenPage.clickSize();
        womenPage.clickColour();
        womenPage.clickPrice();
    }

    @Then("^correct product is displayed$")
    public void verifyProductDisplayed() {
        womenPage.verifyCorrectProductDisplayed();
    }

    @When("^the user clears filters$")
    public void clearFilters() {
        womenPage.clearAll();
        womenPage.refreshPage();
    }

    @Then("^all products are displayed$")
    public void verifyAllProductsDisplayed() {
        womenPage.verifyAllProducts();
    }

    @When("^user completes the newsletter form with a valid email address$")
    public void completeNewsletterForm() {
        homepage.subscribe();
    }

    @Then("^a success message is displayed$")
    public void subscribeSuccess() {
        homepage.verifySubscribe();
    }

    @When("^the user completes the contact us form$")
    public void contactUsForm() {
        homepage.clickContactUs();
        contactuspage.enterMessage();
        contactuspage.clickSend();
    }

    @Then("^a confirmation message is displayed$")
    public void confirmationMessage() throws InterruptedException {
        contactuspage.verifyMessageSent();
    }

    @And("^the user adds product to cart$")
    public void addProductToCart(){
        homepage.addItemToCart();
    }

    @When("^user goes to summer dress page")
    public void goToSummerDressPage() {
        homepage.clickSummerDresses();
    }

    @When("^the user searches for product$")
    public void searchProduct() {
        homepage.searchForDress();
    }

    @When("^the user continues and buys another item$")
    public void buySecondItem() {
        homepage.clickContinueShopping();
        homepage.addDifferentItemToCart();
        homepage.clickCheckout();
    }

    @Then("^cart page has both items$")
    public void checkCartPage() {
        basketpage.verifyProductCountUpdated();
    }

    @When("^user attempts to buy large quantity of product$")
    public void buyLotOfProduct() {
        homepage.clickProduct();
        productPage.inputLargeQuantity();
    }

    @Then("^out of stock message appears$")
    public void outOfStockMessage() {
        productPage.verifyOutOfStock();
    }

    @And("^add to cart button is disabled$")
    public void cartButtonDisabled() {
        productPage.verifyButtonDisabled();
    }

    @When("^user selects product with different options$")
    public void selectProduct() {
        productPage.navigatetoProductPage();
    }

    @Then("^product available with different options message is displayed$")
    public void differentOptionsMessage() {
        productPage.verifyOtherOptionsAvailable();
    }

    @When("^user reorders item$")
    public void reorderItem() {
        orderspage.clickOrders();
        orderspage.clickReorder();
    }

    @And("^user completes purchase$")
    public void completePurchase() {
        checkoutPage.deliveryAddressSectionDisplayed();
        checkoutPage.clickProceedToNextSection();
        checkoutPage.shippingPageDisplayed();
        checkoutPage.enterShippingComment();
        checkoutPage.clickProceedToNextSection();
        checkoutPage.paymentPageDisplayed();
        checkoutPage.clickPayByBankWire();
        checkoutPage.agreeToTerms();
        checkoutPage.confirmOrder();
    }

    @Then("^purchase is successful$")
    public void purchaseSuccessful() {
        checkoutPage.orderConfirmationDisplayed();
    }

}




