module.exports = function reverseList (head) {
  // 三指针
  let pre = null
  let cur = head
  let next = head ? head.next : null
  while (cur) {
    cur.next = pre
    pre = cur
    cur = next
    next = next ? next.next : null
  }
  return pre
}
