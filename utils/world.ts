import { setWorldConstructor } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "playwright";
import { LoginPage } from "../pages/loginPage";
import { FormPage } from "../pages/FormPage";

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;
  formPage!: FormPage;
}

setWorldConstructor(CustomWorld);