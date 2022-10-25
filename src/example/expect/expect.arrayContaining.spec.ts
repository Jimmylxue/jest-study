/**
 * expect API are provider some useful attribute for us to convenient us
 *
 *  one of convenient attribute is expect.arrayContaining
 *  which can make us write less code than without use it!
 *
 *  a example as follow:
 */

/**
 * test array contain with expect.arrayContaining
 *
 *  expect.arrayContaining() will help us to do some array diff logic,
 *  which is very convenient that write by ourself!
 */
describe('array containing', () => {
	// const expected = ['js', 'html', 'css']
	const expected = ['js']
	it('match even if has contain value of expected', () => {
		expect(['nodejs', 'vue', 'react', 'js']).toEqual(
			expect.arrayContaining(expected)
		)
	})
})

/**
 * test array contain without expect.arrayContaining
 *
 *  in this case, we write function handleInclude to check whether has array include
 *
 *  and this function is write by ourself, may be will has some bug on it,
 *  so, the best way is to use expect.arrayContaining
 */

function handleInclude(arr1: string[], arr2: string[]) {
	return arr1.every(v => arr2.includes(v))
}

describe('array containing', () => {
	// const expected = ['js', 'html', 'css']
	const expected = ['js']
	it('match even if has contain value of expected', () => {
		expect(
			handleInclude(expected, ['nodejs', 'vue', 'react', 'js'])
		).toBeTruthy()
	})
})
