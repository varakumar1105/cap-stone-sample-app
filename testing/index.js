const { mochaRun } = require("./mochaRun");
const fs = require("fs")

const index = async () => {
  const testDetails = { user_id: 200, test_id: 101 };
  try {

    fs.rmSync('test-reports', { recursive: true }); 

    const result = await mochaRun(testDetails);

    const testReportStatus = await new Promise((resolve, reject) => {
      (function waitForDirectory(){
          if (fs.existsSync("test-reports")) return resolve(true);
          setTimeout(waitForDirectory, 100);
      })();
    });

    if (testReportStatus) {
      console.log("test report generation status: ", result)
      process.exit(-1)
    }
  } catch (error) {
    console.log(`code execution failed: ${error}`)
  }
};

index()