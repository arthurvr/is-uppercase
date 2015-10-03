import test from 'ava';
import isUppercase from './';

test('should test if a string is all uppercase', t => {
	t.true(isUppercase('UNICORNS'));
	t.true(isUppercase('1'));
	t.true(isUppercase('A'));
	t.true(isUppercase('💩'));

	t.false(isUppercase('uNICORNS'));
	t.false(isUppercase('a'));

	t.end();
});

test('should throw when passing non-string input', t => {
	[null, undefined, 23].forEach(input => {
		t.throws(() => {
			isUppercase(input);
		});
	});

	t.end();
});
