const { test, expect } = require('@playwright/test');
const { hwPage } = require('../pages/basicCalculatorPage')

test('basic test', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  const duckLogo = await page.isVisible("#logo_homepage_link");
  expect(duckLogo).toBe(true);
});

test('test search', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.waitForSelector('#logo_homepage_link');
  await page.fill('#search_form_input_homepage','test')
  await page.click("#search_button_homepage")
  await page.waitForSelector('#ra-0')
  const firstResult = await page.textContent('#r1-0')
  expect(firstResult).toContain('test');
});

test('Lithuania search', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.waitForSelector('#logo_homepage_link');
  await page.fill('#search_form_input_homepage','Lithuania')
  await page.click("#search_button_homepage")
  const lithuaniaResult = await page.isVisible('#m0-0')
  expect(lithuaniaResult).toBe(true);
});

test('Password 8 search', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.waitForSelector('#logo_homepage_link');
  await page.fill('#search_form_input_homepage','Password 8')
  await page.click("#search_button_homepage")
  const password8Result1 = await page.textContent('h3.c-base__title')
  console.log(password8Result1)
  await page.click("#search_button")
  page.waitForNavigation
  const password8Result2 = await page.textContent('h3.c-base__title')
  console.log(password8Result2)
  expect(password8Result1===password8Result2).toBe(false)
  });

  test('is twitter down search', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.waitForSelector('#logo_homepage_link');
    await page.fill('#search_form_input_homepage','is twitter down')
    await page.click("#search_button_homepage")
    const twitterResult = await page.textContent('h3.c-base__title')
    expect(twitterResult.trim()==='twitter.com seems up').toBe(true);
  });

  test('devbridge qr', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.waitForSelector('#logo_homepage_link');
    await page.fill('#search_form_input_homepage','qr www.devbridge.com')
    await page.click("#search_button_homepage")
    const qrCode = await page.waitForSelector('#zero_click_wrapper').src;
    let buff = new Buffer.from(qrCode,'base64')
    let text = buff.toString('ascii')
    console.log(text)
    await page.goto('https://zxing.org/');
    await page.fill('#u',qrCode)
    await page.click("#submit")
    expect.toBe(true)
  });
