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

    @When ("^the user goes to a product$")
    public void selectItemFromHomepage() {
        homepage.hoverOverItem();
    }

    @And ("^user clicks \"([^\"]*)\"$")
    public void click(String item) {
        switch (item) {
            case "more":
                homepage.clickMoreButton();
                break;
            case "add to cart":
                homepage.hoverOverItem();
                homepage.addItemToCart();
                break;
            case "add to cart on product page":
                basketpage.addToCart();
                break;
            case "filters":
                womenPage.clickSize();
                womenPage.clickColour();
                womenPage.clickPrice();
                break;
            case "clear filters":
                womenPage.clearAll();
                womenPage.refreshPage();
                break;
            case "proceed to checkout":
                basketpage.clickProceedToCheckout();
                break;
            default:
                throw new IllegalArgumentException("Unrecognised item provided");
        }
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

    @When("^user fills out \"([^\"]*)\"$")
    public void fillOutMessage(String form) {
        switch (form) {
            case "message form on details page":
                orderspage.clickOrders();
                orderspage.clickDetails();
                orderspage.selectProductOnOrdersPage();
                orderspage.writeMessage();
                break;
            case "newsletter form":
                homepage.subscribe();
                break;
            case "contact us form":
                homepage.clickContactUs();
                contactuspage.enterMessage();
                contactuspage.clickSend();
                break;
            case "shipping page details":
                checkoutPage.deliveryAddressSectionDisplayed();
                checkoutPage.clickProceedToNextSection();
                checkoutPage.shippingPageDisplayed();
                checkoutPage.enterShippingComment();
                checkoutPage.clickProceedToNextSection();
                checkoutPage.paymentPageDisplayed();
                checkoutPage.clickPayByBankWire();
                checkoutPage.agreeToTerms();
                checkoutPage.confirmOrder();
                break;
            case "new address form":
                basketpage.clickAddNewAddress();
                basketpage.fillOutNewAddress("321A","TESTER","12345");
                break;
            case "message for order":
                basketpage.clickContinueButton();
                basketpage.addDeliveryMessage("Hello, this is a test.");
                break;
            default:
                throw new IllegalArgumentException("Unrecognised item provided");
        }
    }

    @Then("^message is sent off$")
    public void verifyMessageSent() {
        orderspage.verifyMessageSent();
    }

    @And("^the user adds product to cart$")
    public void addProductToCart(){
        homepage.addItemToCart();
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

    @And("^add to cart button is disabled$")
    public void cartButtonDisabled() {
        productPage.verifyButtonDisabled();
    }

    @When("^user selects product with different options$")
    public void selectProduct() {
        productPage.navigatetoProductPage();
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




