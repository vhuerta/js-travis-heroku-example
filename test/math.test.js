'use strict';

import math from './../src/math';

describe('Testing math', () => {

  it('should return 10', () => {
    math.sum(5, 5).should.equal(10);
  });

  it('should return 10', done => {
    math.div(20, 2).should.equal(10);
    setTimeout(done, 60 * 1000);
  });

});
