import DefaultViewPageSteps from "../steps/default-view-page-steps";

describe('Default view', () => {

  beforeEach(() => {
    DefaultViewPageSteps.visit();
  });

  it('Should load component with default configuration', () => {
    // When I visit the playground page
    DefaultViewPageSteps.getPlayground().should('exist').and('be.visible');
    DefaultViewPageSteps.getExecuteButton().should('be.visible').and('be.enabled');
  });
});
