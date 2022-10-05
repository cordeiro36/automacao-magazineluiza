const { defineConfig } = require('cypress');
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config)
      return config
      // implement node event listeners here
    },
    baseUrl: 'https://www.magazineluiza.com.br/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      browserPermissions: {
        notifications: 'allow',
        geolocation: 'allow'
      }
    }
  },
});