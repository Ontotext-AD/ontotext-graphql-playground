/// <reference types="cypress" />
import PlaygroundEditorSteps from "../steps/playground-editor-steps";
import {ComponentConfigurationViewPageSteps} from "../steps/component-configuration-view-page-steps";
import {Stubs} from "../stubs/stubs";

describe('Component configuration', () => {
  beforeEach(() => {
    Stubs.stubCountriesSchema();
    // When I visit the component configuration page
    ComponentConfigurationViewPageSteps.visit();
    ComponentConfigurationViewPageSteps.getPlayground().should('exist').and('be.visible');
  });

  it('Should call the GraphQL endpoint with the correct query', () => {
    // When I set a query
    PlaygroundEditorSteps.setInEditor(`
      query GetContinentById {
        continent(code: "EU") {
          name
        }
      }
    `);
    // And I execute the query
    PlaygroundEditorSteps.executeQuery();
    // Then I get expected result
    PlaygroundEditorSteps.getResponse().should('contain', '"name": "Europe"');
  });

  it('Should be able to change the endpoint in the component configuration', () => {
    // Then I expect the introspection query to be executed for the default endpoint
    cy.wait('@countries').its('request.body').should('have.a.property', 'operationName', 'IntrospectionQuery');
    // When I change the endpoint
    Stubs.stubStubRickAndMortySchema();
    ComponentConfigurationViewPageSteps.changeEndpoint();
    // Then I expect the introspection query to be executed for the new endpoint
    cy.wait('@rickmorty').its('request.body').should('have.a.property', 'operationName', 'IntrospectionQuery');
    // And I set a query
    PlaygroundEditorSteps.setInEditor(`
      query Character {
        character(id: "2") {
          name
        }
      }
    `);
    // And I execute the query
    PlaygroundEditorSteps.executeQuery();
    // Then I get expected result from the new endpoint
    PlaygroundEditorSteps.getResponse().should('contain', '"name": "Morty Smith"');
  });
});

