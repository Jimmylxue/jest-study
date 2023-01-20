/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	// testEnvironment: 'node',
	testEnvironment: 'jsdom',
	// testEnvironment: 'jest-environment-jsdom-global',
	automock: false,
	setupFilesAfterEnv: ['./tests/jest-setup.ts'],
}
