// this handler function code is used to act as a data source for the gql query
const AWS = require('aws-sdk');
const S3= new AWS.S3();

exports.handler = async (event) => {
      try {
        console.log(`Hi from Node.js ${process.version} on Lambda!`);
        // Converted it to async/await syntax just to simplify.
        const data = await S3.getObject({Bucket: 'iheartsongsbucket', Key: 'songData.json'}).promise();
    
        return JSON.parse(data.Body.toString('utf-8'))
      }
      catch (err) {
          console.log('errror occurred....')
        return {
          statusCode: err.statusCode || 400,
          body: err.message || JSON.stringify(err.message)
        }
      }
};
