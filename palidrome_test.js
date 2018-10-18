// var isPalidrome  = function(x) {
//   let numabs = Math.abs(x)
//   let singal = x < 0 ? -1 : 1
//   let result = false
//   if (singal === -1) {
//     result = false
//   } else {
//     let numReverse = numabs.toString().split('').reverse().join('')
//     console.log(numReverse)
//     result = numReverse - numabs === 0 ? true: false
//   }
//   return result
// }

// console.log(isPalidrome(10))

var isPalidrome = function (x) {
  x = x + ''
  return x === x.split('').reverse().join('') ? true : false
}

console.log(isPalidrome(100))
console.log(isPalidrome(717))