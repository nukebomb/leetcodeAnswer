/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var mother = nums.slice(nums, nums.length)
  var result = null
 var didfind = false
 while (!didfind) {
   var p1 = mother.splice(0,1)[0]
   for (var i =0; i< mother.length; i++) {
    if (p1 + mother[i] === target){
      result = [nums.indexOf(p1), nums.lastIndexOf(mother[i])]
      didfind = true
      return result
    }
   }
   if(!mother.length) {
     didfind = true
   }
 }
}

console.log(twoSum([3,3], 6))