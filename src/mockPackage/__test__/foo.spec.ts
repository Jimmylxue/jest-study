import defaultExport, { bar, foo } from '../foo-bar-baz'

jest.mock('../foo-bar-baz', () => {
	// 真实的 foo-bar-baz 模块内容
	const originalModule = jest.requireActual('../foo-bar-baz')

	// 这个操作等于是在测试环境下 巧妙的替换一个原本模块的内容
	return {
		__esModule: true,
		...originalModule,
		default: jest.fn(() => 'mocked baz'),
		foo: 'mocked foo',
	}
})

it('should do a partial mock', () => {
	const defaultExportResult = defaultExport()
	expect(defaultExportResult).toBe('mocked baz')
	expect(defaultExport).toHaveBeenCalled()

	expect(foo).toBe('mocked foo')
	expect(bar()).toBe('bar')
})
