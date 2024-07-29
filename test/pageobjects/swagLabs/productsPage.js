import CommonPage from "./commonPage.js";
import data from "../../testData/timeout.json" assert { "type": "json" };

class ProductPage extends CommonPage {
    constructor() {
        super();
        
        this.$productHeader = () => $('//span[text()="Products"]');
        this.$dropDown = () => $('//select[@data-test="product-sort-container"]');
        this.$sortOptions = (optionText) => $(`//option[text()="${optionText}"]`);
        this.$$productList = () => $$('//div[@data-test="inventory-item-name"]');
        this.$singleProduct = (index) => $(`(//div[@data-test="inventory-item-name"])[${index}]`);
        this.$$productPrices = () => $$('//div[@data-test="inventory-item-price"]');
        this.$singleProductPrices = (index) => $(`(//div[@data-test="inventory-item-price"])[${index}]`);
        this.$addToCartButton = (button, index) => $(`(//button[text()="${button}"])[${index}]`);
        this.$removeButton = () => $('//button[text()="Remove"]');
    }

    /**
     * Sort the Products in Descending order
     */
    async sortDescending() {
        await this.$dropDown().waitForClickable({ timeout: data.timeoutKey.maxTimeout, timeoutMsg: "Element not Clickable" });
        await this.$dropDown().click();
        await this.$sortOptions('Name (Z to A)').click();
        
        const productArray = [];
        const items = await this.$$productList();

        for (let i = 0; i < items.length; i++) {
            const productNames = await this.$singleProduct(i + 1).getText(); 
            productArray.push(productNames);
        }
        return productArray;
    }

    /**
     * Sort the products in Ascending order
     */
    async sortAscending() {
        await this.$dropDown().waitForClickable({ timeout: data.timeoutKey.maxTimeout, timeoutMsg: "Element is not Clickable" });
        await this.$dropDown().click();
        await this.$sortOptions('Name (A to Z)').click();

        const productArrayTwo = [];
        const products = await this.$$productList();

        for (let i = 0; i < products.length; i++) {
            const text = await this.$singleProduct(i + 1).getText(); 
            productArrayTwo.push(text);
        }

        return productArrayTwo;
    }

    /**
     * Sort the product prices 'Low to High' order
     */
    async sortLowToHigh() {
        await this.$dropDown().waitForClickable({ timeout: data.timeoutKey.maxTimeout, timeoutMsg: "Element is not Clickable" });
        await this.$dropDown().click();
        await this.$sortOptions('Price (low to high)').click();

        const pricesArray = [];
        const priceElements = await this.$$productPrices();
        for (let i = 0; i < priceElements.length; i++) {
            const price = await this.$singleProductPrices(i + 1).getText(); 
            const removeDollar = price.replace('$', '');
            const priceFinal = parseFloat(removeDollar);
            pricesArray.push(priceFinal);
        }
        return pricesArray; 
    }

    /**
     * Sort the product prices 'High To Low'
     */              
    async sortHighToLow() {
        await this.$dropDown().waitForClickable({ timeout: data.timeoutKey.maxTimeout, timeoutMsg: "Element is not Clickable" });
        await this.$dropDown().click();
        await this.$sortOptions('Price (high to low)').click();

        const pricesArrayTwo = [];
        const priceElements = await this.$$productPrices();
        for (let i = 0; i < priceElements.length; i++) {
            const price = await this.$singleProductPrices(i + 1).getText(); 
            const removeDollar = price.replace('$', '');
            const priceFinal = parseFloat(removeDollar);
            pricesArrayTwo.push(priceFinal);
        }
        return pricesArrayTwo;
    }

    async addProductsToCart() {
        let countOfProductsInCart = 0;
        for (let i = 1; i <= 3; i++) { 
            await this.$addToCartButton("Add to cart", i).click();
            countOfProductsInCart++;
           
        }
        return countOfProductsInCart;
    }

    /**
     * Click on the cart Icon
     */
    async clickOnCartIcon()
    {
        await this.$cartIncrementItem().click();
    }

   
    }




export default new ProductPage();
