const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    //cypress/e2e/**/*.{js,jsx,ts,tsx}
    baseUrl:
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  },
});
