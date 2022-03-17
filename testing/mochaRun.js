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
      reportPageTitle: "Assignments Report",
      reportTitle: "Assignments Report",
      reportDir: `test-reports/test_${test_id}/user_${user_id}`,
      assetsDir: `test-reports/test_${test_id}/user_${user_id}/assets`,
      reportFilename: "index"
    },
    dispose: () => {console.log("Disposed")}
  });

  mocha.addFile(`test/test_${test_id}`);
  const runner = mocha.run();

  return new Promise((resolve) => {
    runner.on("end", function () {
      console.log("end");
      resolve("success");
    });
  });
};
