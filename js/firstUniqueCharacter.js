// Criar função que retorne o primeiro caracter único dentro de uma palavra/frase/sequência de letras

// por fim, buscar o primeiro .get === 1 e retornar
// lembrar de retornar mensagem se não houver caracter único

const firstUniChar = (str) => {
    
    const word = str.toLowerCase().replace(/\s+/g, '')
    const map = new Map()

    for (let i = 0; i < word.length; i++) {
        if (!map.has(word[i])) {
            map.set(word[i], 1)
        } else {
            map.set(word[i], map.get(word[i]) + 1)
        }
    }

    for (let [key, value] of map) {
        if (value === 1) {
            return `O primeiro caracter que aparece apenas uma vez é: ${key}`
        }
    }

    return "Não há nenhum caracter único."
}

console.log(firstUniChar("Banana"))
console.log(firstUniChar("Casa Amarelada"))
console.log(firstUniChar("Arara"))
