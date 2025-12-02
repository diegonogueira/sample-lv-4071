const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000, // Timeout maior para LiveView
  use: {
    baseURL: 'http://localhost:4000',
    headless: false, // Modo headed para poder interagir manualmente
    viewport: { width: 1280, height: 720 },
    // Aumenta timeout de navegação para LiveView
    navigationTimeout: 30000,
  },
});

