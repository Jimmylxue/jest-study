function fetchData(fn: (error: any, data: any) => void) {
	setTimeout(() => {
		// fn('error', null)
		fn(null, 'success')
	})
	// fn('error', null)
}

/**
 * the wrong way:
 * 	the problem is that the test will complete as soon as ‘fetchData’ completes,
 * 	so callback will never be called
 */
test('wrong way to test call back', () => {
	function callBack(error: any, data: any) {
		if (error) {
			throw error
		}
		expect(data).toBe('success')
	}

	fetchData(callBack)
})

/**
 *	the second params of function test, has 'done' function
 *		once use import done, the test will completed until done called
 * 		that is fight way to test callback
 *
 *
 *  done can't used with promise, which will be lead to memory leak in our tests
 *
 */

test('right way test call back', done => {
	function callBack(error: any, data: any) {
		if (error) {
			done()
			return
		}
		expect(data).toBe('success')
		done()
	}

	fetchData(callBack)
})
