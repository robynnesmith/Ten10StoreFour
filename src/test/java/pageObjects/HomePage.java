package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by jack.forman on 22/10/2016.
 */
public class HomePage extends BasePage {

    public HomePage(WebDriver driver) {
        super(driver);
    }

    private static String URL = "http://3.11.70.191/index.php";
    private Actions actions = new Actions(driver);
    private PersonalDetails pd = getPersonalDetails();

    private static final By SIGN_IN_BUTTON = By.cssSelector("#_desktop_user_info a");
    private static final By BLOUSE_IMAGE = By.cssSelector("img[alt = 'Blouse'");
    private static final By QUICK_VIEW_LINK = By.cssSelector(".quick-view");
    private static final By SECOND_PRODUCT_IMAGE = By.cssSelector("div.products > article:nth-child(3) img");
    private static final By SECOND_PRODUCT_QUICKVIEW = By.cssSelector("div.products > article:nth-child(3) .quick-view");
    private static final By ADD_TO_CART_BUTTON = By.cssSelector(".btn.btn-primary.add-to-cart");
    private static final By MODAL_WINDOW = By.cssSelector("#myModalLabel");
    private static final By WOMEN_LINK = By.cssSelector("#category-3 > a");
    private static final By DRESSES_LINK = By.cssSelector("#category-8 > a");
    private static final By WHITE_COLOUR = By.cssSelector("#group_3 > li:nth-child(1)");
    private static final By QUANTITY_UP_BUTTON = By.cssSelector("button.btn.btn-touchspin.js-touchspin.bootstrap-touchspin-up");
    private static final By BLOUSE_QUICKVIEW = By.cssSelector("article:nth-child(2) div.highlighted-informations.hidden-sm-down > a");
    private static final By SUBSCRIBE_INPUT_BOX = By.cssSelector("#footer input[type=text]");
    private static final By SUBSCRIPTON_MESSAGE = By.cssSelector("#footer div:nth-child(2) > p.alert.alert-success");
    private static final By SUBSCRIBE_BUTTON = By.cssSelector("input.btn.btn-primary.float-xs-right.hidden-xs-down");
    private static final By CONTACT_US_LINK = By.cssSelector("#contact-link > a");
    private static final By SUMMER_DRESSES_LINK = By.cssSelector("#category-11 > a");
    private static final By SEARCH_BAR = By.cssSelector("#search_widget > form > input.ui-autocomplete-input");
    private static final By SEARCH_BUTTON = By.cssSelector("#search_widget > form > button");

    public void goTo() {
        driver.get(URL);
    }

    public void navigateToSignInPage() {
        waitAndClick(SIGN_IN_BUTTON);
    }

    public void hoverOverItem() {

        actions.moveToElement(driver.findElement(BLOUSE_IMAGE)).build().perform();

        WebElement hoverView = driver.findElement(QUICK_VIEW_LINK);
        Assert.assertTrue(elementIsVisible(hoverView));
    }

    public void clickMoreButton() {
        waitAndClick(BLOUSE_IMAGE);
    }


    public void maximiseBrowserWindow() {
        driver.manage().window().maximize();
    }

    public void addItemToCart() {
        WebElement firstProductImage = driver.findElement(SECOND_PRODUCT_IMAGE);
        WebElement firstProductQuickView = driver.findElement(SECOND_PRODUCT_QUICKVIEW);
        actions
                .moveToElement(firstProductImage)
                .click(firstProductQuickView)
                .perform();
        waitAndClick(ADD_TO_CART_BUTTON);
    }

    public void addedToCart() {
        waitUntilVisible(MODAL_WINDOW);
        WebElement addedToCart = driver.findElement(MODAL_WINDOW);
        Assert.assertTrue(elementIsVisible(addedToCart));
    }


    public void itemAddedToCart() {
        maximiseBrowserWindow();
        addItemToCart();
        addedToCart();
    }

    public void clickDresses() {
        actions.moveToElement(driver.findElement(WOMEN_LINK)).build().perform();
        waitAndClick(DRESSES_LINK);
    }

    public void clickOnBlouse() {
        actions.moveToElement(driver.findElement(BLOUSE_IMAGE)).build().perform();
        waitAndClick(BLOUSE_QUICKVIEW);
    }

    public void selectQuantity() {
        waitAndClick(QUANTITY_UP_BUTTON);
        waitAndClick(QUANTITY_UP_BUTTON);
    }

    public void clickWhite() {
        new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class).until((WebDriver d) -> {
            d.findElement(WHITE_COLOUR).click();
            return true;
        });
    }

    public void subscribe() {
        double number = Math.random();
        findAndType(SUBSCRIBE_INPUT_BOX, String.format(number + "@test.com"));
        waitAndClick(SUBSCRIBE_BUTTON);
    }

    public void verifySubscribe() {
        WebElement message = driver.findElement(SUBSCRIPTON_MESSAGE);
        Assert.assertEquals("You have successfully subscribed to this newsletter.", message.getText());
    }

    public void clickContactUs() { waitAndClick(CONTACT_US_LINK); }

    public void clickSummerDresses() {
        actions.moveToElement(driver.findElement(WOMEN_LINK)).build().perform();
        waitAndClick(SUMMER_DRESSES_LINK);
    }

    public void searchForDress() {
        findAndType(SEARCH_BAR, "dress");
        waitAndClick(SEARCH_BUTTON);
    }
}
