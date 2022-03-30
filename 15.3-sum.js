/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) { //Time Complexity: O(n^2)
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (i > 0 && a === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let threeSum = a + nums[l] + nums[r];
      if (threeSum === 0) {
        result.push([a, nums[l] ,nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
      if (threeSum < 0) l++;
      if (threeSum > 0) r--;
    }
  }

  return result;
};
// @lc code=end
