const countLetters = (str) => {
    const countChar = {};

    for(const char of str) {
        if(char.match(/[a-zA-Z]/)) {
            const lowerChar = char.toLowerCase();

            countChar[lowerChar] = (countChar[lowerChar] || 0) + 1
        }
    }

    return countChar
}



module.exports = { countLetters };