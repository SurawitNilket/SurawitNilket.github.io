const validateInput = (input) => {
    return !isNaN(input) && input > 0 && Number.isInteger(input);
};

const findPrime = (limit) => {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}

const displayPrimes = (primes, limit) => {
    alert("For n = " + limit + " prime numbers are " + primes.join(","));
};

while (true) {
    let input = Number(prompt("Enter a positive integer:"));
    if (validateInput(input)) {
        let primes = findPrime(input);
        displayPrimes(primes, input);
        break;
    }
}
