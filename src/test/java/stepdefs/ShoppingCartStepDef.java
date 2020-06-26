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

    @Given("the user is on the homepage")
    public void userOnHomePage(){
        homePage.clearCookies();
        homePage.goTo();
    }

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

    @And("the user increases the quantity of the item")
    public void itemQuantityIncreased(){
        basketpage.increaseQuantity();
    }

    @Then("the quantity is increased")
    public void quantityIsIncreased(){
        basketpage.verifyQuantityUpdated();
        basketpage.verifyProductCountUpdated();
    }

    @And("clicks on proceed to checkout")
    public void proceedToCheckout(){
        basketpage.clickProceedToCheckout();
    }

    @Then("sign in page is displayed")
    public void signInPageDisplayed(){
        basketpage.isPersonalInformationPageDisplayed();
    }

    @Given("the user logs in")
    public void  userLogsIn(){
        homePage.navigateToSignInPage();
        signInPage.login();
        homePage.goTo();
    }


     @And("fills out shipping page details")
     public void fillsOutShipPage(){
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

     @Then("the order confirmation page is displayed")
     public void orderConfirmed(){
         checkoutPage.orderConfirmationDisplayed();
     }

     @And("adds a new address")
     public void addNewAddress(){
         basketpage.clickAddNewAddress();
         basketpage.fillOutNewAddress("321A","TESTER","12345");
     }

     @Then("the new address will be added")
     public void newAddressIsAdded(){
         basketpage.clickEditAddressButton();
         basketpage.newAddressCreated();
     }

    @And("selects a different address for shipping")
    public void selectDifferentShippingAddress(){
        basketpage.clickShippingAddressIsDifferent();
        basketpage.selectSecondAddress();
        basketpage.clickContinueButton();
    }

    @Then("the shipping address has changed")
    public void shippingAddressHasChanged(){
        basketpage.verifyAddressWasSelected();
    }

    @And("adds a message to their order")
    public void userAddsMessage(){
        basketpage.clickContinueButton();
        basketpage.addDeliveryMessage("Hello, this is a test.");
    }

    @Then("a message is added to the order")
    public void messageIsAdded(){
        basketpage.verifyMessageWasCreated();
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
