/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!Array.isArray(grid) || grid.length <= 0 || grid[0].length <= 0)
        return 0;
    let rows = grid.length,
        cols = grid[0].length;
    let marked = new Array(rows);
    for (let i = 0; i < marked.length; i++) {
        marked[i] = new Array(cols).fill(false);
    }
    let direction = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!marked[i][j] && grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }

    function dfs(i, j) {
        marked[i][j] = true;
        for (let k = 0; k < direction.length; k++) {
            let newI = i + direction[k][0];
            let newJ = j + direction[k][1];
            if (isValid(newI, newJ) && !marked[newI][newJ] && grid[newI][newJ] === '1') {
                dfs(newI, newJ);
            }
        }
    }

    function isValid(i, j) {
        return i >= 0 && i < rows && j >= 0 && j < cols;
    }
    return count;
}