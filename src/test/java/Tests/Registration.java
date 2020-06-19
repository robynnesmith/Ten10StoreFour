package Tests;

import org.junit.*;
import org.openqa.selenium.WebDriver;
import pageObjects.CreateNewAccountPage;
import pageObjects.HomePage;
import pageObjects.ShoppingCartPage;
import pageObjects.SignInPage;

import static Tests.TestSuite.driverFactory;


/**
 * Created by jack.forman on 09/10/2016.
 */


public class Registration {

    public static WebDriver driver = driverFactory.getDriver();
    private HomePage homepage = new HomePage(driver);
    private ShoppingCartPage basketpage = new ShoppingCartPage(driver);
    private SignInPage signInPage = new SignInPage(driver);
    private CreateNewAccountPage createNewAccountPage = new CreateNewAccountPage(driver);

    /**
     * This should make sure we are on the correct page, i.e. set up each test case so we can be sure that they run
     */
    @Before
    public void individualSetUp() {
        driver.manage().deleteAllCookies();
        homepage.goTo();
    }


    /**
     * Cannot register if user Already Registered
     * Pre-Conditions - Must have Email address of user already registered
     * Navigate to Sign In Screen
     * Enter E mail Address
     * Click Create Account
     * Verify error message displayed
     */
    @Test
    public void registerAlreadyRegistered() {
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
        createNewAccountPage.enterPersonalDetails();
        createNewAccountPage.clickSave();
        signInPage.alreadyRegisteredAlertPresent();
    }


    /**
     * New user is able to register (New = not registered before)
     * Navigate to signIn Page
     * Enter E-Mail Address
     * Click Create New Account
     * Fill in All Details on registration form
     * Click Register
     * Check My Account Page is Displayed
     */
    @Test
    public void registerAsNewUser() {
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
        createNewAccountPage.enterPersonalDetails();
        createNewAccountPage.clickSave();
    }
    //register using name with numeric values
    //navigate to registration page
    // *enter numeric values into name field
    //*valid details in other fields
    // *verify error message is displayed
    @Test
    public void registerUsingNumericName () {
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
        createNewAccountPage.enterPersonalDetailsNumbersFirstName("12345");
        createNewAccountPage.enterPersonalDetailsNumberLastName("Nock");
        double num1 = Math.random();

        createNewAccountPage.enterPersonalDetailsEmail(String.format(num1 + "@"  + "test.com"));
        //createNewAccountPage.enterPersonalDetailsEmail("1234nock@test.com");
        createNewAccountPage.enterPersonalDetailsPassword();
        //createNewAccountPage.enterPersonalDetailsEmailAndPassword();
        createNewAccountPage.clickSave();
        createNewAccountPage.assertNumericErrorDisplay();
    }

    @Test
    public void registerUsingNumericPassword (){
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
        createNewAccountPage.enterPersonalDetailsPDFirstNameAndLastName();
        double num1 = Math.random();
        createNewAccountPage.enterPersonalDetailsEmail(String.format(num1 + "@test.com"));
        createNewAccountPage.enterPersonalDetailsNumericPassword("123465");
        createNewAccountPage.clickSave();
        createNewAccountPage.assertLogin();
    }

    @Test
    public void registerWithInvalidBirthDate (){
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
        //createNewAccountPage.enterPersonalDetails();
        createNewAccountPage.enterPersonalDetailsPDFirstNameAndLastName();
        createNewAccountPage.enterPersonalDetailsEmail("thegreatness@test.com");
        createNewAccountPage.enterPersonalDetailsPassword();
        createNewAccountPage.enterInvalidBirthdate("13/1970/12");
        createNewAccountPage.clickSave();
        createNewAccountPage.assertNumericErrorDisplay();
    }
    @After
    public void individualTearDown() {

    }

    @AfterClass
    public static void mainTearDown() {
        // Uncomment this when just running individual tests in this file.
        //driver.quit();
    }


}
