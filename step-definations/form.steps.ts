import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { CustomWorld } from "../utils/world";
import { FormPage } from "../pages/FormPage";

Given(
    "user is on form page", 
    async function (this: CustomWorld) {
        const formPage = new FormPage(this.page);
        await formPage.navigate();
});


When(
    "user fills the form with following data:",
    async function (this:CustomWorld, table: DataTable) {
        
        const rows = table.hashes()

        for (const row of rows){
            switch(row.field){
                case 'name':
                await this.formPage.enterName(row.value)
                break;

                case 'email':
                await this.formPage.enterEmail(row.value)
                break;

                case 'address':
                await this.formPage.enterAddress(row.value)
                break;

            }

        }
        await this.formPage.clickSubmit()
    }
);

Then(
    "form should be submitted successfully",
    async function (this:CustomWorld) {
        await this.formPage.verifyFormSubmission()
    }

)
