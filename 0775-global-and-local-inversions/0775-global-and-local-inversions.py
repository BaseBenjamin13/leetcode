class Solution:
    def isIdealPermutation(self, nums: List[int]) -> bool:
        maxNum = -1
        i = 0
        while i < len(nums) -2 :
            maxNum = max(nums[i], maxNum)
            
            if maxNum > nums[i+2]:
                return False
            i = i + 1
        return True