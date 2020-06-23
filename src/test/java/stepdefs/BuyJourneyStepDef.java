package stepdefs;


import config.DriverFactory;
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

    @Given ("^user is on the \"([^\"]*)\" page$")
    public void homepageSetUp(String page) {
        driver.manage().deleteAllCookies();
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

    @Then ("^verify product has been added to cart$")
    public void verifyItemInCart() {
        homepage.addedToCart();
    }

    @When("^the user specifies exact purchase$")
    public void selectItem() {
        productPage.selectQuantity();
        productPage.selectSize();
        productPage.selectColour();
    }

    @And ("^clicks add to cart$")
    public void addToCart() {
        basketpage.addToCart();
    }


}




