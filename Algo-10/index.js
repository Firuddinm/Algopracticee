function completeRange(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// Example usage:
console.log(completeRange(1, 5)); // Output: [1, 2, 3, 4, 5]
