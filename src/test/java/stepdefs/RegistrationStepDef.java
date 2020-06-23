package stepdefs;


import config.DriverFactory;


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
        homepage.goTo();
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
    }

    @When("^the user completes the registration form with an \"registered\" email address$")
    public void registrationFormWithRegisteredEmailAddress() {
        createNewAccountPage.enterPersonalDetails();
        createNewAccountPage.clickSave();
    }

    @Then("^the already registered alert is displayed$")
    public void registeredAlertDisplayed() {
        signInPage.alreadyRegisteredAlertPresent();
    }
//Test 2 = Register New User
    @Given("^the user is on the \"([^\"]*)\" page$")
    public void theUserIsOnThePage(String page) {
        homepage.goTo();
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
    }
    @When("^the user completes the registration form with an \"unregistered\" email address%")
    public void completesRegistrationWithUnregisteredAddress (){
        createNewAccountPage.enterPersonalDetails();
}
@Then("^the user is registered$")
    public void userRegisteredandAccountDisplayed (){
    createNewAccountPage.clickSave();
    //@And("^the account page is displayed$")
}
//Test 3 = Register using name with numeric value
    @Given("^the user is on the \"([^\"]*)\" page$")
    public void theUserIsOnThisPage(String page) {
        homepage.goTo();
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
    }
        @When("^the user completes the registration form with an \"unregistered\" email address And enters a name with numeric values$")
        public void entersNameWithNumericValues(String page ) {
            createNewAccountPage.enterPersonalDetailsNumbersFirstName("12345");
            createNewAccountPage.enterPersonalDetailsNumberLastName("Nock");
            double num1 = Math.random();
            createNewAccountPage.enterPersonalDetailsEmail(String.format(num1 + "@"  + "test.com"));
            createNewAccountPage.enterPersonalDetailsPassword();
            createNewAccountPage.clickSave();
        }
        @Then("^the invalid \"name\" alert is displayed$")
    public void invalidNameAlertDisplayed(){
        createNewAccountPage.assertNumericErrorDisplay();
    }

    //Test 4 = Register using numeric password
    @Given("^the user is on the \"([^\"]*)\" page$")
        public void userIsOnThisPage(String page){
        homepage.goTo();
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
    }
    @When("^the user completes the registration form with an \"unregistered\" email address  And enters numeric values into the Password field$")
        public void enterNumericPassword (){
        createNewAccountPage.enterPersonalDetailsPDFirstNameAndLastName();
        double num1 = Math.random();
        createNewAccountPage.enterPersonalDetailsEmail(String.format(num1 + "@test.com"));
        createNewAccountPage.enterPersonalDetailsNumericPassword("123465");
        createNewAccountPage.clickSave();
    }

    @Then("^invalid \"password\" alert is displayed$")
        public void invalidPasswordDisplayed(){
        createNewAccountPage.assertLogin();
    }

    //Test 5 = Register with invalid Birthdate
    @Given("^the user is on the \"([^\"]*)\" page$")
        public void userIsOnThePage(String page){
        homepage.goTo();
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
    }
    @When("^the user completes the registration form with an \"registered\" email address  And enters an invalid birthdate$")
public void entersInvalidBirthDate(){
        createNewAccountPage.enterPersonalDetailsPDFirstNameAndLastName();
        createNewAccountPage.enterPersonalDetailsEmail("thegreatness@test.com");
        createNewAccountPage.enterPersonalDetailsPassword();
        createNewAccountPage.enterInvalidBirthdate("13/1970/12");
        createNewAccountPage.clickSave();
    }
    @Then("^the invalid \"birthdate\" alert is displayed$")
    public void invalidBirthDateDisplayed(){
        createNewAccountPage.assertNumericErrorDisplay();
    }
}











