function sumArray(numbers) {
    let totalSum = 0;
    // Arraydakı ədədləri nəzərdən keçir
    for (let i = 0; i < numbers.length; i++) {
        totalSum += numbers[i];
    }
    return totalSum;
}

// Funksiyanı çağırın və nəticəni konsola yazdırın
let sampleArray = [1, 2, 3, 4, 5];
let result = sumArray(sampleArray);
console.log(result); // 15
