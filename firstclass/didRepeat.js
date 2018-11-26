/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) { 
  var result = false
  for(var i = 0; i< nums.length; i++) {
    for(var j = 0 ; j < nums.length; j++) {
      if(nums[i] === nums[j] && i !== j) {
        result = true
      }
    }
  }
  return result
}

console.log(containsDuplicate([1,2,22,2]))