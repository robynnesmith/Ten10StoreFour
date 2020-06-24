package stepdefs;



import config.DriverFactory;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import org.openqa.selenium.WebDriver;
import pageObjects.CreateNewAccountPage;
import pageObjects.HomePage;
import pageObjects.ShoppingCartPage;
import pageObjects.SignInPage;

public class RegistrationStepDef {


    private HomePage homepage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private CreateNewAccountPage createNewAccountPage = new CreateNewAccountPage();


//Test 1 = Register with registered email address

    @Given("^the user is on the \"([^\"]*)\" page$")
    public void theUserIdOnThePage(String page) {
        homepage.clearCookies();
        homepage.goTo();
        switch (page) {
            case "sign in":
                homepage.navigateToSignInPage();
                break;
            default:
                throw new IllegalArgumentException("Unrecognised page provided");
        }

    }

    @When("^the user completes the registration form with an registered email address$")
    public void registrationFormWithRegisteredEmailAddress() {
        signInPage.clickCreateAnAccount();
        createNewAccountPage.enterPersonalDetails();
        createNewAccountPage.clickSave();
    }

    @Then("^the already registered alert is displayed$")
    public void registeredAlertDisplayed() {
        signInPage.alreadyRegisteredAlertPresent();
    }
    //Test 2 = Register New User

    @When("the user completes the registration form with an unregistered email address")
    public void the_user_completes_the_registration_form_with_an_unregistered_email_address() {
        signInPage.clickCreateAnAccount();
        createNewAccountPage.enterPersonalDetails();
    }

    @Then("^the user is registered and the account page is displayed$")
    public void userRegisteredAndAccountDisplayed() {
        createNewAccountPage.clickSave();
    }

    //Test 3 = Register using name with numeric value
    @When("the user completes the form with an unregistered email address")
    public void theUserCompletesTheRegistrationFormWithAnEmailAddress() {
        signInPage.clickCreateAnAccount();
        double num1 = Math.random();
        createNewAccountPage.enterPersonalDetailsEmail(String.format(num1 + "@" + "test.com"));
        createNewAccountPage.enterPersonalDetailsPassword();
    }

    @And("enters a name with numeric values")
    public void entersANameWithNumericValues() {
        createNewAccountPage.enterPersonalDetailsNumbersFirstName("12345");
        createNewAccountPage.enterPersonalDetailsNumberLastName("Nock");
        createNewAccountPage.clickSave();
    }

    @Then("the invalid name alert is displayed")
    public void theInvalidAlertIsDisplayed() {
        createNewAccountPage.assertNumericErrorDisplay();
    }


    //Test 4 = Register using numeric password
    @When("the user completes the registration with an unregistered email address")
    public void theUserCompletesRegistrationFormWithAnEmailAddress() {
        signInPage.clickCreateAnAccount();
        createNewAccountPage.enterPersonalDetailsPDFirstNameAndLastName();
        double num1 = Math.random();
        createNewAccountPage.enterPersonalDetailsEmail(String.format(num1 + "@test.com"));
    }

    @And("enters numeric values into the Password field")
    public void entersNumericValuesIntoThePasswordField() {
        createNewAccountPage.enterPersonalDetailsNumericPassword("123465");
        createNewAccountPage.clickSave();
    }

    @Then("invalid password alert is displayed")
    public void invalidAlertIsDisplayed() {
        signInPage.unregisteredUserAlert();
        //createNewAccountPage.assertLogin();
    }


    //Test 5 = Register with invalid Birthdate
    @When("the user completes with an registered email address")
    public void theUserCompletesWithAnEmailAddress() {
        signInPage.clickCreateAnAccount();
        createNewAccountPage.enterPersonalDetailsPDFirstNameAndLastName();
        createNewAccountPage.enterPersonalDetailsEmail("thegreatness@test.com");
        createNewAccountPage.enterPersonalDetailsPassword();
    }

    @And("enters an invalid birthdate")
    public void entersAnInvalidBirthdate() {
        createNewAccountPage.enterInvalidBirthdate("13/1970/12");
        createNewAccountPage.clickSave();
    }

    @Then("the invalid birthdate alert is displayed")
    public void theInvalidBirthDateAlertIsDisplayed() {
        createNewAccountPage.assertNumericErrorDisplay();
    }

}















