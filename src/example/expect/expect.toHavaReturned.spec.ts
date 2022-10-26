/**
 * use expect(fn).toHaveReturned() can check an mock function whether successful return (return undefined still is return)
 *
 * if has throw some error when function running, where will test fail !
 */

describe('test returns', () => {
	test('drinks returns', () => {
		const drink = jest.fn(() => {
			return true
			// throw new Error('test error')
		})
		drink()
		expect(drink).toHaveReturned()
	})
})
