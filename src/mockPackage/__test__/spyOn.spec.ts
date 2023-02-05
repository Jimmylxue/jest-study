import { config } from '../env'

/**
 * 使用 spyOn 可以很方便的模拟某个模块的某个返回值
 */
describe('>>> spyOn config', () => {
	it('开发环境', () => {
		jest.spyOn(config, 'getEnv').mockReturnValue('dev')

		expect(config.getEnv()).toBe('dev')
	})

	it('线上环境', () => {
		jest.spyOn(config, 'getEnv').mockReturnValue('prod')

		expect(config.getEnv()).toBe('prod')
	})
})
