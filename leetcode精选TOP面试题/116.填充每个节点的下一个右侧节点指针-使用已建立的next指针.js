/**
 * //Defination for a Node.
 * function Node(val,left,right,next){
 * this.val=(val===undefined?null:val)
 * this.left=(left===undefined?null:left)
 * this.right=(right===undefined?null:right)
 * this.next=(next===undefined?null:next)
 * }
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return root;
    }
    //从根节点开始
    let leftmost = root;
    while (leftmost.left !== null) {
        //遍历这一层节点组织成的链表，为下一层的节点更新next指针
        let head = leftmost;
        while (head !== null) {
            //CONNECTION 1
            head.left.next = head.right;
            //CONNECTION 2
            if (head.next !== null) {
                head.right.next = head.next.left;
            }
            //指针向后移动
            head = head.next;
        }
        //去下一层的最左的节点
        leftmost = leftmost.left;
    }
    return root;
};

//时间复杂度：O(N)
//空间复杂度：O(1)