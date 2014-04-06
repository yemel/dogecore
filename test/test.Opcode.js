'use strict';

var chai = chai || require('chai');
var dogecore = dogecore || require('../dogecore');

var should = chai.should();

var OpcodeModule = dogecore.Opcode;
var Opcode;

describe('Opcode', function() {
  it('should initialze the main object', function() {
    should.exist(OpcodeModule);
  });
  it('should be able to create class', function() {
    Opcode = OpcodeModule;
    should.exist(Opcode);
  });
  it('should be able to create instance', function() {
    var oc = new Opcode(81);
    should.exist(oc);
  });
  it('should be able to create some constants', function() {
    // TODO: test works in node but not in browser
    for (var i in Opcode.map) {
      eval('var ' + i + ' = ' + Opcode.map[i] + ';');
    }
    should.exist(OP_VER);
    should.exist(OP_HASH160);
    should.exist(OP_RETURN);
    should.exist(OP_EQUALVERIFY);
    should.exist(OP_CHECKSIG);
    should.exist(OP_CHECKMULTISIG);
  });
  it('#asList should work', function() {
    var list = Opcode.asList();
    (typeof(list[0])).should.equal('string');
    list.length.should.equal(116);
  });
});
