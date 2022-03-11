const AWS = require("aws-sdk"); // from AWS SDK
const fs = require("fs"); // from node.js

const path = require("path"); // from node.js

const s3BaseURL = "https://capstone-serverless-deployment.s3.ap-south-1.amazonaws.com"

const credentials = {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    region: process.env.AWS_S3_REGION
}

module.exports.uploadToS3 = async (user_id, test_id) => {
        
    const bucketName = process.env.AWS_S3_BUCKET
    const s3Path = `test-reports/${test_id}/${user_id}`

    AWS.config.update(credentials);
    const s3 = new AWS.S3();

    function walkSync(currentDirPath, callback) {
        fs.readdirSync(currentDirPath).forEach(function (name) {
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath, stat);
            } else if (stat.isDirectory()) {
                walkSync(filePath, callback);
            }
        });
    }

    walkSync(s3Path, function(filePath, stat) {
        let bucketPath = filePath.substring(s3Path.length+1);
        let params = {Bucket: bucketName, Key: bucketPath, Body: fs.readFileSync(filePath) };
        s3.putObject(params, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log('Successfully uploaded '+ bucketPath +' to ' + bucketName);
            }
        });
    });

    return {
        uploadedStatus: "SUCCESS",
        destinationURL: `${s3BaseURL}/test-reports/${test_id}/${user_id}/`
    }
}