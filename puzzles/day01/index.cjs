/**
 * Two Sum
 *
 * @description
 * Given an array of integers, return an array containing
 * the two numbers that add up to a specific target.
 *
 * @param {array} array - Array of integers
 * @param {integer} target - A target integer
 */
const twoSum = (array, target) => {
  let indexes = {};

  for (let i = 0, l = array.length; i < l; i++) {
    let diff = target - array[i];

    if (indexes[diff] !== undefined && indexes[diff] !== i) {
      return [
        array[i],
        array[indexes[diff]]
      ];
    } else {
      indexes[array[i]] = i;
    }
  }
};

/**
 * Calculates the product of a given array
 *
 * @param {array} array - Array of integers
 */
const arrayProduct = (array) => {
  return array.reduce((a, b) => {
    return a * b;
  });
};

/**
 * Two Sum Array Product CommonJS Module
 *
 * @module
 *
 * @param {array} array - Array of integers
 * @param {integer} target - A target integer
 */
module.exports = (array, target) => {
  return arrayProduct(twoSum(array, target));
};
