// Criar e usar a função Filter, sem usar .filter

const newFilter = (array, callback) => {
    const novoFill = []

    for (let i of array){
        if (callback(i)){
            novoFill.push(i)
        }
    }

    return novoFill
}

const array = [12, 1, 22, 4, 56, 30]
const arrayFill = newFilter(array, value => value > 10)
console.log(arrayFill)