/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let t = head, 
  p = new ListNode(null), 
  s = p,
  i = 1;
p.next = head;
while(i < n && t) {
  t = t.next;
  i++;
}
while(t && t.next) {
  t = t.next;
  p = p.next;
}
p.next = p.next.next;
return s.next;
}