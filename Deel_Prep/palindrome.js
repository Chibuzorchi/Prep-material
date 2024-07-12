const isPlaindrome = (str) => {
    let palindrome = str.split('').reverse().join('')

    return palindrome === str
}

console.log(isPlaindrome("abtuba"));