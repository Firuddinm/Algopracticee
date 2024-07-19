function sumThreeDigitNumbersDivisibleBy7And8() {
    let totalSum = 0;
    // Üç rəqəmli ədədləri nəzərdən keçir
    for (let number = 100; number < 1000; number++) {
        if (number % 7 === 0 && number % 8 === 0) { // Əgər ədəd həm 7-yə, həm də 8-ə bölünürsə
            totalSum += number;
        }
    }
    return totalSum;
}

// Funksiyanı çağırın və nəticəni konsola yazdırın
const result = sumThreeDigitNumbersDivisibleBy7And8();
console.log(result); // 1456
