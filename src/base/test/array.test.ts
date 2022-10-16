/**
 * there are contain array and iterables
 *
 *  like Array Prototype function, jest also provider similar contain function is call 'toContain'
 */

test('check array function', () => {
	const arr = ['jimmy', 'jack', 'jest']
	// array can use toContain
	expect(arr).toContain('jimmy')
	// iterables also
	expect(new Set(arr)).toContain('jest')
})
