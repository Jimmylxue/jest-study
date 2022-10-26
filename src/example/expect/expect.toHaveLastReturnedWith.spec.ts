/**
 * we can use this API to ensure last time value from function called
 */

describe('test last value with function called', () => {
	const user1 = {
		name: 'jimmy',
	}
	const user2 = {
		name: 'xuexue',
	}
	const fn = jest.fn(obj => obj.name)
	fn(user1)
	fn(user2)
	it('test last value by expect.toHaveLastReturnedWith(value)', () => {
		expect(fn).toHaveLastReturnedWith('xuexue')
	})
})
