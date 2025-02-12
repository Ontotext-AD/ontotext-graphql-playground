/// <reference types="cypress" />
export class TranslationPageSteps {
  
  static visit(): void {
    cy.visit('/pages/translation');
  }
  
  static getUseFrenchLanguageInConfigurationButton(): Cypress.Chainable {
    return cy.get('#useFrenchLanguageInConfigurationButton');
  }
  
  static configureFrenchLanguage() {
    TranslationPageSteps.getUseFrenchLanguageInConfigurationButton().click();
  }
  
  static getAddMoreLanguagesButton(): Cypress.Chainable {
    return cy.get('#addMoreLanguagesButton');
  }
  
  static addMoreLanguages() {
    TranslationPageSteps.getAddMoreLanguagesButton().click();
  }
  
  static getSetOverrideTranslationButton(): Cypress.Chainable {
    return cy.get('#setOverrideTranslationButton');
  }
  
  static configureOverrideTranslationButton() {
    TranslationPageSteps.getSetOverrideTranslationButton().click();
  }
  
  static getSetEnglishLanguageButton(): Cypress.Chainable {
    return cy.get('#setEnglishLanguageButton');
  }
  
  static getSetFrenchLanguageButton(): Cypress.Chainable {
    return cy.get('#setFrenchLanguageButton');
  }
  
  static setFrenchLanguage() {
    TranslationPageSteps.getSetFrenchLanguageButton().click();
  }
  
  static getSetBulgarianLanguageButton(): Cypress.Chainable {
    return cy.get('#setBulgarianLanguageButton');
  }
  
  static setBulgarianLanguage() {
    TranslationPageSteps.getSetBulgarianLanguageButton().click();
  }
}
