class Solution:
    def climbStairs(self, n: int) -> int:
        arr=[0,1,2]
        i = 3
        
        while i <= n:
            arr.append(arr[i-1]+arr[i-2])
            i += 1
    
        return arr[n]