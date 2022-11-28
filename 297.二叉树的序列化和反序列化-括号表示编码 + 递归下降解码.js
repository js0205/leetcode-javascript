var serialize = function(root) {
    if (root == null) {
        return "X";
    }
    const left = "(" + serialize(root.left) + ")";
    const right = "(" + serialize(root.right) + ")";
    return left + root.val + right;
};

var deserialize = function(data) {
    const ptr = [0];
    return parse(data, ptr);
};

const parse = (data, ptr) => {
    if (data[ptr[0]] === 'X') {
        ++ptr[0];
        return null;
    }
    let cur = new TreeNode(0);
    cur.left = parseSubtree(data, ptr);
    cur.val = parseInt(data, ptr);
    cur.right = parseSubtree(data, ptr);
    return cur;
}

const parseSubtree = (data, ptr) => {
    ++ptr[0]; // 跳过左括号
    const subtree = parse(data, ptr);
    ++ptr[0]; // 跳过右括号
    return subtree;
}

const parseInt = (data, ptr) => {
    let x = 0,
        sgn = 1;
    if (isNaN(Number(data[ptr[0]]))) {
        sgn = -1;
        ++ptr[0];
    }
    while (!isNaN(Number(data[ptr[0]]))) {
        x = x * 10 + data[ptr[0]++].charCodeAt() - '0'.charCodeAt();
    }
    return x * sgn;
}

//时间复杂度：O(n)
//空间复杂度：O(n)