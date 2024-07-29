import CommonPage from "./commonPage.js";

class CheckoutCompletePage extends CommonPage
{
    constructor()
    {
        super();

        this.$thankYouHeader = () => $('//h2[text()="Thank you for your order!"]')
    
       
        
    }


   
    }


    

export default new CheckoutCompletePage();