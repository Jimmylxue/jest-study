/**
 * expect.anything is a series of data, which is without 'null' and 'undefined'
 *
 *  so, sometimes if we want to check some value without null and undefined, to use expect.anything is very convenient！
 */

describe('test => expect.anything API', () => {
	test('expect.anything', () => {
		const mock = jest.fn(x => x + 3)
		;[1, 2, 3].map(x => mock(x))
		/**
		 * this test will be pass!
		 *  mock.mock.results[0].value === 1 result is false
		 *  false is Unequal null and undefined, so, this test will be pass
		 */
		expect(mock.mock.results[0].value === 1).toEqual(expect.anything())
		/**
		 * below pass will be failed
		 */
		// expect(undefined).toEqual(expect.anything())
		// expect(null).toEqual(expect.anything())
	})
})
