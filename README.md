# Browserless Action Runner

This GitHub Action allows you to easily run Puppeteer or Playwright web scraper in headless mode using the [Browserless](https://github.com/browserless/browserless) Docker image. Alternatively, you can use this Action to run any other process that requires headless browser.

## Usage

To use this action, you need to set up a workflow file (e.g., `.github/workflows/main.yml`) in your repository. Here's an example of how to use this action:

```yml
name: 

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: "18"

    - name: Install dependencies
      run: cd example && npm install --production

    - name: Run Puppeteer Action
      uses: ./ # Assumes the action is in the root directory of the repository
      with:
        start_commands: | 
          node example/index.js
```