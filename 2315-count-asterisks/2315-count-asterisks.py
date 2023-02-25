class Solution:
    def countAsterisks(self, s: str) -> int:
        pipe = 0
        asterisks = 0
        i = 0
        while i < len(s) :
            if s[i] == '|' :
                pipe += 1
            if s[i] == '*' and pipe % 2 == 0 :
                asterisks += 1 
            i += 1
        return asterisks