/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) { //Time Complexity: O(n)
  const map = new Map();
  let found = false;
  nums.forEach((elem) => {
    if (map.has(elem)) found = true;
    map.set(elem);
  });
  return found;
};
// @lc code=end
