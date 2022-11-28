/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0;
    const stack = [];
    const n = height.length;
    for (let i = 0; i < n; ++i) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) {
                break;
            }
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.max(height[left], height[i]) - height[top];
            ans += currWidth * currHeight;
        }
        stack.push(i)
    }
    return ans;
}

//时间复杂度：O(n)
//空间复杂度：O(n)