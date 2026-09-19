const word = 'Socorram me subi no onibus em Marrocos'
const wordConfig = word.toLowerCase().replace(/\s/g, '') // Normaliza a palavra (tudo minúsculo e sem espaços)
let reverse = '' // receberá a palavra invertida

for (let i = wordConfig.length-1; i > -1; i--){
    reverse += wordConfig[i] // recebendo inverso
}

if (reverse === wordConfig){ 
    console.log('é palindromo')
} else {
    console.log("Não é palindromo")
}
