const ListNode = require('../ListNode')

module.exports = function reverseBetween(head, m, n) {
  const dummy = new ListNode()
  let cur = dummy
  dummy.next = head
  for (let i = 0; i < m - 1; i++) {
    cur = cur.next
  }
  const leftHead = cur
  let [ start, pre ] = [ leftHead.next, leftHead.next ]
  cur = pre.next
  for (let i = m; i < n; i++) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  leftHead.next = pre
  start.next = cur
  return dummy.next
}
