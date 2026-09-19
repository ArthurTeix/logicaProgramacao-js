// Inverter string sem .reverse()
// Exemplo: "javascript" => "tpircsavaj"

const reverse = (str) => {
    let reversed = ''

    for (let i = str.length - 1; i > -1; i--){
        reversed += str[i]
    }

    return reversed
}

console.log(reverse('JavaScript | Python'))