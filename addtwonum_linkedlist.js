function LinkedList() {
  let node = function (element) {
    this.element = element
    this.next = null
  }
  let length = 0
  let head = null
  this.append = function (val) {
    var current = head
    if (head === null) {
      head = new node(val)
      length ++
    } else {
      for (var i = 1; i < length; i++) {
        current = current.next
      }
      current.next = new node(val)
      length ++
    }
  }
  this.insert = function (position, element) {

  }
  this.get = function () {
    var current = head
    var result = []
    for (var i = 0; i < length; i++) {
      result.push(current.element)
      current = current.next
    }
    return result.join('-->')
  }
  this.getReverse = function () {
    var current = head
    var result = []
    for (var i = 0; i < length; i++) {
      result.push(current.element)
      current = current.next
    }
    return result.reverse().join('')
  }
}

function nodeListIn (listStr1, listStr2) {
  var linkedList1 = new LinkedList()
  var linkedList2 = new LinkedList()
  var arr1 = listStr1.split('-->')
  var arr2 = listStr2.split('-->')
  arr1.forEach(element => {
    linkedList1.append(element)
  })
  arr2.forEach(ele => {
    linkedList2.append(ele)
  })

  return (parseInt(linkedList1.getReverse()) + parseInt(linkedList2.getReverse())).toString().split('').reverse().join('-->')
}

var nodeadd = nodeListIn('2-->4-->3','5-->6-->4')
console.log(nodeadd)