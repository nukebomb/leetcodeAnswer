/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var isPalindrome = function (head) {
  const listvals = []
  while (head !== null) {
    listvals.push(head.val)
    head = head.next
  }
  if (listvals.length === 0) {
    return true
  }
 
  const target = JSON.parse(JSON.stringify(listvals)).reverse()

  if (listvals.join('') === target.join('')) {
    return true
  } else {
    return false
  }
}

let h1 = new ListNode(1)
h1.next = new ListNode(2)

console.log(isPalindrome(h1))