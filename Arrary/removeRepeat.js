/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let current = []
  for (let i = 0; i < nums.length; i++) {
    if (current.indexOf(nums[i]) !== -1) {
      nums.splice(i, 1)
      i--
    } else {
      current.push(nums[i])
    }
  }
}

nums = [0, 1, 1, 2, 2, 3, 3, 4, 5]
removeDuplicates(nums)
console.log(nums)