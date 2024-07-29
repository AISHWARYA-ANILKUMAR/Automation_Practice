
export default class CommonPage 
{
    constructor()
    {
        this.$swagLabsHeader = () => $('//div[text()="Swag Labs"]')
        this.$cartIncrementItem = () => $('//span[@data-test="shopping-cart-badge"]');

    }


    /**
     * Load the url of the website
     */

    async loadUrl()
    {
        await browser.url('https://www.saucedemo.com')
        browser.maximizeWindow();

    }

    async randomFirstName() {
        const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Michael', 'Sarah', 'David', 'Laura', 'Chris', 'Jessica'];
        const randomIndex = Math.floor(Math.random() * firstNames.length);
        return firstNames[randomIndex];
    }
    
    async randomLastName() {
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];
        const randomIndex = Math.floor(Math.random() * lastNames.length);
        return lastNames[randomIndex];
    }
    

    async randomPostalCode() {
        let postalCode = '68'; 
        for (let i = 0; i < 4; i++) { 
            const randomDigit = Math.floor(Math.random() * 10); 
            postalCode += randomDigit;
        }
        return postalCode;
    }
    
    
}