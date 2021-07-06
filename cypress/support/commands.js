// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('waitForData', (data) => { 
    cy.visit('http://localhost:3000');
    cy.intercept('https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items?format=json&clean=1&token=4sn38aTqdvLb9gCZfjy2Gwudj', async (req) => {
        req.reply(200, data, "OK")
      });
    cy.get('div[aria-label="spinner"]', {timeout: 60000}).should("not.to.exist"); 
 })