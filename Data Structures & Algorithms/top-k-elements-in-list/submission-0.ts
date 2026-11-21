class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
          nums.sort((a, b) => a - b);

  const numCount = new Map<number, number[]>();
  let count = 0;

  for (let index = 0; index < nums.length; index++) {
    count++;

    if (nums[index] != nums[index + 1] || index == nums.length - 1) {
      if (numCount.has(count)) {
        const curValue = numCount.get(count);
        curValue?.push(nums[index]);
      } else {
        numCount.set(count, [nums[index]]);
      }
      count = 0;
    }
  }

  const values = Array.from(numCount.entries())
    .sort(([countA], [countB]) => countA - countB)
    .flatMap(([, numbers]) => numbers);

  return values.slice(values.length - k);


    }
}
