/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x >= Math.pow(-2, 31) && x < Math.pow(2, 31) - 1) {
    let result = 0
    if (x < 0) {
      result = parseInt('-' + (-x).toString().split('').reverse().join(''))
      return (result >= Math.pow(-2, 31) && result < Math.pow(2, 31) - 1) ? result : 0
    } else {
      result  =parseInt(x.toString().split('').reverse().join(''))
      return (result >= Math.pow(-2, 31) && result < Math.pow(2, 31) - 1) ? result : 0
    }
  } else {
    return 0
  }

}

console.log(reverse(1534236469))