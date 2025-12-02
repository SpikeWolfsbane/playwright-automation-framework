# Playwright UI Test Automation Framework

[![Playwright Tests](https://github.com/SpikeWolfsbane/playwright-automation-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/SpikeWolfsbane/playwright-automation-framework/actions/workflows/playwright.yml)
![Playwright](https://img.shields.io/badge/Tested%20with-Playwright-45ba4b)

A UI test automation framework built with Playwright.  
It uses the Page Object Model (POM), custom fixtures, and GitHub Actions CI to run tests automatically on every push.

---

## 🚀 Tech Stack

- **Language:** JavaScript (Playwright Test)
- **Test Runner:** Playwright
- **Pattern:** Page Object Model (POM)
- **Fixtures:** Reusable setup and test data utilities
- **CI/CD:** GitHub Actions (`playwright.yml`)
- **Reports:** Playwright HTML report uploaded as a workflow artifact

---

## 📁 Project Structure

```bash
.
├── pages/                   # Page Object classes (POM)
│   └── ...
├── fixtures/                # Custom fixtures for shared setup
│   └── ...
├── tests/                   # Test specs
│   └── ...
├── playwright.config.js     # Playwright configuration
├── package.json
├── package-lock.json
├── .github/
│   └── workflows/
│       └── playwright.yml   # GitHub Actions workflow
└── README.md
