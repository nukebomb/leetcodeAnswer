var longestCommonPrefix = function (strs) {
  var result = {
    idx: null,
    letter: null
  }
  strs.forEach((element, index) => {
    for (var i = 0; i < strs.length; i++) {
      if (element.charAt(0) === strs[i].charAt(0) && index !== i) {
        if (!result.idx) {
          result.idx = element.length > strs[i].length ? index : i
          result.letter = element.charAt(0)
        } else {
          var currentLong = element.length > strs[i].length ? index : i
          result.idx = strs[currentLong].length > strs[result.idx].length ? currentLong : result.idx
        }
      }
    }
  })
  return result.letter + result.idx
}

console.log(longestCommonPrefix(['list', 'long', 'loveforever', 'cat']))