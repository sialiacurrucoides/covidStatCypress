const data = require('../../fixtures/mockCovidStat.json');

describe("switch chart type", () => {
    before(() => {
        cy.waitForData(data);
    });

    it("should the 2 variable restriction disappear by switching to bar chart", () => {
        cy.get('div[aria-label="display chart"]').find('p').should("have.text","Exactly 2 variable (selected indicator) needed.");
        cy.get('label').contains('Select chart type').next().click();
        cy.get('li[data-value="bar"]').type('{downarrow}{enter}');
        cy.get('div[aria-label="display chart"]').find('p').should("not.have.text","Exactly 2 variable (selected indicator) needed.");
    });

    it("should show three variables if bar chart selected and three button clicked", () => {
        cy.get('button').contains('infected').click();
        cy.get('button').contains('recovered').click();
        cy.get('button').contains('deceased').click();
        cy.get('.recharts-legend-item')[2];
        cy.get('.recharts-rectangle');
    });
});