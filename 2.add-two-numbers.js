/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) { //Time Complexity: O(n)
  let node1 = l1;
  let node2 = l2;
  let carry = 0;
  let dummy = new ListNode();
  let cur = dummy;

  while (node1 || node2 || carry) {
    let val1 = node1 ? node1.val : 0;
    let val2 = node2 ? node2.val : 0;

    let val = val1 + val2 + carry;
    carry = 0;
    if (val >= 10) {
      carry = Math.floor(val / 10);
      val = val % 10;
    }

    cur.next = new ListNode(val);
    cur = cur.next;

    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }

  return dummy.next;
};
// @lc code=end
