/// <reference types="cypress" />
export default class PlaygroundEditorSteps {
  static getQueryEditor(): Cypress.Chainable {
    return cy.get('.graphiql-query-editor textarea');
}

  static setInEditor(text: string): Cypress.Chainable {
    return cy.window()
      .then((win) => {
        // @ts-ignore CodeMirror is undefined
        const codeMirrorInstance = win.document.querySelector('.CodeMirror').CodeMirror;
        codeMirrorInstance.setValue(text);
      });
  }

  static clear(): void {
    PlaygroundEditorSteps.setInEditor('');
  }

  static getEditorContent(): Cypress.Chainable {
    return cy.window().then((win) => {
      // @ts-ignore CodeMirror is undefined
      const codeMirrorInstance = win.document.querySelector('.CodeMirror').CodeMirror;
      return codeMirrorInstance.getValue();
    });
  }

  static getExecuteButton(): Cypress.Chainable {
    return cy.get('.graphiql-execute-button');
  }

  static executeQuery(delay = 150): Cypress.Chainable {
    cy.wait(delay);
    return PlaygroundEditorSteps.getExecuteButton().click();
  }
  
  static abortQuery(): void {
    PlaygroundEditorSteps.getExecuteButton().click();
  }

  static getResponse(): Cypress.Chainable {
    return cy.get('.graphiql-response');
  }
}
