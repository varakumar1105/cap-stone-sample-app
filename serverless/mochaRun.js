let Mocha = require("mocha");

module.exports.mochaRun = (testDetails) => {
  const { user_id, test_id } = testDetails;
  let mocha = new Mocha({
    reporter: "mochawesome",
    reporterOptions: {
      code: false,
      charts: true,
      overwrite: true,
      saveJson: true,
      reportPageTitle: "Assignmets Report",
      reportTitle: "Assignmets Report",
      reportDir: `test-reports/test_${test_id}/user_${user_id}`,
      assetsDir: `test-reports/test_${test_id}/user_${user_id}/assets`,
      reportFilename: "index",
    },
  });

  mocha.addFile(`test/test_${test_id}`);
  const runner = mocha.run(function (failures) {
    process.exitCode = failures ? 1 : 0;
    if (failures) {
      console.error("Failed test cases");
    }
    return "Test cases executed successfully";
  });
  return new Promise((resolve) => {
    runner.on("start", function () {});
    runner.on("pass", function (test) {});
    runner.on("suite end", function () {
      // mocha.unloadFiles();
      resolve("success");
      console.log("mocha run ended");
    });
  });
};
