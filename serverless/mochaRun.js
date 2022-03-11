let Mocha = require("mocha");

module.exports.mochaRun = (userId, testId) => {

    let mocha = new Mocha({
    reporter: "mochawesome",
    reporterOptions: {
      code: false,
      charts: true,
      overwrite: true,
      saveJson: true,
      reportPageTitle: "Test Report",
      reportTitle: "Test Report",
      reportDir: `./test-reports/${testId}/${userId}`,
      assetsDir: `./test-reports/${testId}/${userId}/assets`,
      reportFilename: "index",
    },
  });

  mocha.addFile(`./test/${testId}.js`);
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