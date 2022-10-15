class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        
        i=0
        j=len(nums)-1;
        while i < j:
            mid = (i+j) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                j = mid -1;
            else:
                i = mid +1
        if nums[i] >= target:
            return i
        else: 
            return i+1
        
        
#         if target > nums[len(nums) -1]:
#             return len(nums);
#         if target == nums[len(nums) -1]:
#             return len(nums)  - 1;
#         if target <= nums[0]:
#             return 0
    
#         length = len(nums)
#         halfLen = len(nums) // 2
#         i = 0
        
#         while i <= length:
#             i = i + 1
#             if nums[i] == target:
#                 return i
#             if target > nums[i - 1] and target < nums[i]:
#                 return i
#             if target > nums[i] and target < nums[i + 1]:
#                 return i + 1
#             if target > nums[halfLen] and i < nums[halfLen]:
#                 i = halfLen;
#             elif target < nums[halfLen]:
#                 length = halfLen
#             if nums[i] < target and nums[i+1] > target:
#                 return i+1