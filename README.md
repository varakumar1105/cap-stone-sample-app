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

- [ ] Write an API call that accepts project id and user id
- [ ] Get the project `client.zip` and `server.zip` from the S3 using project id and user id and extract them here
- [ ] Run the frontend and backend servers and then run tests using above commands
- [ ] Compress the `test-results` folder which we get after running test cases and upload it to the S3 and provide the S3 URL
