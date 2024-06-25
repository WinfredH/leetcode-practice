const { ListNode } = require("../shared")

function addTwoNumbers(l1, l2) {
    if (!l1 || !l2) return null;
    let res;
    let scale = 0, extend = 0, head = res;
    while (l1 || l2) {
        const sum = scale + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        extend = sum % 10;
        scale = Math.floor(sum / 10);
        if (!res) {
            head = res = new ListNode(extend);
        } else {
            head.next = new ListNode(extend);
            head = head.next;
        }
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    // 两个链表遍历完成后，如果还有进位值，则添加到res链表的末尾
    if (scale > 0) {
        head.next = new ListNode(scale)
    }
    return res;
};

module.exports = {
    addTwoNumbers,
    ListNode
}