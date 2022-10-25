/**
 * expect.stringContaining used like expect.objectContaining & expect.arrayContaining
 */

describe('test stringContaining', () => {
	const goal = 'jim'
	it('include goal', () => {
		expect('jimmy').toEqual(expect.stringContaining(goal))
	})
})
