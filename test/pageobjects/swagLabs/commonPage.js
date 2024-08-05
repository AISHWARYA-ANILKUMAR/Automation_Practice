
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

    /**
     * The function is to generate random first names
     * @returns {number}
     */
    async randomFirstName() {
        const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Michael', 'Sarah', 'David', 'Laura', 'Chris', 'Jessica'];
        const randomIndex = Math.floor(Math.random() * firstNames.length);
        return firstNames[randomIndex];
    }
    
/**
 * The function is to generate random last names   
 * @returns {number}
 */
    async randomLastName() {
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];
        const randomIndex = Math.floor(Math.random() * lastNames.length);
        return lastNames[randomIndex];
    }
    
    /**
     * The function is to generate random postal codes
     * @returns {number}
     */

    async randomPostalCode() {
        let postalCode = '68'; 
        for (let i = 0; i < 4; i++) { 
            const randomDigit = Math.floor(Math.random() * 10); 
            postalCode += randomDigit;
        }
        return postalCode;
    }
    
    
}