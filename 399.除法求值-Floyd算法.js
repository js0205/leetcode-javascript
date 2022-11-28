/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let nvars = 0;
    const variables = new Map();
    const n = equations.length;
    for (let i = 0; i < n; i++) {
        if (!variables.has(equations[i][0])) {
            variables.set(equations[i][0], nvars++);
        }
        if (!variables.has(equations[i][1])) {
            variables.set(equations[i][1], nvars++);
        }
    }
    const graph = new Array(nvars).fill(0).map(() => new Array(nvars).fill(-1.0));
    for (let i = 0; i < n; i++) {
        const va = variables.get(equations[i][0]),
            vb = variables.get(equations[i][1]);
        graph[va][vb] = values[i];
        graph[vb][va] = 1.0 / values[i];
    }
    for (let k = 0; k < nvars; k++) {
        for (let i = 0; i < nvars; i++) {
            for (let j = 0; j < nvars; j++) {
                if (graph[i][k] > 0 && graph[k][j] > 0) {
                    graph[i][j] = graph[i][k] * graph[k][j];
                }
            }
        }
    }
    const queriesCount = queries.length;
    const ret = new Array(queriesCount).fill(0);
    for (let i = 0; i < queriesCount; i++) {
        const query = queries[i];
        let result = -1.0;
        if (variables.has(query[0]) && variables.has(query[1])) {
            const ia = variables.get(query[0]),
                ib = variables.get(query[1]);
            if (graph[ia][ib] > 0) {
                result = graph[ia][ib];
            }
        }
        ret[i] = result;
    }
    return ret;
}

//时间复杂度：O(ML+N的3次方+QL)。构建图需要O(ML)的时间；Flyod算法需要O(N3)的时间；
//处理查询时， 单次查询只需要O(L) 的字符串比较以及常数时间的额外操作
//空间复杂度:O(NL+N的2次方)