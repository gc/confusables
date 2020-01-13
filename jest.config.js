module.exports = {
	displayName: 'ts-jest',
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['<rootDir>/test/*.test.ts'],
	setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts']
};
