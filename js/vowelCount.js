// Contar quantas vogais existem numa string

const contaVogal = (str) => {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    const strLimpa = str.toLowerCase().replace(/\s+/g, '')
    let counter = 0

    for (let i = 0; i < strLimpa.length; i++){
        if (vogais.includes(strLimpa[i])){
            counter += 1
        }
    }

    console.log(`A palavra/frase '${str}' contém ${counter} vogais.`)
}

contaVogal('Arthur Teixeira')
