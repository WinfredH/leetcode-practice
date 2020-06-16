const ListNode = require('../ListNode')

module.exports = function removeNthFromEnd(head, n) {
  const dummy = new ListNode()
  dummy.next = head
  let fast = dummy
  let slow = dummy
  let step = 0
  // 快指针先行
  while (step < n) {
    fast = fast.next
    step++
  }
  // 双指针同时前进
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  // 指针停下来时，慢指针即指向第n-1个节点
  slow.next = slow.next.next || null
  return dummy.next
}
