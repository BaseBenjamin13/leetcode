class Solution:
    def isPalindrome(self, x: int) -> bool:
        y = str(x)
        i = 0
        j = len(y) // 2
        while i < j:
            if y[i] != y[len(y) - (i+1)]:
                return False
            i = i + 1
        return True