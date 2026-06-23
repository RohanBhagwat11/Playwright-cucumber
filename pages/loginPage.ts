import { Locator, Page } from "playwright";
import { routes } from "../constants/routes";
import { users } from "../test-data/userdata";

export class LoginPage {
  protected page: Page;
  public readonly usernameBox: Locator;
  public readonly passwordBox: Locator;
  public readonly loginButton: Locator;
  public readonly logoutButton: Locator;

  constructor(page: Page) {
    ((this.page = page),
      (this.usernameBox = page.getByRole("textbox", { name: "Username" })));
    this.passwordBox = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" }).first();
    this.logoutButton = page.getByRole("link", { name: "Logout" });
  }

  async navigationToURL() {
    await this.page.goto(routes.LoginPage);
  }

  async enterValidUsername() {
    const validUser = users.find((u) => u.type === "Valid")!;
    await this.usernameBox.fill(validUser.username);
  }

  async enterValidPassword() {
    const validUser = users.find((u) => u.type === "Valid")!;
    await this.passwordBox.fill(validUser.password);
  }

  async enterinValidUsername() {
    const invalidUser = users.find((u) => u.type === "Invalid")!;
    await this.usernameBox.fill(invalidUser.username);
  }

  async enterinValidPassword() {
    const invalidUser = users.find((u) => u.type === "Invalid")!;
    await this.passwordBox.fill(invalidUser.password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }
}
