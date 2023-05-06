class Solution:
    def leftRigthDifference(self, nums: List[int]) -> List[int]:
        leftSum = [0]
        rightSum = [0]
        leftNums = nums
        rightNums = nums
        for i in  range(len(nums) -1):
            if i == 0:
                leftSum.append(nums[i])
                rightSum.insert(0, nums[len(nums) -1]);
            else:
                leftNums = nums
                leftNums = leftNums[slice(0,i+1)]
                leftNums = sum(leftNums)
                leftSum.append(leftNums)
                rightNums = nums
                rightNums = rightNums[slice(len(rightNums) -i -1, len(rightNums))]
                rightNums = sum(rightNums)
                rightSum.insert(0,rightNums)
        for x in  range(len(nums)):
            num = leftSum[x] - rightSum[x]
            if num < 0:
                num *= -1
            nums[x] = num
        
        return nums