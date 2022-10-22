function forEach(items: any[], callback: (params: any) => void) {
	for (let i = 0; i < items.length; i++) {
		callback(items[i])
	}
}

/**
 * jest.fn can create a function, which provider series of useful attribute for us!
 *  for example:
 *    .mock ：
 *      > this is a special attribute! which is trick value kept it
 *      .call.length => number of function was called time
 *      .result => result of implement implement return
 */

const mockCallBack = jest.fn(x => x + 3)

forEach([1, 2, 3], mockCallBack)

test('number of mockCallBack function call count!', () => {
	/**
	 *  .calls.length =>
	 *    mockCallBack function number of call!
	 *    in this case, mockCallBack will be call three time!
	 */
	expect(mockCallBack.mock.calls.length).toBe(3)
})

test('test first mockCallBack call of first argument', () => {
	// the first time mockCallBack running accept argument was '1'
	expect(mockCallBack.mock.calls[0][0]).toBe(1)
})

test('test the first argument of second time mockCallBack called value', () => {
	expect(mockCallBack.mock.calls[1][0]).toBe(2)
})

test('test the result value of mockCallBack first time call return', () => {
	// .mock.result can gain zhe mock_function return value
	expect(mockCallBack.mock.results[0].value).toBe(4)
})
