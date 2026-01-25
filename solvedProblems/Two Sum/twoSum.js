function twoSum(nums, target) {
  const numDict = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numDict) {
      return [numDict[complement], i];
    }
    numDict[nums[i]] = i;
  }l
  return [];
}

// console.log(twoSum([2, 6, 1, 5], 8));