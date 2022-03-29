/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) { //Time Complexity: O(n)
  let substr = [];
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    while (substr.includes(s[i])) {
      substr = substr.slice(1);
      count--;
    }

    substr.push(s[i]);
    count++;
    if (count > maxCount) maxCount = count;
  }

  return maxCount;
};
// @lc code=end
