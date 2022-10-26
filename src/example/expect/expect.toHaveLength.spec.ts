/**
 * it's very easy, don't do some explain
 */
describe('test length', () => {
	it('test length', () => {
		expect([1, 2, 3]).toHaveLength(3)
		expect('abcd').toHaveLength(4)
		expect('').not.toHaveLength(4)
	})
})
