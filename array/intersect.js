/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let arr1, arr2
  if (nums1.length <= nums2.length) {
    arr1 = nums1.splice(0)
    arr2 = nums2.splice(0)
  } else {
    arr2 = nums1.splice(0)
    arr1 = nums2.splice(0)
  }
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      console.log(i)
      result.push(arr1[i])
      arr1.splice(i, 1)
      arr2.splice(arr2.indexOf(arr1[i]), 1)
      i--
      console.log(i)

    }
  }
  return result
}

intersect([2,1], [1,2])