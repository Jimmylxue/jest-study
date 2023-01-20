import { objToSearchParams } from '.'

describe('>>> objToSearchParams', () => {
	it("{name:'jimmy'} can change name=jimmy", () => {
		expect(objToSearchParams({ name: 'jimmy' })).toBe('name=jimmy')
	})

	it("{} can change ''", () => {
		expect(objToSearchParams({})).toBe('')
	})

	it("{name:'jimmy',age:25} can change 'name=jimmy&age=25'", () => {
		expect(objToSearchParams({ name: 'jimmy', age: 25 })).toBe(
			'name=jimmy&age=25'
		)
	})
})
