export default class DefaultViewPageSteps {
  static visit() {
    cy.visit('/pages/default-view');
  }

  static getPlayground() {
    return cy.get('#graphiql');
  }

  static getExecuteButton() {
    return this.getPlayground().find('.graphiql-execute-button');
  }
}
