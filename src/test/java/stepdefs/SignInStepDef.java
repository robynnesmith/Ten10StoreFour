package stepdefs;

import Tests.DriverFactory;
import org.openqa.selenium.WebDriver;
import pageObjects.HomePage;
import pageObjects.SignInPage;

public class SignInStepDef {

    private static DriverFactory driverFactory;
    public static WebDriver driver = driverFactory.getDriver();
    private HomePage homepage = new HomePage(driver);
    private SignInPage signInPage = new SignInPage(driver);

}
