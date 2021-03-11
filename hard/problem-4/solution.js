//https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function (nums1, nums2) {
    let index1 = 0;
    let index2 = 0;
    let lastIndex = (nums1.length + nums2.length - 1)
    let finalIndex, secondFinalIndex
    if (lastIndex % 2 === 0) {
        finalIndex = lastIndex / 2
    } else {
        finalIndex = Math.floor(lastIndex / 2)
        secondFinalIndex = finalIndex + 1
    }
    let finalValue, secondFinalValue
    while (index1 < nums1.length || index2 < nums2.length) {
        let lowerNumber
        if (nums1[index1] === undefined) {
            lowerNumber = nums2[index2]
            index2++
        } else {
            if (nums2[index2] === undefined) {
                lowerNumber = nums1[index1]
                index1++
            }
        }
        if (lowerNumber === undefined) {
            if (nums1[index1] >= nums2[index2]) {
                lowerNumber = nums2[index2]
                index2++
            } else {
                lowerNumber = nums1[index1]
                index1++
            }
        }

        if(index1 + index2 - 1 === finalIndex) {
            finalValue = lowerNumber;
            if(secondFinalIndex === undefined) break;
        }
        if (secondFinalIndex !== undefined && index1 + index2 - 1 === secondFinalIndex) {
            secondFinalValue = lowerNumber;
            break;
        }
    }

    return (secondFinalIndex === undefined) ? finalValue : (finalValue + secondFinalValue) / 2;
};
