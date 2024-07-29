import CommonPage from "./commonPage.js";

class CheckoutPageSecond extends CommonPage
{
    constructor()
    {
     super();
     this.$checkoutOverviewHeader = () => $('//span[text()="Checkout: Overview"]')
     this.$finishButton = () => $('//button[@id="finish"]')
       
        
    }

    /**
     * Click on the finish button and complete the checkout process.
     */

    async clickOnFinishButton()
    {
        await this.$finishButton().click();
    }

   
    }


    

export default new CheckoutPageSecond();