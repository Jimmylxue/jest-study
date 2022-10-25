/**
 * expect.objectContaining is convenient to check object which is like expect.arrayContaining
 *
 *  this is useful and major function
 */

/**
 * it's convenient!
 */
describe('expect.objectContaining', () => {
	const goalObj = {
		name: 'jimmy',
	}
	it('object contain goalObj', () => {
		expect({ name: 'jimmy', age: 22, sex: 'man' }).toEqual(
			expect.objectContaining(goalObj)
		)
	})
})

/**
 * let us to check how much code for write by ourself
 */

function objectInclude(object: any, checkObject: any): boolean {
	let flag = false
	const checkObjectKeys = Object.keys(checkObject)
	for (const key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			const element = object[key]
			if (checkObjectKeys.includes(key) && element === checkObject[key]) {
				flag = true
			}
		}
	}

	return flag
}

describe('expect.objectContaining', () => {
	const goalObj = {
		name: 'jimmy',
	}
	it('object contain goalObj', () => {
		expect(
			objectInclude({ name: 'jimmy', age: 22, sex: 'man' }, goalObj)
		).toBeTruthy()
	})
})
