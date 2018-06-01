'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export berycoincore-lib', function() {
    var berycoincore = require('../');
    should.exist(berycoincore.lib);
    should.exist(berycoincore.lib.Transaction);
    should.exist(berycoincore.lib.Block);
  });
});
