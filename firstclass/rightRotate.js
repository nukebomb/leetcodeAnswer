var nums = [1, 2, 3, 4, 5, 6, 7]
var rotate = function (nums, k) {
    nums.splice(0,nums.length,...[...nums.slice(nums.length - k), ...nums.slice(0, nums.length - k)])
}

console.log(rotate(nums, 3))
console.log(nums)