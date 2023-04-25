package leetcode.emre.two-pointers;

public class TwoPointers {

  // 15. 3Sum
  public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> output = new ArrayList<>();
    int n = nums.length;
    int target = 0;
    Arrays.sort(nums);

    for (int i = 0; i < n; i++) {
      int temp = nums[i];
      if (i != 0 && nums[i] == nums[i - 1])
        continue;

      int end = n - 1;
      int start = i + 1;
      while (start < end) {
        int sum = temp + nums[start] + nums[end];
        if (sum == target) {
          output.add(Arrays.asList(temp, nums[start], nums[end]));
          end--;
          start++;
          while (nums[start] == nums[start - 1] && start < end)
            start++;
        } else if (sum > target)
          start++;
        else
          end--;
      }
    }

    return output;
  }

  // 16. 3Sum Closest
  public int threeSumClosest(int[] nums, int target) {
    int output = nums[0] + nums[1] + nums[2];
    int n = nums.length; 
    Arrays.sort(nums);

    for (int i = 0; i < n; i++) {
      int end = n - 1;
      int start = i + 1;
      while (start < end) {
        int sum = nums[i] + nums[start] + nums[end];
        if (sum < target) start++;
        else end--;
        if (Math.abs(sum - target) < Math.abs(output - target))
          output = sum;
      }
    }

    return output;
  }

}
