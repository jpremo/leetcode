//https://leetcode.com/problems/roman-to-integer/
var romanToInt = function (s) {
    const translator = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let total = 0;
    for(let i = 0; i < s.length; i++) {
        char = s[i]
        nextChar = s[i+1]
        subtraction = false;
        if(char === 'I' && (nextChar === 'V' || nextChar === 'X')) {
            subtraction = true;
        } else if (char === 'X' && (nextChar === 'L' || nextChar === 'C')) {
            subtraction = true;
        } else if (char === 'C' && (nextChar === 'D' || nextChar === 'M')) {
            subtraction = true;
        }

        if(subtraction) {
            total -= (translator[char]);
            continue;
        }

        total += translator[char]
    }
    return total
};
