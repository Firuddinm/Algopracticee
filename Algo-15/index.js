function areAllOdd(arr) {
    return arr.every(num => num % 2 !== 0);
}

// Example usage:
console.log(areAllOdd([1, 3, 5, 7])); // Output: true
console.log(areAllOdd([1, 2, 3, 5])); // Output: false
