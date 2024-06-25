function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function transferArrToListNode(arr) {
    let res;
    arr.reduce((prev, curr) => {
        if (prev instanceof ListNode) {
            const listNode = new ListNode(curr);
            prev.next = listNode;
            return listNode;
        } else {
            res = new ListNode(prev);
            next = new ListNode(curr);
            res.next = next;
            return next;
        }
    })
    return res;
}

function transferListNodeToArr(listNode) {
    const res = [];
    while (listNode) {
        res.push(listNode.val);
        listNode = listNode.next;
    }
    return res;
}

module.exports = {
    ListNode,
    transferArrToListNode,
    transferListNodeToArr
}