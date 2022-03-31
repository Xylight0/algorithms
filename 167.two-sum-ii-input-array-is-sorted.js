/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) { //Time Complexity: O(n)
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    if (numbers[l] + numbers[r] === target) return [l + 1, r + 1];
    numbers[l] + numbers[r] > target ? r-- : l++;
  }

  return [];
};
// @lc code=end
