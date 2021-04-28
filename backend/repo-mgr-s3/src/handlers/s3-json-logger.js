const AWS = require('aws-sdk');
const octoKit = require('@octokit/core');
const S3 = new AWS.S3();

/**
 * A Lambda function that logs the payload received from S3.
 */
exports.s3JsonLoggerHandler = async () => {
  const octokit = new octoKit.Octokit();
  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'vivekVells',
    repo: 'tech_challenge',
    path: 'songData.json'
  });

  // octokit responds the content in 'base64 encoding', decoding this to 'base64' here
  const bodyContent = Buffer.from(response.data.content?.toString(), 'base64');
  const params = {
    Body: Buffer.from(bodyContent, 'binary'), 
    Bucket: "iheartsongsbucket", 
    Key: "songData.json"
  };

  await S3.putObject(params).promise();
};
