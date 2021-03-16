//https://leetcode.com/problems/longest-palindromic-substring/
var longestRightPalindrome = function (s) {
    let rightIdx = s.length - 1;
    let rightHead = rightIdx
    let cutEnd = s.length;
    let idx = 0;
    while( rightIdx > idx ) {
        leftChar = s[idx];
        rightChar = s[rightIdx]
        if(leftChar === rightChar) {

        }
        rightIdx --
    }
    return s.slice(0, cutEnd)
};

var longestPalindrome = function (s) {
    let maxPalindrome = s[0]

    for(let i = 0; i <= s.length; i++) {
        let newMaxPalindrome = longestRightPalindrome(s.slice(i, s.length))
        if(newMaxPalindrome.length > maxPalindrome.length) {
            maxPalindrome = newMaxPalindrome
        }
    }

    return maxPalindrome
}
