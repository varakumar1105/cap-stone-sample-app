
# Serverless(SLS) Setup 

## Setting up Serverless

**https://serverless.com**

* Video Tutotials
  * https://www.serverless.com/learn/tutorial/what-is-serverless (Upto API Gateway video is sufficient)
* Installation
  * https://www.serverless.com/framework/docs/getting-started/


## Developer Commands

* Logging into sls account
  * `sls login`
* Running serverless offline
  * `sls offline`
* Deploy app to AWS Lambda (make sure you configured aws credentials)
  * `sls deploy`


* Access endpoint locally
  * `curl -X GET 'http://localhost:3000/dev/hello?url=www.google.com'`
* Access endpoint aws gateway
  * `curl -X GET 'https://95di8kxx8h.execute-api.ap-southeast-1.amazonaws.com/dev/hello/?url=https://www.google.com/'`


## More about PoC:

**Repository** - `https://github.com/varakumar1105/testing-with-lambda`

**Branch** - `master`

Added an endpoint which takes and URL as a query parameter and will run puppeteer test cases in AWS lambda and will send result as a response


## Todos

* Have to test `POST` request with authentication.

serverless create --template aws-nodejs --path myService
serverless invoke local --function functionName