const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {

  matrix = matrix.map(row => row.map(
    (cell) => { return (cell) ? cell : 0; })
  );


  function incrementer(cell) {
    return (cell !== true) ? ++cell : cell;
  }


  for (let i = 0; i < matrix.length; i++) {
    var row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      var cell = matrix[i][j];

      if (cell === true) {


        if (j === 0) {

          if (i === 0) {
            matrix[i][j+1]    = incrementer(matrix[i][j+1]);
            matrix[i+1][j]    = incrementer(matrix[i+1][j]);
            matrix[i+1][j+1]  = incrementer(matrix[i+1][j+1]);
          }

          else if (i > 0 && i < matrix.length-1) {
            matrix[i-1][j]    = incrementer(matrix[i-1][j]);
            matrix[i-1][j+1]  = incrementer(matrix[i-1][j+1]);
            matrix[i][j+1]    = incrementer(matrix[i][j+1]);
            matrix[i+1][j]    = incrementer(matrix[i+1][j]);
            matrix[i+1][j+1]  = incrementer(matrix[i+1][j+1]);
          }

          else {
            matrix[i][j+1]    = incrementer(matrix[i][j+1]);
            matrix[i-1][j]    = incrementer(matrix[i-1][j]);
            matrix[i-1][j+1]  = incrementer(matrix[i-1][j+1]);
          }
        }


        else if (j > 0 && j < row.length-1) {

          if (i === 0) {
            matrix[i][j-1]    = incrementer(matrix[i][j-1]);
            matrix[i][j+1]    = incrementer(matrix[i][j+1]);
            matrix[i+1][j-1]  = incrementer(matrix[i+1][j-1]);
            matrix[i+1][j]    = incrementer(matrix[i+1][j]);
            matrix[i+1][j+1]  = incrementer(matrix[i+1][j+1]);
          }

          else if (i > 0 && i < matrix.length-1) {
            matrix[i-1][j-1]  = incrementer(matrix[i-1][j-1]);
            matrix[i-1][j]    = incrementer(matrix[i-1][j]);
            matrix[i-1][j+1]  = incrementer(matrix[i-1][j+1]);
            matrix[i][j-1]    = incrementer(matrix[i][j-1]);
            matrix[i][j+1]    = incrementer(matrix[i][j+1]);
            matrix[i+1][j-1]  = incrementer(matrix[i+1][j-1]);
            matrix[i+1][j]    = incrementer(matrix[i+1][j]);
            matrix[i+1][j+1]  = incrementer(matrix[i+1][j+1]);
          }

          else {
            matrix[i-1][j-1]  = incrementer(matrix[i-1][j-1]);
            matrix[i-1][j]    = incrementer(matrix[i-1][j]);
            matrix[i-1][j+1]  = incrementer(matrix[i-1][j+1]);
            matrix[i][j-1]    = incrementer(matrix[i][j-1]);
            matrix[i][j+1]    = incrementer(matrix[i][j+1]);
          }
        }


        else if (j === row.length-1) {

          if (i === 0) {
            matrix[i][j-1]    = incrementer(matrix[i][j-1]);
            matrix[i+1][j-1]  = incrementer(matrix[i+1][j-1]);
            matrix[i+1][j]    = incrementer(matrix[i+1][j]);
          }

          else if (i > 0 && i < matrix.length-1) {
            matrix[i-1][j-1]  = incrementer(matrix[i-1][j-1]);
            matrix[i-1][j]    = incrementer(matrix[i-1][j]);
            matrix[i][j-1]    = incrementer(matrix[i][j-1]);
            matrix[i+1][j-1]  = incrementer(matrix[i+1][j-1]);
            matrix[i+1][j]    = incrementer(matrix[i+1][j]);
          }
          
          else {
            matrix[i-1][j-1]  = incrementer(matrix[i-1][j-1]);
            matrix[i-1][j]    = incrementer(matrix[i-1][j]);
            matrix[i][j-1]    = incrementer(matrix[i][j-1]);
          }
        } 

      } 
    } 
  } 

  return matrix.map(row => row.map(
    (cell) => { return (cell === true) ? 1 : cell; })
  );
} // minesweeper()

module.exports = {
  minesweeper
};
