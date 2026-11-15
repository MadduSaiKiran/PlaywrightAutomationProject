// @ts-check
import { defineConfig, devices } from '@playwright/test';


const config =({
  testDir: './tests',
  // reporter: 'html',
  timeout: 30 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  use: {

    browserName: 'chromium',
    headless: false,
    // trace: 'on-first-retry',
  },

});

module.exports = config

