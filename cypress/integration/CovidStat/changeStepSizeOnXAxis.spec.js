const data = require('../../fixtures/mockCovidStat.json');



describe("change step size on the x axis via select", () => {
    before(() => {
        cy.waitForData(data);
        cy.get("button").contains("infected").click();
        cy.get("button").contains("deceased").click();
        cy.get(".xAxis").find("tspan").first().contains("Jun/18");
    });

    it("should change the 14 days resolution to 15", () => {
        const stepSize = cy.get("span").contains("Data range (x-axis): ").next().find("input");
        stepSize.should("have.value","14");
        stepSize.type("{backspace}{backspace}17");
        stepSize.should("have.value","17");
        cy.get(".xAxis").find("tspan").first().contains("Jun/15");
    });
});