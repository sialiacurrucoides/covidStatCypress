const data = require('../../fixtures/mockCovidStat.json');

describe("change step size on the x axis via select", () => {
    before(() => {
        cy.waitForData(data);
        cy.get("button").contains("infected").click();
        cy.get("button").contains("deceased").click();
        cy.get("span").contains("Step size (x-axis): ").next().find("input")
        .type("{backspace}{backspace}5");
    });

    it("should show the first date from mock after setting slider to 0", () => {
        cy.get(".xAxis").find("tspan").first().contains("Jun/30");
        cy.get(".MuiSlider-mark[data-index='0']").click();
        cy.get(".xAxis").find("tspan").first().contains("Jun/11");
    });

});