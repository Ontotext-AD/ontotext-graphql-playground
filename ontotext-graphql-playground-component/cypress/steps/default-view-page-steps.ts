/// <reference types="cypress" />
export default class DefaultViewPageSteps {
  static visit() {
    cy.visit('/pages/default-view');
  }

  static getPlayground() {
    return cy.get('.graphiql-query-editor textarea');
  }
}
