/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    const dfs = (root) => {
        if (root === null) {
            return 0;
        }
        const left = dfs(root.left);
        const right = dfs(root.right);
        const innerMaxSum = left + root.val + right;
        maxSum = Math.max(maxSum, innerMaxSum);
        const outputMaxSum = root.val + Math.max(0, left, right);
        return outputMaxSum <= 0 ? 0 : outputMaxSum;
    }
    dfs(root);
    return maxSum;
}