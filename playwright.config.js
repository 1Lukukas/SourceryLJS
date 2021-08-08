// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 5000,
    use: {
      headless: false,
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
      video: 'on-first-retry',
      /*launchOptions:{
          slowMo: 1750
      }*/
    },
  };
  
  module.exports = config;