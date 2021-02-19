#https://leetcode.com/problems/palindrome-number/
import math

class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        baseStr = str(x)
        strLength = len(baseStr)
        maxI = int(math.floor((strLength)/2))
        for i in range(0, maxI):
            if baseStr[i] != baseStr[-1-i]:
                return False
        return True
