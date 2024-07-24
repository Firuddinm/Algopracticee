function areAllDivisors(arr, divisor) {
    return arr.every(num => divisor % num === 0);
}

// Example usage:
console.log(areAllDivisors([1, 2, 4], 8)); // Output: true
console.log(areAllDivisors([1, 2, 5], 8)); // Output: false
