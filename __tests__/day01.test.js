const { expect } = require('@jest/globals');

const twoSumArrayProduct = require('../puzzles/day01/index.cjs');
const data = require('../puzzles/day01/data.json');

test('finds the two entries that sum to 2020 and then multiplies those two numbers to equal 646779', () => {
  expect(twoSumArrayProduct(data, 2020)).toBe(646779);
});
