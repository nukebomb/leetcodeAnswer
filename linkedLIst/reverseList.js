/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
       this.val = val;
       this.next = null;
   }
var reverseList = function(head) {
    let first = head
    let length = 0
    let vals = []
    while(first !== null) {
      vals.push(first.val)
      first = first.next
      length ++
    }
    if (!vals.length) {
      return
    }
    vals.reverse()
    let reuslthead = new ListNode(vals[0])
    let current  = reuslthead
    for(let i = 1; i < length; i++) {
      current.next = new ListNode(vals[i])
      current = current.next
    }
    current = null
    return reuslthead
}