const apiKey = 'AEK8C9QZ9MTH49FE49QGTSH1Q8WY76UDE4';
const requestUrl = "https://api.etherscan.io/api?module=account&action=balancemulti&address=0x8b655dea35560884690e8c1f1298b01b448e92c2,0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2,0x742d35cc6634c0532925a3b844bc454e4438f44e,0x53d284357ec70ce289d6d64134dfac8e511c8a3d&tag=latest&apikey="+apiKey;

describe('Process a Simple, Valid Transaction', () => {

    it('Accesses the app and fetches data', () => {
        cy.server().route("GET",requestUrl).as('dataFetch')
        cy.visit('/');
        // Wait for external API request to finish
        cy.wait('@dataFetch');
    })

    it('Accesses the Send Form', () => {
        cy.get('button[id="next-button"]').click();

        // Assertion: Expect to be in the send form
        cy.url().should('eq', Cypress.config().baseUrl+'/send');
    })

    it('Inputs Origin Address and sees available funds', () => {
        cy.get('input[id="origin-address"]').type('0x8b655dea35560884690e8c1f1298b01b448e92c2');

        // Assertion: Expect available funds to be displayed
        cy.get('label[id="available-funds"').should('exist');
    })

    it('Inputs Destination Adress and Amount and Send Button becomes enabled', () => {
        cy.get('input[id="destination-address"]').type('0xxrnmsf3ypww112ebfv9e7dik6ud3q4egosyr9cgb');
        cy.get('input[id="amount"]').type('10');

        // Assertion: Expect Send button to be enabled
        cy.get('button[id="send-button"]').should('not.be.disabled');
    })

    it('Clicks Send and is redirected to the Success Page', () => {
        cy.get('button[id="send-button"]').click();

        // Assertion: Expect to be in the success page
        cy.url().should('eq', Cypress.config().baseUrl+'/send/success');
    })

    it('Validates Success page data', () => {
        // Assertions: Expect the transaction details (sender, destination, amount) to be correct
        cy.get('p[id="transaction-amount"]').should('contain','10');
        cy.get('span[id="transaction-origin"]').should('contain','0x8b655dea35560884690e8c1f1298b01b448e92c2');
        cy.get('span[id="transaction-destination"]').should('contain','0xxrnmsf3ypww112ebfv9e7dik6ud3q4egosyr9cgb');
    })

    it('Returns to the list', () => {
        cy.get('p[id="utrust-logo"]').click();

        // Assertion: Expect to be back on the list
        cy.url().should('eq', Cypress.config().baseUrl+'/');
    })
  });