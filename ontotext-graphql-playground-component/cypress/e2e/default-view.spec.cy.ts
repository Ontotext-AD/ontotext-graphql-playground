/// <reference types="cypress" />
import DefaultViewPageSteps from "../steps/default-view-page-steps";
import PlaygroundEditorSteps from "../steps/playground-editor-steps";
import {stubQuery} from "../utils/graphql-test.util";

describe('Default view', () => {
  const graphqlEndpoint = '/rest/repositories/test/graphql/graphql-test-endpoint';
  beforeEach(() => {
    cy.intercept('POST', graphqlEndpoint, (req) => {
      stubQuery(req, 'IntrospectionQuery', 'empty.json');
      stubQuery(req, 'TestQuery', {
        data: {
          testField: 'TestValue',
        },
      });
    });

    DefaultViewPageSteps.visit();
  });

  it('Should load component with default configuration', () => {
    // When I visit the playground page
    DefaultViewPageSteps.getPlayground().should('exist').and('be.visible');
    PlaygroundEditorSteps.getExecuteButton().should('be.visible').and('be.enabled');
  });

  it('should call the GraphQL endpoint with the correct query', () => {
    DefaultViewPageSteps.getPlayground().should('exist').and('be.visible');
    // When I set a query
    PlaygroundEditorSteps.setInEditor('query TestQuery {\n testField\n}');
    // And I execute the query
    PlaygroundEditorSteps.executeQuery();
    // Then I get expected result
    PlaygroundEditorSteps.getResponse().should('contain', '"testField": "TestValue"');
  });
});

