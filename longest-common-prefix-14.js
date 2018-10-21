var longestCommonPrefix = function (strs) {
  // var result = {
  //   idx: null,
  //   letter: null
  // }
  // strs.forEach((element, index) => {
  //   for (var i = 0; i < strs.length; i++) {
  //     if (element.charAt(0) === strs[i].charAt(0) && index !== i) {
  //       if (!result.idx) {
  //         result.idx = element.length > strs[i].length ? index : i
  //         result.letter = element.charAt(0)
  //       } else {
  //         var currentLong = element.length > strs[i].length ? index : i
  //         result.idx = strs[currentLong].length > strs[result.idx].length ? currentLong : result.idx
  //       }
  //     }
  //   }
  // })
  // return result.letter + result.idx
  var result = {
    count: 0,
    letters: null,
  }
  function getCommon(pre, cur) {
    console.log('pre: ' + pre + '  cur: ' + cur)
    if (pre.charAt(result.count) === cur.charAt(result.count)) {
      if (!result.letters) {
        result.letters = pre.charAt(result.count)
        result.count++
      } else if (result.letters.charAt(result.count) !== cur.charAt(result.count)) {
        result.letters += pre.charAt(result.count)
        result.count++
      }
      getCommon(pre, cur)
    } else {
      result.count = 0
    }
    return cur
  }
  // strs.reduce(getCommon)
  console.log(getCommon('nana','naba'))
  return result
}

console.log(longestCommonPrefix(['list', 'long', 'loveforever', 'cat']))
//console.log(longestCommonPrefix())