/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const t = [];
    const ans = [];
    const dfs = (cur) => {
        if (cur === nums.length) {
            ans.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        dfs(cur + 1);
        t.pop(t.length - 1);
        dfs(cur + 1);
    }
    dfs(0);
    return ans;
}

//时间复杂度：O(n*2的n次方)
//空间复杂度：O(n)