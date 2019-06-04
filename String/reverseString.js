/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const interval = JSON.parse(JSON.stringify(s))
    for(let i =0; i < s.length; i ++) {
      s[i] = interval[s.length - i -1]
    }
}