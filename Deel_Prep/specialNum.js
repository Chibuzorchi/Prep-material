// Check when multiplying a six-digit number with 2 gives a number that has all the same numbers

const isSpecialNum = (num) => {
    const doubledNum = (num * 2).toString();
    const sortedNum = num.toString().split('').sort().join('');
    const sortedDoubled = doubledNum.split('').sort().join('');

    return sortedNum === sortedDoubled;
}

console.log(isSpecialNum(142857));