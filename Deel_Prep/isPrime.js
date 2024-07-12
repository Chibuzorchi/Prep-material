const isPrime = (num) => {
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    for(let i = 5; i * i <= num; i += 6) {
        if(num % i === 0 || num % (i + 2) === 0) {
            return false
        }
    }

    return true
}

const primesUpTo = (n) => {
    let allPrime = [];

    for(i = 2; i <= n; i++){
        if(isPrime(i)) {
            allPrime.push(i)
        }
    }

    return allPrime
}

console.log(primesUpTo(99));