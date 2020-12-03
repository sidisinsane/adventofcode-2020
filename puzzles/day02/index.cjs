const fs = require('fs');

/**
 * Checks if a string contains a character n-m times
 *
 * @param str - The string to check
 * @param char - The character to match
 * @param min - Minimun occurrences
 * @param max - Maximum occurrences
 */
const validateOccurrences = (str, char, min, max) => {
  const regex = new RegExp(char, 'g');
  const occurrences = (str.match(regex) || []).length;

  return occurrences >= min && occurrences <= max;
}

/**
 * Counts number of strings fullfilling
 * occurrence-policy
 *
 * @module
 *
 * @param file - Path to CSV file
 */
module.exports = (file) => {
  try {
    let matches = [];

    // Read contents of the file
    const data = fs.readFileSync(file, 'utf8');

    // Split the contents by new line
    const lines = data.split(/\r?\n/);

    // Sanitize each line, split into array, unpack array values
    // into distinct variables and push valid strings into matches array.
    lines.forEach((line) => {
      let min;
      let max;
      let char;
      let str;

      [min, max, char, str] = line.replace(/[^0-9](?=[0-9])/g, ' ').replace(/:/g, '').split(' ');

      if (validateOccurrences(str, char, min, max)) {
        matches.push(str);
      }
    });

    return matches.length;
  } catch (err) {
    console.error(err);
  }
};
