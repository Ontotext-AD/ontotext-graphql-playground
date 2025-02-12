/// <reference types="cypress" />
export class GraphiQLEditorToolsSteps {
  
  static getGraphiQLEditorTools(): Cypress.Chainable {
    return cy.get(".graphiql-editor-tools");
  }
  
  static getGraphiQLEditorTabButton(index: number): Cypress.Chainable {
    return GraphiQLEditorToolsSteps.getGraphiQLEditorTools().find('button').eq(index);
  }
}
