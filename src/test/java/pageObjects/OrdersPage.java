package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class OrdersPage extends BasePage {


    public OrdersPage(WebDriver driver) {
        super(driver);
    }

    private static final By ORDERS_LINK = By.cssSelector("#footer_account_list > li:nth-child(3) > a");
    private static final By DETAILS_LINK = By.cssSelector("#content tr:nth-child(1) a:nth-child(1)");
    private static final By PRODUCT_DROPDOWN = By.cssSelector("#content select");
    private static final By TEXT_BOX = By.cssSelector("#content textarea");
    private static final By GREEN_BOX = By.cssSelector("#notifications > div > article > ul > li");
    private static final By SEND_BUTTON = By.cssSelector("#content button");
    private static final By REORDER_LINK = By.cssSelector("#content tr:nth-child(1) a:nth-child(2)");

    public void clickOrders() { waitAndClick(ORDERS_LINK); }

    public void clickDetails() {waitAndClick(DETAILS_LINK); }

    public void selectProductOnOrdersPage() {
        Select product = new Select(driver.findElement(PRODUCT_DROPDOWN));
        product.selectByVisibleText("Printed Summer Dress - Size : S- Color : Yellow");
    }

    public void writeMessage() {
        findAndType(TEXT_BOX, "note");
        waitAndClick(SEND_BUTTON);
    }

    public void verifyMessageSent() {
        WebElement description = driver.findElement(GREEN_BOX);
        Assert.assertEquals("Message successfully sent", description.getText());
    }

    public void clickReorder() { waitAndClick(REORDER_LINK);}

}
