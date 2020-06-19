package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;

/**
 * Created by jack.forman on 22/10/2016.
 */
public class HomePage extends BasePage {

    public HomePage(WebDriver driver) {
        super(driver);
    }

    private static String URL = "http://3.11.70.191/index.php";
    private Actions actions = new Actions(driver);

    private static final By SIGN_IN_BUTTON = By.cssSelector("#_desktop_user_info a");
    private static final By BLOUSE_IMAGE = By.cssSelector("img[alt = 'Blouse'");
    private static final By QUICK_VIEW_LINK = By.cssSelector(".quick-view");
    private static final By SECOND_PRODUCT_IMAGE = By.cssSelector("div.products > article:nth-child(3) img");
    private static final By SECOND_PRODUCT_QUICKVIEW = By.cssSelector("div.products > article:nth-child(3) .quick-view");
    private static final By ADD_TO_CART_BUTTON = By.cssSelector(".btn.btn-primary.add-to-cart");
    private static final By MODAL_WINDOW = By.cssSelector("#myModalLabel");
    private static final By CLOSE_BUTTON_QUICKVIEW = By.cssSelector("button.close");
    private static final By CLICK_QUICK_VIEW = By.cssSelector("div.products > article:nth-child(4) .quick-view");
    private static final By PRINTED_DRESS_IMG = By.cssSelector("div.products > article:nth-child(3) img");
    private static final By TO_CHECKOUT_BUTTON = By.cssSelector(".cart-content-btn > a");



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

    public void clickCloseItemQuickview(){
        waitAndClick(CLOSE_BUTTON_QUICKVIEW);
    }

    public void addPrintedDressToCart(){
        WebElement printedDressImage = driver.findElement(PRINTED_DRESS_IMG);
        WebElement printedDressQuickView = driver.findElement(CLICK_QUICK_VIEW);
        actions
                .moveToElement(printedDressImage)
                .click(printedDressQuickView)
                .perform();
        waitAndClick(ADD_TO_CART_BUTTON);
        waitAndClick(TO_CHECKOUT_BUTTON);
    }
}
