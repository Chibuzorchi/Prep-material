// Given an input string = aabbbccccaaaaa, maintain the insertion order and output a2b3c4a5.
let inputString = "aabbbccccaaaaa";

let comString = inputString.match(/(.)\1*/g).map(s => s[0] + s.length).join('');
console.log(comString);