const table = [
	{ name: 'a', path: 'path/to/a', count: 1, write: true },
	{ name: 'b', path: 'path/to/b', count: 3 },
]

/**
 * test.each can test a group of data, example like those as follow
 */

describe('test.each name !== c', () => {
	test.each(table)('inline test', ({ name, path, count, write }) => {
		/**
		 * only all item of table's name notBe 'c' ,test can pass
		 */
		expect(name === 'c').toBeFalsy()
	})
})
