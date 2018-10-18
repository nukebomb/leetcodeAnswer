/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode(0);
  let current = result;
  let carry = 0, sum = 0;
  while(l1 !== null || l2 !== null) {
      let val1 = l1  ? l1.val : 0;
      let val2 = l2  ? l2.val : 0;
      sum = carry + val1 + val2;
      carry = Math.floor(sum / 10);
      let newNode = new ListNode(sum % 10);
      current.next = newNode;
      current = current.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
  }
  if (carry == 1) {
      current.next = new ListNode(carry);
  }
  return result.next;

};