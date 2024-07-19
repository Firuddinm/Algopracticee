function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array boşdur.");
    }

    let maxNumber = numbers[0];
    // Arraydakı ədədləri nəzərdən keçir
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}

// Funksiyanı çağırın və nəticəni konsola yazdırın
const sampleArray = [1, 2, 3, 4, 5];
const result = findMaxNumber(sampleArray);
console.log(result); // 5
