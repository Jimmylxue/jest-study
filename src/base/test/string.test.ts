/**
 * we cant use 'toMatch' to check string by regular expressions
 */

test("name isn't contain x ", () => {
	const name = 'jimmy-hao'
	// expect(name).toMatch(/x/) //  fail
	expect(name).toMatch(/ha/) // pass
	// expect(name).toMatch(/HA/) // fail => Caption case error
	expect(name).toMatch(/HA/i) // pass => at regular expressions, ’i‘ is ignore Caption case
})
