package Tests;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import pageObjects.*;

import static Tests.TestSuite.driverFactory;

/**
 * Created by jack.forman on 23/10/2016.
 */
public class BuyJourney {

    public static WebDriver driver = driverFactory.getDriver();
    private HomePage homepage = new HomePage(driver);
    private ShoppingCartPage basketpage = new ShoppingCartPage(driver);
    private SignInPage signInPage = new SignInPage(driver);
    private ProductPage productPage = new ProductPage(driver);
    private WomenPage womenPage = new WomenPage(driver);


    @Before
    public void individualSetUp() {
        driver.manage().deleteAllCookies();
        homepage.goTo();
        homepage.maximiseBrowserWindow();
    }

    /**
     * Select Item from homepage, takes to product page
     * On homepage
     * Hover over a product's image
     * Click More Button
     * Verify product page is displayed
     */
    @Test
    public void selectItemFromHomepage() {
        homepage.hoverOverItem();
        homepage.clickMoreButton();
        productPage.productPageDisplayed();
    }


    /**
     * Add product to Cart from homepage
     * Hover over product from homepage
     * Click add to cart
     * Verify added to cart
     */
    @Test
    public void addProductToCartFromHomepage() {
        homepage.hoverOverItem();
        homepage.addItemToCart();
        homepage.addedToCart();

    }

    /**
     * Add product to cart from Product page
     * On product page
     * Select Quantity
     * Select Size
     * Select Colour (if available)
     * Click add to cart
     * Verify Added to Cart
     */
    @Test
    public void addProductToCartFromProductPage() {

        productPage.navigatetoProductPage();
        productPage.selectQuantity();
        productPage.selectSize();
        productPage.selectColour();
        basketpage.addToCart();
        homepage.addedToCart();

    }

    @Test
    public void useFiltersToFindDress() {
        homepage.clickDresses();
        womenPage.clickSize();
        womenPage.clickColour();
        womenPage.clickPrice();
        womenPage.verifyCorrectProductDisplayed();
    }

    @Test
    public void buyThreeOfAnItem() {
        homepage.clickOnBlouse();
        homepage.clickWhite();
        homepage.selectQuantity();
        homepage.addItemToCart();
        homepage.addedToCart();
    }

    @Test
    public void subscribeToNews(){
        homepage.subscribe();
        homepage.verifySubscribe();
    }

    @Test
    public void clearFilters() {
        homepage.clickDresses();
        womenPage.clickSize();
        womenPage.clickColour();
        womenPage.clickPrice();
        womenPage.clearAll();
        womenPage.clearAll();
        womenPage.clearAll();
        driver.navigate().refresh();
        womenPage.verifyAllProducts();
    }

}
