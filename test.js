function test (x) {
  var result = 0
  var inner = function(y) {
    if (y > 0) {
      console.log(y)
      result += y
      y--
      inner(y)
    } else {
      return
    }
  }
  inner(x)
  return result
}

console.log(test(3))
/*  */