/**
 * this example is very important for us to improve the understand of jest test
 * so, we should take more time to see it
 */

class CustomError extends Error {
	constructor(msg: string) {
		super()
		this.name = 'binaryStringToNumber Error'
		this.message = msg
	}
}

function binaryStringToNumber(binaryString: string) {
	if (!/^[01]+$/.test(binaryString)) {
		throw new CustomError('Not a binary number.')
	}
	/**
	 * the second argument of parseInt is judge first argument decimal system
	 *  if second argument is 2, which is judge first argument is binary number
	 */
	return parseInt(binaryString, 2)
}

/**
 * describe can make a block for our test, we can split block for us understand branch
 *
 *  toThrowError API can check throwError Type
 */

describe('binaryStringToNumber', () => {
	describe('given an invalid binary string', () => {
		test('composed of non-number threw CustomError', () => {
			expect(() => binaryStringToNumber('abc')).toThrowError(CustomError)
		})

		test('with extra whitespace threw CustomError', () => {
			expect(() => binaryStringToNumber('  1001')).toThrowError(CustomError)
		})
	})

	describe('test an valid binary string', () => {
		test('return the current number', () => {
			expect(binaryStringToNumber('1001')).toBe(9)
		})
	})
})
