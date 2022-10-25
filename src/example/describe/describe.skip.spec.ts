describe('test common describe', () => {
	console.log('common describe testing')
	test('1+1 === 2', () => {
		expect(1 + 1).toBe(2)
	})
})

/**
 * like 'describe.only' => 'describe.skip' will skip this test
 *
 */

describe.skip('test skip describe', () => {
	console.log('only describe testing')
	test('2+2 === 4', () => {
		expect(2 + 2).toBe(4)
	})
})
