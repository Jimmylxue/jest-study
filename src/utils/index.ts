export default {
	authorize: () => 'token',
	isAuthorized: (secret: any) => secret === 'wizard',
}
