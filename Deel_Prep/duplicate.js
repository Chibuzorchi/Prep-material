const findDuplicates = arr => {
    let seen = new Set();
    let duplicates = [];
    for (let num of arr) {
        if (seen.has(num)) {
            if (!duplicates.includes(num)) {
                duplicates.push(num);
            }
        } else {
            seen.add(num);
        }
    }
    return duplicates;
};

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 5, 6])); 
