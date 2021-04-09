//https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let currentNode1 = l1;
    let currentNode2 = l2;
    let head
    if (currentNode1 && currentNode2) {
        head = (currentNode1.val < currentNode2.val) ? currentNode1 : currentNode2;
        if (currentNode1.val < currentNode2.val) {
            head = currentNode1
            currentNode1 = currentNode1.next
        } else {
            head = currentNode2
            currentNode2 = currentNode2.next
        }
    } else {
        return currentNode2 ? currentNode2 : currentNode1
    }
    let newCurrentNode = head

    while (currentNode1 && currentNode2) {
        if (currentNode1.val < currentNode2.val) {
            newCurrentNode.next = currentNode1
            currentNode1 = currentNode1.next
        } else {
            newCurrentNode.next = currentNode2
            currentNode2 = currentNode2.next
        }
        newCurrentNode = newCurrentNode.next
    }

    if (!currentNode2) {
        newCurrentNode.next = currentNode1;
    } else if (!currentNode1) {
        newCurrentNode.next = currentNode2;
    }
    return head
};
