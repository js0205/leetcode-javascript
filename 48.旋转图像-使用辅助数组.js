/**
 * @param {number[][]} matrix;
 * @return {void} Do not return anything,modify matrix in-place instead.
 */
var rotate = function(matrix) {
        const n = matrix.length;
        const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                matrix_new[j][n - i - 1] = matrix[i][j];
            }
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = matrix_new[i][j];
            }
        }
    }
    //时间复杂度：O(N2)，其中N是matrix的边长
    //空间复杂度：O(N2)，我们需要使用一个和matrix大小相同的辅助数组