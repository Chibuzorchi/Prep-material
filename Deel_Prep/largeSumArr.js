// Find, in an array, the largest sum of consecutive integers

const largestSum = () => {
    let array = [-2, 9, -4, 8, 0, 1, 7, 5, -6, 3, 9, 6, 3, 0];
    let maxSum = -Infinity;
    let currentSum = 0;

    for(let num of array) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(largestSum());