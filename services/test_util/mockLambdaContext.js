'use strict';

const sinon = require('sinon');

module.exports = function mock() {
  this.succeed = sinon.stub();
  this.fail = sinon.stub();
  this.reset = () => {
    this.succeed.reset();
    this.fail.reset();
  };
};
