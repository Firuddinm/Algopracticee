function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Sözdəki hər bir hərfi nəzərdən keçir
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }
    return count;
}

// Funksiyanı çağırın və nəticəni konsola yazdırın
const sampleWord = 'OpenAI';
const result = countVowels(sampleWord);
console.log(result); // 4
