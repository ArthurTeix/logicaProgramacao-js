// Criar a função lenght
// Ex: "javascript" return 10

const newLength = (str) => {
    let count = 0

    for (i of str) {
        count++
    }

    return count
}

console.log(newLength('javascript'))