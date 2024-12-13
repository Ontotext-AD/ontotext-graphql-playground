/// <reference types="cypress" />
export default class PlaygroundEditorSteps {
  static getQueryEditor() {
    return cy.get('.graphiql-query-editor textarea');
}

  static setInEditor(text: string) {
    return cy.window()
      .then((win) => {
        // @ts-ignore CodeMirror is undefined
        const codeMirrorInstance = win.document.querySelector('.CodeMirror').CodeMirror;
        codeMirrorInstance.setValue(text);
      });
  }

  static clear() {
    PlaygroundEditorSteps.setInEditor('');
  }

  static getEditorContent() {
    return cy.window().then((win) => {
      // @ts-ignore CodeMirror is undefined
      const codeMirrorInstance = win.document.querySelector('.CodeMirror').CodeMirror;
      return codeMirrorInstance.getValue();
    });
  }

  static getExecuteButton() {
    return cy.get('.graphiql-execute-button');
  }

  static executeQuery(delay = 150) {
    cy.wait(delay);
    return PlaygroundEditorSteps.getExecuteButton().click();
  }

  static getResponse() {
    return cy.get('.graphiql-response');
  }
}
