/**
 * @param {TreeNode} root
 * @param {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) { return null; }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}

//时间复杂度：O(n)
//空间复杂度：O(n)