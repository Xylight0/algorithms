/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) { //Time Complexity: O(n log n)
  let mergedArr = nums1.concat(nums2);
  mergedArr.sort((a, b) => a - b);

  const L = mergedArr.length;

  return L % 2 !== 0
    ? mergedArr[Math.floor(L / 2)]
    : (mergedArr[Math.floor(L / 2)] + mergedArr[Math.floor(L / 2) - 1]) / 2;
};
// @lc code=end
