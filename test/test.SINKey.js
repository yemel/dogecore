'use strict';

var chai = chai || require('chai');
var dogecore = dogecore || require('../dogecore');
var should = chai.should();

var SINKeyModule = dogecore.SINKey;
var SINKey;


describe('SINKey', function() {
  it('should initialze the main object', function() {
    should.exist(SINKeyModule);
  });
  it('should be able to create class', function() {
    SINKey = SINKeyModule;
    should.exist(SINKey);
  });
  it('should be able to create instance', function() {
    var sk = new SINKey();
    sk.generate();
    should.exist(sk.created);
    should.exist(sk.privKey.private);
    should.exist(sk.privKey.public);
    should.exist(sk.privKey.compressed);
  });
});
