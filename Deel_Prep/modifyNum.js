// Define a function that modifies even numbers in an array
const modifiedNumber = (numbers) => {
    let evenModifiedNum = numbers.map(num => num % 2 === 0 ? num - 1 : num);
    return evenModifiedNum
}

let numbers = [1, 2, 3, 4, 5];
console.log(modifiedNumber(numbers));