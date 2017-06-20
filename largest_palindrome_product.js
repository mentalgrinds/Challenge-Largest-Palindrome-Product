/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = findLargestPalindromeProduct;

function findLargestPalindromeProduct(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  let currentHighest = 0;

  function _startingFactor(digits) {
    let ninesStr = '';
    for (let i = 0; i < digits; i++) {
      ninesStr += '9';            
    }
    return parseInt(ninesStr);
  }
  
  function _isPalindrome(num) {
    let numStr = num.toString();
    let revNumStr = numStr.split('').reverse().join('');
    return numStr === revNumStr;
  }

  function _findFactors(startingFactor) {
    let fac0 = startingFactor;
    let fac1 = startingFactor;

    for (let i = fac0; i > 0; i--) {
      for (let j = fac1; j > 0; j--) {
        let product = i * j;
        if (_isPalindrome(product) && product > currentHighest) {
          factor_0 = i;
          factor_1 = j;
          palindromeNumber = currentHighest = product;
          break;
        } else if (product < currentHighest){
          break;
        }
      }
    }
  }

  _findFactors(_startingFactor(digits));

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};
console.time('run');
console.time(findLargestPalindromeProduct(7));
console.timeEnd('run');
