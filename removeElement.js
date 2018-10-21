var removeElement = function(nums, val) {
  var result = []
  nums.forEach(element => {
    if (element !== val)
    result.push(element)
  })
  return result
}

console.log(removeElement([3,2,2,3], 3))