/**
 * promise test demo
 *  > it's very important part in all test
 */

function getUserInfo(flag: 0 | 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			flag ? resolve({ username: 'jimmy' }) : reject({ message: 'error' })
		}, 1000)
	})
}

test('test promise', () => {
	/**
	 * test promise can test at ’then‘ function inside
	 */

	return getUserInfo(1).then(res => {
		/**
		 * review：
		 *  toEqual
		 *    toEqual can test whether two object has same key and same value, like similar
		 *
		 *  toBe should has same addrest of object can pass!
		 */
		expect(res).toEqual({ username: 'jimmy' })
	})
})

test('async await', async () => {
	/**
	 * we also can use async await to test promise
	 *  this is a better way than use 'then' function
	 */
	const res = await getUserInfo(1)
	expect(res).toEqual({ username: 'jimmy' })
})

test('promise .resolves', async () => {
	/**
	 * we can use '.resolves' to check promise resolve when use async & await
	 */

	await expect(getUserInfo(1)).resolves.toEqual({ username: 'jimmy' })
})

test('promise .rejects', async () => {
	/**
	 * like '.resolves' jest also provider '.rejects' to use, which is easily to check promise reject status
	 */
	await expect(getUserInfo(0)).rejects.toEqual({ message: 'error' })
})

test('.resolves without async/await', () => {
	/**
	 * we can use .resolves without async/await
	 * 	but must be return it!
	 */

	return expect(getUserInfo(1)).resolves.toEqual({ username: 'jimmy' })
})
