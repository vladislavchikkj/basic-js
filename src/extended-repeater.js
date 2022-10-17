const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
    const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
    const additionRepeat = options.additionRepeatTimes || 1;
    const additionSeparator = options.additionSeparator || '|';
    const repeat = options.repeatTimes || 1;
    const separator = options.separator || '+';
  if (!options) {
    return str;
  }else{
    str = String(str);
    let addit = addition + additionSeparator;
    addit = addit.repeat(additionRepeat);
    addit = addit.slice(0, -additionSeparator.length);
    str += addit + separator;
    str = str.repeat(repeat);
    return str.slice(0, -separator.length);
  }
  
}

module.exports = {
  repeater
};
