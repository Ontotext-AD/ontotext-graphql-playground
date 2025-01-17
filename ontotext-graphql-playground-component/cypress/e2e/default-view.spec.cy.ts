/// <reference types="cypress" />
import DefaultViewPageSteps from "../steps/default-view-page-steps";
import PlaygroundEditorSteps from "../steps/playground-editor-steps";
import {Stubs} from "../stubs/stubs";

describe('Default view', () => {

  beforeEach(() => {
    Stubs.stubCountriesSchema();
    // When I visit the playground page
    DefaultViewPageSteps.visit();
  });

  it('Should load component with default configuration', () => {
    // Then I expect the introspection query to be executed
    cy.wait('@countries').its('request.body').should('have.a.property', 'operationName', 'IntrospectionQuery');
    // And I expect the playground to be visible
    DefaultViewPageSteps.getPlayground().should('exist').and('be.visible');
    PlaygroundEditorSteps.getExecuteButton().should('be.visible').and('be.enabled');
  });
});

