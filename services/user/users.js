'use strict';

import AWS from 'aws-sdk';
import { jsonRepsonse } from '../util';

// if (!process.env.SERVERLESS_SIMULATE) {
//   AWS.config.region = process.env.REGION;
// }
const endpoint = process.env.SERVERLESS_SIMULATE ?
  process.env.SERVERLESS_SIMULATE_LAMBDA_ENDPOINT :
  undefined;
console.log(endpoint);
const lambda = new AWS.Lambda({
  endpoint
  // endpoint:"http://localhost:9615"
});

export const get = (event, context, callback) => {
  const name = (event.pathParameters && event.pathParameters.name) ? event.pathParameters.name : 'lol';

  const params = {
    FunctionName: `${process.env.SERVICE_NAME}-${process.env.STAGE}-lambdaInvoke`, // the lambda function we are going to invoke
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    // Payload: JSON.stringify({ name: (event.pathParameters.name || 'alex') })
    Payload: JSON.stringify({
      name
    }),
  };
  console.log('what?', JSON.stringify(params));
  lambda.invoke(params, (err, data) => {
    if (err) {
      console.log('err', JSON.stringify(err));
      callback(err);
    } else {
      console.log(`Lambda_B said ${data.Payload}`);
      callback(null, jsonRepsonse(JSON.parse(data.Payload), 200));
    }
  });
};


export const tmp = () => 'tmp';
