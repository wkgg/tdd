"use strict"

var convertToBaseUnit = function (unit, num) {
  var unitMapping = {
    'cm': 1,
    'm': 100,
    'km': 100000
  }
  return num * unitMapping[unit]
};

module.exports = class Length {
  constructor(num, unit) {
    if(unit == undefined) unit = 'cm'
    this.num = num
    this.unit = unit
  }

  equal(anotherLength) {
    return convertToBaseUnit(this.unit, this.num) ==
      convertToBaseUnit(anotherLength.unit, anotherLength.num)
  }
}