package stepdefs;

import org.openqa.selenium.WebDriver;
import pageObjects.HomePage;
import pageObjects.SignInPage;

import static Tests.TestSuite.driverFactory;

public class SignInStepDef {
    private static DriverFactory driverFactory;
    public static WebDriver driver = driverFactory.getDriver();
    private HomePage homepage = new HomePage(driver);
    private SignInPage signInPage = new SignInPage(driver);
}
