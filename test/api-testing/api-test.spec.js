'use strict';

const newman = require('newman');
const postmanCollection = require('./api-test.json');
const jsonData = require('./api-test-data.json');

newman.run({
  collection: postmanCollection,
  iterationData: jsonData,
  globals: {},
  environment: {
    values: [
      {
        enabled: true,
        key: 'url',
        value: process.env.API_URL,
        type: 'text'
      }
    ]
  },
  suppressExitCode: false,
  reporters: 'cli'
}, (err, summary) => {
  if (err || summary.error || summary.run.failures.length > 0) {
    throw (process.exit(1));
  }
});
