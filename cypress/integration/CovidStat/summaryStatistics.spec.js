const data = require('../../fixtures/mockCovidStat.json');



describe("summaryStatistics", () => {
    before(() => {
        cy.waitForData(data);
    });

    it("should show the last days summary statistics", () => {
        cy.get('div[aria-label="summary statistics container"] > p').contains("Latest cummulative data:");
        cy.get('div[aria-label="summary statistics container"]').within(() => {
            cy.get('li').contains('Deceased').contains(data[data.length - 1].deceased);
            cy.get('li').contains('Infected').contains(data[data.length - 1].infected);
            cy.get('li').contains('Active Infected').contains(data[data.length - 1].activeInfected);
            cy.get('li').contains('Recovered').contains(data[data.length - 1].recovered);
            cy.get('li').contains('Tested').contains(data[data.length - 1].tested);
        });
    });
});