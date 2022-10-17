const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 const getAllDomainsFromArray = (arr) => {
  const domainArr = []
  for (let i = 0; i < arr.length; i++) {
    const keyName = arr[i];
    if (domainArr.length) {
      domainArr.push(`${domainArr[i - 1]}${keyName}`)
    } else {
      domainArr.push(keyName);
    };
  };
  return domainArr
};

const getKeyValObj = (arr) => {
  return arr.reduce((acc,cur) => {
    !acc[cur] ? acc[cur] = 1 : acc[cur]++
    return acc
  },{})
}
 function getDNSStats(domains) {

  const DNArr = domains.map((el) => el.split('.').reverse().map((el) =>  `.${el}`));
  const res = DNArr.map((el) => getAllDomainsFromArray(el)).flat();

  return getKeyValObj(res);
}

module.exports = {
  getDNSStats
};
