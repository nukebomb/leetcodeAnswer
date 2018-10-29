/**
 * @params {sttring} s
 * @return {boolean}
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 */

var isValid = function (s) {
  var result = true
  var inner = function (str) {
    let left = str.charAt(0)
    let right = otherBracket(left)
    console.log(left + '-------' + right)
    if (str.length === 0) {
      result = false
      return
    } else if (str.length % 2 !== 0) {
      result = false
      console.log(result)
      return
    } else if (right.charCodeAt() - left.charCodeAt() > 0) {
      console.log(str.slice(str.indexOf(right) + 1))
      isValid(str.slice(str.indexOf(right) + 1))
    } else {
      result = false
      return
    }

  }
  inner(s)
  return result
}

var otherBracket = function (bracket) {
  let code = bracket.charCodeAt()
  let result = null
  switch (code) {
    case 91:
    case 123:
      result = String.fromCharCode(code + 2)
      break
    case 93:
    case 125:
      result = String.fromCharCode(code - 2)
      break
    case 40:
      result = String.fromCharCode(code + 1)
      break
    case 41:
      result = String.fromCharCode(code - 1)
      break
  }
  return result
}

console.log(isValid('[]{}'))
console.log(isValid('{[}]()'))