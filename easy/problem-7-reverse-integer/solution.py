#https://leetcode.com/problems/reverse-integer/
class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        baseStr = str(x)
        neg = ''
        zeroCut = 0
        if baseStr[0] == '-':
            neg = '-'
            baseStr = baseStr[1:]
        baseStr = baseStr[::-1]
        for i in range(0, len(baseStr)):
            zeroCut = i
            if baseStr[i] != '0':
                break
        finalNum = int(neg+baseStr[zeroCut:])
        if(finalNum < -2**31 or finalNum > 2**31-1):
            return 0
        return finalNum
