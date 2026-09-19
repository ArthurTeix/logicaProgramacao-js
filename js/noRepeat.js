// Não permitir valores repetidos nos arrays

const removeDoble = (array) => {
    const newArray = []

    for (let item of array) {

        if (!newArray.includes(item)) { // se não tiver no array, ele adiciona 
            newArray.push(item)
        }
    }

    return newArray
}

console.log(removeDoble([1, 1, 1, 2, 2, 3, 3, 4, 4, 4])) // return -> [ 1, 2, 3, 4 ] 