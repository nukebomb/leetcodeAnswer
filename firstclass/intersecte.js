/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const result = []
  for(let i = 0; i < nums1.length; i ++) {
    let i2 = nums2.indexOf(nums1[i])
    if(i2 !== -1) {
      let ele = nums1.splice(i, 1)
      result.push(...ele)
      nums2.splice(i2, 1)
      --i
    }
  }
  return result
}

intersect([1,2,2,3],[2,2])