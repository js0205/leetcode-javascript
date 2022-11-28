/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        //直接跳过
        dfs(target, combine, idx + 1);
        //选择当前数
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }
    dfs(target, [], 0);
    return ans;
}

//时间复杂度：O(S)，其中S是所有可行解的长度之和
//空间复杂度：O(target)。除答案数组外，空间复杂度取决于递归的栈深度