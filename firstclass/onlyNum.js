/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var current = []
    nums.forEach(item => {
      if(!current[item.toString()]) {
              current[item.toString()] = 1
      } else {
        current[item.toString()] ++
      }
    })
    // return current.indexOf(1)
    console.log(current)
    console.log(current.indexOf(1).toString())
};

singleNumber([33,33,2,2,7,-1,-1,7,-22])