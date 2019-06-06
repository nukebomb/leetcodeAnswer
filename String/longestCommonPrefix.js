/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let matrix = []
  let result = ''
  const scale = strs.length
  if (strs.length <= 0 ) {
    return ''
  }
  for (let i = 0 ; i < scale; i++) {
    let elearr = strs[i].split('')
    matrix.push(elearr)
  }
  console.log(matrix[0].length)
  for(let i = 0; i < matrix[0].length; i++) {
    let col = new Set()
    for (let j = 0; j < matrix.length; j++) {
      col.add(matrix[j][i])
    }
    if(col.size === 1) {
      result += matrix[0][i]
    } else {
      if (result) {
        return result
      } else {
        return ''
      }
      
    }
  }
}

console.log(longestCommonPrefix(["a"]))