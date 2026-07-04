/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/packages'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  collectCoverageFrom: [
    'packages/**/src/**/*.ts',
    '!**/src/**/*.d.ts',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  moduleNameMapper: {
    // Allow ESM-style `import ... from './foo.js'` in TS source by resolving
    // back to the underlying .ts file (ts-jest does not do this natively).
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@manya/(.*)$': '<rootDir>/packages/$1/src',
  },
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      isolatedModules: true,
      tsconfig: {
        module: 'CommonJS',
        target: 'ES2022',
        esModuleInterop: true,
        skipLibCheck: true,
      },
    }],
  },
  // Performance: run tests in parallel, fail fast.
  maxWorkers: '75%',
  cacheDirectory: '<rootDir>/.jest-cache',
  clearMocks: true,
  resetMocks: false,
  // Coverage optimization.
  coverageProvider: 'v8',
  verbose: false,
};
