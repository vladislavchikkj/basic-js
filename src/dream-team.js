const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
    if(!Array.isArray(members)){
      return false
    }
  //пробежать по массиву, проверить тип элемента массива и если он строка, забрать у него первую букву

  let secretName = '';

  const secretMessage = members.map(firstLetter => {
      if (typeof firstLetter === 'string'){
        let withoutProb = firstLetter.replace(/\s/g,'').toUpperCase();
        secretName+=withoutProb[0];
      }
  });
  return(secretName.split('').sort().join(''))
}


module.exports = {
  createDreamTeam
};
