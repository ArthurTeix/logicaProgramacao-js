// CHECAR SE A PALAVRA/FRASE É UM PALÍNDROMO
// Usando TwoPointer (duas variáveis de controle)
// a primeira vai do início ao fim, e a outra do fim ao início

const word = 'Socorram me subi no onibus em Marrocos'
const wordConfig = word.toLocaleLowerCase().replace(/\s/g, '') // Normalizando a palavra/frase

let left = 0 // 1º var de controle -> início ao fim
let right = wordConfig.length - 1 // 2º var de controle -> fim ao início

let palindrome = true

while (left < right){
    if (wordConfig[left] !== wordConfig[right]){
        palindrome = false
    }

    left++
    right--
}    

if (palindrome) { console.log('É palíndromo') } else { console.log('Não é Palíndromo') }