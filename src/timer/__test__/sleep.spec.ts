import { sleep } from '../sleep'

describe('>>> sleep', () => {
	beforeAll(() => {
		jest.useFakeTimers()
	})

	it('can sleep 1000ms', async () => {
		const callback = jest.fn()

		const act = async () => {
			await sleep(1000)
			callback()
		}

		const prom = act()

		expect(callback).not.toHaveBeenCalled()

		jest.runAllTimers()

		await prom //  that is crux(关键) in this test case

		expect(callback).toHaveBeenCalledTimes(1)
	})
})
