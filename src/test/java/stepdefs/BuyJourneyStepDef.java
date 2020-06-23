package stepdefs;

import Tests.DriverFactory;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.*;

//import static Tests.TestSuite.driverfactory;

public class BuyJourneyStepDef {

    private static DriverFactory driverFactory;
    public static WebDriver driver = driverFactory.getDriver();
    private HomePage homepage = new HomePage(driver);
    private ShoppingCartPage basketpage = new ShoppingCartPage(driver);
    private SignInPage signInPage = new SignInPage(driver);
    private ProductPage productPage = new ProductPage(driver);
    private WomenPage womenPage = new WomenPage(driver);
    private OrdersPage orderspage = new OrdersPage(driver);
    private ContactUsPage contactuspage = new ContactUsPage(driver);
    private CheckoutPage checkoutPage = new CheckoutPage(driver);

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

