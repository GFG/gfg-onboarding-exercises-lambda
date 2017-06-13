'use strict';

// require('babel-register');

const randomData = function() {
  return Math.random().toString();
};

const jsonRepsonse = (body = {}, statusCode = 200) => (
  { statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: typeof body === 'string' ? body : JSON.stringify(body)
  }
);

module.exports = {
  jsonRepsonse,
  randomData
};
