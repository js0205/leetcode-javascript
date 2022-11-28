/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead
 */
var flatten = function(root) {
    const list = [];
    preorderTraversal = list.length;
    for (let i = 1; i < size; i++) {
        const prev = list[i - 1],
            curr = list[i];
        prev.left = null;
        prev.right = curr;
    }
}
const preorderTraversal = (root, list) => {
    if (root !== null) {
        list.push(root);
        preorderTraversal(root.left, list);
        preorderTraversal(root.right, list);
    }
}