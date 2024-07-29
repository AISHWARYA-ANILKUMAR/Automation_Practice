import CommonPage from "./commonPage.js";

class CartPage extends CommonPage
{
    constructor()
    {
        super();
       this.$cartPageHeader = () => $('//span[text()="Your Cart"]')
       this.$checkoutButton = () => $('//button[@name="checkout"]')
        
    }

    /**
     * click on the checkout button
     */

    async clickOnCheckoutButton()
    {
       
        await this.$checkoutButton().click();
    }

    }




    

export default new CartPage();