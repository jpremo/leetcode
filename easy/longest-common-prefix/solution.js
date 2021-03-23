//https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function (strs) {
    let sliceIdx = 1;
    if(strs.length === 0) return ''
    if(strs.length === 1) return strs[0]
    while(true) {
        let segment
        for(let i = 0; i < strs.length; i++) {
            let newSegment = strs[i].slice(0, sliceIdx)
            if(segment === strs[i]) {
                return strs[i]
            }
            if(segment !== undefined && segment !== newSegment) {
                if(sliceIdx === 1) return ''
                return strs[i].slice(0,sliceIdx)
            }
        }
        segment = newSegment
        sliceIdx ++
    }
};
