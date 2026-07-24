// desafio é validar apenas parenteses que foram abertos e fechados corretamente

const isBalanced = (txt) => {
    let cont = 0
    let balanced = true

    for (let value of txt) {
        switch (value) {
            case '(':
                cont += 1
            case ')':
                cont -= 1

        if (value < 0) balanced = false
        if (cont != 0) balanced = false
        }
    }

    console.log(`Está balanceado? ${balanced}`)
}