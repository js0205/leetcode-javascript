/**
 * @param {number} n
 * @return {boolean}
 */

let getNext = function(n) {
    return n
        .toString()
        .split("")
        .map((i) => i ** 2)
        .reduce((a, b) => a + b);
};
var isHappy = function(n) {
    let slow = n;
    let fast = getNext(n);
    while (fast !== 1 && fast !== slow) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
};