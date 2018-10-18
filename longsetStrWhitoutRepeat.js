var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0
  }
  var set = new Set(s)
  var length = set.size
  var sArr = s.split('')
  var result, currentSet
  var finded = false
  for (var i = length; i > 0; i--) {
    for (var j = 0; j <= sArr.length - i; j++) {
      currentSet = new Set(sArr.slice(j, i + j > sArr.length ? undefined : i + j))
      if (currentSet.size === i) {
        finded = true
        break
      }
    }
    if (finded === true) {
      result = currentSet.size;
      break
    }
  }
  return result
}

console.log(lengthOfLongestSubstring("jbpnbwwd"))