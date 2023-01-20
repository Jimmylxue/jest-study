import { after1000ms } from '../after1000ms'

describe('>>> better test timer', () => {
	beforeAll(() => {
		jest.useFakeTimers()
	})

	it('function will be run after 1000ms', () => {
		jest.spyOn(global, 'setTimeout')
		const callback = jest.fn()

		expect(callback).not.toHaveBeenCalled()

		after1000ms(callback)

		jest.runAllTimers() // push timer running, in order to check count of callback called

		expect(callback).toHaveBeenCalled()
		expect(setTimeout).toHaveBeenCalledTimes(1)
		expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000) // function 1000ms call
	})
})

// describe('>>> not best way test timer', () => {
// 	it('function will be run after 1000ms', done => {
// 		let num = 0
// 		after1000ms(() => {
// 			num = 1
// 			expect(num).toBe(1)
// 			done()
// 		})
// 	})
// })
