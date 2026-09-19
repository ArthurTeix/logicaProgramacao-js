// desafio é validar apenas parenteses que foram abertos e fechados corretamente usando switch

const isBalanced = (txt) => {
    let cont = 0
    let balanced = true

    for (let value of txt) {

        if (cont < 0) balanced = false

        switch (value) {
            case '(':
                cont += 1
                break
            case ')':
                cont -= 1
                break
        }
    }

    if (cont != 0) balanced = false

    return balanced
}

console.log(isBalanced("()"))
console.log(isBalanced(")("))
console.log(isBalanced("())"))
console.log(isBalanced("(()"))
