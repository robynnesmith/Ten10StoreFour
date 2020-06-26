package stepdefs;



import config.DriverFactory;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.*;


public class SignInStepDef {

    private HomePage homepage = new HomePage();
    private SignInPage signInPage = new SignInPage();
    private CreateNewAccountPage createNewAccountPage = new CreateNewAccountPage();
    private ProductPage productPage = new ProductPage();
    private WomenPage womenPage = new WomenPage();
    private ContactUsPage contactuspage = new ContactUsPage();
    private PersonalDetails pd = new PersonalDetails("Robin", "Hood", "test@sherwood.com", "ghsjdc@test.com", "LadyM", "Sherwood Forest", "Nottingham", "Minnesota", "12345", "6320864892", "Forest");

    @When("^the user signs in with \"([^\"]*)\" email")
    public void userSignsIn(String register){
        switch(register) {
            case "registered":
                signInPage.enterSignInEmailAddress(pd.getEmail());
                signInPage.enterPassword();
                signInPage.clickLogIn();
                break;
            case "unregistered":
                signInPage.invalidLogin();
                break;
            case "BuyJourney":
                signInPage.loginBuyJourneyTest();
                break;
            default:
                throw new IllegalArgumentException("Unrecognised state of email");
        }
    }

    @Then("^the user is signed \"([^\"]*)\"$")
    public void userIsSignedIn(String status){
        switch(status) {
            case "in":
                signInPage.successfulSignIn();
                break;
            case "out":
                signInPage.userSignedOut();
                break;
            default:
                throw new IllegalArgumentException("Unrecognised sign in status");
        }
    }

    @Then("^\"([^\"]*)\" is displayed$")
    public void isDisplayed(String object){
        switch(object) {
            case "error message":
                signInPage.unregisteredUserAlert();
                break;
            case "confirmation message":
                signInPage.confirmationMessage();
                break;
            case "updated account alert":
                signInPage.assertSubscribeSuccess();
                break;
            case "invalid password alert":
                signInPage.alreadyRegisteredAlertPresent();
                break;
            case "new address":
                signInPage.verifyAddressSave();
                break;
            case "updated order alert":
                break;
            case "unregistered email alert":
                signInPage.verifyAlertSuccess();
                break;
            case "already registered alert":
                signInPage.alreadyRegisteredAlertPresent();
                break;
            case "invalid name alert":
                createNewAccountPage.assertNumericErrorDisplay();
                break;
            case "invalid numeric password alert":
                createNewAccountPage.assertLogin();
                break;
            case "invalid birthdate alert":
                createNewAccountPage.assertNumericErrorDisplay();
                break;
            case "product page":
                productPage.productPageDisplayed();
                break;
            case "correct product":
                womenPage.verifyCorrectProductDisplayed();
                break;
            case "all products":
                womenPage.verifyAllProducts();
                break;
            case "success message":
                homepage.verifySubscribe();
                break;
            case "contact confirmation message":
                contactuspage.verifyMessageSent();
                break;
            case "product available with different options message":
                productPage.verifyOtherOptionsAvailable();
                break;
            case "out of stock message":
                productPage.verifyOutOfStock();
                break;
            default:
                throw new IllegalArgumentException("Unrecognised object");
        }
    }

    @When("^the user clicks forgotten password$")
    public void userClicksForgottenPassword(){
        signInPage.forgottenPassword();
        signInPage.enterForgottenPasswordEmailAddress(pd.getEmail());
        signInPage.clickRetrievePassword();
    }

    @When("^the user signs out$")
    public void userSignsOut(){
        signInPage.login();
        signInPage.clickSignOut();
    }

    @When("^the user changes account settings to opt in to offers and newsletter$")
    public void changesAccountSettingsAndOptsIn(){
        double num1 = Math.random();
        signInPage.pressIdentityButton();
        signInPage.enterPassword();
        signInPage.enterEmailSubscribe(String.format(num1 + "@"  + "test.com"));
        signInPage.pressSubscribe();
    }

    @When("^the user inputs valid email$")
    public void InputsEmail(){
        homepage.navigateToSignInPage();
        signInPage.enterSignInEmailAddress("test@sherwood.com");
    }

    @And("^enters invalid password$")
    public void entersInvalidPassword(){
        double num1 = Math.random();
        signInPage.enterInvalidPassword(String.format(num1 + "password"));
        signInPage.clickLogIn();
    }

    @And("^on the address section$")
    public void onAddressSection(){
        signInPage.pressAddressesButton();
    }

    @When("^the user adds a new address$")
    public void userAddsNewAddress(){
        signInPage.createNewAddress();
        signInPage.enterAliasName();
        double num1 = Math.random();
        signInPage.enterCompanyName(String.format(num1 + "Ten10"));
        signInPage.detailsForNewAddress();
        signInPage.pressSave();
    }

    @When("^the user navigates to a pre-existing order and adds a message$")
    public void userNavigatesToOrderAndAddsMessage(){
        signInPage.orderHistoryButton();
        signInPage.pressDetailsReorder();
        signInPage.pressContinueButton();
        signInPage.deliveryMessage("Please leave in shed");
    }

    @When("^the user inputs and unregistered email in the forgotten password input$")
    public void userInputsForgottenPassword(){
        signInPage.forgottenPassword();
        signInPage.enterSignInEmailAddress("hello@test.com");
        signInPage.clickRetrievePassword();
    }

}

