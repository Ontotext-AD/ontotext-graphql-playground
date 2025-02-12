import { TranslationPageSteps } from '../steps/translation-page-steps';
import {GraphiqlPlaygroundSteps} from '../steps/graphiql-playground-steps';
import {GraphiQLEditorToolsSteps} from '../steps/graphiql-editor-tools-steps';

describe('Internationalization', () => {
  beforeEach(() => {
    TranslationPageSteps.visit();
  });
  
  it('Should use the selected language passed as configuration', () => {
    // Given: I have visited a page containing the GraphiQL playground.
    GraphiqlPlaygroundSteps.getPlayground().should('be.visible');
    GraphiQLEditorToolsSteps.getGraphiQLEditorTabButton(1).contains('Headers');
    
    // When: I change the selected language passed as configuration to "fr".
    TranslationPageSteps.configureFrenchLanguage();
    
    // Then: I expect the GraphiQL interface to be translated into French.
    GraphiQLEditorToolsSteps.getGraphiQLEditorTabButton(1).contains('En-têtes')
  });
  
  it('Should change the selected language via "setLanguage" method', () => {
    // Given: I have visited a page containing the GraphiQL playground.
    GraphiqlPlaygroundSteps.getPlayground().should('be.visible');
    GraphiQLEditorToolsSteps.getGraphiQLEditorTabButton(1).contains('Headers');
    
    // When: I change the selected language via the "setLanguage" method to "fr".
    TranslationPageSteps.setFrenchLanguage();
    
    // Then: I expect the GraphiQL interface to be translated into French.
    GraphiQLEditorToolsSteps.getGraphiQLEditorTabButton(1).contains('En-têtes')
  });
  
  it('Should be possible to add more languages', () => {
    // Given: I have visited a page containing the GraphiQL playground,
    GraphiqlPlaygroundSteps.getPlayground().should('be.visible');
    GraphiQLEditorToolsSteps.getGraphiQLEditorTabButton(1).contains('Headers');
    // and it is configured with additional languages.
    TranslationPageSteps.addMoreLanguages();
    
    // When: I change the selected language to "br" (Bulgarian).
    TranslationPageSteps.setBulgarianLanguage();
    
    // Then: I expect the GraphiQL interface to be translated into Bulgarian.
    GraphiQLEditorToolsSteps.getGraphiQLEditorTabButton(1).contains('Заглавки')
  });
  
  it('Should be possible to override translations through configuration', () => {
    // Given: I have visited a page containing the GraphiQL playground.
    GraphiqlPlaygroundSteps.getPlayground().should('be.visible');
    GraphiQLEditorToolsSteps.getGraphiQLEditorTabButton(1).contains('Headers');
    
    // When: I configure it with a translation that overrides the internally defined translation.
    TranslationPageSteps.configureOverrideTranslationButton();
    
    // Then: I expect the GraphiQL component to use the overridden label.
    GraphiQLEditorToolsSteps.getGraphiQLEditorTabButton(1).contains('Headers Changed from External Configuration');
  });
});
