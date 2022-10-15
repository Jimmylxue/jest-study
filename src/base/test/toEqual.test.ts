type TAssignment = {
	name: string
	age: number
	love?: string
}

test('toBe test', () => {
	const data: TAssignment = { name: 'jimmy', age: 22 }
	data.love = 'xuexue'
	// 'toBe', which is power by 'Object.is()'
	// expect(data).toBe({ name: 'jimmy', age: 22, love: 'xuexue' }) // fail
})

test('toStrictEqual test', () => {
	const object: TAssignment = { name: 'jimmy', age: 22 }
	const otherObject = { name: 'jimmy', age: 22 }
	// 'toStrictEqual' as well as can check two object is 'similar'
	expect(object).toStrictEqual(otherObject)
})

test('toEqual test', () => {
	const data: TAssignment = { name: 'jimmy', age: 22 }
	data.love = 'xuexue'
	// 'toEqual' just test the two object is 'similar' => same key & same value
	expect(data).toEqual({ name: 'jimmy', age: 22, love: 'xuexue' })
})

test('adding positive number is not zero', () => {
	for (let i = 1; i < 10; i++) {
		for (let j = 1; j < 10; j++) {
			/**
			 *  this is to test i plus j are alway not to be 0
			 *  if never to be 0 , this test will be pass
			 * */
			expect(i + j).not.toBe(0)
		}
	}
})
