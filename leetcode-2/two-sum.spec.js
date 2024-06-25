const test = require("node:test");
const assert = require('node:assert');
const { transferArrToListNode, transferListNodeToArr } = require("../shared")
const { addTwoNumbers } = require("./two-sum");

test('[2,4,3], [5,6,4]', { skip: false }, () => {
    const res = transferListNodeToArr(addTwoNumbers(transferArrToListNode([2,4,3]), transferArrToListNode([5,6,4])));
    assert.deepEqual(res, [7,0,8]);
})

test('[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]', { skip: false }, () => {
    const res = transferListNodeToArr(addTwoNumbers(transferArrToListNode([9, 9, 9, 9, 9, 9, 9]), transferArrToListNode([9, 9, 9, 9])));
    assert.deepEqual(res, [8,9,9,9,0,0,0,1]);
})

test('[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]', { skip: false }, () => {
    const res = transferListNodeToArr(addTwoNumbers(transferArrToListNode([1,6,0,3,3,6,7,2,0,1]), transferArrToListNode([6,3,0,8,9,6,6,9,6,1])));
    assert.deepEqual(res, [7,9,0,1,3,3,4,2,7,2]);
})