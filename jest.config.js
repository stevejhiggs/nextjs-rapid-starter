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
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '^.+\\.css$': '<rootDir>/__tests__/config/cssTransformer.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__tests__/config/fileTransformer.js'
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'pages/(.*)': '<rootDir>/pages/$1',
    '__tests__/(.*)': '<rootDir>/__tests__/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__tests__/config/fileMock.js'
  }
};
