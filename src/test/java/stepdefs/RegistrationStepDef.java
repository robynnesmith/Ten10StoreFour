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

}











