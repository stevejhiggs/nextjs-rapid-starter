const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

const customJestConfig = {
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
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '@/src/(.*)': '<rootDir>/src/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '@/__tests__/(.*)': '<rootDir>/__tests__/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__tests__/config/fileMock.js'
  }
};

module.exports = createJestConfig(customJestConfig);
