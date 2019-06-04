/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
 const arr = s.split('')
 const str = JSON.parse(JSON.stringify(arr)).join(',') + ','  
 let result = ''
 for(let i = 0 ; i < arr.length; i++) {
   if(str.replace(arr[i]+',', '').indexOf(arr[i]) === -1) {
     result = i
     break
   }
 }

 return result === '' ? -1 : result
}


console.log(firstUniqChar("leetcode"))