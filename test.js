'use strict';
var assert = require('assert');
var isUppercase = require('./');

it('should test if a string is all uppercase', function () {
	assert(isUppercase('UNICORNS'));
	assert(!isUppercase('uNICORNS'));
	assert(isUppercase('1'));
	assert(isUppercase('A'));
	assert(!isUppercase('a'));
	assert(isUppercase('💩'));
});

it('should throw when passing non-string input', function () {
	[function () {}, null, undefined, 23].forEach(function (input) {
		assert.throws(function () {
			isUppercase(input);
		});
	});
});
