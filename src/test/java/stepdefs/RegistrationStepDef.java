package stepdefs;

import config.DriverFactory;
import io.cucumber.java.en.Given;
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

    @Given("^the user is on the \"([^\"]*)\" page$")
    public void theUserIdOnThePage(String page) {

    }


}
