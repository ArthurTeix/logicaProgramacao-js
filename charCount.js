// CONTADOR DE LETRAS EM DETERMINADA PALAVRA/FRASE

let map = new Map() // Contará a frequência das letras
const word = 'banana'
const wordOfc = word.toLowerCase().replace(/\s/g, '') // Normalização para ignorar os espaços nas frases

for (let i = 0; i < wordOfc.length; i++){
    if (!map.has(wordOfc[i])){ // se a letra não exite, eu crio ela no meu Map
        map.set(wordOfc[i], 1)
    } else {
        map.set(wordOfc[i], map.get(wordOfc[i]) + 1) // se ela já existe, eu adiciono um por frequência
    }
}

console.log(map)