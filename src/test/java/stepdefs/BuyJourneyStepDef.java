package stepdefs;

import org.openqa.selenium.WebDriver;
import pageObjects.*;

import static Tests.TestSuite.driverFactory;

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

}

