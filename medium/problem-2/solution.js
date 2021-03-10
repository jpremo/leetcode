/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var addTwoNumbers = function (l1, l2) {
    let list1Node = l1;
    let list2Node = l2;
    let addDigit = 0;
    let prevNode
    let startNode = new ListNode()
    let currentNode = startNode
    while(list1Node || list2Node){
        let list1Val = list1Node ? list1Node.val : 0;
        let list2Val = list2Node ? list2Node.val : 0;
        let sum = list1Val + list2Val + addDigit;
        currentNode.val =  sum % 10;
        if(prevNode) prevNode.next = currentNode;
        addDigit = (sum >= 10) ? 1 : 0;

        if(list1Node) list1Node = list1Node.next;
        if(list2Node) list2Node = list2Node.next;
        prevNode = currentNode
        currentNode = new ListNode()
    }
    if(addDigit) prevNode.next = new ListNode(1)
    return startNode
};
