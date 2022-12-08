/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ret = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = ter[i - 1][(j = 1)] + ret[i - 1][j];
        }
        ret.push(row);
    }
    return ret;
};

//时间复杂度：O(numRows的平方)
//空间复杂度：O(1)