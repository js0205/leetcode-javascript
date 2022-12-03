/**
 * Defination for a binary tree node
 * function TreeNode(val,left,right){
 * this.val=(val===undefined?0:val);
 * this.left=(left===undefined?null:left)
 * this.right=(right===undefined?null:right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (root1 === null) {
        return root2;
    }
    if (root2 === null) {
        return root1;
    }
    let queue = [];
    queue.push(root1);
    queue.push(root2);
    while (queue.length) {
        let node1 = queue.shift();
        let node2 = queue.shift();
        node1.val += node2.val;
        if (node1.left !== null && node2.left !== null) {
            queue.push(node1.left);
            queue.push(node2.left);
        }
        if (node1.right !== null && node2.right !== null) {
            queue.push(node1.right);
            queue.push(node2.right);
        }
        if (node1.left === null && node2.left !== null) {
            node1.left = node2.left;
        }
        if (node1.right === null && node2.right !== null) {
            node1.right = node2.right;
        }
    }
    return root1;
}