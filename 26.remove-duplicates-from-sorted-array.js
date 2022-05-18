/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) { //Time Complexity: O(n)
  let leftP = 1;
  for (let rightP = 1; rightP < nums.length; rightP++) {
    if (nums[rightP] !== nums[rightP - 1]) {
      nums[leftP] = nums[rightP];
      leftP++;
    }
  }
  return leftP;
};
// @lc code=end
