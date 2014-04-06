'use strict';

var chai = chai || require('chai');
var dogecore = dogecore || require('../dogecore');

var should = chai.should();

var PeerManagerModule = dogecore.PeerManager || require('./PeerManager');

var PeerManager;

describe('PeerManager', function() {
  it('should initialze the main object', function() {
    should.exist(PeerManagerModule);
  });
  it('should be able to create class', function() {
    PeerManager = PeerManagerModule;
    should.exist(PeerManager);
  });
  it('should be able to create instance', function() {
    var pm = new PeerManager();
    should.exist(pm);
  });
  it('should be able to start instance', function() {
    var pm = new PeerManager();
    pm.start.bind(pm).should.not.throw();
  });
  it('should be able to stop instance', function() {
    var pm = new PeerManager();
    pm.start();
    pm.stop.bind(pm).should.not.throw();
  });
});





