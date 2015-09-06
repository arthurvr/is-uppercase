'use strict';
var test = require('ava');
var isUppercase = require('./');

test('should test if a string is all uppercase', function (t) {
	t.true(isUppercase('UNICORNS'));
	t.true(isUppercase('1'));
	t.true(isUppercase('A'));
	t.true(isUppercase('💩'));

	t.false(isUppercase('uNICORNS'));
	t.false(isUppercase('a'));

	t.end();
});

test('should throw when passing non-string input', function (t) {
	[function () {}, null, undefined, 23].forEach(function (input) {
		t.throws(function () {
			isUppercase(input);
		});
	});

	t.end();
});
