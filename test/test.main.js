'use strict';

var chai = chai || require('chai');
var dogecore = dogecore || require('../dogecore');

var expect = chai.expect;
var should = chai.should();

describe('Initialization of dogecore', function() {
  it('should initialze the main object', function() {
    should.exist(dogecore);
  });
});
