/**
 * Defination for a binary tree node
 * function TreeNode(val,left,right){
 * this.val=(val===undefined?0:val)
 * this.left=(left===undefined?null:left)
 * this.right=(right===nudefined?null:right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];
    let predecessor = null;
    while (root) {
        if (root.left) {
            predecessor = root.left;
            while (predecessor.right && predecessor.right !== null) {
                predecessor = predecessor.right;
            }
            if (!predecessor.right) {
                predecessor.right = null;
                root = root.right;
            } else {
                res.push(root.val);
                predecessor.right = null;
                root = root.right;
            }
        } else {
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
}