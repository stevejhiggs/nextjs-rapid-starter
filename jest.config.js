module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/out/**',
    '!**/__tests__/**',
    '!**/coverage/**',
    '!**/docs/**',
    '!**/*.config.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/config/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/'],
  testRegex: '.test.ts[x]?$',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/__tests__/config/cssTransform.js'
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'pages/(.*)': '<rootDir>/pages/$1',
    '__tests__/(.*)': '<rootDir>/__tests__/$1',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  }
};
