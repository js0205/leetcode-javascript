/**
 * @param {number} n
 * @return {number}
 */
var numSquare = function(n) {
    if (isPerfectSquare(n)) {
        return 1;
    }
    if (checkAnswer4(n)) {
        return 4;
    }
    for (let i = 1; i * i <= n; i++) {
        let j = n - i * i;
        if (isPerfectSquare(j)) {
            return 2;
        }
    }
    return 3;
}

//判断是否为完全平方数
const isPerfectSquare = (x) => {
    const y = Math.floor(Math.sqrt(x));
    return y * y == x;
}

//判断是否能表示为4^k*(8m+7)
const checkAnswer4 = (x) => {
    while (x % 4 === 0) {
        x /= 4;
    }
    return x % 8 == 7;
}

//时间复杂度：O(根号n)
//空间复杂度：O(1)