const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3333/',
    videoUploadOnPasses: false,
    video: false,
    setupNodeEvents(on, config) {
      // Any necessary node event setup
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.ts",
    tsConfigFile: "cypress.tsconfig.json"
  }
});
