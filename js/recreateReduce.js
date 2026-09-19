// Criar e usar a função reduce, sem utilizar .reduce()

const newReduce = (array, callback, acumulador) => {

    for (let item of array){
        /*
        executa a callback passando:
        - acumulador atual
        - item atual do array

        o valor retornado pela callback
        vira o novo acumulador
        */
        acumulador = callback(acumulador, item)
    }
    return acumulador
}

const array = [10, 15, 20, 25, 30]

/*
callback:
(ac, i) => ac += i

ac = acumulador
i = item atual

fluxo da execução:

1ª iteração:
0 + 10 = 10

2ª iteração:
10 + 15 = 25

3ª iteração:
25 + 20 = 45

4ª iteração:
45 + 25 = 70

5ª iteração:
70 + 30 = 100
*/

const arrayReducer = newReduce(
    array, (ac, i) => ac + i, 0
)

// resultado final
console.log(arrayReducer)