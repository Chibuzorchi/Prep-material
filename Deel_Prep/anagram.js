const isAnagram = (str1, str2) => {
    let firstWord = str1.split('').sort().join('')
    let secondWord = str2.split('').sort().join('')

    return firstWord === secondWord;
}

console.log(isAnagram("listen", "silent"));