//https://leetcode.com/problems/longest-palindromic-substring/
var longestRightPalindrome = function (s) {
    let rightIdx = s.length - 1;
    let cutEnd = s.length;
    while( rightIdx > 0 ) {
        leftChar = s[0];
        rightChar = s[rightIdx]
        if(leftChar !== rightChar) {
            cutEnd = rightIdx - 1
        }
        rightIdx --
    }
    return s.slice(0, cutEnd)
};

var longestPalindrome = function (s) {
    let maxPalindrome = s[0]

    for(let i = 0; i <= s.length; i++) {
        let newMaxPalindrome = longestRightPalindrome(s.slice(0, s.length))
        if(newMaxPalindrome.length > maxPalindrome.length) {
            maxPalindrome = newMaxPalindrome
        }
    }

    return maxPalindrome
}
