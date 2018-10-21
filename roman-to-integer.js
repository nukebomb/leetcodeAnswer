function romanToInt(s) {
  var list = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  var result = 0
  var inputArr = s.split('')
  inputArr.forEach((ele, idx) => {
    if (list[inputArr[idx]] < list[inputArr[idx + 1]]) {
      result -= list[ele]
    } else {
      result += list[ele]
    }
  })
  return result
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
console.log(romanToInt('III'))