import puppeteer, { Browser, Page } from 'puppeteer-core';

(async () => {
  let browser: Browser;
  let page: Page;

  try {
    browser = await puppeteer.connect({ browserWSEndpoint: 'ws://localhost:3001' });
    page = await browser.newPage();
    await page.goto('https://example.com');
  
    const elementQuery = 'h1';
    await page.waitForSelector(elementQuery);
  
    const h1Text = await page.$eval(elementQuery, el => el.textContent || '');
  
    console.log('Scraping result: <H1> text:', h1Text);

    await browser.close();
  } catch(e) {
    console.log(e);
    process.exit(1);
  }
})();