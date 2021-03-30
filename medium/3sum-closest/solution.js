//https://leetcode.com/problems/3sum-closest/
const sortArr = (arr) => {
    if (arr.length <= 1) return arr
    const pivot = arr.pop()
    const less = arr.filter(el => el < pivot)
    const greater = arr.filter(el => el >= pivot)
    return [...sortArr(less), pivot, ...sortArr(greater)]
}

const twoPointer = (arr, value) => {
    let i = 0;
    let j = arr.length - 1;
    let smallestDifference = Infinity
    let idealNum = Infinity
    while (j > i) {
        let sum = (arr[i] + arr[j])
        let diff = value - sum
        if (Math.abs(diff) < Math.abs(smallestDifference)) {
            smallestDifference = diff
            idealNum = sum
        }
        if (sum > value) {
            j--
        } else if (sum < value) {
            i++
        } else {
            return value
        }
    }
    return idealNum
}

var threeSumClosest = function (nums, target) {
    const numsCopy = [...nums]
    const sortedNums = sortArr(numsCopy)
    let finalSum = Infinity
    while(sortedNums.length) {
        const firstNumber = sortedNums.pop()
        let optimalSum = firstNumber + twoPointer(sortedNums, target - firstNumber)
        if (Math.abs(target - optimalSum) < Math.abs(target - finalSum)) {
            finalSum = optimalSum
        }
    }
    return finalSum
};
