module.exports = {
  collectCoverageFrom: ['packages/**/*.(ts)', '!packages/commitlint-activecollab-e2e-tests/**'],
  coverageThreshold: {
    global: {
      statements: 88,
      branches: 74,
      functions: 95,
      lines: 93,
    },
  },
  testRegex: 'tests/.*\\.test\\.ts$',
  testPathIgnorePatterns: ['/packages/commitlint-activecollab-e2e-tests/'],
  preset: 'ts-jest',
}
