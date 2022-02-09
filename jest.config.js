module.exports = {
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/node_modules/**',
    '!src/config/*.ts',
    '!build/**/*',
  ],
  coverageReporters: ['text'],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  roots: ['./src'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@assets/(.*)': '<rootDir>/config/filemock.ts',
    '@components/(.*)': '<rootDir>/src/components/$1',
  },
  setupFilesAfterEnv: ['./config/jest.setup.ts'],
}
