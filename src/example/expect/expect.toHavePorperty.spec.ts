/**
 * it's very important and useful api to improve our efficiency, which is expect().toHaveProperty to check some object's attribute
 */

const houseForSale = {
	bath: true,
	bedrooms: 4,
	kitchen: {
		amenities: ['oven', 'stove', 'washer'],
		area: 20,
		wallColor: 'white',
		'nice.oven': true,
	},
	livingroom: {
		amenities: [
			{
				couch: [
					['large', { dimensions: [20, 20] }],
					['small', { dimensions: [10, 10] }],
				],
			},
		],
	},
	'ceiling.height': 2,
}

describe('test house info', () => {
	it('this house has my desired features', () => {
		expect(houseForSale).toHaveProperty('bath')
		expect(houseForSale).toHaveProperty('bedrooms', 4)
		expect(houseForSale).not.toHaveProperty('pool')

		// deep msg
		expect(houseForSale).toHaveProperty('kitchen.area', 20)
		expect(houseForSale).toHaveProperty('kitchen.amenities', [
			'oven',
			'stove',
			'washer',
		])

		expect(houseForSale).not.toHaveProperty('kitchen.open')

		// deep referencing using an array containing the keyPath
		expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20)
		expect(houseForSale).toHaveProperty(
			['kitchen', 'amenities'],
			['oven', 'stove', 'washer']
		)
		expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven')
	})
})
