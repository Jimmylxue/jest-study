/**
 * we can use expect.toHaveReturnedWith(value) to ensure function return value
 */

/**
 * use some of API from expect will most convenient us when should do some small logic
 */
describe('test function return value', () => {
	const user = {
		name: 'jimmy',
	}
	const fn = jest.fn(obj => obj.name)
	fn(user)
	it('test function return by expect.toHaveReturnedWith(value)', () => {
		expect(fn).toHaveReturnedWith('jimmy')
	})
})
