/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var result = false
  for(var i = 0; i< nums.length; i++) {
    if(nums.indexOf(nums[i]) !== -1 && nums.lastIndexOf(nums[i]) !== -1 && nums.indexOf(nums[i]) !==nums.lastIndexOf(nums[i])) {
      console.log(nums)
      result = true
      return true
    }
  }
  return result
}

console.log(containsDuplicate([1,1]))