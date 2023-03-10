class Solution:
    def defangIPaddr(self, address: str) -> str:
        defanged = ''
        for i in address :
            if i == '.' :
                defanged += '[.]'
            if i != '.' :
                defanged += i
                       
        return defanged