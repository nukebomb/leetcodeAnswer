/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const arrs = s.split('')
  const arrt = t.split('')
  let result = true
  if (arrs.length !== arrt.length) {
    result = false
  } else {
    for(let i = 0; i < arrs.length; i++) {
      if(arrt.indexOf(arrs[i])!==-1) {
        arrt.splice(arrt.indexOf(arrs[i]), 1)
      } else {
        result = false
      }
    }

  } 
  return result
}

console.log(isAnagram('bacj', 'abcv'))
// isAnagram('bac', 'abcg')
