# Capstone project

### Steps

1. Go to path `.\client\` and start client app using below command

```bash
npm start
```

2. Go to path `.\server\` and start server app using using below command

```bash
nodemon index.js
```

3. Navigate to serveless folder and execute the handler function

```bash
serverless invoke local --function runTests
```

Use the below command for installing supported browsers

```bash
npx playwright install
```

### End-to-end Flow

- API call should be made with project id and user id
- Get the project from the S3 based on project id and user id
- Extract the project and run the frontend and backend servers and then run tests
- Compress the test results and upload it to S3 and provide the url
