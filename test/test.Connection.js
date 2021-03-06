'use strict';

var chai = chai || require('chai');
var dogecore = dogecore || require('../dogecore');

var should = chai.should();

var ConnectionModule = dogecore.Connection;
var Connection;
var nop = function() {};

describe('Connection', function() {
  it('should initialze the main object', function() {
    should.exist(ConnectionModule);
  });
  it('should be able to create class', function() {
    Connection = ConnectionModule;
    should.exist(Connection);
  });
  it('should be able to create instance', function() {
    var mSocket = {server: null, addListener: nop},
      mPeer;
    var c = new Connection(mSocket, mPeer);
    should.exist(c);
  });
});





