// Devo criar um array e retornar os índices de que a soma dos números respectivos resultem no meu target
const array = [2, 3, 5, 7]
const target = 9 // alvo de resultado
let map = new Map() // para guardar valores e chegar depois

for (let i = 0; i < array.length; i++){
    let complement = target - array[i] // sempre fará 9 - (nº respectivo do array)
    if (map.has(complement)){ // busca se já apareceu o complemento
        console.log(`[${map.get(complement)}, ${i}]`) // se já tiver registrado, retorno o índice do número já registrado e o índice atual
    } else { 
        map.set(array[i], i) // se um complemento ainda não existir no map, ele será adicionado
    }
}