//https://leetcode.com/problems/string-to-integer-atoi/
var myAtoi = function (s) {
    let sign = 1;
    let firstCharacterPassed = false;
    let answerStr = ''
    const digits = '0123456789'
    for(let i = 0; i < s.length; i ++) {
        let char = s[i]
        if(firstCharacterPassed === false) {
            if(char === ' ') {
                continue
            } else {
                firstCharacterPassed = true
                if(char === '+') {
                    sign = 1;
                } else if (char === '-') {
                    sign = -1;
                } else {
                    if(digits.includes(char)) {
                        answerStr = answerStr + char
                    } else {
                        break;
                    }
                }
            }
        } else {
            if (digits.includes(char)) {
                answerStr = answerStr + char
            } else {
                break;
            }
        }
    }
    let answerNumber = answerStr === '' ? 0 : Number(answerStr)*sign;
    answerNumber = answerNumber > 2**31 - 1 ? 2**31 - 1 : answerNumber;
    answerNumber = answerNumber < (-2)**31 ? (-2)**31 : answerNumber;
    return answerNumber
};
