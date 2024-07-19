function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

function sumOfPrimes(array) {
    let totalSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            totalSum += array[i];
        }
    }

    return totalSum;
}

// Funksiyanı çağırın və nəticəni konsola yazdırın
const sampleArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumOfPrimes(sampleArray);
console.log(result); // 17 (2 + 3 + 5 + 7)
