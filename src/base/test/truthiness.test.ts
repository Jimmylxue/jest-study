/**
 * Sometimes we usually should be check 'null' 'undefined' '0' 'false',
 *  Fortunately, jest has some useful function to check those,
 *  some usage as follow:
 */

test('null', () => {
	const n = null
	expect(n).toBeNull() // is null
	expect(n).toBeDefined() // is defined not undefined
	expect(n).not.toBeUndefined() // not undefined
	expect(n).not.toBeTruthy() // Boolean() check
	expect(n).toBeFalsy() // Boolean() check
})

test('zero', () => {
	const z = 0
	expect(z).not.toBeNull()
	expect(z).toBeDefined()
	expect(z).not.toBeUndefined()
	expect(z).not.toBeTruthy()
	expect(z).toBeFalsy()
})
