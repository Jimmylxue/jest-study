/**
 * Sometimes we should do some operation before test and after test
 * for example, init some data
 *
 * fortunately, Jest provider some hooks to do it, which is 'beforeEach' and 'afterEach'
 *
 * beforeEach will run before test to be called, which is like 'onMounted' of effect
 * afterEach will run after test to be called, which is similar to 'onDestroy' of effect
 *
 * it is very important that we should know about it as follow:
 *  - beforeEach and after will be running every test to be call!
 *    > beforeEach and afterEach will running twice！
 *      because of it has two test function!
 *      beforeEach and afterEach will run when the two test before run and after run!
 *
 *  - if we just want it running it once! we should use the other API of Jest, which is 'beforeAll' and 'afterAll'
 *    > this is file Level of 'onMounted' ad 'onDestroy',
 */

let cityDataBase: string[] = []

function initDataBase() {
	console.log('beforeEach running!')
	cityDataBase = ['QuanZhou', 'XiaMen', 'ZhangZhou', 'FuZhou']
}

function clearDataBase() {
	cityDataBase.length = 0
}

function includeCity(cityName: string) {
	return cityDataBase.includes(cityName)
}

beforeAll(() => {
	console.log('beforeAll running')
})

afterAll(() => {
	console.log('afterAll running')
})

beforeEach(() => {
	/**
	 * running it before first test to be call
	 */
	initDataBase()
})

afterEach(() => {
	/**
	 * running it after all test call
	 */
	clearDataBase()
})

test('city include FuZhou', () => {
	expect(includeCity('FuZhou')).toBeTruthy()
})

test('city include XiaMen', () => {
	expect(includeCity('XiaMen')).toBeTruthy()
})
