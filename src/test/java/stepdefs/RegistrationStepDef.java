package stepdefs;



import config.DriverFactory;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import org.openqa.selenium.WebDriver;
import pageObjects.*;

public class RegistrationStepDef {


    private HomePage homepage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private CreateNewAccountPage createNewAccountPage = new CreateNewAccountPage();
    private ProductPage productPage = new ProductPage();

    @Given("^the user is on the \"([^\"]*)\" page$")
    public void theUserIdOnThePage(String page) {
        homepage.clearCookies();
        homepage.goTo();
        switch (page) {
            case "sign in":
                homepage.navigateToSignInPage();
                break;
            case "home":
                homepage.maximiseBrowserWindow();
                break;
            case "product":
                homepage.maximiseBrowserWindow();
                productPage.navigatetoProductPage();
                break;
            case "dresses":
                homepage.clickDresses();
                break;
            case "summer dresses":
                homepage.clickSummerDresses();
                break;
            case "account":
                homepage.navigateToSignInPage();
                signInPage.login();
                break;
            default:
                throw new IllegalArgumentException("Unrecognised page provided");
        }

    }

    @When("^the user completes the registration form with \"([^\"]*)\"$")
    public void registrationFormWithRegisteredEmailAddress(String combo) {
        switch (combo) {
            case "a registered email address":
                signInPage.clickCreateAnAccount();
                createNewAccountPage.enterPersonalDetails();
                createNewAccountPage.clickSave();
                break;
            case "an unregistered email address":
                signInPage.clickCreateAnAccount();
                createNewAccountPage.enterPersonalDetails();
                break;
            case "an unregistered email address and a name with numeric values":
                signInPage.clickCreateAnAccount();
                double num1 = Math.random();
                createNewAccountPage.enterPersonalDetailsEmail(String.format(num1 + "@" + "test.com"));
                createNewAccountPage.enterPersonalDetailsPassword();
                createNewAccountPage.enterPersonalDetailsNumbersFirstName("12345");
                createNewAccountPage.enterPersonalDetailsNumberLastName("Nock");
                createNewAccountPage.clickSave();
                break;
            case "an unregistered email address and a password with numeric values":
                signInPage.clickCreateAnAccount();
                createNewAccountPage.enterPersonalDetailsPDFirstNameAndLastName();
                double num2 = Math.random();
                createNewAccountPage.enterPersonalDetailsEmail(String.format(num2 + "@test.com"));
                createNewAccountPage.enterPersonalDetailsNumericPassword("123465");
                createNewAccountPage.clickSave();
                break;
            case "a registered email address and an invalid birthdate":
                signInPage.clickCreateAnAccount();
                createNewAccountPage.enterPersonalDetailsPDFirstNameAndLastName();
                createNewAccountPage.enterPersonalDetailsEmail("thegreatness@test.com");
                createNewAccountPage.enterPersonalDetailsPassword();
                createNewAccountPage.enterInvalidBirthdate("13/1970/12");
                createNewAccountPage.clickSave();
                break;
            default:
                throw new IllegalArgumentException("Unrecognised registration details");
        }
    }

    @Then("^the user is registered and the account page is displayed$")
    public void userRegisteredAndAccountDisplayed() {
        createNewAccountPage.clickSave();
    }


}















