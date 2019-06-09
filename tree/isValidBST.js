/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let minval = -100
var isValidBST = function (root) {
  if (root == null) {
    return true
  }
  if (isValidBST(root.left)) {
    if (minval < root.val) {
      minval = root.val
      return isValidBST(root.right)
    }
  }
  return false
}

let n1 = new TreeNode(0)
// n1.left = new TreeNode(1)
// n1.right = new TreeNode(3)
console.log(isValidBST(n1))
