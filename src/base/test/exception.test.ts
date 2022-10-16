/**
 * Sometimes we want to check whether has some function throw a error
 *  for that, we can use 'toThrow' to check it
 */

function compilerAndroidCode() {
	throw new Error('now environment is not client APP')
}

test('compiling android goes as expected~~', () => {
	expect(() => compilerAndroidCode()).toThrow()
	expect(() => compilerAndroidCode()).toThrow(Error) //  is Error Type

	// You can also use the exact error message or a regexp
	// expect(() => compilerAndroidCode()).toThrow('you are using the wrong JDK') fail, because the error text is equal from 'compilerAndroidCode'
	expect(() => compilerAndroidCode()).toThrow(
		'now environment is not client APP'
	)
	expect(() => compilerAndroidCode()).toThrow(/APP/) // pass => toThrow also can check by regular expressions
})
