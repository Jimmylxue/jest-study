/**
 * there are some jest provider function about check number
 */

test('two add two', () => {
	const sum = 2 + 2
	/**
	 * When checkout typeof number , 'toEqual' and 'toBe' is equivalent
	 */
	expect(sum).toEqual(4)
	expect(sum).toBe(4)

	expect(sum).toBeGreaterThan(3) // same as '>'
	expect(sum).toBeGreaterThanOrEqual(3.5) // same as '>=' : 4 >= 3.5

	expect(sum).toBeLessThan(5) // same as '<'
	expect(sum).toBeLessThanOrEqual(5.5) // same as '<='
})

test('typeof float add or min', () => {
	const sum = 0.1 + 0.2
	/**
	 * As we all know, '0.1 + 0.2' are never to be 0.3 at computer world,
	 *  the true value is 0.30000000...4
	 * So, cover float number calculation we can't use 'toEqual'
	 *  expect(sum).toEqual(0.3) // that is alway false pass fail
	 */

	/**
	 * Use toBeCloseTo to check the float-number is better way
	 */
	expect(sum).toBeCloseTo(0.3)
})
