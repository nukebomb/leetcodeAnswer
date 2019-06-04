/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zeros = nums.join('').split(0).length - 1
    console.log(zeros)
    for (let index = 0; index < zeros; index++) {
      nums.splice(arr.indexOf(0),1)
      nums.push(0)
    }
};

var arr = [0,2,0,3,0,5,6]
moveZeroes(arr)
console.log(arr)