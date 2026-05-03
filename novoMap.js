// Criar e usar a função map, sem utilizar .map()

const map = (array, callback) =>{
    const novoMap = []
    
    for (let i of array){
        novoMap.push(callback(i))
    } 

    return novoMap
}

const array = [1,2,3]
const arrayMap = map(array, n => n*2)
console.log(arrayMap)