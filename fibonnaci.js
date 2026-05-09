// Sequência de Fibonnaci
// o user deve poder escolher quantos números deseja ver da sequência

const fibonnaci = (quant) => {
    let num1 = 0
    let num2 = 1

    const fib = [ num1, num2 ]

    for (let i = 2; i < quant; i++) {
        let num3 = num1 + num2 // o próximo número sempre é a soma dos dois anteriores

        fib.push(num3)

        num1 = num2
        num2 = num3
    }

    return fib
}

console.log(fibonnaci(8))