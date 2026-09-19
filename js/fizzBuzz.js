// 1. FizzBuzz
// Mostre números de 1–100:
// múltiplo de 3 → Fizz
// múltiplo de 5 → Buzz
// ambos → FizzBuzz

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> FizzBuzz`)
    } else if (i % 3 === 0) {
        console.log(`${i} -> Fizz`)
    } else if (i % 5 === 0) {
        console.log(`${i} -> Buzz`)
    } else { console.log (`${i}`)}
}