public class Solution {
        public bool hasDuplicate(int[] nums) {

        if ( nums.Length == 0 || nums.Length >= Math.Pow(10,5))
        {
            return false;
   //         throw new ArgumentOutOfRangeException();
        }
        Array.Sort(nums);
        for (int i = 0; i < nums.Length -1; i++)
        {
            if (nums[i] == nums[i+1])
            {
                return true;
            }
        }

        return false;
    }
}