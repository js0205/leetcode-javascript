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
    if (!lists || lists.length === 0) {
        return null;
    }
    let arr = [];
    let res = new ListNode(0);
    lists.forEach(list => {
        let cur = list;
        while (cur) {
            arr.push(cur.val);
            cur = cur.next;
        }
    })
    let cur = res;
    arr.sort((a, b) => a - b).forEach(val => {
        let node = new ListNode(val);
        cur.next = node;
        cur = cur.next;
    })
    return res.next;
};


//时间复杂度：O(nlog n)
//空间复杂度：O(n)