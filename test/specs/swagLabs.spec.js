import loginPage from "../pageobjects/swagLabs/loginPage.js";
import productsPage from "../pageobjects/swagLabs/productsPage.js";
import cartPage from "../pageobjects/swagLabs/cartPage,.js";
import checkoutPageFirst from "../pageobjects/swagLabs/checkoutPageFirst.js";
import checkoutPageSecond from "../pageobjects/swagLabs/checkoutPageSecond.js";
import checkoutCompletePage from "../pageobjects/swagLabs/checkoutCompletePage.js";
import data from "../testData/timeout.json" assert {"type" : "json"}


let firstName = await checkoutPageFirst.randomFirstName()
let lastName = await checkoutPageSecond.randomLastName()
let postalCode = await checkoutPageFirst.randomPostalCode()

describe("Swag Labs Website  End-To-End Flow ",() => {

    it("Load Url of the  website",async() => {

        await loginPage.loadUrl();
        await loginPage.$swagLabsHeader().waitForDisplayed({timeout : data.timeoutKey.midTimeout, timeoutMsg :"Header is not visible"});
        expect(await loginPage.$swagLabsHeader().isDisplayed())
        .withContext('The Swag Lab Header is not displayed')
        .toBeTrue();   
    
})

it("Login using valid credentials", async () => {
    await loginPage.Login();
    expect (await productsPage.$productHeader().isDisplayed()).withContext("Header is not displayed").toBeTrue();
  });

  it("Sort the products in Descending order and validate that they are sorted.", async () => {
    let beforeSort = await productsPage.sortDescending();
    let sortedProducts = [...beforeSort].sort((a, b) => b.localeCompare(a)); // Use spread to avoid modifying the original array
    expect(beforeSort).toEqual(sortedProducts);
});

it("Sort the products in Ascending order and validate that they are sorted.", async () => {

    let before = await productsPage.sortAscending();
    let sorted = before.sort((a, b) => b.localeCompare(a));
    await expect(before).toEqual(sorted);  

})

it("Sort the product prices from 'Low To High'.", async () => {
    await productsPage.sortLowToHigh()
    let priceBefore = await productsPage.sortLowToHigh();
    let sortedPrice =priceBefore.sort((a, b) => a - b);
    await expect(priceBefore).toEqual(sortedPrice);
 
  });

  it("Sort the product prices from 'High To Low'.", async () => {
    await productsPage.sortHighToLow()
    let priceBefore = await productsPage.sortHighToLow();
    let sortedPrice =priceBefore.sort((a, b) => b - a);
    await expect(priceBefore).toEqual(sortedPrice);
  });

    it("Add any 3 products to the cart and validate whether the cart icon increments accordingly.", async () => {
    let cartIconCount = 0;
    if (await productsPage.$cartIncrementItem().isDisplayed()) {
        cartIconCount = parseInt(await productsPage.$cartIncrementItem().getText());
    }
    
    let productAdded = await productsPage.addProductsToCart();
    let cartIconCountUpdated = parseInt(await productsPage.$cartIncrementItem().getText());
    expect(cartIconCountUpdated).toEqual(cartIconCount + productAdded);

    expect(await productsPage.$removeButton().isDisplayed())
    .withContext('Expect Remove button to be displayed')
    .toBeTrue()
});

it('Verify that the "Remove" button is displayed in red color', async () => {
  const removeButton =  productsPage.$removeButton()
  const color = await removeButton.getCSSProperty('color');
  expect(color.value).toBe('rgba(226,35,26,1)');
})
it("Click on the 'cart' Icon", async () => {
  await productsPage.clickOnCartIcon();
  expect(await cartPage.$cartPageHeader().isDisplayed()).withContext('The Header is displayed').toBeTrue();
 
})

it("View the cart and click on the 'Checkout' button", async () => {
  await cartPage.clickOnCheckoutButton();
  expect(await checkoutPageFirst.$checkoutHeaderFirst().isDisplayed()).withContext('The Header is displayed').toBeTrue();
 
})

it("Fill the Checkout Details and click on the 'Continue' button", async () => {
  await checkoutPageFirst.fillCheckoutDetails(firstName,lastName,postalCode);
  expect(await checkoutPageSecond.$checkoutOverviewHeader().isDisplayed()).withContext('The Header is displayed').toBeTrue();
 
})

it("Click on the Finish Button and Validate the 'Thank You!' Header", async () => {
  await checkoutPageSecond.clickOnFinishButton();
  expect(await  checkoutCompletePage.$thankYouHeader().isDisplayed())
  .toBeTrue();
    
 })



})

