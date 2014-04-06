'use strict';

var chai = chai || require('chai');
var dogecore = dogecore || require('../dogecore');

var should = chai.should();

var WalletModule = dogecore.Wallet;
var Wallet;

describe('Wallet', function() {
  it('should initialze the main object', function() {
    should.exist(WalletModule);
  });
  it('should be able to create class', function() {
    Wallet = WalletModule;
    should.exist(Wallet);
  });
  it('should be able to create instance', function() {
    var s = new Wallet();
    should.exist(s);
  });
});





