/**
 * // Defination for a Node
 * function Node(val,next,random){
 * this.val=val;
 * this.next=next;
 * this.random=random;
 * }
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    for (let node = head; node !== null; node = node.node.next) {
        const nodeNew = new Node(node.val, node.next, null);
        node.next = nodeNew;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = node.next;
        nodeNew.random = node.random !== null ? node.random.next : null;
    }
    const headNew = head.next;
    for (let node = head; node !== null; node = node.next) {
        const nodeNew = node.next;
        node.next = node.next.next;
        nodeNew.next = nodeNew.next !== null ? nodeNew.next.next : null;
    }
    return headNew;
};

//时间复杂度：O(n)
//空间复杂度：O(1)