export default {
	authorize: () => 'token',
	isAuthorized: (secret: any) => secret === 'wizard',
}

export function objToSearchParams(obj: Record<string, string | number>) {
	const querySearch: string[] = []

	Object.entries(obj).forEach(item => {
		const [key, value] = item
		const pair = key + '=' + String(value) // a=1
		querySearch.push(pair)
	})

	return querySearch.join('&')
}
