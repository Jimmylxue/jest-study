/**
 * Sometimes we has some fail test function
 * in order to check which cause the fail, we can use 'test.only' to check it
 *
 *  the other test of without 'test.only' will not run!
 */

test('this will be the only test that runs', () => {
	expect(true).toBe(false)
})

test.only('this test will not run', () => {
	expect('A').toBe('A')
})
