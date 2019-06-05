/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[^a-zA-Z0-9]/g
  const sfilter = s.replace(reg, '').toLowerCase()
  let result = false
  if (sfilter.length % 2 === 0) {
    let left = sfilter.substring(0, sfilter.length / 2)
    let right = sfilter.substring(sfilter.length / 2).split('').reverse().join('')
    if (left === right) {
      result = true
    }
  } else {
    let left = sfilter.substring(0, Math.floor(sfilter.length / 2) + 1)
    let right = sfilter.substring(Math.floor(sfilter.length / 2)).split('').reverse().join('')
    if (left === right) {
      result = true
    }
  }
  return result
}

console.log(isPalindrome("A man, a plan, canal: Panama"))
// isPalindrome('A man, a plan, a canal: Panama')