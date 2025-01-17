/// <reference types="cypress" />
export default class DefaultViewPageSteps {
  static visit(): void {
    cy.visit('/pages/default-view');
  }

  static getPlayground(): Cypress.Chainable {
    return cy.get('.graphiql-query-editor textarea');
  }
}
