const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  const elementQuery = 'h1'
  await page.waitForSelector(elementQuery);

  const h1Text = await page.$eval(elementQuery, el => el.textContent);

  console.log('<H1> text:', h1Text);
})();