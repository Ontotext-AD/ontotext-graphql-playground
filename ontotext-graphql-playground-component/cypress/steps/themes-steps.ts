export class ThemesSteps {
  static visit() {
    cy.visit('/pages/themes');
  }
  
  static getConfigureWithoutThemeBtn() {
    return cy.get('#configureWithoutTheme');
  }
  
  static configureWithoutTheme() {
    ThemesSteps.getConfigureWithoutThemeBtn().click();
  }
  
  static getConfigureOceanicNextThemeBtn() {
    return cy.get('#configureOceanicNextTheme');
  }
  
  static configureOceanicNextTheme() {
    ThemesSteps.getConfigureOceanicNextThemeBtn().click();
  }
  
  static getSetDefaultThemeButton() {
    return cy.get('#setDefaultTheme');
  }
  
  static setDefaultTheme() {
    ThemesSteps.getSetDefaultThemeButton().click();
  }
  
  static getSetDraculaThemeButton() {
    return cy.get('#setDraculaTheme');
  }
  
  static setDraculaTheme() {
    ThemesSteps.getSetDraculaThemeButton().click();
  }
}
