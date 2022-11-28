/**
 * @param {number} numCourses
 * @param {number[][]} prerequistites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //入度数组
    const inDegree = new Array(numCourses).fill(0);
    //邻接表
    const map = {};
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
        if (map[prerequisites[i][1]]) {
            map[prerequisites[i][1]].push(prerequisites[i][0]);
        } else {
            map[prerequisites[i][1]] = [prerequisites[i][0]];
        }
    }
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] == 0) queue.push(i);
    }
    let count = 0;
    while (queue.length) {
        const selected = queue.shift();
        count++;
        const toEnQueue = map[selected];
        if (toEnQueue && toEnQueue.length) {
            for (let i = 0; i < toEnQueue.length; i++) {
                inDegree[toEnQueue[i]]--;
                if (inDegree[toEnQueue[i]] === 0) {
                    queue.push(toEnQueue[i]);
                }
            }
        }
    }
    return count == numCourses;
};