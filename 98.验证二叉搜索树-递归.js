/**
 * Defination for a binary tree node.
 * function TreeNode(val,left,right){
 * this.val=(val===undefined?0:val)
 * this.left=(left===undefined?null:left)
 * this.right=(right===undefined?null:right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {boolean}
 */
const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return (
        helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
    );
};
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};
//时间复杂度：O(n)
//空间复杂度：O(n)