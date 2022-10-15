class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        
        if target > nums[len(nums) -1]:
            return len(nums);
        if target == nums[len(nums) -1]:
            return len(nums)  - 1;
        if target <= nums[0]:
            return 0
    
        length = len(nums)
        halfLen = len(nums) // 2
        i = 0
        
        while i <= length:
            i = i + 1
            if nums[i] == target:
                return i
            if target > nums[i - 1] and target < nums[i]:
                return i
            if target > nums[i] and target < nums[i + 1]:
                return i + 1
            if target > nums[halfLen] and i < nums[halfLen]:
                i = halfLen;
            elif target < nums[halfLen]:
                length = halfLen
            if nums[i] < target and nums[i+1] > target:
                return i+1
            
        
        
#         begin_index = 0
#         end_index = len(nums) -1
        
#         while begin_index <= end_index:
#             mid_index = begin_index + (end_index - begin_index) // 2
#             mid_val = nums[mid_index]
            
#             if mid_val == target:
#                 return begin_index
#             elif target < mid_val:
#                 if end_index - begin_index < 2:
#                     return begin_index - 1
#                 end_index = mid_index - 1
#             else:
#                 if end_index - begin_index < 2:
#                     return begin_index -1
#                 begin_index = mid_index + 1
                
#         return begin_index