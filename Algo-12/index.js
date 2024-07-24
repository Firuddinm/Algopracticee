function multiplicationTable(num) {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${num} x ${i} = ${num * i}`);
    }
    return table;
}

// Example usage:
console.log(multiplicationTable(5));
/*
Output:
[
  '5 x 1 = 5',
  '5 x 2 = 10',
  '5 x 3 = 15',
  '5 x 4 = 20',
  '5 x 5 = 25',
  '5 x 6 = 30',
  '5 x 7 = 35',
  '5 x 8 = 40',
  '5 x 9 = 45',
  '5 x 10 = 50'
]
*/
