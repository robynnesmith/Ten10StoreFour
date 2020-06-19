package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ContactUsPage extends BasePage {

    public ContactUsPage(WebDriver driver) {
        super(driver);
    }

    private static final By EMAIL_BOX = By.cssSelector("#content div:nth-child(3) > div > input");
    private static final By MESSAGE_BOX = By.cssSelector("#content div:nth-child(5) > div > textarea");
    private static final By SEND_BUTTON = By.cssSelector("#content > section > form > footer > input");
    private static final By RESPONSE_BOX = By.cssSelector("#content > section > form > div > ul > li");

    public void enterEmail() {findAndType(EMAIL_BOX, "dazza@test.com"); }

    public void enterMessage() {findAndType(MESSAGE_BOX, "message"); }

    public void clickSend() {
//        WebElement button = driver.findElement(SEND_BUTTON);
//        while(elementIsVisible(button)) {
            waitAndClick(SEND_BUTTON);
//        }
    }

    public void verifyMessageSent() {
        WebElement description = driver.findElement(RESPONSE_BOX);
        Assert.assertEquals("Your message has been successfully sent to our team.", description.getText());
    }

}
