/**
 * jest socope
 */
beforeAll(() => console.log('1 - beforeAll'))
afterAll(() => console.log('1 - afterAll'))
beforeEach(() => console.log('1 - beforeEach'))
afterEach(() => console.log('1 - afterEach'))

test('', () => console.log('1 - test'))

describe('Scoped / Nested block', () => {
	beforeAll(() => console.log('2 - beforeAll'))
	afterAll(() => console.log('2 - afterAll'))
	beforeEach(() => console.log('2 - beforeEach'))
	afterEach(() => console.log('2 - afterEach'))

	/**
	 * Note that! in scope test running still will cause outside 'beforeEach' hooks running
	 */

	test('', () => console.log('2 - test'))
})

/**
 * it's very important to understand the order as follow:
 *  // 1 - beforeAll
    // 1 - beforeEach
    // 1 - test
    // 1 - afterEach
    // 2 - beforeAll
    // 1 - beforeEach
    // 2 - beforeEach
    // 2 - test
    // 2 - afterEach
    // 1 - afterEach
    // 2 - afterAll
    // 1 - afterAll
 */

/**
 * 'describe' can make a scope in jest,
 *  we should look out running order when has scope and some hook,
 */
