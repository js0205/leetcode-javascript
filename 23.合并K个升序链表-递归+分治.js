/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let n = lists.length;
    if (n === 0) {
        return null;
    }
    let mergeTwoLists = (l1, l2) => {
        if (l1 === null) {
            return l2;
        }
        if (l2 === null) {
            return l1;
        }
        if (l1.val <= l2.val) {
            l1.next == mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
    let merge = (left, right) => {
        if (left === right) {
            return lists[left];
        }
        let mid = (left + right) >> 1;
        let l1 = merge(left, mid);
        let l2 = merge(mid + 1, right);
        return mergeTwoLists(l1, l2);
    }
    return merge(0, n - 1);
};

//时间复杂度:O(nlog K)
//空间复杂度：O(n)