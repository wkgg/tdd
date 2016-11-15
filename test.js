"use strict"

var Length = require('./length')
var assert = require('chai').assert

describe('compair two length', function() {
  it('should be equal when their length is same', function() {
    var lengthA = new Length(5)
    var lengthB = new Length(5)
    assert.isTrue(lengthA.equal(lengthB));
  })

  it('should not be equal when their length is not same', function() {
    var lengthA = new Length(5)
    var lengthB = new Length(4)
    assert.isNotTrue(lengthA.equal(lengthB));
  })

  it('should not be equal when their length number is same but length unit is not same', function() {
    var lengthA = new Length(5, "cm")
    var lengthB = new Length(5, "m")
    assert.isNotTrue(lengthA.equal(lengthB));
  })

  it('should be equal when their length number is same but length unit is same', function() {
    var lengthA = new Length(5, "m")
    var lengthB = new Length(5, "m")
    assert.isTrue(lengthA.equal(lengthB));
  })

  it('should be equal when lengthA is 5m and lengthB is 500cm', function() {
    var lengthA = new Length(5, "m")
    var lengthB = new Length(500, "cm")
    assert.isTrue(lengthA.equal(lengthB));
  })

  it('should be equal when lengthA is 5km and lengthB is 5000m', function() {
    var lengthA = new Length(5, "km")
    var lengthB = new Length(5000, "m")
    assert.isTrue(lengthA.equal(lengthB));
  })
})
