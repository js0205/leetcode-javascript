/**
 * Defination for a binary tree node
 * function TreeNode(val,left,right){
 * this.val=(val===undefined?0:val)
 * this.left=(left===undefined?null:left)
 * this.right=(right===undefined?null:right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number}
 */
var maxDepth = function(root) {
    return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

//时间复杂度：O(n)
//空间复杂度：O(n)