package stepdefs;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.*;



public class ShoppingCartStepDef {
    private HomePage homePage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private ProductPage productPage = new ProductPage();
    private CheckoutPage checkoutPage = new CheckoutPage();

    @Given("^the user has an item in their basket$")
    public void itemInCart(){
        homePage.itemAddedToCart();
    }

    @When("^the user navigates to basket$")
    public void navToBasket(){
        basketpage.navigateToBasket();
    }

    @And("^the user \"([^\"]*)\" an item in the basket$")
    public void userDeletesItem(String action) {
        switch (action) {
            case "deletes":
                basketpage.deleteItemFromBasket();
                break;
            case "increases the quantity of":
                basketpage.increaseQuantity();
                break;
            default:
                throw new IllegalArgumentException("Unrecognised action provided");
        }
    }

    @Then("the item is deleted from the basket")
    public void itemDeleted(){
        basketpage.checkItemRemovedFromBasket();
    }

    @Then("the quantity is increased")
    public void quantityIsIncreased(){
        basketpage.verifyQuantityUpdated();
        basketpage.verifyProductCountUpdated();
    }

    @Given("the user logs in")
    public void  userLogsIn(){
        homePage.navigateToSignInPage();
        signInPage.login();
        homePage.goTo();
    }

    @And("selects a different address for shipping")
    public void selectDifferentShippingAddress(){
        basketpage.clickShippingAddressIsDifferent();
        basketpage.selectSecondAddress();
        basketpage.clickContinueButton();
    }

    @And("user logs out and logs back in")
    public void logOutLogIn(){
        basketpage.logOut();
    }

    @Then("basket is empty")
    public void basketIsEmpty(){
        basketpage.verifyCartIsEmpty();
    }

    @When("the user adds a different product to basket")
    public void userAddsADifferentProduct(){
        homePage.goTo();
        homePage.addPrintedDressToCart();
    }

    @Then("the price and counter are displayed correctly")
    public void pricesAndCounterCorrect(){
        basketpage.verifyPricesAreCorrect();
    }

}
