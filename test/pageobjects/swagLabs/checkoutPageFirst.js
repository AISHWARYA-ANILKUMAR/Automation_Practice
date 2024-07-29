import CommonPage from "./commonPage.js";

class CheckoutPageFirst extends CommonPage
{
    constructor()
    {
     super();
     this.$checkoutHeaderFirst = () => $('//span[text()="Checkout: Your Information"]')
     this.$continueButton = () => $('//input[@value="Continue"]')
     this.$checkoutFormFields = (index) => $(`//input[@placeholder="${index}"]`)
       
        
    }

    /**
     * fill the checkout details and click on the 'Continue' button
     * @param {string} fname 
     * @param {string} lname 
     * @param {number} postcode 
     */
    async fillCheckoutDetails(fname,lname,postcode)
    {
        await this.$checkoutFormFields('First Name').setValue(fname)
        await this.$checkoutFormFields('Last Name').setValue(lname)
        await this.$checkoutFormFields('Zip/Postal Code').setValue(postcode)

        await this.$continueButton().click();

    }

    
   
    }


    

export default new CheckoutPageFirst();