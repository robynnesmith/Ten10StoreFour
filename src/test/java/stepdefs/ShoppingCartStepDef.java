package stepdefs;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.*;

import static Tests.TestSuite.driverFactory;

public class ShoppingCartStepDef {
    private static DriverFactory driverFactory;
    public static WebDriver driver = driverFactory.getDriver();
    private HomePage homePage = new HomePage(driver);
    private ShoppingCartPage basketpage = new ShoppingCartPage(driver);
    private SignInPage signInPage = new SignInPage(driver);
    private ProductPage productPage = new ProductPage(driver);
    private CheckoutPage checkoutPage = new CheckoutPage(driver);


    @Given("^the user has an item in their basket$")
    public void itemInCart(){
        homePage.itemAddedToCart();
    }

    @When("^the user navigates to basket$")
    public void navToBasket(){
        basketpage.navigateToBasket();
    }

    @And("the user deletes an item from their basket")
    public void userDeletesItem(){
        basketpage.deleteItemFromBasket();
    }

    @Then("the item is deleted from the basket")
    public void itemDeleted(){
        basketpage.checkItemRemovedFromBasket();
    }
}
