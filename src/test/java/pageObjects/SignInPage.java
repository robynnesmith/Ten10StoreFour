package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertTrue;

/**
 * Created by jack.forman on 23/10/2016.
 */
public class SignInPage extends BasePage {

    public SignInPage(WebDriver driver) {
        super(driver);
    }

    private PersonalDetails pd = getPersonalDetails();
    private WebDriverWait wait = new WebDriverWait(driver, 10);

    private static final By EMAIL_ADDRESS_INPUT_BOX = By.cssSelector("input#email_create");
    private static final By CREATE_NEW_ACCOUNT_BUTTON = By.cssSelector(".no-account>a");
    private static final By ALREADY_REGISTERED_ALERT = By.cssSelector(".alert.alert-danger");
    private static final By EMAIL_INPUT = By.name("email");
    private static final By PASSWORD_INPUT = By.name("password");
    private static final By SIGN_IN_BUTTON = By.cssSelector("#login-form button[type='submit']");
    private static final By SIGN_OUT_BUTTON = By.cssSelector(".logout.hidden-sm-down");
    private static final By UNREGISTERED_USER_ALERT = By.cssSelector(".alert.alert-danger");
    private static final By FORGOTTEN_PASSWORD_LINK = By.cssSelector(".forgot-password");
    private static final By SEND_RESET_LINK_BUTTON = By.cssSelector(".forgotten-password button:first-of-type");
    private static final By NOTIFICATION_MESSAGE = By.cssSelector(".ps-alert-error");
    private static final By EMAIL_INPUT_SUBSCRIBE = By.cssSelector(".input-wrapper > input[name='email']"); ///#footer input[type=text]
    private static final By PRESS_SUBSCRIBE = By.cssSelector("[name='submitNewsletter']");
    private static final By ASSERT_SUBSCRIBE_SUCCESS = By.cssSelector(".alert.alert-success");
    private static final By PRESS_IDENTITY_BUTTON = By.id("identity-link");
    private static final By SAVE_PERSONAL_DETAILS_BUTTON = By.cssSelector(".btn.btn-primary.form-control-submit.float-xs-right");
    private static final By PRESS_HOME = By.linkText("Home");
    private static final By PRESS_ADDRESSES_BUTTON = By.id("addresses-link");
    private static final By CREATE_NEW_ADDRESS = By.cssSelector("[data-link-action='add-address']");
    private static final By ALIAS_INPUT_BOX = By.name("alias");
    private static final By COMPANY_INPUT_BOX = By.name("company");
    private static final By ADDRESS_INPUT = By.name("address1");
    private static final By CITY_INPUT = By.name("city");
    private static final By STATE_DROPDOWN = By.cssSelector("[name='id_state']");
    private static final By STATE_PICK = By.cssSelector("[value='26']");
    private static final By ENTER_POSTCODE = By.cssSelector("[name='postcode']");
    private static final By PRESS_SAVE = By.cssSelector("button.btn.btn-primary.float-xs-right");
    private static final By VERIFY_ADDRESS_SAVE = By.cssSelector(".alert.alert-success");
    private static final By VERIFY_ALERT_SUCCESS = By.cssSelector(".ps-alert-success");
    private static final By SIGN_IN_EMAIL = By.name("email");
    private static final By SIGN_IN_PASSWORD = By.name("password");
    private static final By ORDER_HISTORY_BUTTON = By.id("history-link");
    private static final By PRESS_DETAILS_REORDER = By.cssSelector(".text-sm-center.order-actions");
    private static final By PRESS_CONTINUE_BUTTON = By.name("confirm-addresses");
    private static final By DELIVERY_MESSAGE = By.id("delivery_message");
    private static final By PRESS_CONTINUE_FROM_SHIPPING = By.cssSelector("[name='confirmDeliveryOption']");
    private static final By VERIFY_MESSAGE = By.name("delivery_message");
    private static final By PRESS_EDIT = By.linkText("Edit");

    public void pressEdit (){
        driver.findElement(PRESS_EDIT).click();
    }

    public void continueFromShipping (){
        driver.findElement(PRESS_CONTINUE_FROM_SHIPPING).click();

    }

    public void continueShippingAssert (){
        //driver.findElement(PRESS_CONTINUE_FROM_SHIPPING).click();
        //WebElement verifymessage = driver.findElement(VERIFY_MESSAGE);
       // assertTrue(elementIsVisible(verifymessage));
        Assert.assertEquals("Please leave in shed", driver.findElement(VERIFY_MESSAGE).getText());
    }

    public void deliveryMessage (String message){
findAndType(DELIVERY_MESSAGE, message);

    }

    public void pressContinueButton (){
        driver.findElement(PRESS_CONTINUE_BUTTON).click();
    }

    public void pressDetailsReorder (){
        driver.findElement(PRESS_DETAILS_REORDER).click();
    }

    public void orderHistoryButton (){
        driver.findElement(ORDER_HISTORY_BUTTON).click();
    }

    public void signInPassword (String password){
        findAndType(SIGN_IN_PASSWORD, password);
    }


