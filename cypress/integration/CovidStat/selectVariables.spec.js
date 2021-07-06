describe('select the variables of interest', () => {   
    it('opens the app', () => {   
        cy.visit('http://localhost:3000') 
    });
    it('should the spinner disappear', () => {
        cy.get('div[aria-label="spinner"]', {timeout: 60000}).should("not.to.exist");
    });
    
    it("by default it requests two variables", () => {
        cy.get('div[aria-label="display chart"]').find('p').should("have.text","Exactly 2 variable (selected indicator) needed.");
    });

    it("should disappear the 2 variable request after clicking two buttons", () => {
        cy.get("button").contains("infected").click();
        cy.get('div[aria-label="display chart"]').find('p').should("have.text","Exactly 2 variable (selected indicator) needed.");
        cy.get("button").contains("deceased").click();
        cy.get('div[aria-label="display chart"]').find('p').should("not.have.text","Exactly 2 variable (selected indicator) needed.");
        cy.get('.recharts-legend-item')[1];
    });

})