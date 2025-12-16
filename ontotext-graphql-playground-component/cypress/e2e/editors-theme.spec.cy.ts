import {ThemesSteps} from '../steps/themes-steps';
import PlaygroundEditorSteps from '../steps/playground-editor-steps';

describe('Editors Theme', () => {
  beforeEach(() => {
    ThemesSteps.visit();
  });
  
  it('should configure editors theme when theme is set as configuration', () => {
    // GIVEN: I have visited a page containing the GraphiQL playground.
    // WHEN: I configure it with a theme.
    ThemesSteps.configureOceanicNextTheme();
    // THEN: the "oceanic-next" theme class should be applied to the CodeMirror instances.
    verifyTheme('oceanic-next');
  });
  
  it('should configure default editors theme when theme is not set as configuration', () => {
    // GIVEN: I have visited a page containing the GraphiQL playground.
    ThemesSteps.configureOceanicNextTheme();
    
    // WHEN: I configure it without a theme.
    ThemesSteps.configureWithoutTheme();
    // THEN: the default "graphiql" theme class should be applied to the CodeMirror instances.
    verifyTheme('graphiql');
  });
  
  it('should configure editors theme when method setEditorsTheme is called with a theme name', () => {
    // GIVEN: I have visited a page containing the GraphiQL playground.
    // WHEN: I change theme.
    ThemesSteps.setDraculaTheme();
    // THEN: the "dracula" theme class should be applied to the CodeMirror instances.
    verifyTheme('dracula');
  })
  
  it('should configure editors default theme when method setEditorsTheme is called without theme', () => {
    // GIVEN: I have visited a page containing the GraphiQL playground.
    ThemesSteps.setDraculaTheme();
    // WHEN: I change the theme.
    ThemesSteps.setDefaultTheme();
    // THEN: the default "graphiql" theme class should be applied to the CodeMirror instances.
    verifyTheme('graphiql');
  })
  
  const verifyTheme = (theme: string) => {
    PlaygroundEditorSteps.getResponseCodeMirror().should('have.class', `cm-s-${theme}`);
    PlaygroundEditorSteps.getGraphiqlEditorsCodeMirror().should('have.class', `cm-s-${theme}`);
    PlaygroundEditorSteps.openVariables();
    PlaygroundEditorSteps.getActiveGraphiqlEditorToolCodeMirror().should('have.class', `cm-s-${theme}`);
    PlaygroundEditorSteps.openHeaders();
    PlaygroundEditorSteps.getActiveGraphiqlEditorToolCodeMirror().should('have.class', `cm-s-${theme}`);
  }
})
