export function after1000ms(fn: () => void) {
	console.log('准备计时')
	setTimeout(() => {
		fn?.()
	}, 1000)
}
