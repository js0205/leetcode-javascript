/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [];
    let strStack = [];
    let num = 0;
    let result = '';
    for (const char of s) {
        if (!isNaN(char)) {
            num = num * 10 + Number(char);
        } else if (char === '[') {
            strStack.push(result);
            result = '';
            numStack.push(num);
            num = 0;
        } else if (char === ']') {
            let repeatTimes = numStack.pop();
            result = strStack.pop() + result.repeat(repeatTimes);
        } else {
            result += char;
        }
    }
    return result;
};