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
var mergeTwoLists = function(l1, l2) {
    let h1 = l1
    let h2 = l2
    if (h1.val > h2.val) {
      let temp = h1
      h1 = h2
      h2 = temp
    }
    let current1 = l1
    let current2 = l2

    while(current1!= null && current2 !== null) {
      if (current1.val <= current2.val && current1.next.val >= current2.val ) {
        let c2temp = current2.next
        let c1temp = current1.next
        current1.next = current2
        current2.next = c1temp
        current1 = current1.next
        current2 = c2temp
      } else {
        current1 = current1.next
      }
    }
    return h1
}