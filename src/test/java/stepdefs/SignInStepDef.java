package stepdefs;


import config.DriverFactory;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.HomePage;
import pageObjects.PersonalDetails;
import pageObjects.SignInPage;


public class SignInStepDef {

    private HomePage homepage = new HomePage();
    private SignInPage signInPage = new SignInPage();
    private PersonalDetails pd = new PersonalDetails("Robin", "Hood", "test@sherwood.com", "ghsjdc@test.com", "LadyM", "Sherwood Forest", "Nottingham", "Minnesota", "12345", "6320864892", "Forest");
    //private PersonalDetails pd = getPersonalDetails();

    //private PersonalDetails getPersonalDetails() {
      //  return pd;
    //}



    //Test 1 Sign in as registered user
    @When("^the user signs in with email and password$")
    public void userSignsinWithEmailAndPassword (){
        signInPage.enterSignInEmailAddress(pd.getEmail());
        signInPage.enterPassword();
        signInPage.clickLogIn();
    }

    @Then("^the user is signed in$")
   public void userIsSignedIn(){
        signInPage.successfulSignIn();
}
//Test 2 = Sign in as unregistered user
    @When("^the user fills in sign in details with unregistered email$")
    public void signsInWithUnregisteredEmail(){
        signInPage.invalidLogin();
    }
    @Then("^error message is displayed$")
    public void errorMessageIsDisplayed(){
        signInPage.unregisteredUserAlert();
    }
    //Test 3 = Forgotten Password
    @When("^the user clicks forgotten password$")
    public void userClicksForgottenPassword(){
        signInPage.forgottenPassword();
        signInPage.enterForgottenPasswordEmailAddress(pd.getEmail());
        signInPage.clickRetrievePassword();
    }
    @Then("Confirmation message is displayed")
public void confirmation_message_is_displayed() {
    signInPage.confirmationMessage();
    }

    //Test 4 = Sign out
    @When("^the user signs out$")
    public void userSignsOut(){
        signInPage.login();
        signInPage.clickSignOut();
    }
    @Then("^verify user signed out$")
    public void verify_user_signed_out() {
        signInPage.userSignedOut();
    }

    //Test 5 = Change account preferences
    @Given("^the user is signed into their account$")
    public void signedIntoAccount(){
        homepage.goTo();
        homepage.navigateToSignInPage();
        signInPage.login();
    }

@When("^the user changes account settings to opt in to offers and newsletter$")
    public void changesAccountSettingsAndOptsIn(){
    double num1 = Math.random();
    signInPage.pressIdentityButton();
    signInPage.enterPassword();
    signInPage.enterEmailSubscribe(String.format(num1 + "@"  + "test.com"));
    signInPage.pressSubscribe();
}
@Then("^the updated account alert is displayed$")
    public void updatedAccountAlertIsDisplayed(){
    signInPage.assertSubscribeSuccess();
}

//Test 6 = Sign in Using invalid password
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
@Then("^the invalid password alert displayed$")
    public void invalidPasswordAlertDisplayed(){
    signInPage.alreadyRegisteredAlertPresent();
}
//Test 7 = Add new address to account
    @Given("^the user is on the account page$")
    public void onAccountsPage(){
        homepage.navigateToSignInPage();
        signInPage.login();
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
    @Then("^the new address is displayed$")
    public void newAddressDisplayed(){
        signInPage.verifyAddressSave();
    }
    //Test 8 = signed in with existing account details and have an existing order
    @When("^the user navigates to a pre-existing order and adds a message$")
    public void userNavigatesToOrderAndAddsMessage(){
        signInPage.orderHistoryButton();
        signInPage.pressDetailsReorder();
        signInPage.pressContinueButton();
        signInPage.deliveryMessage("Please leave in shed");
    }
    //Test 9 = Use and unregistered email to get forgotten password
    @When("^the user inputs and unregistered email in the forgotten password input$")
    public void userInputsForgottenPassword(){
        signInPage.forgottenPassword();
        signInPage.enterSignInEmailAddress("hello@test.com");
        signInPage.clickRetrievePassword();
    }
    @Then("^the unregistered email alert is displayed$")
    public void unregisteredEmailAlertIsDisplayed(){
        signInPage.verifyAlertSuccess();
    }
}

