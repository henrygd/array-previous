var assert = require('assert')
var previous = require('./array-previous')

var arr = ['a', 'b', 'c']

// if none specified next should return last
assert.equal(previous(arr), 'c')

// previous item in array
assert.equal(previous(arr, 'c'), 'b')

// previous item + loop
assert.equal(previous(arr, 'a'), 'c')

console.log('passed')
