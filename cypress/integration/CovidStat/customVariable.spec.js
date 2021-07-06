const data = require('../../fixtures/mockCovidStat.json');

describe("summaryStatistics", () => {
    before(() => {
        cy.waitForData(data);
    });

    it("should be able to select two variables and an operator", () => {
        cy.get("button").contains("custom").click();
        cy.get("h3").contains("Select variables and an operation to create a new indicator");
        cy.get("div[aria-label='modal content']").find('label').contains("Variable 1")
        .parent().find('div[role="button"]').click({force: true});
        cy.get("li[data-value='deceased']").type('{downarrow}{enter}');

        cy.get("div[aria-label='modal content']").find('label').contains("operation")
        .parent().find('div[role="button"]').click({force: true});
        cy.get("li").contains("/").type('{downarrow}{enter}'); 
        
        cy.get("div[aria-label='modal content']").find('label').contains("Variable 2")
        .parent().find('div[role="button"]').click({force: true});
        cy.get("li[data-value='infected']").type('{enter}'); 

        cy.get('button').contains("Show the derived index").click({force: true});

        cy.get("div[aria-label='modal content']").should("not.exist");

        cy.get("button").contains("custom").should('have.css', 'background-color', 'rgb(43, 128, 125)');

        cy.get("button").contains("deceased").click();
        
        cy.get('.legend-item-0 > .recharts-legend-item-text').contains("deceased divided by infected");
        
    });
});