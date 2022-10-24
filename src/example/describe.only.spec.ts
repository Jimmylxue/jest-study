describe('test common describe', () => {
	// describe will still running, but just only does'n test, which is call skip
	console.log('common describe testing')
	test('1+1 === 2', () => {
		expect(1 + 1).toBe(2)
	})
})

/**
 * Only below describe will test on this demo, which is because it has 'describe.only'
 *  lick the name, 'describe.only' will only running it in those file
 *
 * if we want to run only one block, we can use 'describe.only'
 */

describe.only('test only describe', () => {
	console.log('only describe testing')
	test('2+2 === 4', () => {
		expect(2 + 2).toBe(4)
	})
})
