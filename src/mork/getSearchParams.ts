export const getSearchObj = () => {
	return Object.fromEntries(
		new URLSearchParams(window.location.search).entries()
	)
}
