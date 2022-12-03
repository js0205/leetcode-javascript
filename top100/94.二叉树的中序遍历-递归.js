/**
 * @param {TreeNode} root
 * @param {number[]}
 */
var inorderTraversal = function(root) {
        const res = [];
        const inorder = (root) => {
            if (!root) {
                return;
            }
            inorder(root.left);
            res.push(root.val);
            inorder(root.right);
        }
        inorder(root);
        return res;
    }
    //思路：递归
    // 时间复杂度：O(n)，n是二叉树节点的个数
    //空间复杂度：O(n)