const isUnique = (str) => {
    const set = new Set(str)

    return set.size === str.length
}

console.log(isUnique('Dudy'));