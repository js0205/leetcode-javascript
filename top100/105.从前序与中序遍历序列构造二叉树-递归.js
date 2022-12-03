/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null;
    let tmp = preorder[0];
    let sz = inorder.indexOf(tmp);
    let root = new TreeNode(tmp);
    root.left = buildTree(preorder.slice(1, sz + 1), inorder.slice(0, sz));
    root.right = buildTree(preorder.slice(sz + 1), inorder.slice(sz + 1));
    return root;
}