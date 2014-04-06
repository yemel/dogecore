'use strict';

var chai = chai || require('chai');
var dogecore = dogecore || require('../dogecore');

var should = chai.should();

var EncodedDataModule = dogecore.EncodedData;
var EncodedData;

describe('EncodedData', function() {
  it('should initialze the main object', function() {
    should.exist(EncodedDataModule);
  });
  it('should be able to create class', function() {
    EncodedData = EncodedDataModule;
    should.exist(EncodedData);
  });
  it('should be able to create an instance', function() {
    var ed = new EncodedData('1GMx4HdDmN78xzGvdQYkwrVqkmLDG1aMNT');
    should.exist(ed);
  });
});





