/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for(var i = 0; i< nums.length; i++) {
    if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i]
    }
  }
};

console.log(singleNumber([33,33,2,2,7,-1,-1,7,-22]))