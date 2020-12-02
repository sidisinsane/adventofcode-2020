module.exports = {
  collectCoverage: true,
  coverageReporters: [
    'html',
    'json'
  ],
  testMatch: [
    '**/__tests__/**/(*.)+(spec|test).[jt]s?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.history/'
  ],
  verbose: true
};
