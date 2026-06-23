module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    // paths: ["features/**/form.feature"],

    require: [
      "step-definations/**/*.ts",
      // "step-definations/**/form.steps.ts",
      "utils/**/*.ts"
    ],

    requireModule: ["ts-node/register"],

    format: ["progress", "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html"]
  }
};