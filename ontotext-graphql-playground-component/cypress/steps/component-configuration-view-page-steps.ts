/// <reference types="cypress" />
export class ComponentConfigurationViewPageSteps {
  static visit(): void {
    cy.visit('/pages/configuration');
  }

  static getPlayground(): Cypress.Chainable {
    return cy.get('.graphiql-query-editor textarea');
  }

  static changeEndpoint(): void {
    cy.get('#changeEndpointButton').click();
  }
}
