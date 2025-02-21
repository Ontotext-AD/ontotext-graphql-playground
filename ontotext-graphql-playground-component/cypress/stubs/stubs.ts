/// <reference types="cypress" />
import {stubQuery} from "../utils/graphql-test.util";

export const ENDPOINT_NO_SCHEMA = '/rest/repositories/test/graphql/graphql-test-endpoint';
export const ENDPOINT_COUNTRIES = '/rest/repositories/test/graphql/countries';
export const ENDPOINT_RICKMORTY = '/rest/repositories/test/graphql/rickmorty';

export class Stubs {
  static stubEmptySchema(): void {
    cy.intercept('POST', ENDPOINT_NO_SCHEMA, (req) => {
      stubQuery(req, 'IntrospectionQuery', 'empty.json');
      stubQuery(req, 'TestQuery', {
        data: {
          testField: 'TestValue',
        },
      });
    });
  }
  
  static stubQueryResponse(fixture = 'query-response.json', withDelay = 0) {
    cy.intercept('POST', ENDPOINT_COUNTRIES, {fixture, delay: withDelay}).as('query-response');
  }

  static stubCountriesSchema(): void {
    cy.intercept('POST', ENDPOINT_COUNTRIES, (req) => {
      stubQuery(req, 'IntrospectionQuery', 'countries-schema.json');
      stubQuery(req, 'GetContinentById', {
        data: {
          name: 'Europe',
        },
      });
    }).as('countries');
  }

  static stubStubRickAndMortySchema(): void {
    cy.intercept('POST', ENDPOINT_RICKMORTY, (req) => {
      stubQuery(req, 'IntrospectionQuery', 'rick-and-morty-schema.json');
      stubQuery(req, 'Character', {
        data: {
          name: 'Morty Smith',
        },
      });
    }).as('rickmorty');
  }
}
