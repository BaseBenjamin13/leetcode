class Solution:
    def findGCD(self, nums: List[int]) -> int:
        nums.sort()
        smallNum = nums[0]
        bigNum = nums[len(nums) -1]
        i = smallNum
        while i >= 1 :
            if bigNum / i % 1 == 0 and smallNum / i % 1 == 0:
                return i;
            i = i -1
        return 1;