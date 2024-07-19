function sumOddTwoDigitNumbers() {
    let totalSum = 0;
    // İki rəqəmli ədədləri nəzərdən keçir
    for (let number = 10; number < 100; number++) {
        if (number % 2 !== 0) { // Əgər ədəd təkdirsə
            totalSum += number;
        }
    }
    return totalSum;
}

// Funksiyanı çağırın və nəticəni konsola yazdırın
let result = sumOddTwoDigitNumbers();
console.log(result); // 2475
