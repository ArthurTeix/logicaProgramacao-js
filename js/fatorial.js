// function que calcula fatorial do value passado

const fatorial = (value) => {
    let result = 1

    for (let i = value; i > 0; i--) {
        
        result *= i
    }

    return result
}

console.log(fatorial(2))
