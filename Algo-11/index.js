function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum;
}

// Example usage:
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10])); // Output: 7
