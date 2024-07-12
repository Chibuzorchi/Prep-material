const countLetters = (str) => {
    const countedLetters = {};

    for(const char of str){
        if(char.match(/[a-zA-Z]/)){
            const lowerChar = char.toLowerCase()      

            countedLetters[lowerChar] = (countedLetters[lowerChar] || 0) + 1
          }
    }

    return countedLetters
}

module.exports = countLetters;