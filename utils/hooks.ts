import { Before, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { CustomWorld } from "./world";
import { LoginPage } from "../pages/loginPage";
import { FormPage } from "../pages/FormPage";

setDefaultTimeout(30000);


Before(async function (this: CustomWorld) {

  console.log("Before hook executed");

  this.browser = await chromium.launch({
    headless: true,
  });

  this.context = await this.browser.newContext();

  this.page = await this.context.newPage();

  this.loginPage = new LoginPage(this.page);
  this.formPage = new FormPage(this.page);
  
});

After(async function (this: CustomWorld, scenario) {

  if (scenario.result?.status === Status.FAILED) {

    await this.page.screenshot({
      path: `screenshots/${scenario.pickle.name}-${Date.now()}.png`,
      fullPage: true,
    });

    console.log("Screenshot captured for failed scenario");
  }

  await this.browser.close();
});