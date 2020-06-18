package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

/**
 * Created by jack.forman on 23/10/2016.
 */
public class CreateNewAccountPage extends BasePage {

    public CreateNewAccountPage(WebDriver driver) {
        super(driver);
    }

    private static final By FIRST_NAME_INPUT = By.name("firstname");
    private static final By LAST_NAME_INPUT= By.name("lastname");
    private static final By EMAIL_INPUT = By.name("email");
    private static final By PASSWORD_INPUT = By.name("password");
    private static final By SAVE_BUTTON = By.cssSelector(".form-control-submit");
    private static final By ASSERT_NUMERIC_NAME_ERROR = By.cssSelector(".help-block");
//By.linkText("Invalid name");
//By.cssSelector(".alert alert-danger");
    public void enterPersonalDetails() {
        PersonalDetails pd = getPersonalDetails();
        findAndType(FIRST_NAME_INPUT, pd.getFirstName());
        findAndType(LAST_NAME_INPUT, pd.getLastName());
        findAndType(EMAIL_INPUT, pd.getEmail());
        findAndType(PASSWORD_INPUT, pd.getPassword());
    }
public void enterPersonalDetailsNumbersFirstName (String firstname) {
        findAndType(FIRST_NAME_INPUT, firstname);
    }

    public void enterPersonalDetailsNumberLastName (String lastname){
        findAndType(LAST_NAME_INPUT, lastname);
    }

    public void enterPersonalDetailsEmail (String email){
        findAndType(EMAIL_INPUT, email);

    }
    public void enterPersonalDetailsPassword (){
        PersonalDetails pd = getPersonalDetails();
        findAndType(PASSWORD_INPUT, pd.getPassword());
    }
    //public void enterPersonalDetailsEmailAndPassword (){
        //PersonalDetails pd = getPersonalDetails();
       // findAndType(EMAIL_INPUT, pd.getEmail());
        //findAndType(PASSWORD_INPUT, pd.getPassword());
   // }
    public void clickSave() {
        waitAndClick(SAVE_BUTTON);
    }

    public void assertNumericErrorDisplay () {
        //wait.until(ExpectedConditions.elementToBeClickable(ASSERT_NUMERIC_NAME_ERROR));
        WebElement assertnumericnameerror = driver.findElement(ASSERT_NUMERIC_NAME_ERROR);
        Assert.assertTrue(elementIsVisible(assertnumericnameerror));
    }
}
