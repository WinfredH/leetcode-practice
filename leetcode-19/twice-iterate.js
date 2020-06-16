const ListNode = require('../ListNode')

module.exports = function removeNthFromEnd (head, n) {
  let len = 0
  let cur = head
  while (cur) {
    len++
    cur = cur.next
  }
  let step = 0
  const dummy = new ListNode()
  dummy.next = head
  cur = dummy
  while (step !== len - n) {
    step++
    cur = cur.next
  }
  cur.next = cur.next ? cur.next.next : null
  return dummy.next
}
