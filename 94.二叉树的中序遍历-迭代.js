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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
        const res = [];
        const stk = [];
        while (root || stk.length) {
            while (root) {
                stk.push(root);
                root = root.left;
            }
            root = stk.pop();
            res.push(root.val);
            root = root.right;
        }
        return res;
    }
    //时间复杂度：O(n)
    //空间复杂度：O(n)