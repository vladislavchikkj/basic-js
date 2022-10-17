const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
// function getMatrixElementsSum(/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function getMatrixElementsSum(matrix) {

  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
  
  const curr = matrix[i];
    for (let col = 0; col < curr.length; col++) {
      if (curr[col] === 0) {
      if (i + 1 < matrix.length) {
        matrix[i + 1][col] = 0;
      }
    } else {
      result += curr[col];
      }
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
