function sumArray(numbers){
    if(!Array.isArray){
        throw new TypeError('This is not an array')
    }

    return numbers.reduce((acc, num) => acc + num, 0);
}

module.exports = sumArray;