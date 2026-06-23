import { Locator, Page, expect } from "playwright/test";
import { routes } from "../constants/routes";

export class FormPage {
  protected page: Page;
  readonly FullName: Locator;
  readonly Email: Locator;
  readonly Address: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.FullName = page.getByPlaceholder("Full Name");
    this.Email = page.locator("#userEmail");
    this.Address = page.getByPlaceholder("Current Address");
    this.submit = page.locator("#submit");
  }

  async navigate() {
    await this.page.goto(routes.Form);
  }

  async enterName(name: string) {
    await this.FullName.fill(name);
  }

  async enterEmail(email: string) {
    await this.Email.fill(email);
  }

  async enterAddress(address: string) {
    await this.Address.fill(address);
  }

  async clickSubmit() {
     await this.submit.click();
  }

  async verifyFormSubmission() {
    await expect(this.page.locator("#output")).toBeVisible();
  }
}
