const serverless = require("serverless-http");
const express = require("express");
const app = express();

const { mochaRun } = require('./mochaRun')
const { downloadFromS3 } = require('./downloadFromS3')
const { uploadToS3 } = require('./uploadToS3')

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.post("/download", async (req, res, next) => {
  const {project_id: projectId, user_id: userId} = JSON.parse(req.body)
  await downloadFromS3(projectId, userId)

  return res.status(200).json({
    statusCode: 200,
    body: JSON.stringify({
      download_status: "SUCCESS"
    }),
  });
});


app.post("/test", async (req, res, next) => {
  const {user_id: userId, test_id: testId} = JSON.parse(req.body)
  console.log("req.body ==> ", JSON.parse(req.body))

  // let testCasesOutput = await mochaRun(userId, testId);
  let {uploadedStatus, destinationURL} = await uploadToS3(userId, testId)
  console.log('uploadedStatus :', uploadedStatus);

  return res.status(200).json({
    statusCode: 200,
    body: JSON.stringify({
      url: destinationURL,
      output: "testCasesOutput",
      upload_status: uploadedStatus
    }),
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
