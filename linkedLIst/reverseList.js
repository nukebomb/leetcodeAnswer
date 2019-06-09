/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
var reverseList = function (head) {
  let first = head
  let length = 0
  let vals = []
  while (first !== null) {
    vals.push(first.val)
    first = first.next
    length++
  }
  if (!vals.length) {
    return
  }
  vals.reverse()
  let reuslthead = new ListNode(vals[0])
  let current = reuslthead
  for (let i = 1; i < length; i++) {
    current.next = new ListNode(vals[i])
    current = current.next
  }
  current = null
  return reuslthead
}


const trueReverse = function (head) {
  let prev = null
  let current = head
  while (current !== null) {
    let temp = current.next
    current.next = prev
    prev = current
    current = temp
  }
  return prev
}

const node1 = new ListNode(1)
const node2 = new ListNode(1)

console.log(node1 === node2)