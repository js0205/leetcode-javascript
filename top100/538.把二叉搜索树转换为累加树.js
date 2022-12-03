/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var covertBST = function(root) {
    let sum = 0;
    const inOrder = (root) => {
        if (root === null) { //遍历到null节点，开始返回
            return;
        }
        inOrder(root.right); //先进入右子树
        sum += root.val; //节点值累加给sum
        root.val = sum; //累加的结果，赋给root.val
        inOrder(root.left); //然后才进入左子树
    }
    inOrder(root); //递归的入口，从根节点开始
    return root;
}