    public void signInEmail (String email) {
        findAndType(SIGN_IN_EMAIL, email);
    }

    public void verifyAlertSuccess (){
        WebElement successfulalert = driver.findElement(VERIFY_ALERT_SUCCESS);
        assertTrue(elementIsVisible(successfulalert));
    }


    public void verifyAddressSave (){
        WebElement successalert = driver.findElement(VERIFY_ADDRESS_SAVE);
        assertTrue(elementIsVisible(successalert));
    }


    public void pressSave () {
        driver.findElement(PRESS_SAVE).click();
    }


   public void detailsForNewAddress (){
       findAndType(ADDRESS_INPUT, pd.getAddress());
      findAndType( CITY_INPUT, pd.getCity());
      driver.findElement(STATE_DROPDOWN).click();
      driver.findElement(STATE_PICK).click();
      findAndType(ENTER_POSTCODE, pd.getPostcode());

   }

    public void enterCompanyName (String company) {
        findAndType(COMPANY_INPUT_BOX, company);
    }

    public void enterAliasName () {
        findAndType(ALIAS_INPUT_BOX, pd.getAliasName());
    }

    public void createNewAddress (){
        driver.findElement(CREATE_NEW_ADDRESS).click();
    }

    public void pressAddressesButton (){
        driver.findElement(PRESS_ADDRESSES_BUTTON).click();
    }

public void pressHome(){
    driver.findElement(PRESS_HOME).click();
}


public void savePersonalDetailsButton () {
    driver.findElement(SAVE_PERSONAL_DETAILS_BUTTON).click();
}

    public void enterEmailSubscribe (String emailaddress){
        findAndType(EMAIL_INPUT_SUBSCRIBE, emailaddress);
    }



   public void pressIdentityButton () {
       driver.findElement(PRESS_IDENTITY_BUTTON).click();
   }





    public void assertSubscribeSuccess (){
       // waitUntilInvisible(ASSERT_SUBSCRIBE_SUCCESS);
        WebElement alertBox = driver.findElement(ASSERT_SUBSCRIBE_SUCCESS);
        assertTrue(elementIsVisible(alertBox));
    }


    public void pressSubscribe (){
        driver.findElement(PRESS_SUBSCRIBE).click();
    }

    public void enterCreateNewAccountEmailAddress(String emailAddress) {
        findAndType(EMAIL_ADDRESS_INPUT_BOX, emailAddress);
    }

    public void clickCreateAnAccount() {
        waitAndClick(CREATE_NEW_ACCOUNT_BUTTON);
    }

    public void alreadyRegisteredAlertPresent() {
        WebElement alertBox = driver.findElement(ALREADY_REGISTERED_ALERT);
        assertTrue(elementIsVisible(alertBox));
    }

    public void enterInvalidPassword (String password){
    findAndType(PASSWORD_INPUT,password);
    }

    public void enterPassword() {
        findAndType(PASSWORD_INPUT, pd.getPassword());
    }

    public void successfulSignIn() {
        waitUntilVisible(SIGN_OUT_BUTTON);
        assertTrue(elementIsVisible(driver.findElement(SIGN_OUT_BUTTON)));
    }

    public void enterSignInEmailAddress(String emailAddress) {
        findAndType(EMAIL_INPUT, emailAddress);
    }



    public void clickLogIn() {
        waitAndClick(SIGN_IN_BUTTON);
    }

    public void unregisteredUserAlert() {
        WebElement alertBox = driver.findElement(UNREGISTERED_USER_ALERT);
        assertTrue(elementIsVisible(alertBox));
    }

    public void forgottenPassword() {
        waitAndClick(FORGOTTEN_PASSWORD_LINK);
    }

    public void enterForgottenPasswordEmailAddress(String email) {
        findAndType(EMAIL_INPUT, email);
    }

    public void clickRetrievePassword() {
        waitAndClick(SEND_RESET_LINK_BUTTON);
    }

    public void confirmationMessage() {
        WebElement alertBox = driver.findElement(NOTIFICATION_MESSAGE);
        assertTrue(elementIsVisible(alertBox));
    }

    public void clickSignOut() {
        waitAndClick(SIGN_OUT_BUTTON);
    }

    public void userSignedOut() {
        waitUntilInvisible(SIGN_OUT_BUTTON);
        driver.navigate().refresh();
        WebElement signInButton = driver.findElement(SIGN_IN_BUTTON);
        assertTrue(elementIsVisible(signInButton));
    }

    public void login() {
        enterSignInEmailAddress(pd.getEmail());
        enterPassword();
        clickLogIn();
        successfulSignIn();
    }

    public void invalidLogin() {
        enterSignInEmailAddress(pd.getInvalidEmail());
        enterPassword();
        clickLogIn();
        unregisteredUserAlert();
    }

    public void forgottenPasswordCheck() {
        forgottenPassword();
        enterForgottenPasswordEmailAddress(pd.getEmail());
        clickRetrievePassword();
        confirmationMessage();
    }
}
