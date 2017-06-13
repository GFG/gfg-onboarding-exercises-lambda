'use strict';

const jsonRepsonse = require('../util').jsonRepsonse;
const AWS = require('aws-sdk');


// console.log('process.env', JSON.stringify(process.env));
const endpoint = process.env.SERVERLESS_SIMULATE ?
  process.env.DOCKER_S3_LOCAL :
  undefined;

export const helloInter = (event, context, callback) => {
  const name = (event.pathParameters && event.pathParameters.name) ? event.pathParameters.name : 'People';
  // callback(null, jsonRepsonse({ say: `HI ${name}` }, 200));
    callback("some error type")

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
export const lambdaInvoke = (event, context, callback) => {
  const name = event.name || 'People';
  callback(null, { say: `HI ${name}` });
};

export const webhook = (event, context, callback) => {
  let statusCode = 200;

  const S3 = new AWS.S3({
    s3ForcePathStyle: true,
    endpoint
  });
  console.log(endpoint);
  S3.createBucket({ Bucket: 'bucket-gfg-test' }, () => {});
  S3.putObject({
    Bucket: 'bucket-gfg-test',
    Key: '1234',
    Body: new Buffer('abcd')
  }, (error, data) => {
    console.log('error', error);
    console.log('data', data);
    if (error) {
      statusCode = 500;
    }
    const result = error ? JSON.stringify(error) : JSON.stringify(data);
    return callback(null, callback(null, jsonRepsonse(result, statusCode)));
  });
};

export const filefound = (event, context, callback) => {
  // this is a sample to trigger by S3 bucket!
  console.log('event filefound', JSON.stringify(event));
};
