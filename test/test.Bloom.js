'use strict';

var chai = chai || require('chai');
var dogecore = dogecore || require('../dogecore');

var should = chai.should();

var BloomModule = dogecore.Script;
var Bloom;

describe('Bloom', function() {
  it('should initialze the main object', function() {
    should.exist(BloomModule);
  });
  it('should be able to create class', function() {
    Bloom = BloomModule;
    should.exist(Bloom);
  });
  it('should be able to create instance', function() {
    var s = new Bloom();
    should.exist(s);
  });
});





