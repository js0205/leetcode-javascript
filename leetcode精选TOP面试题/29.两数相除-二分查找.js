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
    //一般情况，使用二分查找
    //将所有的正数取相反数，这样就只需要考虑一种情况
    let rev = false;
    if (dividend > 0) {
        dividend = -dividend;
        rev = !rev;
    }
    if (divisor > 0) {
        divisor = -divisor;
        rev = !rev;
    }
    let left = 1,
        right = MAX_VALUE,
        ans = 0;
    while (left <= right) {
        //注意溢出，并且不能使用除法
        const mid = left + ((right - left) >> 1);
        const check = quickAdd(divisor, mid, dividend);
        if (check) {
            ans = mid;
            //注意溢出
            if (mid === MAX_VALUE) {
                break;
            }
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return rev ? -ans : ans;
}

//快速乘
const quickAdd = (y, z, x) => {
    //x和y是负数，z是正数
    //需要判断z*y>=x是否成立
    let result = 0,
        add = y;
    while (z !== 0) {
        if ((z & 1) !== 0) {
            //需要保证result+add>=x
            if (result < x - add) {
                return false;
            }
            result += add;
        }
        if (z !== 1) {
            //需要保证add+add>=x
            if (add < x - add) {
                return false;
            }
            add += add;
        }
        //不能使用除法
        z >>= 1;
    }
    return true;
}

//时间复杂度：O(log 2 C)
//空间复杂度：O(1)