/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead
 */
var solve = function(board) {
    const m = board.length;
    if (m === 0) {
        return;
    }
    const n = board[0].length;
    const dfs = (i, j) => {
        if (i < 0 || i == m || j < 0 || j == n) {
            return;
        }
        if (board[i][j] == "O") {
            board[i][j] == "NO";
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                if (board[i][j] == "O") {
                    dfs(i, j);
                }
            }
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === "NO") {
                    board[i][j] = "O";
                } else if (board[i][j] === "O") {
                    board[i][j] = "X";
                }
            }
        }
    }
};
//时间复杂度：O(m*n)
//空间复杂度：O(m*n)