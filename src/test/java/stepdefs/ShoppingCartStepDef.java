package stepdefs;

import Tests.DriverFactory;
import org.openqa.selenium.WebDriver;
import pageObjects.*;

public class ShoppingCartStepDef {

    private static DriverFactory driverFactory;
    public static WebDriver driver = driverFactory.getDriver();
    private HomePage homePage = new HomePage(driver);
    private ShoppingCartPage basketpage = new ShoppingCartPage(driver);
    private SignInPage signInPage = new SignInPage(driver);
    private ProductPage productPage = new ProductPage(driver);
    private CheckoutPage checkoutPage = new CheckoutPage(driver);

}
