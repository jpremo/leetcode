/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if(!head.next) return head
    let currentNode = head;
    let finalHead = null;
    let previousNode
    while(currentNode) {
        if(currentNode && previousNode) {
            previousNode.next = currentNode.next;
            currentNode.next = previousNode

            if(!finalHead) {
                finalHead = previousNode;
            }

            currentNode = currentNode.next
            previousNode = null;
            continue;
        }
        previousNode = currentNode
        currentNode = currentNode.next
    }
};
