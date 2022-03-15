const { mochaRun } = require("./mochaRun");
const playwright = require("playwright-aws-lambda");

("use strict");

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.runTests = async (event, context) => {
  let browser = null;
  const testDetails = { user_id: 200, test_id: 101 };
  try {
    const result = await mochaRun(testDetails);
    return {
      statusCode: 200,
      result: result,
    };
  } catch (error) {
    return `code execution failed: ${error}`;
  }
};
