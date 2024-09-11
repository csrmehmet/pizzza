import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false, // supportFile'ı devre dışı bırakır
    baseUrl: 'http://localhost:5173', // Geliştirme sunucunuzun adresi
  },
});
