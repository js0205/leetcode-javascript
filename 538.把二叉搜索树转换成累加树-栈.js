/**
 * Defination for a binary tree node
 * function TreeNode(val,left,right){
 * this.val=(val===undefined?0:val)
 * this.left=(left===undefined?null:left)
 * this.right=(right===undefined?null:right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = (root) => {
    let sum = 0;
    let stack = [];
    let cur = root;
    while (cur) { //右子节点先不断压栈
        stack.push(cur);
        cur = cur.right;
    }
    while (stack.length) { //一直到清空递归栈
        cur = stack.pop(); //位于栈顶的节点出栈
        sum += cur.val;
        cur.val = sum;
        cur = cur.left; //找子节点
        while (cur) { //存在，让左子节点压栈
            stack.push(cur);
            cur = cur.right; //让当前左子节点的右子节点不断压栈
        }
    }
    return root;
}