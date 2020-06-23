package stepdefs;


import config.DriverFactory;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.HomePage;
import pageObjects.PersonalDetails;
import pageObjects.SignInPage;


public class SignInStepDef {

    private HomePage homepage = new HomePage();
    private SignInPage signInPage = new SignInPage();
    //private PersonalDetails pd = new PersonalDetails("Robin", "Hood", "test@sherwood.com", "ghsjdc@test.com", "LadyM", "Sherwood Forest", "Nottingham", "Minnesota", "12345", "6320864892", "Forest");
    //private PersonalDetails pd = getPersonalDetails();

    //private PersonalDetails getPersonalDetails() {
      //  return pd;
    //}



    //Test 1 Sign in as registered user
@Then("^the user is signed in$")
public void userIsSignedIn(){
    signInPage.login();
}
}

