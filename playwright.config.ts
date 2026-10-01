import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: { baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:4317', browserName: 'chromium' },
  webServer: process.env.PLAYWRIGHT_BASE_URL ? undefined : {
    command: 'npm run dev -- --port 4317', url: 'http://127.0.0.1:4317', reuseExistingServer: false,
  },
});
