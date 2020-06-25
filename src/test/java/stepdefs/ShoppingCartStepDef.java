package stepdefs;


import config.DriverFactory;

import org.openqa.selenium.WebDriver;
import pageObjects.*;

public class ShoppingCartStepDef {

    private HomePage homePage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private ProductPage productPage = new ProductPage();
    private CheckoutPage checkoutPage = new CheckoutPage();


}
