const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let boxNumber = [];
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === -1){
          boxNumber.push(i);
      }
  }
  arr.sort((a, b) => a - b)
  arr = arr.slice(boxNumber.length);
  for (let i = 0; i < boxNumber.length; i++) {
    arr = [...arr.slice(0, boxNumber[i]), -1, ...arr.slice(boxNumber[i])];
  }
  return arr;
  
}

module.exports = {
  sortByHeight
};
