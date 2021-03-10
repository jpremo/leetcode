//https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function (s) {
    let table = new Array(s.length + 1).fill('')
    for(let i = 1; i < table.length; i++) {
        const prevStr = table[i-1]
        const letter = s[i-1]
        if(prevStr.includes(letter)) {
            const splitStr = prevStr.split(letter)
            table[i] = splitStr[splitStr.length - 1] + letter;
        } else {
            table[i] = prevStr + letter;
        }
    }
    return Math.max(...table.map((el) => el.length))
};
