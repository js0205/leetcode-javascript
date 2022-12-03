/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX_VALUE = 2 ** 31 - 1,
        MIN_VALUE = -(2 ** 31);
    //考虑被除数为最小值的情况
    if (dividend === MIN_VALUE) {
        if (divisor === 1) {
            return MIN_VALUE;
        }
        if (divisor === -1) {
            return MAX_VALUE;
        }
    }
    //考虑除数为最小值的情况
    if (divisor === MIN_VALUE) {
        return dividend === MIN_VALUE ? 1 : 0;
    }
    //考虑被除数为0的情况
    if (dividend === 0) {
        return 0;
    }
    //一般情况，使用类二分查找
    //将所有的正数取相反数，这样就只需要考虑一种情况
    let rev = false;
    if (dividend > 0) {
        dividend = -dividend;
        rev = !rev;
    }
    const candidates = [divisor];
    let index = 0;
    //注意溢出
    while (candidates[index] >= dividend - candidates[index]) {
        candidates.push(candidates[index] + candidates[index]);
        ++index;
    }
    let and = 0;
    for (let i = candidates.length - 1; i >= 0; --i) {
        if (candidates[i] >= dividend) {
            ans += 1 << i;
            dividend -= candidates[i];
        }
    }
    return rev ? -ans : ans;
}