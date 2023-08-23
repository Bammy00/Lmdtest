# Cypress eCommerce and API Testing Project

This project demonstrates the usage of [Cypress] + Cucumber for end-to-end testing of an e-commerce website and API testing using [JSONPlaceholder](https://jsonplaceholder.typicode.com/). It includes both UI and API test suites.

## Table of Contents

- [Introduction](#introduction)
- [Configuration](#configuration)
- [Installation](#installation)
- [Usage](#usage)
- [UI Testing](#ui-testing)
- [API Testing](#api-testing)
- [Reporting](#reporting)
- [Design Pattern](#design-pattern)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project showcases the capabilities of Cypress as a testing framework for automating UI tests and API tests. It includes a test suite for an e-commerce website and another for fetching data from the JSONPlaceholder API.

## Configuration

The Cypress configuration file `cypress.config.js` includes settings for test execution, such as the base URL, viewport dimensions, and test reporting options.

```javascript
const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    baseUrl: "https://ecommerce-playground.lambdatest.io/",
    specPattern: "cypress/e2e/*.{feature,js}",
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportFilename: "cypressMochawesomeReport",
      videoOnFailOnly: "true",
      overwrite: true,
    },
    screenshots: {
      enabled: true,
    },
  },
});
```

## Installation

To get started, follow these steps:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.

## Usage

You can run the Cypress test runner with the following command:

```bash
npm run cy:open    
```

OR You can run the Cypress test in terminal to generate report  with the following command:

```bash
npx cypress run
```


This will open the Cypress Test Runner where you can select and run tests.

## UI Testing

The UI test suite is focused on testing the functionality of an e-commerce website using the Page Object design pattern. The tests cover scenarios related to searching for products, adding products to the cart, filling in checkout details, and verifying successful checkout.

Test scripts can be found in the `cypress/e2e` directory, specifically in the `eCommerce` subdirectory.

## API Testing

The API test suite fetches data from the JSONPlaceholder API. It includes tests to fetch all users, print a random user's information, and fetch posts associated with that user.

Test scripts can be found in the `cypress/e2e` directory, specifically in the `api` subdirectory.

## Reporting

The project utilizes the [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) for generating detailed test reports. Reports are generated in the `mochawesome-report` directory.


## License

This project is licensed under the [ISC License](LICENSE).
