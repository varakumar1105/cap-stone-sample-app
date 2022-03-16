const { mochaRun } = require("./mochaRun");

const index = async () => {
  const testDetails = { user_id: 200, test_id: 101 };
  try {
    const result = await mochaRun(testDetails);
    console.log(`response => `, {
      statusCode: 200,
      result: result,
    })
    setTimeout(() => {
      process.exit(-1)
    }, 2000)
  } catch (error) {
    console.log(`code execution failed: ${error}`)
  }
};

index()

console.log("5")