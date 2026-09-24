import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests', fullyParallel: false, workers: 1, timeout: 30000,
  reporter: [['list'], ['json', { outputFile: 'results/browser-results.json' }]],
  use: { baseURL: 'http://127.0.0.1:49424', trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  webServer: { command: 'npm run start', url: 'http://127.0.0.1:49424', reuseExistingServer: false, timeout: 60000 },
});
