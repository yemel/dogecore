'use strict';

var chai = chai || require('chai');
var dogecore = dogecore || require('../dogecore');

var should = chai.should();

var SINModule = dogecore.SIN;
var SIN;

describe('SIN', function() {
  it('should initialze the main object', function() {
    should.exist(SINModule);
  });
  it('should be able to create class', function() {
    SIN = SINModule;
    should.exist(SIN);
  });
  it('should be able to create instance', function() {
    var s = new SIN();
    should.exist(s);
  });
});





