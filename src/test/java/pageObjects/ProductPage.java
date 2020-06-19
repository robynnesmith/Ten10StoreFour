package pageObjects;

import org.apache.http.impl.conn.DefaultRoutePlanner;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.openqa.selenium.support.ui.ExpectedConditions.elementToBeClickable;

public class ProductPage extends BasePage {

    public ProductPage (WebDriver driver) {
        super(driver);
    }

    private static final By ADD_TO_CART_BUTTON = By.cssSelector(".btn.btn-primary.add-to-cart");
    private static final By BLOUSE_IMAGE = By.cssSelector("img[alt = 'Blouse'");
    private static final By QUANTITY_UP_BUTTON = By.cssSelector(".material-icons.touchspin-up");
    private static final By SIZE_DROPDWON = By.cssSelector("#group_1");
    private static final By WHITE_COLOUR_OPTION = By.cssSelector("input[value = '8']");
    private static final By QUANTITY_INPUT_BOX = By.cssSelector("#quantity_wanted");
    private static final By STOCK_TEXT = By.cssSelector("#product-availability");
    private static final By ADD_TO_CART_BUTTON_ON_PRODUCT_PAGE = By.cssSelector("#add-to-cart-or-refresh > div.product-add-to-cart > div > div.add > button");
    private static final By POP_UP = By.cssSelector("#blockcart-modal");

    public void productPageDisplayed() {
        WebElement productPage = driver.findElement(ADD_TO_CART_BUTTON);
        Assert.assertTrue(elementIsVisible(productPage));
    }

    public void navigatetoProductPage() {
        waitAndClick(BLOUSE_IMAGE);
    }

    public void selectQuantity() {
        waitAndClick(QUANTITY_UP_BUTTON);
    }

    public void selectSize() {
        Select size = new Select(driver.findElement(SIZE_DROPDWON));
        size.selectByVisibleText("M");
    }

    public void selectColour() {
        new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class).until((WebDriver d) -> {
            d.findElement(WHITE_COLOUR_OPTION).click();
            return true;
        });
//        WebElement chooseColour = driver.findElement(WHITE_COLOUR_OPTION);
//        chooseColour.click();
    }

    public void inputLargeQuantity(){
        driver.findElement(QUANTITY_INPUT_BOX).sendKeys(Keys.BACK_SPACE);
        findAndType(QUANTITY_INPUT_BOX, "500");
        waitAndClick(QUANTITY_INPUT_BOX);
    }

    public void verifyOutOfStock() {
        wait.until(elementToBeClickable(STOCK_TEXT));
        WebElement text = driver.findElement(STOCK_TEXT);
        Assert.assertEquals("\uE14B There are not enough products in stock", text.getText());
    }

    public void verifyButtonDisabled() {
        waitAndClick(ADD_TO_CART_BUTTON_ON_PRODUCT_PAGE);
        WebElement popUp = driver.findElement(POP_UP);
        Assert.assertFalse(elementIsVisible(popUp));
    }

    public void verifyOtherOptionsAvailable() {
        wait.until(elementToBeClickable(STOCK_TEXT));
        WebElement text = driver.findElement(STOCK_TEXT);
        Assert.assertEquals("\uE14B Product available with different options", text.getText());
    }


}
