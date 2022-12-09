/**
 * //Defination for a Node.
 * function Node(val,next,random){
 * this.val=val;
 * this.next=next;
 * this.random=random;
 * }
 */
/**
 * @param {Node} head
 * @param {Node}
 */
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    if (!cacheNode.has(head)) {
        cacheNode.set(
            head, { val: head.val },
            Object.assign(cacheNode.get(head), {
                next: copyRandomList(head.next, cacheNode),
                random: copyRandomList(head.random, cacheNode),
            })
        );
    }
    return cacheNode.get(head);
};

//时间复杂度：O(n)
//空间复杂度：O(n)