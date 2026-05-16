// Criar programa pala verificar e retornar qual a maior palavra numa frase
const word = 'P pa pai papa papai'
const wordArray = word.split(' ')

let biggest = wordArray[0]

for (const i of wordArray) {
    if (i.length > biggest.length) { biggest = i}
}

console.log(biggest)