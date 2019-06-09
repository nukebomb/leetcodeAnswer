
function ListNode(val) {
  this.val = val;
  this.next = null;
}


/**
 * @param {ListNode} head
 * @return {boolean}
 * 同一构造函上的构造出的两个对象无论传参是否一样，都会产生两个不同的对象，储存在不同的内存地址
 */
var hasCycle = function (head) {

  const list = new Set()
  while(head !== null) {
    if (list.has(head)) {
      return true
    } else {
      list.add(head)
      head = head.next
    }
  }
  return false
}