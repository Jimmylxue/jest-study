const mockFn = jest.fn()
console.log(mockFn()) // undefined

/**
 * jest.fn() will return a function, which is very similar to iterator
 *  mockReturnValueOnce can call against
 *  it's equally to time of mockFn() return with time of mockReturnValueOnce() provider argument
 */

mockFn
	.mockReturnValueOnce(10) // first time call will return 10
	.mockReturnValueOnce('jimmy') // call against will return ‘jimmy’
	.mockReturnValueOnce(true) // call against will return true

test('test mockReturnValueOnce API', () => {
	expect(mockFn()).toBe(10)
	expect(mockFn()).toMatch('jimmy')
	expect(mockFn()).toBeTruthy()
	console.log(mockFn()) // undefined => because without other has argument of mockReturnValueOnce() function to be call
})

/**
 * other example to improve understand the .mock attribute track value and argument
 */

const filterFn = jest.fn()

filterFn.mockReturnValueOnce(true).mockReturnValueOnce(false)

const result = [11, 12].filter(num => filterFn(num))

console.log('result', result)

test('mock attribute test', () => {
	expect(filterFn.mock.calls[0][0]).toBe(11)
	expect(filterFn.mock.calls[1][0]).toBe(12)
})
