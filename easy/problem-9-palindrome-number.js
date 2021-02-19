//https://leetcode.com/problems/palindrome-number/
const isPalindrome = function(x) {
    if(x < 0) return false;
    const str = String(x)
    let revStr = ''
    for(let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr === str;
};
