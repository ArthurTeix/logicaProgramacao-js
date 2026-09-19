// Encontrar maior número do array
// Sem usar Math.max

const maxArray = (array) => {
    let maxValue = array[0]

    for (let value of array) {
        if (value > maxValue) { maxValue = value }
    }

    return maxValue
}

console.log(maxArray([10, 20, 30, 50, 40]))