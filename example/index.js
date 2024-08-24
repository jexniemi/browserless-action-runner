const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ browserWSEndpoint: 'ws://localhost:3000' });
    const page = await browser.newPage();
    await page.goto('https://example.com');
  
    const elementQuery = 'h1'
    await page.waitForSelector(elementQuery);
  
    const h1Text = await page.$eval(elementQuery, el => el.textContent);
  
    console.log('Scraping result: <H1> text:', h1Text);

    browser.close();
  } catch(e) {
    console.log(e)
    process.exit(1)
  }
})();