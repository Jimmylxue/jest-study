/**
 * sometimes we should ensure count of function return, which is similar function running count at most time
 *  jest is ensure that, so, the author privier 'expect.toHaveReturnedTimes' API for us to check it
 */

describe('test count of function return', () => {
	const fn = jest.fn(() => false)
	fn()
	fn()
	fn()
	it('expect.toHaveReturnedTimes API', () => {
		/**
		 * those is check function was called three times
		 */
		expect(fn).toHaveReturnedTimes(3)
	})
})
