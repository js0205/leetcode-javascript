/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let lremove = 0;
    let rremove = 0;
    const left = [];
    const right = [];
    const ans = [];
    const cnt = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left.push(i);
            lremove++;
        } else if (s[i] === ')') {
            right.push(i);
            if (lremove === 0) {
                rremove++;
            } else {
                lremove--;
            }
        }
    }

    const m = left.length;
    const n = right.length;
    const maskArr1 = [];
    const maskArr2 = [];
    for (let i = 0; i < (1 << m); i++) {
        if (bitCount(i) !== lremove) {
            continue;
        }
        maskArr1.push(i);
    }
    for (let i = 0; i < (1 << n); i++) {
        if (bitCount(i) !== rremove) {
            continue;
        }
        maskArr2.push(i);
    }
    for (const mask1 of maskArr1) {
        for (const mask2 of maskArr2) {
            if (checkValid(s, mask1, left, mask2, right)) {
                cnt.add(recoverStr(s, mask1, left, mask2, right));
            }
        }
    }
    for (const v of cnt) {
        ans.push(v);
    }

    return ans;
}

const bitCount = (n) => {
    let ret = 0;
    while (n) {
        n &= n - 1;
        ret++;
    }
    return ret;
};

const checkValid = (str, lmask, left, rmask, right) => {
    let pos1 = 0;
    let pos2 = 0;
    let cnt = 0;

    for (let i = 0; i < str.length; i++) {
        if (pos1 < left.length && i === left[pos1]) {
            if ((lmask & (1 << pos1)) === 0) {
                cnt++;
            }
            pos1++;
        } else if (pos2 < right.length && i === right[pos2]) {
            if ((rmask & (1 << pos2)) === 0) {
                cnt--;
                if (cnt < 0) {
                    return false;
                }
            }
            pos2++;
        }
    }

    return cnt === 0;
}

const recoverStr = (str, lmask, left, rmask, right) => {
    const sb = [];
    let pos1 = 0;
    let pos2 = 0;

    for (let i = 0; i < str.length; i++) {
        if (pos1 < left.length && i === left[pos1]) {
            if ((lmask & (1 << pos1)) === 0) {
                sb.push(str[i]);
            }
            pos1++;
        } else if (pos2 < right.length && i === right[pos2]) {
            if ((rmask & (1 << pos2)) === 0) {
                sb.push(str[i]);
            }
            pos2++;
        } else {
            sb.push(str[i]);
        }
    }

    return sb.join('');
}