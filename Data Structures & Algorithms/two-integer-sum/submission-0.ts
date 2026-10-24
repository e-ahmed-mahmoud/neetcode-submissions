class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
  if (
    nums.length < 2 ||
    nums.length > 1000 ||
    target > 10000000 ||
    target < -10000000
  ) {
    return [];
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 10000000 || nums[i] < -10000000) {
      break;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
    }
}
