function countThreeDigitNumbersEndingInZero() {
    let count = 0;
    // Üç rəqəmli ədədləri nəzərdən keçir
    for (let number = 100; number < 1000; number++) {
        if (number % 10 === 0) { // Əgər ədəd 0 ilə bitirsə
            count++;
        }
    }
    return count;
}

// Funksiyanı çağırın və nəticəni konsola yazdırın
const result = countThreeDigitNumbersEndingInZero();
console.log(result); // 90
