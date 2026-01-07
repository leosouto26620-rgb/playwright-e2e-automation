Playwright E2E Automation – SauceDemo

## Overview

- This repository contains an end-to-end (E2E) automated testing project for the SauceDemo web application, built using Playwright and TypeScript, with GitHub Actions used for Continuous Integration (CI).

- The goal of this project is to demonstrate:

- A clean and maintainable test architecture

- Best practices in Playwright automation

- A realistic E2E checkout flow

- CI integration with test reporting

## Test Scenarios Covered

Mandatory Scenario – Checkout Flow

- Select a product from the inventory.

- Open the Product Detail Page.

- Add the product to the cart.

- Return to the inventory.

- Proceed to checkout.

- Complete the purchase flow.

- Validate prices, tax, and total amount.

- Validate successful order confirmation.

Additional Scenario – Remove Item from Cart

- Add a product to the cart.

- Remove the product from the cart.

- Validate that the cart is empty and UI elements are no longer visible.

- This additional test adds value by covering an important user interaction and potential regression point.

## Tech Stack

- Playwright – E2E testing framework

- TypeScript – Type safety and better maintainability

- Node.js

- GitHub Actions – Continuous Integration

- HTML Reporter – Test execution reports

## Project Structure

├── page/
│ └── CheckoutPage.ts # Page Object Model (POM)
│
├── tests/
│ └── checkout.spec.ts # E2E test cases
│
├── utils/
│ └── login.ts # Reusable login helper
│
├── .github/workflows/
│ └── playwright.yml # CI pipeline
│
├── playwright.config.ts # Playwright configuration
├── package.json
├── tsconfig.json
└── README.md

## Design Decisions

- Page Object Model (POM) is used to encapsulate UI interactions and improve maintainability.

- Reusable login logic is implemented via a utility function and executed in beforeEach.

- Assertions are centralized when useful to reduce duplication and improve readability.

- CI configuration is optimized for stability (headless mode, retries, single worker).

## How to Run the Tests Locally

## Prerequisites

- Node.js (v18 recommended)

- npm

## Clone the repository

- Clone the repository from GitHub: git clone https://github.com/leosouto26620-rgb/playwright-e2e-automation.git

## Navigate to the project directory

- cd your-repo-name

## Install dependencies

- npm install

## Install Playwright browsers

- npx playwright install

## Run all tests

- npx playwright test

## Open HTML report locally

- npx playwright show-report

## Continuous Integration (GitHub Actions)

This project uses GitHub Actions to automatically run tests on:

- Every push to main

- Every pull request to main

CI Features

- Headless execution

- Retry logic enabled in CI

- HTML report generated on every run

- Report uploaded as a GitHub Actions artifact, even if tests fail

- You can download and inspect the Playwright HTML report directly from the workflow run.

## Known Limitations & Improvements

- Some steps are duplicated across tests and could be further encapsulated into higher-level Page Object methods.

- Login is currently performed via UI on each test for simplicity and stability. Session reuse (storageState) could be introduced to improve execution time.

- Test data is static and could be externalized or randomized in future iterations.

- Additional tagging (@smoke, @regression) and multi-browser execution could be added if the test suite grows.
