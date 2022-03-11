const AWS = require('aws-sdk');
const fs = require('fs');

const credentials = {
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION
}

module.exports.downloadFromS3 = async (project_id, user_id) => {

  console.log("credentials ==> ", credentials)

  AWS.config.update(credentials);
  const s3 = new AWS.S3();
  const fileKey = `capstone-projects/${user_id}/${project_id}/history.zip`

  console.log("fileKey ==> ", fileKey)

  const params = {
    Bucket: 'capstone-serverless-deployment',
    Key: fileKey,
  };

  let file = fs.createWriteStream('./history.zip')

  return new Promise((resolve, reject) => {
      s3.getObject(params).createReadStream()
      .on('end', () => {
          return resolve();
      })
      .on('error', (error) => {
          return reject(error);
      }).pipe(file)
  });
}