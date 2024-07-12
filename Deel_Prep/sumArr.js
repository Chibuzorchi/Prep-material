//Arrays and Loops: Write a function that takes an array of numbers and returns the sum of all positive numbers.

const sumPostiveNum = () => {
    let array = [-3, 3, 5, -2, -5, 3, 4]
    let sum = 0

    for(let num of array) {
        if(num > 0) {
            sum += num
        }
    }

    return sum
}

console.log(sumPostiveNum());