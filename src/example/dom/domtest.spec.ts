/**
 * @jest-environment jsdom
 */

/**
 * we also can test browser API by jest, just should do some configuration：
 *  - first of all, we should add ‘jest-environment-jsdom’ in our project,
 *    which we can use `yarn add -D jest-environment-jsdom` to download it!
 *
 *  - in addition, we should config the 'jest.config.js' file, exchange ‘testEnvironment’ to 'jsdom',
 *    which default value is 'node'
 *
 *  - last but not least, we finally can test dom api by jest!
 */

function generateDiv() {
	const div = document.createElement('div')
	div.className = 'snow-div'
	document.body.append(div)
}

describe('test dom', () => {
	test('test DOM API', () => {
		generateDiv()
		generateDiv()
		generateDiv()
		generateDiv()
		expect(document.getElementsByClassName('snow-div')).toHaveLength(4)
	})
})
