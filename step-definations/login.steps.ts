import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../utils/world";
import { routes } from "../constants/routes";
import {LoginPage} from "../pages/loginPage";
Given(
"user navigate to login page",
async function (this: CustomWorld) {
const loginpage = new LoginPage(this.page)
console.log("Page:", this.page);
await loginpage.navigationToURL()
}
);

When(
"user enters valid username",
async function (this: CustomWorld) {
const loginpage = new LoginPage(this.page)
await loginpage.enterValidUsername();
}
);

When(
"user enters valid password",
async function (this: CustomWorld) {
const loginpage = new LoginPage(this.page)
await loginpage.enterValidPassword();
}
);

When(
"clicks on login button",
async function (this: CustomWorld) {
const loginpage = new LoginPage(this.page)
await loginpage.clickLogin();
}
);

Then(
"user should be navigated to SecureArea",
async function (this: CustomWorld) {
await expect(this.page).toHaveURL(routes.SecureArea);  
}
);

When(
"user enters invalid username",
async function (this: CustomWorld) {
const loginpage = new LoginPage(this.page)
await loginpage.enterinValidUsername();
}
);

When(
"user enters invalid password",
async function (this: CustomWorld) {
const loginpage = new LoginPage(this.page)
await loginpage.enterinValidPassword();
}
);

Then(
"error message should be displayed and url contains login",
async function (this: CustomWorld) {
await expect(
this.page.getByText("Your username is invalid!")
).toBeVisible();


await expect(this.page).toHaveURL(routes.LoginPage);

}
);

Then(
"error message should be displayed",
async function (this: CustomWorld) {
await expect(
  this.page.locator("#flash")
).toContainText("invalid");
}
);

When(
"user click on logout button",
async function (this: CustomWorld) {
    const loginpage = new LoginPage(this.page)
await loginpage.clickLogout();
}
);

Then(
"user navigate back to login page",
async function (this: CustomWorld) {
await expect(this.page).toHaveURL(routes.LoginPage);
}
);

// Scenario Outline steps

When(
"user enters username {string}",
async function (this: CustomWorld, username: string) {
     const loginpage = new LoginPage(this.page)
await loginpage.usernameBox.fill(username);
}
);

When(
"user enters password {string}",
async function (this: CustomWorld, password: string) {
    const loginpage = new LoginPage(this.page)
await loginpage.passwordBox.fill(password);
}
);

Then(
"login result should be {string}",
async function (this: CustomWorld, result: string) {
if (result === "success") {
await expect(this.page).toHaveURL(routes.SecureArea);
} else {
await expect(
this.page.getByText("Your username is invalid!")
).toBeVisible();


  await expect(this.page).toHaveURL(routes.LoginPage);
}


}
);
