/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead
 */
var setZeroes = function(matrix) {
    const m = matrix.length,
        n = matrix[0].length;
    let flagCol0 = false,
        flagRow0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
    }
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            flagRow0 = true;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (flagCol0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    if (flagRow0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
};
//时间复杂度：O(mn)
//空间复杂度：O(1)