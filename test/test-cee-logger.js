const mocha = require('mocha');
const suite = mocha.suite;
const test = mocha.test;
const chai = require('chai');
const assert = chai.assert;

suite('test', function() {
  test('test', function() {
    assert.equal(true, true);
  });
});
