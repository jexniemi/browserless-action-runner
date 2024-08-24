![example workflow](https://github.com/jexniemi/browserless-action-runner/actions/workflows/example.yml/badge.svg)


# Browserless Action Runner

This GitHub Action allows you to easily run Puppeteer or Playwright web scraper in headless mode using the [Browserless](https://github.com/browserless/browserless) Docker image. Alternatively, you can use this Action to run any other process that requires headless browser.

## Usage

### Web Scraping

In order to use this action with Puppeteer or Playwright, you need to set up the browser's web socket endpoint:

Puppeteer:
```js
const browser = await puppeteer.connect({
  browserWSEndpoint: 'ws://localhost:3000',
});
````

Playwright:
```js
const browser = await pw.firefox.connect(
  'ws://localhost:3000/firefox/playwright',
);
```

### Creating a workflow

To use this action, you need to set up a workflow file (e.g., `.github/workflows/main.yml`) in your repository. Here's an example of how to use this action:

```yml
name: Scrape web

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v4
      with:
        node-version: "18"

    - name: Install dependencies
      run: cd example && npm install --production

    - name: Run Puppeteer Action
      uses: jexniemi/browserless-action-runner@v0.1
      with:
        start_commands: | 
          node example/index.js
```

In this example, the start_commands input is a multiline string, with each command on a separate line. These commands are run after the Browserless Docker container is up and running.

## Contributing
If you have suggestions for how browserless-action-runner could be improved, or want to report a bug, open an issue!