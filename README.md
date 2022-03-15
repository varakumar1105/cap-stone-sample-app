# Capstone project

### Steps

Navigate to client and start client app using below command

```bash
npm start
```

Navigate to server and start server app using using below command

```bash
nodemon index.js
```

Navigate to serveless folder and execute the handler function

```bash
serverless invoke local --function runTests
```

`npx playwright install` for installing supported browsers

### End-to-end Flow

- API call should be made with project id and user id
- Get the project from the S3 based on project id and user id
- Extract the project and run the frontend and backend servers and then run tests
- Compress the test results and upload it to S3 and provide the url

> serverless invoke local --function runTests
