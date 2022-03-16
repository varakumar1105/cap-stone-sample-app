# Capstone Project Testing

### Running Frontend Server:

1. Navigate to `client/` directory 
2. Install Dependencies
    ```bash
    npm install
    ```
3. Start the server
    ```bash
    npm start
    ```

### Running Backend Server:

1. Navigate to `server/` directory 
2. Install Dependencies
    ```bash
    npm install
    ```
3. Start the server
    ```bash
    nodemon index.js
    ```

### Running E2E Test Cases:

1. Navigate to `serverless/` directory 
2. Install Dependencies
    ```bash
    npm install
    ```
3. Install supported browsers using playwright
    ```bash
    npx playwright install
    ```
4. Start the server
    ```bash
    nodemon index.js
    ```

## Todos

- [ ] Write an API call that accepts project id and the user id
- [ ] Get the projects `client.zip` and `server.zip` from the S3 using the project id and user id and extract them here

  Note: Unlike here, `client` and `server` folders will not be provided. We need to get them from S3
- [ ] Start the frontend and backend servers, then run the tests with the above commands
- [ ] After running test cases, compress the `test-reports` folder and upload it to S3, providing the URL to S3.

