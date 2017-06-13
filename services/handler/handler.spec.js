'use strict';

const expect = require('chai').expect;
const handler = require('./handler');
const MockContext = require('../test_util/mockLambdaContext');

describe('Some Lambda Func', () => {
  let ctx;

  beforeEach(() => {
    ctx = new MockContext();
  });

  describe('When pathParameters have name call Chan', () => {
    it('should succeed with Hi Chan', (done) => {
      handler.hello({ pathParameters: { name: 'Chan' } }, ctx, (err, data) => {
        expect(data.body).to.deep.equal(JSON.stringify({ say: 'helloNice' }));
        done();
      });
    });

    after(() => {
      // reset counters
      ctx.reset();
    });
  });
  describe('When pathParameters no name', () => {
    it('should succeed with Hi Moses', (done) => {
      handler.hello({}, ctx, (err, data) => {
        expect(data.body).to.deep.equal(
          JSON.stringify({ say: 'helloNice' })
        );
        done();
      });
    });

    after(() => {
      // reset counters
      ctx.reset();
    });
  });
});
