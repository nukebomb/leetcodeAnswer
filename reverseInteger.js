
var reverse = function (x) {
  let revN = Number(Array.from(Math.abs(x).toString()).reverse().join(''))
  if (revN > Math.pow(2,31)-1) return 0

  return x < 0 ? -revN : revN
}

var reverse1 = function (x) {
  let revN = Number(Math.abs(x).toString().split('').reverse().join(''))
  if (revN > Math.pow(2,31)-1) return 0

  return x < 0 ? -revN : revN
}
console.log(reverse(123))
console.log(reverse1(-123))