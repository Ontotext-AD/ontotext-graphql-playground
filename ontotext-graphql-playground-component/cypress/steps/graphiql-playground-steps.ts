/// <reference types="cypress" />
export class GraphiqlPlaygroundSteps {
  
  static getPlayground(): Cypress.Chainable {
    return cy.get('.graphiql-query-editor');
  }
}
