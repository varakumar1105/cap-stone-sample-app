const s3FolderUpload = require('s3-folder-upload')

const credentials = {
    "accessKeyId": process.env.AWS_S3_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_S3_SECRET_ACCESS_KEY,
    "region": process.env.AWS_S3_REGION,
    "bucket": process.env.AWS_S3_BUCKET
}

const s3BaseURL = "https://capstone-serverless-deployment.s3.ap-south-1.amazonaws.com"

module.exports.uploadToS3 = async (user_id, test_id) => {

    const datetime = Date.now().toString()
    const directoryName = `test-reports/${test_id}/${user_id}`

    console.log(credentials);

    // optional options to be passed as parameter to the method
    const options = {
        useFoldersForFileTypes: false,
        useIAMRoleCredentials: false,
        uploadFolder: `/test_reports/${test_id}/${user_id}/${datetime}`
    }

    // optional cloudfront invalidation rule
    const invalidation = {}

    let uploadedStatus = s3FolderUpload(directoryName, credentials, options, invalidation)

    return {
        uploadedStatus: uploadedStatus,
        destinationURL: `${s3BaseURL}/test_reports/${test_id}/${user_id}/${datetime}/`
    }
}