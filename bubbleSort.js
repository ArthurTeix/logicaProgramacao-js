// Organizar um array em ordem crescente

const bubbleSort = (array) => {

    const arrayNoSorted = [...array] // salvando array desordenado

    for (let i = 0; i < array.length - 1; i++){ // fazendo bubble em todos os termos do array

        for (let j = 0; j < array.length - 1 - i; j++) { // -i para evitar comparações desnecessárias

            if (array[j] > array[j + 1]) { // se um item é maior que seu posterior, ele avança
                [array[j], array[j+1]] = [array[j+1], array[j]] // desestruturação para organizar
            }
    }
    }

    return `[${[arrayNoSorted]}] -> [${[...array]}]` // array antigo -> array ordenado
}

console.log(bubbleSort([5, 1, 3, 4, 8, 2, 1]))