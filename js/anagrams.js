// checar se duas palavras são anagramas

const anagrams = (str1, str2) => {

    const first = str1
        .toLowerCase()
        .replace(/\s/g, '')
        .split('') // formando da palavra/frase um array
        .sort() // organizando em ordem
        .join('') // unindo e formando uma só palavra/frase 

    const second = str2
        .toLowerCase()
        .replace(/\s/g, '')
        .split('') 
        .sort() 
        .join('')

    console.log(first)
    console.log(second)

    if (first === second) {
        return "São Anagramas."
    } else { return "Não são Anagramas."}
}

console.log(anagrams('Roma', 'Amor'))