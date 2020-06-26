package pageObjects;

import org.jsoup.Connection;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class WomenPage extends BasePage {

    private static final By PRICE_BOX = By.cssSelector("a[href='http://3.11.70.191/index.php?controller=category&id_category=8&q=Size-M/Color-Orange/Price-%24-28-30']");
    private static final By MEDIUM_BOX = By.cssSelector("a[href='http://3.11.70.191/index.php?controller=category&id_category=8&q=Size-M']");
    private static final By ORANGE_BOX = By.cssSelector("a[href='http://3.11.70.191/index.php?controller=category&id_category=8&q=Size-M/Color-Orange']");
    private static final By PRODUCT_NAME = By.cssSelector("#js-product-list > div.products.row > article > div > div.product-description > h1 > a");
    private static final By CLEAR_ALL_BUTTON = By.cssSelector("button[data-search-url='http://3.11.70.191/index.php?controller=category&id_category=8']");
    private static final By TEXT = By.cssSelector("#js-product-list-top > div.col-md-6.hidden-sm-down.total-products > p");

    public void clickPrice() { waitAndClick(PRICE_BOX); }

    public void clickSize() {waitAndClick(MEDIUM_BOX);}

    public void clickColour() {waitAndClick(ORANGE_BOX);}

    public void verifyCorrectProductDisplayed() {
        WebElement description = driver.findElement(PRODUCT_NAME);
        Assert.assertEquals("Printed Dress", description.getText());
    }

    public void clearAll() {
        driver.get("http://3.11.70.191/index.php?controller=category&id_category=8");
//        while (!driver.getCurrentUrl().equals("http://3.11.70.191/index.php?controller=category&id_category=8")) {
//            waitAndClick(CLEAR_ALL_BUTTON);
//        }
    }

    public void verifyAllProducts() {
        WebElement description = driver.findElement(TEXT);
        Assert.assertEquals("There are 5 products.", description.getText());
    }

}
