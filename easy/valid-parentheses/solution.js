//https://leetcode.com/problems/valid-parentheses/
var isValid = function (s) {
    const converter = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
    const stack = []
    for(let i = 0; i < s.length; i++) {
        const char = s[i]
        if(char === '{' || char === '[' || char === '(') {
            stack.push(char)
        } else {
            const compareChar = stack.pop()
            if(converter[compareChar] !== char) {
                return false
            }
        }
    }
    return stack.length === 0
};
