/// <reference types="cypress" />
export class AbortQueryPage {
  
  static visit(): void {
    cy.visit('/pages/abort-query');
  }
  
  static attachAbortQueryHandler(): void {
    cy.get('#attachAbortQueryHandler').click();
  }
  
  static getAbortQueryDiv(): Cypress.Chainable {
    return cy.get('#abort-query-div');
  }
}
