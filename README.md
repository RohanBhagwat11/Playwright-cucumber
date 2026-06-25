# QA Fresher Automation Training Task – Part 3 

BDD Automation with Playwright & TypeScript 

---

##  Tech Stack

- Playwright
- Cucumber
- TypeScript
- Node.js
- Page Object Model (POM)

---

##  Project Structure

```text
Playwright-cucumber/
│
├── constants
│     └── routes.ts
|
├── features
│   ├── login.feature
│   └── form.feature
│   
├── pages
│   ├── loginPage.ts
│   └── FormPage.ts
│
├── step-definations
│   ├── login.steps.ts
│   └── form.steps.ts
│   
├── tets-data
│   └── userdata.ts
│   
├── utils
│   ├── hooks.ts
│   └── world.ts
│
│
├── package-lock.json
├── generate-report.js
├── playwright.config.ts
├── cucumber.js
├── package.json
└── tsconfig.json
```



##  Prerequisites

Install the following before running the project:

- Node.js (v18 or above)
- npm

Verify installation:

```bash
node -v
npm -v
```

---

##  Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

##  Running Tests

Run all tests:

```bash
npm test
```

Or:

```bash
npx cucumber-js
```

---

##  Sample Feature

```gherkin
Feature: Login Functionality

  Scenario: Successful Login
    Given User navigates to login page
    When User enters valid username
    And User enters valid password
    And User clicks login button
    Then User should be redirected to dashboard
```

---

##  Page Object Model Example

```typescript
export class LoginPage {
  constructor(private page) {}

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}
```

---

##  Test Reports

Generate reports after execution:

```bash
npm run report
```

Reports can be found under:

```text
reports/
```

---


##  Test Scenarios Covered

### Login Module

- Valid Login
- Invalid Login
- Verify error message visibility
- Verify logout functionality
- Login with multiple credentials
  

### Form Module

- Submit form with multiple fields

---

##  Useful Commands

Install dependencies:

```bash
npm install
```

Install browsers:

```bash
npx playwright install
```

Execute tests:

```bash
npm test
```

Run tagged scenarios:

```bash
npx cucumber-js --tags "@smoke"
```

Generate report:

```bash
npm run report
```

---
