const sortArray = () => {
    let unsortedArray = ["Ball", "Apple", 3, "Fish", 1, "dog", "clay", 9]

    return unsortedArray.sort((a, b) => a -b);
}

console.log(sortArray());