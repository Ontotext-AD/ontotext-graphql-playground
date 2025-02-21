import {AbortQueryPage} from '../steps/abort-query-page';
import PlaygroundEditorSteps from '../steps/playground-editor-steps';
import {Stubs} from '../stubs/stubs';

describe('Abort query', () => {
  
  it('Should abort the query and notify about it', () => {
    // Given: I visit a page containing a GraphQL playground element,
    AbortQueryPage.visit();
    // and an "on abort query" event is attached.
    AbortQueryPage.attachAbortQueryHandler();
    
    // When: I cancel a long-running query.
    Stubs.stubQueryResponse(undefined, 2000);
    PlaygroundEditorSteps.executeQuery()
    PlaygroundEditorSteps.abortQuery()
    // Then: I expect:
    // The event to be fired,
    AbortQueryPage.getAbortQueryDiv().should('exist');
    // with the request passed as an argument.
    AbortQueryPage.getAbortQueryDiv().should('have.text', '{"method":"POST","body":"{\\"query\\":\\" \\"}","signal":{},"headers":{"content-type":"application/json","accept":"application/json, multipart/mixed"}}');
  });
});
