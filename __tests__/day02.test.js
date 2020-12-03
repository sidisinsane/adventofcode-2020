const { expect } = require('@jest/globals');

const path = require('path');
const countValidPasswords = require('../puzzles/day02/index.cjs');

test('finds the amount of passwords that are valid according to the policies to equal 393', () => {
  expect(countValidPasswords(path.resolve(__dirname, '../puzzles/day02/data.csv'))).toBe(393);
});
