/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let window = [null, head, head.next]
    let counter = 0;
    let currentNode = head
    while(currentNode) {
        currentNode = currentNode.next
        counter++
        if(counter > n) {
            window = [window[1], window[2], window[2].next]
        }
    }

    if(window[0]) {
        window[0].next = window[2]
    }

    return (window[1] === head) ? window[2] : head
};
