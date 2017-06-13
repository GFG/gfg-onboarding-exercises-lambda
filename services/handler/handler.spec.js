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
      handler.helloInter({ pathParameters: { name: 'Chan' } }, ctx, (err, data) => {
        expect(data.body).to.deep.equal(JSON.stringify({ say: 'HI Chan' }));
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
      handler.helloInter({}, ctx, (err, data) => {
        expect(data.body).to.deep.equal(
          JSON.stringify({ say: 'HI People' })
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
