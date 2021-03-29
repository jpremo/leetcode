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
    if(!head || !head.next) return head
    let currentNode = head;
    let finalHead = currentNode.next;
    currentNode.next = finalHead.next
    finalHead.next = currentNode
    let nodes = [currentNode]
    while(currentNode) {
        if(nodes.length === 3) {
            nodes[0].next = nodes[2];
            nodes[1].next = nodes[2].next;
            nodes[2].next = nodes[1]
            currentNode = nodes[1]
            nodes = [currentNode]
        }
        currentNode = currentNode.next
        nodes.push(currentNode)
    }
    return finalHead
};
