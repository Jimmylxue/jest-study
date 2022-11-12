import utils from '../utils'

/**
 * implementation means is running, which is an other expression
 */

jest.disableAutomock()

test('original implementation', () => {
	expect(utils.authorize()).toBe('token')
})
